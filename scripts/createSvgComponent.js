const path = require('path');
const fs = require('fs');

const rootDir = path.resolve(__dirname, '..');

const cleanSvgContent = (content) => {
    return content
        .replace(/<\?xml.*?\?>\s*/, '') // Remove XML declaration
        .replace(/<defs>[\s\S]*?<\/defs>\s*/, '') // Remove <defs> content
        .replace(/\s*class="[^"]*"/g, ''); // Remove class attributes
};

const extractSvgElement = (content) => {
    const svgMatch = content.match(/<svg[\s\S]*<\/svg>/);
    if (!svgMatch) {
        console.error('No <svg> element found in the file.');
        process.exit(1);
    }
    return svgMatch[0];
};

const createComponentContent = (componentName, svgElement) => {
    return `const ${componentName} = () => {
    return (
        ${svgElement}
    );
};

export default ${componentName};
`;
};

const updateGraphicsIndex = (componentName) => {
    const indexPath = path.join(rootDir, 'src', 'graphics', 'index.tsx');

    let indexContent = fs.readFileSync(indexPath, 'utf-8');

    // Add import statement
    const importStatement = `import ${componentName} from './${componentName}';\n`;
    indexContent = importStatement + indexContent;

    // Add to export statement
    const exportRegex = /export\s*{([^}]*)}/;
    const exportMatch = indexContent.match(exportRegex);

    if (exportMatch) {
        const currentExports = exportMatch[1].trim();
        const newExports = currentExports
            ? `${currentExports}\n    ${componentName}`
            : componentName;
        indexContent = indexContent.replace(
            exportRegex,
            `export {\n    ${newExports}\n}`
        );
    } else {
        indexContent += `\nexport { ${componentName} };\n`;
    }

    fs.writeFileSync(indexPath, indexContent);
    console.log(`Updated src/graphics/index.tsx with ${componentName}`);
};

const createSvgComponent = (componentName, originalSvgFile) => {
    const svgDir = path.join(rootDir, 'src', 'graphics');

    // Read and clean SVG content
    const svgContent = cleanSvgContent(
        fs.readFileSync(originalSvgFile, 'utf-8')
    );

    // Extract SVG element
    const svgElement = extractSvgElement(svgContent);

    // Create component content
    const fileContent = createComponentContent(componentName, svgElement);

    // Write the new component file
    fs.writeFileSync(path.join(svgDir, `${componentName}.tsx`), fileContent);
    updateGraphicsIndex(componentName);

    console.log(`SVG component ${componentName} created successfully.`);
};

const [, , componentName, originalSvgFile] = process.argv;
createSvgComponent(componentName, originalSvgFile);
