const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Classe para gerar os dados simulados
class HardwareEngine {
    generateMetrics() {
        return {
            cpuUsage: parseFloat((Math.random() * 100).toFixed(2)),
            ramUsageGB: parseFloat((Math.random() * 16).toFixed(2)),
            cpuTemperature: parseFloat((Math.random() * (90 - 30) + 30).toFixed(1)),
            timestamp: new Date().toISOString()
        };
    }
}

// 1. Configura a pasta 'public' para arquivos estáticos (HTML, CSS, JS do front)
app.use(express.static(path.join(__dirname, 'public')));

// 2. Endpoint da API
app.get('/api/status', (req, res) => {
    const engine = new HardwareEngine();
    res.json({
        serverName: "skyNode-Primary-01",
        data: engine.generateMetrics()
    });
});

app.listen(PORT, () => {
    console.log(`🚀 skyNode rodando em http://localhost:${PORT}`);
});