document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == '32') {
    document.location.href = 'lifee.html';
  }
  else if (e.keyCode == '37') {
    document.location.href = 'explaining.html';
  }
}
