function showTab(id) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function showReceive() {
    document.getElementById('receive').classList.toggle('hidden');
}

window.onload = () => {
    // 간단한 시세 시뮬레이션
    const prices = {
        btc: "₩96,000,000",
        eth: "₩4,800,000",
        usdt_trc: "₩1,350",
        usdt_eth: "₩1,350",
        ltc: "₩110,000",
        xrp: "₩750",
        sol: "₩35,000"
    };
    Object.keys(prices).forEach(k => {
        document.getElementById(k).innerText = prices[k];
    });
};
