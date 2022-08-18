function myColour() {

    // Get the value of red color
    var red = document.getElementById('red').value;

    // Get the value of green color
    var green = document.getElementById('green').value;

    // Get the value of blue color
    var blue = document.getElementById('blue').value;


    var a = document.getElementById('a');

    var box = document.getElementById('box');


    var rgb = 'rgb(' + red + ',' + green + ',' + blue + ')';
    var rgba = 'rgba(' + red + ',' + green + ',' + blue + ',' + a.value + '%' + ')';


    document.body.style.backgroundColor = rgba;

    box.value = 'RGBa ( ' + red + ', ' + green + ', ' + blue + ', ' + a.value + '%' + ' )';

    a.style.background = 'linear-gradient(to right, white,' + rgb + ')';
}

function fundo() {
    document.body.style.backgroundColor = 'rgb(0,0,0)';
    a.style.background = 'linear-gradient(to right, white, rgb(0,0,0))';
}


document.getElementById('red')
    .addEventListener('input', myColour);

document.getElementById('green')
    .addEventListener('input', myColour);

document.getElementById('blue')
    .addEventListener('input', myColour);

document.getElementById('a')
    .addEventListener('input', myColour);