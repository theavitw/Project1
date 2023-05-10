function reveal() {
    var reveals = document.querySelectorAll("img");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 120;   
        var elementTop1 = reveals[i].getBoundingClientRect();
        console.log(elementTop1);
        console.log(windowHeight);

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else { 
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);