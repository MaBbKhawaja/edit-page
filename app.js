document.getElementById("toggleInput").addEventListener("click", switchToggle);

function switchToggle() {
    let el = document.getElementById("toggleInput").checked
    if (el) {
        document.body.contentEditable = !document.body.contentEditable;
    }
    else {
        document.body.contentEditable = false;
    }
}