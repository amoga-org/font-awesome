# Font Awesome Icons Package

A public GitHub package that provides Font Awesome icons as ES modules, compatible with the original Font Awesome import structure.

## Installation

```bash
npm install @amoga-org/font-awesome
# or
yarn add @amoga-org/font-awesome
# or  
pnpm add @amoga-org/font-awesome
```

No authentication required! 🎉

## Usage

Import icons exactly like you would with Font Awesome Pro:

```javascript
import {
  faAlignCenter,
  faArrowRightToLine,
  faChevronDown,
} from "@amoga-org/font-awesome/icons/classic/light";
import {
  faHeart,
  faUser,
  faHome,
} from "@amoga-org/font-awesome/icons/classic/solid";
import {
  faFacebook,
  faTwitter,
  faGithub,
} from "@amoga-org/font-awesome/icons/brands";
```

## Available Styles

- **Classic Light**: `@amoga-org/font-awesome/icons/classic/light`
- **Classic Regular**: `@amoga-org/font-awesome/icons/classic/regular`
- **Classic Solid**: `@amoga-org/font-awesome/icons/classic/solid`
- **Brands**: `@amoga-org/font-awesome/icons/brands`
- **Duotone**: `@amoga-org/font-awesome/icons/duotone`
- **Sharp Light**: `@amoga-org/font-awesome/icons/sharp-light`
- **Sharp Regular**: `@amoga-org/font-awesome/icons/sharp-regular`
- **Sharp Solid**: `@amoga-org/font-awesome/icons/sharp-solid`
- **Thin**: `@amoga-org/font-awesome/icons/thin`

## Icon Structure

Each icon is an object with the following structure:

```javascript
{
  prefix: 'fal',           // Style prefix (fal, fas, far, fab, etc.)
  iconName: 'align-center', // Original kebab-case name
  icon: [                  // Icon data array
    448,                   // Width
    512,                   // Height
    [],                    // Ligatures (empty)
    '',                    // Unicode (empty)
    'M112 48c-8.8 0...'   // SVG path data
  ]
}
```

## TypeScript Support

The package includes full TypeScript definitions:

```typescript
import { IconDefinition } from "@amoga-org/font-awesome";
import { faAlignCenter } from "@amoga-org/font-awesome/icons/classic/light";

const icon: IconDefinition = faAlignCenter;
```

## Building

To build the package from SVG source files:

```bash
npm run build
```

This will:

1. Process all SVG files in the `icons/` directory
2. Generate JavaScript modules with named exports
3. Create TypeScript definition files
4. Output everything to the `dist/` directory

## Publishing

This package is automatically published to GitHub Packages when a new version tag is pushed to the repository.

### Automated Publishing

1.  **Update Version**: Update the `version` in `package.json`.
2.  **Commit Changes**: Commit the version update.
3.  **Create and Push Tag**: Create a tag with a `v` prefix and push it.

    ```bash
    # Example for version 1.0.8
    git tag v1.0.8
    git push origin v1.0.8
    ```

This will trigger the GitHub Actions workflow to build and publish the package.

### Manual Publishing

If you need to publish manually, refer to the detailed instructions in the [Manual Publishing Guide](MANUAL_PUBLISH.md).

## File Structure

```
├── icons/                    # Source SVG files
│   ├── light/               # Light style icons
│   ├── regular/             # Regular style icons
│   ├── solid/               # Solid style icons
│   └── brands/              # Brand icons
├── dist/                    # Built JavaScript modules
│   └── icons/
│       ├── classic/
│       │   ├── light/
│       │   ├── regular/
│       │   └── solid/
│       └── brands/
├── scripts/                 # Build scripts
└── package.json            # Package configuration
```

## Contributing

1. Add SVG files to the appropriate directory in `icons/`
2. Run `npm run build` to generate the modules
3. Test imports with `npm test`
4. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Font Awesome

This package is inspired by Font Awesome but is independent. Font Awesome is a trademark of Fonticons, Inc.
