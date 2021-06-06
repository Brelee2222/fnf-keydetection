var keys = {
  38:{
    "id":"up"
  },
  40:{
    "id":"down"
  },
  37:{
    "id":"left"
  },
  39:{
    "id":"right"
  }
}
window.onkeydown = function(e) {
  console.log(e.keyCode)
  console.log(keys[e.keyCode])
  if (keys[e.keyCode] != undefined) {
    console.log('hoi')
    document.getElementById(keys[e.keyCode].id).style.background = 'purple'
    console.log(keys[e.keyCode].feature)
    if (keys[e.keyCode].feature != undefined) {
      keys[e.keyCode].feature()
    };
  };
};
window.onkeyup = function(e) {
  console.log(e.keyCode)
  if (keys[e.keyCode] != undefined) {
    document.getElementById(keys[e.keyCode].id).style.background = 'blue'
    if (keys[e.keyCode].unfeature != undefined) {
      keys[e.keyCode].unfeature();
    };
  };
};