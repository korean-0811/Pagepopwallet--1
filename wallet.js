window.onload = function() {
  const username = localStorage.getItem('currentUser');
  const userData = JSON.parse(localStorage.getItem(username));
  document.getElementById('usernameDisplay').innerText = username;
  document.getElementById('balance').innerText = userData.balance;

  // 시세 가져오기
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd')
    .then(res => res.json())
    .then(data => {
      document.getElementById('price').innerText = data.tether.usd + ' USD';
    });
}

function sendTokens() {
  const receiver = document.getElementById('receiver').value;
  const amount = Number(document.getElementById('amount').value);
  const sender = localStorage.getItem('currentUser');
  const senderData = JSON.parse(localStorage.getItem(sender));
  const receiverData = JSON.parse(localStorage.getItem(receiver) || '{}');

  if (!receiver || !receiverData.password) {
    alert('수신자 없음');
    return;
  }

  if (senderData.balance < amount) {
    alert('잔액 부족');
    return;
  }

  senderData.balance -= amount;
  receiverData.balance = (receiverData.balance || 0) + amount;

  localStorage.setItem(sender, JSON.stringify(senderData));
  localStorage.setItem(receiver, JSON.stringify(receiverData));

  alert('송금 완료');
  location.reload();
}
