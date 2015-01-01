var healthissues = {
    'Headache': 'brain',
    'Fever': 'liver',
    'Cold and Cough': 'pharynx',
    'Diarrhea': 'stomach',
    'Cough': 'lungs',
    'Vomitting': 'gallbladder',
    'Bloody stool': 'intestines',
    'Breast pain (L)': 'leftbreast',
    'Breast pain (R)': 'brain',
    'Leg pain (L)': 'leftthigh',
    'Leg pain (R)': 'rightthigh'
};

$(document).ready(function () {
    for (symptom in healthissues) {
        var date = randomDate(new Date(2012, 0, 1), new Date());
        $('#issues').append('<core-item class="raised"><div class="listItems" flex><div style="float:left">' + symptom + '</div><div style="float:right"> (since: ' + date.toLocaleDateString() + ')</div></div><a href="humanbody.html?' + healthissues[symptom] + '"></a></paper-item>');
    }
    $('core-item').css('display', 'none');
    $('core-item:lt(3)').css('display', 'flex');
});

function showMore() {
    var hiddenItems = $('.raised').filter(function () {
        return $(this).css('display') === 'none';
    });
    $(hiddenItems).css('display', 'flex');
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}