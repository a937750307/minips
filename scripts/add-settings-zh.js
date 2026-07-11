const fs = require('fs');
const path = require('path');

const zhPath = path.resolve(__dirname, '..', 'src', 'js', 'languages', 'zh.json');
const zh = JSON.parse(fs.readFileSync(zhPath, 'utf8'));

const translations = {
	"Transparent:": "透明：",
	"Transparency background:": "透明背景：",
	"Theme": "主题",
	"Units": "单位",
	"Resolution:": "分辨率：",
	"Enable snap:": "启用吸附：",
	"Enable guides:": "启用参考线：",
	"Safe search:": "安全搜索：",
	"Exit confirmation:": "退出确认：",
	"Thick guides:": "粗参考线：",
	"Enable autoresize:": "启用自动调整大小："
};

for (const key in translations) {
	if (!zh[key]) {
		zh[key] = translations[key];
	}
}

fs.writeFileSync(zhPath, JSON.stringify(zh, null, 4) + '\n', 'utf8');
console.log('已添加 ' + Object.keys(translations).length + ' 条设置翻译到 zh.json');
