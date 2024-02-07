var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
  x.style.left = "4px";
  y.style.right = "-520px";
  a.className += " white-btn";
  b.className = "btn";
  x.style.opacity = 1;
  y.style.opacity = 0;
}

function register() {
  x.style.right = "-510px";
  y.style.left = "5px";
  b.className += " white-btn";
  a.className = "btn";
  y.style.opacity = 1;
  x.style.opacity = 0;
}
