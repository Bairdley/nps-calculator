var inputs = document.getElementsByTagName('input');
inputs[3].addEventListener('input', function() {
    document.getElementById('goal-value').innerHTML = inputs[3].value;
})

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function() {
        calculations();
    }, false);
};

function calculations() {
    //NPS calculation
    var promoters = Number(document.getElementById('one').value),
        neutrals = Number(document.getElementById('two').value),
        detractors = Number(document.getElementById('three').value),
        total = promoters + neutrals + detractors,
        nps = (((promoters - detractors) / total) * 100).toFixed(2);
  
    var p = document.getElementsByTagName('span')[1];
    if (nps <= 100) {
        p.innerHTML = nps;
    }
  
    //NPS color-change
    nps < 50 ? p.style.color = '#EDE275' : p.style.color = 'seagreen';
  
    //NPS goal calculation
    var d = Number(document.getElementById('four').value);
    document.getElementsByTagName('span')[0].innerHTML = d;
    var x = (((-100 * detractors) - (detractors * d) + 
              (100 * promoters) - (neutrals * d) - 
              (promoters * d)) / (-100 + d)).toFixed(2);
    document.getElementsByTagName('span')[2].innerHTML = x;
  
    //Fringe-case conditionals
     switch (true) {
      case (x < 0): 
        document.getElementsByTagName('span')[2].innerHTML = '0.00';
        break;
      case (promoters + neutrals + detractors === 0): 
        document.getElementsByTagName('span')[2].innerHTML = '1.00';
        p.innerHTML = '0.00';
        break;
    } 
};

//Clear button - sets elements back to default values
document.getElementById('clear').addEventListener('click', function() {
    for (var i = 0; i < inputs.length - 1; i++) {
        inputs[i].value = 0;     
    }
    inputs[3].value = 80;
    document.getElementById('goal-value').innerHTML = '80';
    document.getElementsByTagName('span')[1].innerHTML = '0.00';
    document.getElementsByTagName('span')[2].innerHTML = '1.00';
    document.getElementsByTagName('span')[1].style.color = 'seagreen';
});




​
