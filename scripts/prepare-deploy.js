const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const deployDir = path.join(root, 'deploy');

// 源路径 -> 部署路径
const filesToCopy = [
	{ src: 'dist/index.html', dest: 'index.html' },
	{ src: 'dist', dest: 'dist' },
	{ src: 'images', dest: 'images' },
	{ src: 'examples', dest: 'examples' },
	{ src: 'manifest-disabled.json', dest: 'manifest-disabled.json' },
	{ src: 'service-worker.js', dest: 'service-worker.js' }
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

function removeRecursive(dir) {
	if (!fs.existsSync(dir)) return;
	const stat = fs.statSync(dir);
	if (!stat.isDirectory()) {
		fs.unlinkSync(dir);
		return;
	}
	const items = fs.readdirSync(dir);
	for (const item of items) {
		removeRecursive(path.join(dir, item));
	}
	fs.rmdirSync(dir);
}

// 清空 deploy 目录
removeRecursive(deployDir);
fs.mkdirSync(deployDir, { recursive: true });

for (const file of filesToCopy) {
	const src = path.join(root, file.src);
	const dest = path.join(deployDir, file.dest);
	if (!fs.existsSync(src)) {
		console.warn(`跳过不存在的文件: ${file.src}`);
		continue;
	}
	copyRecursive(src, dest);
}

// 删除 dist 目录下的 index.html，避免与根目录 index.html 混淆
const distIndexHtml = path.join(deployDir, 'dist', 'index.html');
if (fs.existsSync(distIndexHtml)) {
	fs.unlinkSync(distIndexHtml);
}

console.log('部署文件已准备到 deploy/ 目录');
