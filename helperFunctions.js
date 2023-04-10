function validate() {
    var pass1 = document.getElementById("firstPassword").value;
    var pass2 = document.getElementById("secondPassword").value;


    if (pass1.length < 8) {
        alert("The length of the first password is less than 8 letters!")
    } else if (pass2.length < 8) {
        alert("The length of the second password is less than 8 letters!")
    } else if (pass1 != pass2) {
        alert("Two passwords don't match!")
    } else {
        alert("Everything is good!")
    }
}


function alert_paragraph_color() {
    var border_R = document.getElementById("redBorder").value;
    var border_G = document.getElementById("greenBorder").value;
    var border_B = document.getElementById("blueBorder").value;
    var border_width = document.getElementById("border_width").value;
    var bg_R = document.getElementById("redBackground").value;
    var bg_G = document.getElementById("greenBackground").value;
    var bg_B = document.getElementById("blueBackground").value;

    var tag = document.getElementById("paragraph");
    tag.style.borderColor = `rgb(${border_R},${border_G},${border_B})`;
    tag.style.borderWidth = border_width
    tag.style.backgroundColor = `rgb(${bg_R},${bg_G},${bg_B})`;
}