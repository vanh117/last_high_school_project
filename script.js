// Matrix rain animation
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let letters = "アァイィウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
letters = letters.split("");

let fontSize = 14;
let columns = canvas.width / fontSize;
let drops = [];

for (let x = 0; x < columns; x++) {
  drops[x] = 1;
}

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 33);

// Updated login logic with redirect paths
const users = {
  "ánh ngọc": { password: "ngoc!", path: "letter/anh_ngoc/anh_ngoc.html" },
  "minh nhật": { password: "okla@", path: "letter/minh_nhat/minh_nhat.html" },
  "mạnh tuấn": {password: "cooldown#", path: "letter/manh_tuan/manh_tuan.html"},
  "lê quân": {password:"soul$", path: "letter/le_quan/le_quan.html"},
  "duy hưng":{password: "hunge%", path: "letter/duy_hung/hung.html"},
  "khoa": {password: "kat^", path : "letter/khoa/khoa.html"},
  "yến": {password: "kahatyen&",path: "letter/yen/yen.html" },
  "hải thanh": {password: "thanhehehe*", path : "letter/hai_thanh/hai_thanh.html"},
  "duy minh": {password:"dum(", path : "letter/duy_minh/duy_minh.html"},
  "đình bách": {password : "ruoi)", path : "letter/dinh_bach/dinh_bach.html"},
  "bách bão": {password: "bach_bao", path : "letter/bach_bao/bach_bao.html"},
  "gia bảo": {password: "bao=", path: "letter/gia_bao/gia_bao.html"},
  "tùng bách": {password: "ltb{", path: "letter/tung_bach/tung_bach.html"},
  "thư": {password: "anhthusakura}", path: "letter/thu/thu.html"},
  "xuân mai": {password: "mai[", path : "letter/xuan_mai/xuan_mai.html"},
  "gia huy": {password: "muvodich]", path: "letter/gia_huy/gia_huy.html"},
  "đức minh": {password: "cudhnim;", path: "letter/duc_minh/duc_minh.html"},

};


function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  if (users[username] && users[username].password === password) {
    window.location.href = users[username].path;
  } else {
    errorMsg.textContent = "Access Denied. Try again.";
  }
}


// Allow pressing Enter to submit login
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    login();
  }
});
