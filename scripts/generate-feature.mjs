// scripts/generate-feature.mjs
import {fileURLToPath} from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const featureName = process.argv[2];

if (!featureName) {
  console.error(
    '❌ Please provide a feature name: node scripts/generate-feature.mjs <feature-name>',
  );
  process.exit(1);
}

const baseDir = path.join(__dirname, '..', 'src', 'features', featureName);

const folders = ['components', 'screens', 'hooks', 'services'];
const storeFile = `${featureName}Store.ts`;

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, {recursive: true});
}

folders.forEach(folder => {
  const dir = path.join(baseDir, folder);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
});

const storeTemplate = `// ${storeFile}
import { create } from 'zustand';

interface ${capitalize(featureName)}State {
  // Add state here
  // Example:
  name: string;
}

export const use${capitalize(featureName)}Store = create<${capitalize(featureName)}State>(() => ({
  // initial state
  // Example:
  name: '',
}));
`;

fs.writeFileSync(path.join(baseDir, storeFile), storeTemplate.trim());

console.log(
  `✅ Feature '${featureName}' generated at src/features/${featureName}`,
);

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
