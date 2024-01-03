var myImage = document.querySelector("img");

myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/thunderbird-logo.png") {
        myImage.setAttribute("src", "images/mozilla-logo.jpg");
    } else {
        myImage.setAttribute("src", "images/thunderbird-logo.png");
    }
}