window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 1000);
  }

function showM(){
    document.getElementById("addwin").classList.add("hider");
    document.getElementById("addwin").appendChild(document.getElementById("headlist"));
    document.getElementById("headlist").classList.add("visible");
}

function closeM(){
    document.getElementById("addwin").classList.remove('hider');
    document.getElementById("headlist").classList.remove("visible");
    document.getElementById("wrhead").appendChild(document.getElementById("headlist"));
}

window.onscroll = function(){checkMenu()};

let header = document.getElementById("headlist");
let sticky = header.offsetTop;

function checkMenu(){
  if(window.pageYOffset > sticky){
    header.classList.add("sticky");
  }else{
    header.classList.remove("sticky");
  }
}