# Manual Publishing Guide

This guide provides the step-by-step commands to manually build, test, and publish the package to GitHub Packages.

**When to Use:** Use this guide only when the automated GitHub Actions workflow fails or when you need to publish a version from your local machine.

---

### Step 1: Update Version

Before publishing, make sure the `version` in `package.json` is updated to the new version you intend to release.

### Step 2: Build and Test

Ensure the package is clean, dependencies are installed, and it passes all builds and tests.

```bash
# Clean the dist directory
pnpm run clean

# Install dependencies
pnpm install

# Build the package from SVG icons
pnpm run build

# Run tests to ensure all imports are working
pnpm test
```

### Step 3: Log in to GitHub Packages

You need to be authenticated with GitHub Packages to publish.

```bash
# Log in to GitHub Packages registry
npm login --registry=https://npm.pkg.github.com
```

-   **Username:** Your GitHub username
-   **Password:** A GitHub Personal Access Token (PAT) with the `write:packages` scope.

### Step 4: Publish the Package

Once you are logged in, you can publish the package.

```bash
# Publish the package to GitHub Packages
pnpm publish
```

### Step 5: Create and Push Git Tag

After a successful publish, create a git tag for the version and push it to the remote repository. This keeps your releases aligned with the automated workflow.

```bash
# Get the current version from package.json
VERSION=$(node -p "require('./package.json').version")

# Create a git tag (e.g., v1.0.8)
git tag "v$VERSION"

# Push the tag to the remote repository
git push origin "v$VERSION"
```

---

By following these steps, you can ensure that your manual publishes are consistent and aligned with the project's release process.
