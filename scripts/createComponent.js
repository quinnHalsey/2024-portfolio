const path = require('path');
const fs = require('fs');

const componentName = process.argv[2];

if (!componentName) {
    console.error('Please provide a component name.');
    process.exit(1);
}

const rootDir = path.resolve(__dirname, '..');

const componentDir = path.join(rootDir, 'src', 'components', componentName);

fs.mkdirSync(componentDir, { recursive: true });

const componentContent = `import './${componentName}.css';

const ${componentName} = () => {
  return <div></div>;
};

export default ${componentName};
`;

const indexContent = `export { default } from './${componentName}';`;

fs.writeFileSync(
    path.join(componentDir, `${componentName}.tsx`),
    componentContent
);

fs.writeFileSync(path.join(componentDir, `index.ts`), indexContent);

fs.writeFileSync(path.join(componentDir, `${componentName}.css`), '');

console.log(`Component ${componentName} created successfully.`);
