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