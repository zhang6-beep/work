const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// 中间件
app.use(express.json());
app.use(express.static('.'));

// 确保messages目录存在
const messagesDir = path.join(__dirname, 'messages');
if (!fs.existsSync(messagesDir)) {
    fs.mkdirSync(messagesDir);
}

// 保存留言API
app.post('/api/messages', (req, res) => {
    try {
        const message = {
            id: Date.now(),
            ...req.body,
            timestamp: new Date().toISOString()
        };
        
        const filename = path.join(messagesDir, `${message.id}.json`);
        fs.writeFileSync(filename, JSON.stringify(message, null, 2));
        
        res.json({ success: true, message: '留言保存成功' });
    } catch (error) {
        res.status(500).json({ success: false, message: '保存失败' });
    }
});

// 获取所有留言API
app.get('/api/messages', (req, res) => {
    try {
        const files = fs.readdirSync(messagesDir);
        const messages = [];
        
        files.forEach(file => {
            if (file.endsWith('.json')) {
                const content = fs.readFileSync(path.join(messagesDir, file), 'utf8');
                messages.push(JSON.parse(content));
            }
        });
        
        // 按时间倒序排列
        messages.sort((a, b) => b.id - a.id);
        
        res.json(messages);
    } catch (error) {
        res.status(500).json({ success: false, message: '获取留言失败' });
    }
});

// 删除留言API
app.delete('/api/messages/:id', (req, res) => {
    try {
        const messageId = req.params.id;
        const filename = path.join(messagesDir, `${messageId}.json`);
        
        if (fs.existsSync(filename)) {
            fs.unlinkSync(filename);
            res.json({ success: true, message: '留言删除成功' });
        } else {
            res.status(404).json({ success: false, message: '留言不存在' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: '删除失败' });
    }
});

app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});