#!/bin/bash
# /Users/joy/dev/exp-fa/scripts/setup-amoga-org.sh - Setup script for amoga-org publishing

set -e

echo "🚀 Setting up @amoga-org/font-awesome-icons for publishing..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Not in a git repository. Initializing..."
    git init
    git add .
    git commit -m "Initial commit: Font Awesome icons package"
fi

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ No git remote found. Please set up your GitHub repository first:"
    echo "   1. Create a new repository: https://github.com/amoga-org/font-awesome-icons"
    echo "   2. Run: git remote add origin https://github.com/amoga-org/font-awesome-icons.git"
    echo "   3. Run: git push -u origin main"
    exit 1
fi

# Verify package name
echo "📦 Verifying package configuration..."
if grep -q "@amoga-org/font-awesome-icons" package.json; then
    echo "✅ Package name is correctly set to @amoga-org/font-awesome-icons"
else
    echo "❌ Package name not found. Please check package.json"
    exit 1
fi

# Build the package
echo "🔨 Building the package..."
npm run build

# Test the package
echo "🧪 Testing the package..."
npm test

# Validate package contents
echo "📋 Validating package contents..."
npm run pack:dry

echo ""
echo "✅ Setup complete! Your package is ready for publishing."
echo ""
echo "📚 Next steps:"
echo "   1. Create GitHub repository: https://github.com/amoga-org/font-awesome-icons"
echo "   2. Push your code: git push origin main"
echo "   3. Create a release: npm run version:patch"
echo "   4. The GitHub Action will automatically publish your package"
echo ""
echo "📖 For detailed instructions, see PUBLISHING.md"
