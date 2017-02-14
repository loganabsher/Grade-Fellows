'use strict';
document.addEventListener('DOMContentLoaded', function(){
  var login = localstorage.login;
  console.log(login);
  if(login === null){
    location.href = '../login/login.html';
  }
  var titleEl = document.getElementById('user-login');
  titleEl.textContent = localstorage.username + ' home';
});
