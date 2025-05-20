$(document).ready(function () {
    $('.resume-info').on('click', function () {
        $(this).nextAll('ul').slideToggle(); // Toggle all resume-detail elements that follow
    });
});
const certImages = ["https://picsum.photos/300/200", "https://picsum.photos/300/200", "https://picsum.photos/300/200"]; // This line creates a list of all the certificate images you want to show. Each image is listed by its filename (you can add as many as you want).
let currentCert = 0; //This sets the starting image to the first one in the list (index 0). It keeps track of which image is currently showing.

function showCert(index) {
    const img = document.getElementById("certImage");
    img.src = certImages[index]; //This function changes the image on the screen. It looks for the image with the ID certImage in your HTML and replaces its src (source) with the one from the list.
}

function prevCert() {
    currentCert = (currentCert - 1 + certImages.length) % certImages.length;
    showCert(currentCert); //When you click the "Previous" button, this function shows the previous image. If you're at the first image and click "Previous," it loops to the last image.
}

function nextCert() {
    currentCert = (currentCert + 1) % certImages.length;
    showCert(currentCert); //This function shows the next image when you click "Next." If you're on the last image, it loops back to the first.


}