const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const deployDir = path.join(root, 'deploy');

const filesToCopy = [
	'index.html',
	'dist',
	'images',
	'examples',
	'manifest-disabled.json',
	'service-worker.js'
];

function copyRecursive(src, dest) {
	const stat = fs.statSync(src);
	if (stat.isDirectory()) {
		if (!fs.existsSync(dest)) {
			fs.mkdirSync(dest, { recursive: true });
		}
		const items = fs.readdirSync(src);
		for (const item of items) {
			copyRecursive(path.join(src, item), path.join(dest, item));
		}
	} else {
		fs.copyFileSync(src, dest);
	}
}

if (!fs.existsSync(deployDir)) {
	fs.mkdirSync(deployDir, { recursive: true });
}

for (const file of filesToCopy) {
	const src = path.join(root, file);
	const dest = path.join(deployDir, file);
	if (!fs.existsSync(src)) {
		console.warn(`跳过不存在的文件: ${file}`);
		continue;
	}
	copyRecursive(src, dest);
}

console.log('部署文件已准备到 deploy/ 目录');
