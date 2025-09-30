# 集成吊顶装修公司网站

## 项目概述

这是一个专业的集成吊顶装修公司网站，展示了公司的服务、案例和联系信息。网站采用响应式设计，适配各种设备屏幕。

## 核心功能

- **案例展示**：展示公司完成的吊顶装修项目
- **公司介绍**：详细介绍公司服务和优势
- **联系信息**：提供多种联系方式
- **管理员系统**：用于管理装修案例

## 如何添加新案例

现在案例数据已经直接融入到代码中，您可以通过以下步骤添加新案例：

### 1. 编辑 cases-data.js 文件

打开 [cases-data.js](file:///C:/Users/Administrator/Desktop/1/cases-data.js) 文件，找到 `decorationCases` 数组，在数组中添加新的案例对象。

例如，添加一个新案例：
```javascript
{
    id: 5,
    title: "北欧风格卧室吊顶",
    description: "采用简洁的白色吊顶搭配原木色装饰条，营造温馨舒适的休息环境。",
    image: "https://example.com/new-case-image.jpg",
    location: "某县某小区",
    area: 25,
    date: "2025-09-30"
}
```

### 2. 注意事项

- 确保每个案例的 `id` 是唯一的数字
- 图片URL需要是有效的网络地址
- 日期格式为 YYYY-MM-DD
- 完成编辑后保存文件

### 3. 查看效果

保存文件后，刷新 [cases.html](file:///C:/Users/Administrator/Desktop/1/cases.html) 页面即可看到新添加的案例。

## 管理员后台功能

在 [admin.html](file:///C:/Users/Administrator/Desktop/1/admin.html) 页面中，您可以：
1. 使用表单生成新案例的代码片段
2. 将生成的代码复制并粘贴到 [cases-data.js](file:///C:/Users/Administrator/Desktop/1/cases-data.js) 文件中
3. 查看现有的所有案例

注意：添加新案例需要直接编辑 [cases-data.js](file:///C:/Users/Administrator/Desktop/1/cases-data.js) 文件，这是为了满足您"将案例融入到代码中"的需求。

## 技术栈

- HTML5
- CSS3 (含动画效果)
- JavaScript (ES6+)
- 响应式设计