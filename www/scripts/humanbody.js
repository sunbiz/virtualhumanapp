var firstTime = true;

function svgLoaded() {
    if (firstTime) {
        firstTime = false;
        var organ = window.location.search.substring(1);
        if (organ.length > 0) {
            highlight(organ, 'red');
        }
    }
}

function highlight(organ, color) {
    var femaleSvg = document.getElementById('female').getSVGDocument();
    for (i = 0; i < femaleSvg.getElementsByTagName('image').length; i++) {
        femaleSvg.getElementsByTagName('image')[i].setAttribute('opacity', '0.1');
        femaleSvg.getElementsByTagName('image')[i].setAttribute('onclick', '');
    }

    femaleSvg.getElementById('arteries').setAttribute('opacity', '0.1');
    femaleSvg.getElementById('backgroundbody').setAttribute('opacity', '1.0');
    femaleSvg.getElementById('iliac').setAttribute('opacity', '0.1');
    femaleSvg.getElementById('lefthandbone').setAttribute('opacity', '0.1');

    femaleSvg.getElementById(organ).setAttribute('xlink:href', organ + '-' + color + '.png');
    femaleSvg.getElementById(organ).setAttribute('opacity', '1.0');
    femaleSvg.getElementById(organ).setAttribute('onclick', 'top.showDialog(this.id)');

    var selectedOrgan = femaleSvg.getElementById(organ);
    if (selectedOrgan.parentNode.tagName === 'g') {
        var parentNode = selectedOrgan.parentNode;
        parentNode.ownerSVGElement.appendChild(parentNode);
    } else {
        selectedOrgan.ownerSVGElement.appendChild(selectedOrgan);
    }
}

function showTest(organ, color) {
    if (organ == 'btnLiver') {
        highlight(liver, red);
    }
    if (organ == 'btnHeart') {
        highlight(liver, green);
    }
}

function showDialog(id) {
    for (i = 0; i < document.getElementsByClassName('organName').length; i++) {
        document.getElementsByClassName('organName')[i].innerHTML = id;
    }
    toggleDialog();
}

function toggleDialog() {
    document.getElementById('dialog').toggle();
}