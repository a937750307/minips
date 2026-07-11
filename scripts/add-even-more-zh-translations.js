const fs = require('fs');
const path = require('path');

const zhPath = path.resolve(__dirname, '..', 'src', 'js', 'languages', 'zh.json');
const zh = JSON.parse(fs.readFileSync(zhPath, 'utf8'));

const translations = {
	"Use Ctrl+V keyboard shortcut to paste from Clipboard.": "请使用 Ctrl+V 快捷键从剪贴板粘贴。",
	"Sorry, cold not load getUserMedia() data:": "抱歉，无法加载 getUserMedia() 数据：",
	"Size is too big, max": "尺寸过大，最大",
	"layer(s) were skipped.": "个图层已跳过。",
	"key points:": "关键点：",
	"Translate error, can not find dictionary:": "翻译错误，找不到字典：",
	"Crop on rotated layer is not supported. Convert it to raster to continue.": "不支持在旋转图层上裁剪。请转换为栅格后继续。",
	"Font": "字体",
	"could not be loaded.": "无法加载。"
};

for (const key in translations) {
	if (!zh[key]) {
		zh[key] = translations[key];
	}
}

fs.writeFileSync(zhPath, JSON.stringify(zh, null, 4) + '\n', 'utf8');
console.log('已添加 ' + Object.keys(translations).length + ' 条翻译到 zh.json');
