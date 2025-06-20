# Quick Publishing Guide 🚀

## Super Quick Start (5 minutes)

### 1. One-Command Setup

```bash
npm run setup:publishing
```

This script will:

- Ask for your GitHub username
- Update package.json automatically
- Build and test the package
- Guide you through GitHub setup

### 2. Publish Your First Version

```bash
# Push to GitHub
git push -u origin main

# Create and push your first release
git tag v1.0.0
git push origin v1.0.0
```

GitHub Actions will automatically publish your package! 🎉

---

## Publishing Commands

### Version Management (Automatic Publishing)

```bash
npm run version:patch   # 1.0.0 → 1.0.1 (bug fixes)
npm run version:minor   # 1.0.0 → 1.1.0 (new features)
npm run version:major   # 1.0.0 → 2.0.0 (breaking changes)
```

### Manual Publishing

```bash
npm run publish:manual  # Publish manually to GitHub Packages
```

### Validation

```bash
npm run validate       # Build + Test + Dry-run package
npm run pack:dry       # Test packaging without creating files
```

---

## Using Your Published Package

### Installation

```bash
npm install @YOUR_USERNAME/font-awesome-icons
```

### Usage (Same as Font Awesome Pro!)

```javascript
import {
  faHeart,
  faUser,
} from "@YOUR_USERNAME/font-awesome-icons/icons/classic/solid";
import { faAlignCenter } from "@YOUR_USERNAME/font-awesome-icons/icons/classic/light";
import {
  faFacebook,
  faTwitter,
} from "@YOUR_USERNAME/font-awesome-icons/icons/brands";

// Use in React
const MyComponent = () => (
  <svg viewBox={`0 0 ${faHeart.icon[0]} ${faHeart.icon[1]}`}>
    <path d={faHeart.icon[4]} />
  </svg>
);
```

---

## Troubleshooting

### Package Not Publishing?

1. Check GitHub Actions logs
2. Verify package name in package.json
3. Ensure tag follows `v1.0.0` format

### Users Can't Install?

Tell them to create `.npmrc` in their project:

```
@YOUR_USERNAME:registry=https://npm.pkg.github.com
```

### Need Help?

- See full guide: `PUBLISHING.md`
- Check example: `examples/usage-example.js`
- Test locally: `npm run validate`

---

## What's Included

✅ **53,663 icons** across 17 styles  
✅ **GitHub Actions** for automatic publishing  
✅ **TypeScript definitions** included  
✅ **Tree-shakeable** ES modules  
✅ **Font Awesome Pro compatibility**

Your package is production-ready! 🚀
