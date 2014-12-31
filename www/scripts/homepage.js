function gotoPage(e) {
    $(e).transition({
        perspective: '100px',
        rotateY: '360deg'
    }, function () {
        window.location = e.id + ".html";
    });
}