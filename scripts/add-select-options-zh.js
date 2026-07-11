const fs = require('fs');
const path = require('path');

const zhPath = path.resolve(__dirname, '..', 'src', 'js', 'languages', 'zh.json');
const zh = JSON.parse(fs.readFileSync(zhPath, 'utf8'));

const translations = {
	"squares": "方格",
	"green": "绿色",
	"grey": "灰色",
	"dark": "深色",
	"light": "浅色",
	"pixels": "像素",
	"inches": "英寸",
	"centimeters": "厘米",
	"millimetres": "毫米"
};

for (const key in translations) {
	if (!zh[key]) {
		zh[key] = translations[key];
	}
}

fs.writeFileSync(zhPath, JSON.stringify(zh, null, 4) + '\n', 'utf8');
console.log('已添加 ' + Object.keys(translations).length + ' 条下拉选项翻译到 zh.json');
