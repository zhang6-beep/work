// 装修案例数据
const decorationCases = [
    {
        id: 1,
        title: "现代简约风格客厅吊顶",
        description: "采用白色哑光板搭配LED灯带，营造简洁明亮的空间感。整体设计注重线条的流畅性和空间的通透感。",
        image: "https://p9-bot-workflow-sign.byteimg.com/tos-cn-i-mdko3gqilj/1cfe7077e8bf45519308fc836de431a4.jpg~tplv-mdko3gqilj-image.image?rk3s=81d4c505&x-expires=1790326065&x-signature=Yw0YyzrUXYHgj89NyphZra52s1M%3D&x-wf-file_name=08db0453025945e6a65809962d83314c.jpg",
        location: "某县某小区",
        area: 35,
        date: "2025-06-15"
    },
    {
        id: 2,
        title: "现代简约风格餐厅吊顶",
        description: "采用白色哑光板搭配LED灯带，营造简洁明亮的空间感。整体设计注重线条的流畅性和空间的通透感。",
        image: "https://p26-bot-workflow-sign.byteimg.com/tos-cn-i-mdko3gqilj/195eb7c773ad4fe18c50fa0445753b7b.jpg~tplv-mdko3gqilj-image.image?rk3s=81d4c505&x-expires=1790326306&x-signature=CgpCOfLNDnagY5u235pf%2BkOyvrU%3D&x-wf-file_name=32868fa2e27d4dba880bae8a16ca6a5d.jpg",
        location: "某县某别墅区",
        area: 28,
        date: "2025-07-22"
    },
    {
        id: 3,
        title: "厨房吊顶",
        description: "采用黑色金属框架搭配透明玻璃板，展现现代工业风的独特魅力。嵌入式LED筒灯提供充足照明。",
        image: "https://p9-bot-workflow-sign.byteimg.com/tos-cn-i-mdko3gqilj/7a20ba2cfd8a4d32b9358c85a8fd60be.jpg~tplv-mdko3gqilj-image.image?rk3s=81d4c505&x-expires=1790325692&x-signature=CVlcaB3iCIkYAdSgnCGYAOVZvN0%3D&x-wf-file_name=38535c3323704bd88fe9d22d204c0501.jpg",
        location: "某县某公寓",
        area: 15,
        date: "2025-08-05"
    },
    {
        id: 4,
        title: "新中式书房吊顶",
        description: "结合传统中式元素与现代设计手法，采用木质格栅与筒灯结合的方式，营造出静谧雅致的阅读空间。",
        image: "https://p26-bot-workflow-sign.byteimg.com/tos-cn-i-mdko3gqilj/66e65d7928f34fdcb3985e0ec834e541.jpg~tplv-mdko3gqilj-image.image?rk3s=81d4c505&x-expires=1790325177&x-signature=Pg25XFheXaVj9UGgLZUfgKill4E%3D&x-wf-file_name=71b5275017d2491c8fa1c09c2820f304.jpg",
        location: "某县某别墅区",
        area: 20,
        date: "2025-09-15"
    },
    {
        id: 5,
        title: "卧室吊顶设计",
        description: "卧室吊顶设计，营造温馨舒适的休息环境。",
        image: "https://p3-bot-workflow-sign.byteimg.com/tos-cn-i-mdko3gqilj/6155da4512e9437393af60fe64e1ec92.jpg~tplv-mdko3gqilj-image.image?rk3s=81d4c505&x-expires=1790307588&x-signature=%2FgWIOQp9bGjuuRp2am3ob3BtXlo%3D&x-wf-file_name=9d03c7a15a5a460fba4901625c328da6+%281%29.jpg",
        location: "御景东方11栋卧室",
        area: 35,
        date: "2025-09-29"
    },
    {
        id: 6,
        title: "玄关吊顶设计",
        description: "玄关吊顶设计，打造优雅的入户空间。",
        image: "https://p9-bot-workflow-sign.byteimg.com/tos-cn-i-mdko3gqilj/f7989c0c7fa143a7923e034e14f62ce0.jpg~tplv-mdko3gqilj-image.image?rk3s=81d4c505&x-expires=1790307890&x-signature=eB2FkKsbtlssj%2BnkQDSZ0FJev%2Fo%3D&x-wf-file_name=1a79252d8a644457b35ce1e006f3805e.jpg",
        location: "御景东方11栋玄关",
        area: 35,
        date: "2025-09-29"
    }
];

// 导出案例数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = decorationCases;
} else {
    window.decorationCases = decorationCases;
}