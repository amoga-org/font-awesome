// /Users/joy/dev/exp-fa/scripts/build-icons.js - Build script to convert SVG files to JavaScript modules
import { readdir, readFile, writeFile, mkdir } from "fs/promises";
import { dirname, join, basename } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = dirname(__dirname);

// Style mappings for Font Awesome prefixes
const styleMap = {
  light: "fal",
  regular: "far",
  solid: "fas",
  brands: "fab",
  duotone: "fad",
  "duotone-light": "fadl",
  "duotone-regular": "fadr",
  "duotone-thin": "fadt",
  "sharp-light": "fasl",
  "sharp-regular": "fasr",
  "sharp-solid": "fass",
  "sharp-thin": "fast",
  thin: "fat",
};

// Convert kebab-case to camelCase with fa prefix
function toCamelCaseWithFa(str) {
  // Replace non-alphanumeric characters with spaces, then convert to camelCase
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, " ");
  const camelCase = cleaned
    .split(" ")
    .map((word, index) => {
      if (word.length === 0) return "";
      return index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");

  return "fa" + camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
}

// Extract viewBox and path data from SVG
function parseSvg(svgContent) {
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  const pathMatch = svgContent.match(/<path[^>]*d="([^"]+)"/);

  if (!viewBoxMatch || !pathMatch) {
    throw new Error("Invalid SVG format");
  }

  const [x, y, width, height] = viewBoxMatch[1].split(" ").map(Number);
  const pathData = pathMatch[1];

  return {
    width,
    height,
    pathData,
  };
}

// Generate icon object
function createIconObject(iconName, svgData, prefix) {
  return {
    prefix,
    iconName,
    icon: [
      svgData.width,
      svgData.height,
      [], // ligatures (empty for now)
      "", // unicode (empty for now)
      svgData.pathData,
    ],
  };
}

// Process a single style directory
async function processStyleDirectory(styleName) {
  const sourceDir = join(projectRoot, "icons", styleName);
  const outputDir = join(
    projectRoot,
    "dist",
    "icons",
    styleName === "light" || styleName === "regular" || styleName === "solid"
      ? `classic/${styleName}`
      : styleName
  );

  console.log(`Processing ${styleName}...`);

  try {
    const files = await readdir(sourceDir);
    const svgFiles = files.filter((file) => file.endsWith(".svg"));

    await mkdir(outputDir, { recursive: true });

    const exports = [];
    const iconObjects = [];

    for (const file of svgFiles) {
      try {
        const iconName = basename(file, ".svg");
        const camelCaseName = toCamelCaseWithFa(iconName);
        const prefix = styleMap[styleName];

        const svgContent = await readFile(join(sourceDir, file), "utf-8");
        const svgData = parseSvg(svgContent);
        const iconObject = createIconObject(iconName, svgData, prefix);

        exports.push(
          `export const ${camelCaseName} = ${JSON.stringify(
            iconObject,
            null,
            2
          )};`
        );
        iconObjects.push({ name: camelCaseName, iconName, object: iconObject });
      } catch (error) {
        console.warn(`Warning: Failed to process ${file}: ${error.message}`);
      }
    }

    // Create the main index file
    const indexContent = `// ${outputDir}/index.js - ${styleName} style icons
${exports.join("\n\n")}

// Export all icons as an object for convenience
export const icons = {
${iconObjects.map((icon) => `  ${icon.name}`).join(",\n")}
};

// Export metadata
export const metadata = {
  style: '${styleName}',
  prefix: '${styleMap[styleName]}',
  count: ${iconObjects.length}
};
`;

    await writeFile(join(outputDir, "index.js"), indexContent);

    // Create TypeScript definitions
    const typesContent = `// ${outputDir}/index.d.ts - TypeScript definitions for ${styleName} style icons
export interface IconDefinition {
  prefix: string;
  iconName: string;
  icon: [number, number, string[], string, string];
}

${iconObjects
  .map((icon) => `export declare const ${icon.name}: IconDefinition;`)
  .join("\n")}

export declare const icons: {
${iconObjects.map((icon) => `  ${icon.name}: IconDefinition;`).join("\n")}
};

export declare const metadata: {
  style: string;
  prefix: string;
  count: number;
};
`;

    await writeFile(join(outputDir, "index.d.ts"), typesContent);

    console.log(`✓ Processed ${iconObjects.length} icons for ${styleName}`);
    return iconObjects.length;
  } catch (error) {
    console.error(`Error processing ${styleName}:`, error.message);
    return 0;
  }
}

// Main build function
async function build() {
  console.log("Building Font Awesome icon modules...\n");

  const startTime = Date.now();
  let totalIcons = 0;

  // Get all style directories
  const iconsDir = join(projectRoot, "icons");
  const styleDirs = await readdir(iconsDir);

  // Process each style directory
  for (const styleDir of styleDirs) {
    const iconCount = await processStyleDirectory(styleDir);
    totalIcons += iconCount;
  }

  // Create main package index
  const mainIndexContent = `// /Users/joy/dev/exp-fa/index.js - Main package entry point
export * from './dist/icons/classic/light/index.js';
export * from './dist/icons/classic/regular/index.js';
export * from './dist/icons/classic/solid/index.js';
export * from './dist/icons/brands/index.js';

// Re-export commonly used styles with aliases
export * as lightIcons from './dist/icons/classic/light/index.js';
export * as regularIcons from './dist/icons/classic/regular/index.js';
export * as solidIcons from './dist/icons/classic/solid/index.js';
export * as brandIcons from './dist/icons/brands/index.js';

export const packageInfo = {
  name: '@amoga-org/font-awesome',
  version: '1.0.0',
  totalIcons: ${totalIcons},
  styles: [${styleDirs.map((s) => `'${s}'`).join(", ")}]
};
`;

  await writeFile(join(projectRoot, "index.js"), mainIndexContent);

  // Create main TypeScript definitions
  const mainTypesContent = `// /Users/joy/dev/exp-fa/index.d.ts - Main package TypeScript definitions
export * from './dist/icons/classic/light/index.js';
export * from './dist/icons/classic/regular/index.js';
export * from './dist/icons/classic/solid/index.js';
export * from './dist/icons/brands/index.js';

export * as lightIcons from './dist/icons/classic/light/index.js';
export * as regularIcons from './dist/icons/classic/regular/index.js';
export * as solidIcons from './dist/icons/classic/solid/index.js';
export * as brandIcons from './dist/icons/brands/index.js';

export declare const packageInfo: {
  name: string;
  version: string;
  totalIcons: number;
  styles: string[];
};
`;

  await writeFile(join(projectRoot, "index.d.ts"), mainTypesContent);

  const endTime = Date.now();
  console.log(`\n✅ Build complete!`);
  console.log(`📊 Total icons processed: ${totalIcons}`);
  console.log(`⏱️  Build time: ${(endTime - startTime) / 1000}s`);
}

// Run the build
build().catch(console.error);
