var inputs = document.getElementsByTagName('input'),
    displays = document.getElementsByTagName('span');

inputs[3].addEventListener('input', function() {
    displays[0].innerHTML = inputs[3].value;
})

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function() {
        calculations();
    }, false);
};

function calculations() {
    //NPS calculation
    var promoters = Number(inputs[0].value),
        neutrals = Number(inputs[1].value),
        detractors = Number(inputs[2].value),
        total = promoters + neutrals + detractors,
        nps = (((promoters - detractors) / total) * 100).toFixed(2);

    var currentNPS = displays[1];
    if (nps <= 100) {
        currentNPS.innerHTML = nps;
    }

    //NPS color-change
    nps < 50 ? currentNPS.style.color = '#EDE275' : currentNPS.style.color = 'seagreen';

    //NPS goal calculation
    var pToGoal = Number(document.getElementById('four').value);
    displays[0].innerHTML = pToGoal;
    var x = (((-100 * detractors) - (detractors * pToGoal) +
            (100 * promoters) - (neutrals * pToGoal) -
            (promoters * pToGoal)) / (-100 + pToGoal)).toFixed(2);
    displays[2].innerHTML = x;

    //Fringe-case conditionals
    switch (true) {
        case (x < 0):
            displays[2].innerHTML = '0.00';
            break;
        case (promoters + neutrals + detractors === 0):
            displays[2].innerHTML = '1.00';
            currentNPS.innerHTML = '0.00';
            break;
    }
};

//Clear button - sets elements back to default values
document.getElementById('clear').addEventListener('click', function() {
    for (var i = 0; i < inputs.length - 1; i++) {
        inputs[i].value = 0;
    }
    inputs[3].value = 80;
    displays[0].innerHTML = '80';
    displays[1].innerHTML = '0.00';
    displays[1].style.color = 'seagreen';
    displays[2].innerHTML = '1.00';
});
