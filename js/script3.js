let slideIndex2 = 0;
showSlides2();

function showSlides2() {
    let j;
    let slides2 = document.getElementsByClassName("mySlides2");

    for (j = 0; j < slides2.length; j++) {
        slides2[j].style.display = "none";
    }

    slideIndex2++;
    if (slideIndex2 > slides2.length) { slideIndex2 = 1 }

    slides2[slideIndex2 - 1].style.display = "block";

    setTimeout(showSlides2, 1000); // Change image every 1 seconds
}