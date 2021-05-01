var smallImg = document.getElementById("smallimg");
var imgBox = document.getElementById("img-box");
var menuIcon = document.getElementById("btnIcon");
var navBar = document.getElementById("navc");

function on1() {
    smallImg.src = "images/project1.png"
}
function on2() {
    smallImg.src = "images/project2.png"
}
function on3() {
    smallImg.src = "images/project1.png"
}
function on4() {
    smallImg.src = "images/project2.png"
}
function on5() {
    smallImg.src = "images/project1.png"
}

function imgSize() {
    if (imgBox.className == "small") {
        imgBox.className = "full";
        menuIcon.className = "btnbox";
        navBar.className = "nav-container1";
    }
    else {
        imgBox.className = "small";
        menuIcon.className = "btnbox1";
        navBar.className = "nav-container";
    }

}