// /Users/joy/dev/exp-fa/scripts/test-imports.js - Test script to verify imports work correctly
import {
  faAlignCenter,
  faArrowRightToLine,
  faChevronDown,
} from "../dist/icons/classic/light/index.js";

function testImports() {
  console.log("Testing Font Awesome icon imports...\n");

  // Test individual icon imports
  console.log("✓ faAlignCenter:", faAlignCenter);
  console.log("✓ faArrowRightToLine:", faArrowRightToLine);
  console.log("✓ faChevronDown:", faChevronDown);

  // Verify structure
  const testIcon = faAlignCenter;
  if (
    testIcon.prefix &&
    testIcon.iconName &&
    testIcon.icon &&
    Array.isArray(testIcon.icon)
  ) {
    console.log("\n✅ Icon structure is correct");
    console.log(`   Prefix: ${testIcon.prefix}`);
    console.log(`   Icon name: ${testIcon.iconName}`);
    console.log(`   Dimensions: ${testIcon.icon[0]}x${testIcon.icon[1]}`);
  } else {
    console.log("\n❌ Icon structure is invalid");
  }
}

testImports();
