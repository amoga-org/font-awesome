# Font Awesome Icons Package

A public GitHub package that provides Font Awesome icons as ES modules, compatible with the original Font Awesome import structure.

## Installation

```bash
npm install @your-org/font-awesome-icons
```

## Usage

Import icons exactly like you would with Font Awesome Pro:

```javascript
import {
  faAlignCenter,
  faArrowRightToLine,
  faChevronDown,
} from "@your-org/font-awesome-icons/icons/classic/light";
import {
  faHeart,
  faUser,
  faHome,
} from "@your-org/font-awesome-icons/icons/classic/solid";
import {
  faFacebook,
  faTwitter,
  faGithub,
} from "@your-org/font-awesome-icons/icons/brands";
```

## Available Styles

- **Classic Light**: `@your-org/font-awesome-icons/icons/classic/light`
- **Classic Regular**: `@your-org/font-awesome-icons/icons/classic/regular`
- **Classic Solid**: `@your-org/font-awesome-icons/icons/classic/solid`
- **Brands**: `@your-org/font-awesome-icons/icons/brands`
- **Duotone**: `@your-org/font-awesome-icons/icons/duotone`
- **Sharp Light**: `@your-org/font-awesome-icons/icons/sharp-light`
- **Sharp Regular**: `@your-org/font-awesome-icons/icons/sharp-regular`
- **Sharp Solid**: `@your-org/font-awesome-icons/icons/sharp-solid`
- **Thin**: `@your-org/font-awesome-icons/icons/thin`

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
import { IconDefinition } from "@your-org/font-awesome-icons";
import { faAlignCenter } from "@your-org/font-awesome-icons/icons/classic/light";

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
