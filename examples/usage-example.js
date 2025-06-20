// /Users/joy/dev/exp-fa/examples/usage-example.js - Example showing how to use the package
import {
  faAlignCenter,
  faArrowRightToLine,
  faChevronDown,
} from "../dist/icons/classic/light/index.js";
import { faHeart, faUser } from "../dist/icons/classic/solid/index.js";
import { faFacebook, faTwitter, faGithub } from "../dist/icons/brands/index.js";

console.log("=== Font Awesome Icons Usage Example ===\n");

// Example 1: Basic icon usage
console.log("1. Basic Icon Import:");
console.log(
  "faAlignCenter:",
  faAlignCenter.iconName,
  `(${faAlignCenter.prefix})`
);
console.log(
  "faArrowRightToLine:",
  faArrowRightToLine.iconName,
  `(${faArrowRightToLine.prefix})`
);
console.log(
  "faChevronDown:",
  faChevronDown.iconName,
  `(${faChevronDown.prefix})`
);

// Example 2: Different styles
console.log("\n2. Different Styles:");
console.log("Light style (fal):", faAlignCenter.prefix);
console.log("Solid style (fas):", faHeart.prefix);
console.log("Brand style (fab):", faFacebook.prefix);

// Example 3: Icon data structure
console.log("\n3. Icon Data Structure:");
const sampleIcon = faHeart;
console.log("Icon object:", {
  prefix: sampleIcon.prefix,
  iconName: sampleIcon.iconName,
  width: sampleIcon.icon[0],
  height: sampleIcon.icon[1],
  pathData: sampleIcon.icon[4].substring(0, 50) + "...",
});

// Example 4: SVG rendering function
function renderSvg(iconObject, className = "") {
  const [width, height, , , pathData] = iconObject.icon;
  return `<svg class="${className}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <path d="${pathData}"/>
</svg>`;
}

console.log("\n4. SVG Rendering:");
console.log("Generated SVG for faHeart:");
console.log(renderSvg(faHeart, "heart-icon"));

// Example 5: React component usage (pseudo-code)
console.log("\n5. React Component Usage Example:");
console.log(`
import React from 'react';
import { faHeart } from '@your-org/font-awesome-icons/icons/classic/solid';

const Icon = ({ icon, className = '' }) => {
  const [width, height, , , pathData] = icon.icon;
  return (
    <svg className={className} viewBox={\`0 0 \${width} \${height}\`}>
      <path d={pathData} />
    </svg>
  );
};

const MyComponent = () => (
  <div>
    <Icon icon={faHeart} className="text-red-500 w-6 h-6" />
  </div>
);
`);

console.log("\n✅ Example complete! Your Font Awesome icons are ready to use.");
