document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == '32') {
    document.location.href = 'woop.html';
  }
  else if (e.keyCode == '37') {
    document.location.href = 'instructions.html';
  }
}
