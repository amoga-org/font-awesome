# 🚀 Quick Publishing Guide for @amoga-org/font-awesome-icons

## Immediate Setup (5 minutes)

### 1. Create GitHub Repository

```bash
# Go to: https://github.com/amoga-org
# Click "New" repository
# Repository name: font-awesome-icons
# Make it Public
# Don't initialize with README (you already have files)
```

### 2. Connect Your Local Repository

```bash
git remote add origin https://github.com/amoga-org/font-awesome-icons.git
git branch -M main
git push -u origin main
```

### 3. Publish Your First Version

```bash
# Create a patch version (1.0.1)
npm run version:patch

# This will:
# - Bump version in package.json
# - Create a git tag
# - Push to GitHub
# - Trigger automatic publishing via GitHub Actions
```

## Usage in Projects

Once published, install in any project:

```bash
npm install @amoga-org/font-awesome-icons
```

Then use exactly like Font Awesome Pro:

```javascript
import {
  faAlignCenter,
  faArrowRightToLine,
  faChevronDown,
} from "@amoga-org/font-awesome-icons/icons/classic/light";

import {
  faHeart,
  faUser,
} from "@amoga-org/font-awesome-icons/icons/classic/solid";
```

## Version Management

```bash
# Patch version (1.0.0 → 1.0.1) - Bug fixes
npm run version:patch

# Minor version (1.0.0 → 1.1.0) - New features
npm run version:minor

# Major version (1.0.0 → 2.0.0) - Breaking changes
npm run version:major
```

## Manual Publishing (if needed)

```bash
# Build and test
npm run validate

# Publish manually
npm run publish:manual
```

## Verify Installation

After publishing, test in a new project:

```bash
mkdir test-project
cd test-project
npm init -y
npm install @amoga-org/font-awesome-icons

# Create test.js
echo 'import { faHeart } from "@amoga-org/font-awesome-icons/icons/classic/solid";
console.log("Icon loaded:", faHeart.iconName);' > test.js

# Add to package.json: "type": "module"
npm pkg set type=module

# Test it
node test.js
```

## Troubleshooting

**Publishing fails?**

- Check GitHub repository exists: https://github.com/amoga-org/font-awesome-icons
- Verify GitHub token permissions in repository settings
- Ensure you're a member of amoga-org with publishing rights

**Import fails?**

- Wait 5-10 minutes after publishing for package to be available
- Check package exists: https://github.com/amoga-org/font-awesome-icons/packages

**Need help?**

- See full guide: `PUBLISHING.md`
- Check workflows: `.github/workflows/`
