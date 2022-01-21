let emptdiv = document.createElement('div');
emptdiv.className = "empty";
emptdiv.onclick = function(){closeM();};

function showM(){
    document.body.append(emptdiv);
    document.getElementById("addwin").classList.add("hider");
    document.getElementById("addwin").appendChild(document.getElementById("headlist"));
    document.getElementById("headlist").classList.add("visible");
}

function closeM(){
    document.getElementById("addwin").classList.remove('hider');
    document.getElementById("headlist").classList.remove("visible");
    document.getElementById("wrhead").appendChild(document.getElementById("headlist"));
    emptdiv.remove();
}

window.onscroll = function(){checkMenu()};

let header = document.getElementById("headlist");
let sticky = header.offsetTop;
mheader = document.getElementById("menubutton");
let msticky = mheader.offsetTop;

function checkMenu(){
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if (window.scrollY >= sticky && +width >= 900){
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  if (window.scrollY >= msticky && +width < 900) {
    mheader.classList.add("msticky");
  } else {
    mheader.classList.remove("msticky");
  }
}