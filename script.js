// 引入装修案例数据
let cases = typeof decorationCases !== 'undefined' ? decorationCases : [];

// 图片加载错误处理
function handleImageError(imgElement) {
    // 使用更可靠的默认图片URL
    imgElement.src = 'https://images.unsplash.com/photo-1613138177670-4a2d3b0b0c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    imgElement.alt = '默认案例图片';
    // 移除data-src属性，防止重复加载
    imgElement.removeAttribute('data-src');
}

// 分步加载案例 - 提升响应速度
function loadCasesInSteps() {
    const caseGrid = document.getElementById('caseGrid');
    if (!caseGrid) return;
    
    // 清空容器
    caseGrid.innerHTML = '';
    
    if (cases.length === 0) {
        caseGrid.innerHTML = '<div class="no-cases">暂无案例数据</div>';
        return;
    }
    
    // 限制显示的案例数量以提高性能
    const maxCases = Math.min(cases.length, 6);
    
    // 先渲染前2个案例（快速响应）
    let html = '';
    const initialCount = Math.min(2, maxCases);
    
    for (let i = 0; i < initialCount; i++) {
        const caseItem = cases[i];
        html += `
            <div class="case-card">
                <a href="${caseItem.image}" class="case-image-link" target="_blank">
                    <img src="${caseItem.image}" alt="${caseItem.title}" class="case-image" onerror="handleImageError(this)">
                </a>
                <div class="case-info">
                    <h3>${caseItem.title}</h3>
                    <p>${caseItem.description}</p>
                    <div class="case-meta">
                        <span>地点: ${caseItem.location}</span>
                        <span>面积: ${caseItem.area}㎡</span>
                        <span>日期: ${caseItem.date}</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    caseGrid.innerHTML = html;
    
    // 如果还有更多案例，延迟加载剩余的
    if (maxCases > initialCount) {
        // 使用微任务确保快速响应
        Promise.resolve().then(() => {
            let moreHtml = '';
            for (let i = initialCount; i < maxCases; i++) {
                const caseItem = cases[i];
                moreHtml += `
                    <div class="case-card">
                        <a href="${caseItem.image}" class="case-image-link" target="_blank">
                            <img src="${caseItem.image}" alt="${caseItem.title}" class="case-image" onerror="handleImageError(this)">
                        </a>
                        <div class="case-info">
                            <h3>${caseItem.title}</h3>
                            <p>${caseItem.description}</p>
                            <div class="case-meta">
                                <span>地点: ${caseItem.location}</span>
                                <span>面积: ${caseItem.area}㎡</span>
                                <span>日期: ${caseItem.date}</span>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            // 添加到现有内容后面
            caseGrid.innerHTML += moreHtml;
        });
    }
}

// 显示所有案例 - 分步加载版本
function displayCases() {
    const caseGrid = document.getElementById('caseGrid');
    const caseList = document.getElementById('caseList');
    
    if (caseGrid) {
        loadCasesInSteps();
    }
    
    if (caseList) {
        caseList.innerHTML = '';
        if (cases.length === 0) {
            caseList.innerHTML = '<div class="no-cases">暂无案例数据</div>';
            return;
        }
        
        // 限制显示的案例数量以提高性能
        const maxCases = Math.min(cases.length, 6);
        
        // 使用简单的innerHTML
        let html = '';
        for (let i = 0; i < maxCases; i++) {
            const caseItem = cases[i];
            html += `
                <div class="case-item">
                    <h3>${caseItem.title}</h3>
                    <p>${caseItem.description}</p>
                    <div class="case-meta">
                        <span>地点: ${caseItem.location}</span>
                        <span>面积: ${caseItem.area}㎡</span>
                        <span>日期: ${caseItem.date}</span>
                    </div>
                </div>
            `;
        }
        caseList.innerHTML = html;
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 不再在页面加载时立即显示案例，而是等到用户切换到案例页面时再加载
    // 这样可以确保首页快速加载
});