const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '..', 'src', 'js');

function processFile(filePath) {
	let content = fs.readFileSync(filePath, 'utf8');
	let original = content;

	// Match alertify.xxx('string') or alertify.xxx("string")
	const regex = /alertify\.(error|success|warning|message|notify)\(\s*(['"])([^'"\n]+)\2\s*\)/g;

	content = content.replace(regex, (match, method, quote, text) => {
		if (text.includes('+') || text.includes('${')) {
			return match;
		}
		return `alertify.${method}(window.translate_text(${quote}${text}${quote}))`;
	});

	if (content !== original) {
		fs.writeFileSync(filePath, content, 'utf8');
		console.log('Translated:', filePath);
	}
}

function walkDir(dir) {
	const items = fs.readdirSync(dir);
	for (const item of items) {
		const fullPath = path.join(dir, item);
		const stat = fs.statSync(fullPath);
		if (stat.isDirectory()) {
			walkDir(fullPath);
		} else if (stat.isFile() && fullPath.endsWith('.js')) {
			processFile(fullPath);
		}
	}
}

walkDir(srcDir);
console.log('Done.');
