function openList(id) {
    var object = document.getElementById(id);
    var thisobj = document.getElementById(id + "obj");
    if (object.classList.contains("openlist")) {
        object.classList.remove("openlist");
        thisobj.className = "";
    }
    else {
        object.classList.add("openlist");
        thisobj.className = id + "obj";
    }
}