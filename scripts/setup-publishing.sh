#!/bin/bash
# /Users/joy/dev/exp-fa/scripts/setup-publishing.sh - Setup script for GitHub publishing

set -e

echo "🚀 Setting up Font Awesome Icons package for publishing"
echo "=================================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this from the project root."
    exit 1
fi

# Get GitHub username
echo "📝 Package Configuration"
echo "Current package.json shows: $(grep '"name"' package.json)"
echo ""
read -p "Enter your GitHub username: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ Error: GitHub username is required"
    exit 1
fi

# Update package.json
echo "📦 Updating package.json with your GitHub username..."

# Use sed to replace the organization name (macOS compatible)
sed -i.bak "s/@your-org/@${GITHUB_USERNAME}/g" package.json
sed -i.bak "s/your-org/${GITHUB_USERNAME}/g" package.json

# Remove backup file
rm package.json.bak

echo "✅ Updated package name to: @${GITHUB_USERNAME}/font-awesome-icons"

# Check if git repo exists
if [ ! -d ".git" ]; then
    echo "🔧 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit: Font Awesome icons package"
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Check if remote origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Setting up GitHub remote..."
    echo "Please create a repository on GitHub: https://github.com/new"
    echo "Repository name should be: font-awesome-icons"
    echo ""
    read -p "Press Enter once you've created the repository on GitHub..."
    
    git remote add origin "https://github.com/${GITHUB_USERNAME}/font-awesome-icons.git"
    echo "✅ Added GitHub remote"
else
    echo "✅ GitHub remote already configured"
fi

# Build the package
echo "🔨 Building package..."
pnpm run build

# Test the package
echo "🧪 Testing package..."
pnpm test

echo ""
echo "🎉 Setup Complete!"
echo "=================="
echo ""
echo "Next steps:"
echo "1. Push to GitHub:"
echo "   git push -u origin main"
echo ""
echo "2. Create your first release:"
echo "   git tag v1.0.0"
echo "   git push origin v1.0.0"
echo ""
echo "3. GitHub Actions will automatically publish your package!"
echo ""
echo "Your package will be available at:"
echo "   @${GITHUB_USERNAME}/font-awesome-icons"
echo ""
echo "Users can install it with:"
echo "   npm install @${GITHUB_USERNAME}/font-awesome-icons"
