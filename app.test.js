const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
    it('should return welcome message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('Node.js Kubernetes CI/CD is working');
    });
});

describe('GET /health', () => {
    it('should return healthy status', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toEqual('healthy');
    });
});
