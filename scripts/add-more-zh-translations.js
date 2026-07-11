const fs = require('fs');
const path = require('path');

const zhPath = path.resolve(__dirname, '..', 'src', 'js', 'languages', 'zh.json');
const zh = JSON.parse(fs.readFileSync(zhPath, 'utf8'));

const translations = {
	"Tools class not found:": "找不到工具类：",
	"Error: wrong key:": "错误：错误的键：",
	"Modules class not found:": "找不到模块类：",
	"Module function not found.": "找不到模块函数。",
	"Error: can not find layer with id:": "错误：找不到 ID 为以下值的图层：",
	"There's nothing to redo": "没有可重做的操作",
	"There's nothing to undo": "没有可撤销的操作",
	"window.State.save() is removed. Use State.do_action() to manage undo history instead.": "window.State.save() 已移除。请使用 State.do_action() 管理撤销历史。",
	"Error: unsupported attribute type:": "错误：不支持的属性类型："
};

for (const key in translations) {
	if (!zh[key]) {
		zh[key] = translations[key];
	}
}

fs.writeFileSync(zhPath, JSON.stringify(zh, null, 4) + '\n', 'utf8');
console.log('已添加 ' + Object.keys(translations).length + ' 条翻译到 zh.json');
