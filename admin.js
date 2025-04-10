window.onload = () => {
  const container = document.getElementById('userList');
  container.innerHTML = '<h3>가입된 사용자</h3>';
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key === 'currentUser') continue;
    const data = JSON.parse(localStorage.getItem(key));
    if (data.password) {
      container.innerHTML += `<p><strong>${key}</strong> : ${data.balance} USDT</p>`;
    }
  }
};
