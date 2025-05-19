$(document).ready(function () {
    $('.resume-info').on('click', function () {
        $(this).nextAll('.resume-detail').slideToggle(); // Toggle all resume-detail elements that follow
    });
});