// // import { dirname } from "path";
// // import { fileURLToPath } from "url";
// // import { FlatCompat } from "@eslint/eslintrc";

// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = dirname(__filename);

// // const compat = new FlatCompat({
// //   baseDirectory: __dirname,
// // });

// // const eslintConfig = [
// //   ...compat.extends("next/core-web-vitals", "next/typescript"),
// // ];

// // export default eslintConfig;

// // eslint.config.mjs
// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// // Remove: import tailwindcssPlugin from "eslint-plugin-tailwindcss"; // Not compatible with v4

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
//   // Remove: ...compat.extends(tailwindcssPlugin.configs.recommended), // Not compatible with v4
//   {
//     files: ["**/*.css"], // Apply this rule only to CSS files
//     rules: {
//       "no-unknown-at-rules": "off", // Temporarily disable unknown at-rule checks for CSS files (for @import 'tailwindcss')
//     },
//   },
//   {
//     rules: {
//       "react/no-unescaped-entities": "off", // Keep off for now
//     },
//   },
// ];

// export default eslintConfig;
// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tailwindcssPlugin from "eslint-plugin-tailwindcss"; // Make sure this is imported

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.extends(tailwindcssPlugin.configs.recommended), // This line is critical for Tailwind rules
  {
    rules: {
      "react/no-unescaped-entities": "off", // Keep off for now to avoid build issues
    },
  },
];

export default eslintConfig;