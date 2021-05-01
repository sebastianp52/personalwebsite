gsap.registerPlugin(ScrollTrigger);

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}


ScrollTrigger.create({
    start: 'bottom +5%',
    toggleClass: {
        className: 'transitionbtn--scrolled1', targets: '.transitionbtn'
    }
});