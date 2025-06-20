// /Users/joy/dev/exp-fa/types/index.d.ts - Main TypeScript definitions
export interface IconDefinition {
  prefix: string;
  iconName: string;
  icon: [number, number, string[], string, string];
}

export interface PackageInfo {
  name: string;
  version: string;
  totalIcons: number;
  styles: string[];
}

export interface StyleMetadata {
  style: string;
  prefix: string;
  count: number;
}

export interface IconCollection {
  [key: string]: IconDefinition;
}

// Main package exports
export * from '../dist/icons/classic/light/index.js';
export * from '../dist/icons/classic/regular/index.js';
export * from '../dist/icons/classic/solid/index.js';
export * from '../dist/icons/brands/index.js';

export declare const packageInfo: PackageInfo;
