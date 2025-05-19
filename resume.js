$(document).ready(function () {
    $('.resume-info').on('click', function () {
        $(this).nextAll('ul').slideToggle(); // Toggle all resume-detail elements that follow
    });
});