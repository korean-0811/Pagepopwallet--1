function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const saved = localStorage.getItem(username);

  if (saved && JSON.parse(saved).password === password) {
    localStorage.setItem('currentUser', username);
    location.href = 'wallet.html';
  } else {
    alert('로그인 실패');
  }
}

function register() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (localStorage.getItem(username)) {
    alert('이미 존재하는 아이디입니다');
  } else {
    localStorage.setItem(username, JSON.stringify({ password, balance: 100 }));
    alert('회원가입 완료');
  }
}
