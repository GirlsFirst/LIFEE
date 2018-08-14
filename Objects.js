document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == '39') {
    document.location.href = 'instructions.html';
  }
  else if (e.keyCode == '37') {
    document.location.href = 'explaining.html';
  }
}
