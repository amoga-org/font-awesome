# Publishing to GitHub Packages

## Prerequisites

1. Create a GitHub repository for your package
2. Set up GitHub authentication for packages
3. Update package.json with your organization/username

## Setup Steps

### 1. Update Package Configuration

Replace `@your-org` in `package.json` with your actual GitHub username or organization:

```json
{
  "name": "@your-username/font-awesome-icons",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/your-username/font-awesome-icons.git"
  },
  "bugs": {
    "url": "https://github.com/your-username/font-awesome-icons/issues"
  },
  "homepage": "https://github.com/your-username/font-awesome-icons#readme"
}
```

### 2. Create GitHub Repository

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit"

# Create repository on GitHub and push
git remote add origin https://github.com/your-username/font-awesome-icons.git
git branch -M main
git push -u origin main
```

### 3. Setup GitHub Packages Authentication

Create a `.npmrc` file in your project root:

```
@your-username:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### 4. Create GitHub Personal Access Token

1. Go to GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
2. Generate new token with these scopes:
   - `write:packages`
   - `read:packages`
   - `repo` (if repository is private)

### 5. Set Environment Variable

```bash
export GITHUB_TOKEN=your_personal_access_token
```

### 6. Publish the Package

```bash
# Build the package
npm run build

# Login to GitHub packages
npm login --scope=@your-username --registry=https://npm.pkg.github.com

# Publish
npm publish
```

## Using the Published Package

### Installation

```bash
# Install from GitHub Packages
npm install @your-username/font-awesome-icons

# Or with yarn
yarn add @your-username/font-awesome-icons
```

### Setup .npmrc for consumers

Users need to create a `.npmrc` file in their project:

```
@your-username:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### Usage

```javascript
import {
  faAlignCenter,
  faArrowRightToLine,
  faChevronDown,
} from "@your-username/font-awesome-icons/icons/classic/light";
import {
  faHeart,
  faUser,
} from "@your-username/font-awesome-icons/icons/classic/solid";
import {
  faFacebook,
  faTwitter,
} from "@your-username/font-awesome-icons/icons/brands";
```

## Automated Publishing with GitHub Actions

The included workflow (`.github/workflows/publish.yml`) will automatically publish when you create a new tag:

```bash
# Create and push a new version tag
git tag v1.0.0
git push origin v1.0.0
```

## Alternative: Publishing to npm

If you prefer to publish to the public npm registry instead:

1. Remove the `publishConfig` section from `package.json`
2. Create account on npmjs.com
3. Run `npm login` (using npmjs.com credentials)
4. Run `npm publish --access public`

## Version Management

Update version in `package.json` before publishing:

```bash
# Bump version automatically
npm version patch   # 1.0.0 -> 1.0.1
npm version minor   # 1.0.0 -> 1.1.0
npm version major   # 1.0.0 -> 2.0.0

# Then publish
npm publish
```
