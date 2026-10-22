const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello Students! Node.js Kubernetes CI/CD is working!');
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
});

// Export app for testing, start server only if run directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
