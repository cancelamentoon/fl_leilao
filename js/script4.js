let slideIndex3 = 0;
showSlides3();

function showSlides3() {
    let i;
    let slides3 = document.getElementsByClassName("mySlides3");

    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
    }
    slideIndex3++;
    if (slideIndex3 > slides3.length) { slideIndex3 = 1 }

    slides3[slideIndex3 - 1].style.display = "block";

    setTimeout(showSlides3, 1500); // Change image every 4 seconds
}