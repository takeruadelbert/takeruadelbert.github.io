// Disable Inspect Element
document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Disable Right-Click Mouse
document.onmousedown = disableclick;
status = "Right Click Disabled";

function disableclick(event) {
    if (event.button == 2) {
        alert(status);
        return false;
    }
}
