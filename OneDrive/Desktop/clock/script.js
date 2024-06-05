setInterval(myfun, 1000);

function myfun() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.getElementById("time").innerHTML = time;
}
