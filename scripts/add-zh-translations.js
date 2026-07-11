const fs = require('fs');
const path = require('path');

const zhPath = path.resolve(__dirname, '..', 'src', 'js', 'languages', 'zh.json');
const zh = JSON.parse(fs.readFileSync(zhPath, 'utf8'));

const translations = {
	"This layer must contain an image. Please convert it to raster to apply this tool.": "此图层必须包含图像。请将其转换为栅格后再应用此工具。",
	"Layer is empty.": "图层为空。",
	"Erase on rotate object is disabled. Please rasterize first.": "旋转对象上无法使用橡皮擦。请先栅格化。",
	"Sorry, image could not be loaded.": "抱歉，无法加载图像。",
	"Layer is vector, convert it to raster to apply this tool.": "此图层为矢量图层，请转换为栅格后再应用此工具。",
	"Your search did not match any images.": "搜索未匹配到任何图像。",
	"There are no layers behind.": "后面没有图层。",
	"Source coordinates saved.": "源坐标已保存。",
	"Sorry, image could not be loaded. Try copy image and paste it.": "抱歉，无法加载图像。请尝试复制图像后粘贴。",
	"Empty selection or type not image.": "选择为空或类型不是图像。",
	"Clone tool disabled for resized image. Please rasterize first.": "调整大小后的图像无法使用克隆工具。请先栅格化。",
	"Your browser does not support this format.": "您的浏览器不支持此格式。",
	"You can also drag and drop items into browser.": "您也可以将项目拖放到浏览器中。",
	"Wrong file type, must be image or json.": "文件类型错误，必须是图像或 JSON。",
	"Wrong dimensions": "尺寸错误",
	"There is only 1 layer.": "只有 1 个图层。",
	"Source is empty, right click on image or use long press to save source position.": "源为空，请右键点击图像或长按以保存源位置。",
	"Sorry, image is too big, max 5 MB.": "抱歉，图像太大，最大支持 5 MB。",
	"Skip - layer must be image.": "跳过 - 图层必须是图像。",
	"Scaling up is not supported in Hermite, using Lanczos.": "Hermite 不支持放大，将使用 Lanczos。",
	"Rotate is not supported on this type of object. Convert to raster?": "此类型对象不支持旋转。是否转换为栅格？",
	"Rendered with errors.": "渲染时发生错误。",
	"Previous layer must be image, convert it to raster to apply this tool.": "前一个图层必须是图像，请转换为栅格后再应用此工具。",
	"Nothing is selected.": "未选择任何内容。",
	"Missing permissions to write to Clipboard.cc": "缺少写入剪贴板的权限",
	"Missing at least 1 size parameter.": "至少缺少 1 个尺寸参数。",
	"Layer must be vector or image (convert it to raster).": "图层必须是矢量或图像（转换为栅格）。",
	"Guides enabled.": "参考线已启用。",
	"Error: layer must be image.": "错误：图层必须是图像。",
	"Error: can not load image.": "错误：无法加载图像。",
	"Error loading the list of fonts from Google.": "加载 Google 字体列表时出错。",
	"Error connecting to service.": "连接服务时出错。",
	"Empty selection": "选择为空",
	"Color alpha value can not be zero.": "颜色 Alpha 值不能为零。",
	"Can not use this tool on current layer: image already takes all area.": "无法在当前图层使用此工具：图像已占满整个区域。",
	"Can not find previous layer.": "找不到上一个图层。",
	"Can not animate 1 layer.": "无法对单个图层进行动画处理。"
};

for (const key in translations) {
	if (!zh[key]) {
		zh[key] = translations[key];
	}
}

fs.writeFileSync(zhPath, JSON.stringify(zh, null, 4) + '\n', 'utf8');
console.log('已添加 ' + Object.keys(translations).length + ' 条翻译到 zh.json');
