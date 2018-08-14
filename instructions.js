document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == '39') {
    document.location.href = 'playgame.html';
  }
  else if (e.keyCode == '37') {
    document.location.href = 'objects.html';
  }
}
