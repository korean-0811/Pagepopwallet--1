const users = [];

function togglePopup() {
  document.getElementById('popup').classList.toggle('hidden');
}
document.getElementById('loginBtn').onclick = togglePopup;

function login() {
  const email = document.getElementById('email').value;
  const pw = document.getElementById('password').value;
  const user = users.find(u => u.email === email && u.password === pw);
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = 'wallet.html';
  } else {
    alert('로그인 실패');
  }
}

function signup() {
  const email = document.getElementById('email').value;
  const pw = document.getElementById('password').value;
  if (users.find(u => u.email === email)) {
    alert('이미 존재하는 이메일입니다');
    return;
  }
  const newUser = { email, password: pw, balance: 0 };
  users.push(newUser);
  alert('가입 완료, 자동 로그인 중...');
  localStorage.setItem('user', JSON.stringify(newUser));
  window.location.href = 'wallet.html';
}

function copyAddress() {
  const input = document.getElementById('myWalletAddress');
  input.select();
  document.execCommand("copy");
  alert("지갑 주소가 복사되었습니다");
}
