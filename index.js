// /Users/joy/dev/exp-fa/index.js - Main package entry point
export * from "./dist/icons/classic/light/index.js";
export * from "./dist/icons/classic/regular/index.js";
export * from "./dist/icons/classic/solid/index.js";
export * from "./dist/icons/brands/index.js";

// Re-export commonly used styles with aliases
export * as lightIcons from "./dist/icons/classic/light/index.js";
export * as regularIcons from "./dist/icons/classic/regular/index.js";
export * as solidIcons from "./dist/icons/classic/solid/index.js";
export * as brandIcons from "./dist/icons/brands/index.js";

export const packageInfo = {
  name: "@amoga-org/font-awesome-icons",
  version: "1.0.0",
  totalIcons: 53663,
  styles: [
    "brands",
    "duotone",
    "duotone-light",
    "duotone-regular",
    "duotone-thin",
    "light",
    "regular",
    "sharp-duotone-light",
    "sharp-duotone-regular",
    "sharp-duotone-solid",
    "sharp-duotone-thin",
    "sharp-light",
    "sharp-regular",
    "sharp-solid",
    "sharp-thin",
    "solid",
    "thin",
  ],
};
