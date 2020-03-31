function changeGreeting() {
  var helloVar = document.getElementById('app');
  helloVar.innerHTML = "Howdy";
};

window.onload = changeGreeting;
