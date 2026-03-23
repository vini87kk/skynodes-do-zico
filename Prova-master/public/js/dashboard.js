// 1. Classe Base (Pai)
class ComponenteMonitor {
    constructor(idElemento) {
        // Armazena a referência do elemento HTML no objeto
        this.elemento = document.getElementById(idElemento);
    }
}

// 2. Herança: Classe Filha (Filho)
class CardHardware extends ComponenteMonitor {
    constructor(idElemento) {
        super(idElemento); // Chama o construtor da classe pai
    }

    // 3. Polimorfismo / Método de Atualização
    atualizarInterface(valor, tipo) {
        // Procura o span de valor dentro deste card específico
        const spanValor = this.elemento.querySelector('.value');
        
        if (spanValor) {
            spanValor.innerText = valor;
        }

        // 4. Lógica de Negócio (Alerta Crítico)
        // Remove a classe antes de verificar, para "limpar" o estado anterior
        this.elemento.classList.remove('alertacritico');

        if (tipo === 'temp' && parseFloat(valor) > 75) {
            this.elemento.classList.add('alertacritico');
        } 
        else if (tipo === 'cpu' && parseFloat(valor) > 90) {
            this.elemento.classList.add('alertacritico');
        }
    }
}

// --- Instanciando os objetos para cada card ---
const monitorCPU = new CardHardware('card-cpu');
const monitorRAM = new CardHardware('card-ram');
const monitorTemp = new CardHardware('card-temp');

// 5. Comunicação: Fetch API a cada 2 segundos
async function buscarDadosServidor() {
    try {
        const resposta = await fetch('/api/status');
        const dados = await resposta.json();
        const metrics = dados.data;

        // Chamando o método atualizarInterface para cada instância
        monitorCPU.atualizarInterface(`${metrics.cpuUsage}%`, 'cpu');
        monitorRAM.atualizarInterface(`${metrics.ramUsageGB} GB`, 'ram');
        monitorTemp.atualizarInterface(`${metrics.cpuTemperature}°C`, 'temp');

    } catch (erro) {
        console.error("Erro na comunicação com skyNode:", erro);
    }
}

// Inicia o loop de monitoramento
setInterval(buscarDadosServidor, 2000);
buscarDadosServidor();