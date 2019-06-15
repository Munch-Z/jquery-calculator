$(document).ready( () => {

let num1 = "";
let num2 = "";
let operator = -1;


$('.number').on('click', function () {
    let digit = $(this).attr('value');
    
    if (operator !== -1){
        $('#second-number').append(digit)
        num2 += digit;
    } else {
        $('#first-number').append(digit);
        num1 += digit;
    }
})


$('.operator').on('click', function() {
    
if (operator === -1){
    operator = $(this).attr('value');
    
    switch(operator) {
        case "plus":
            $('#operator').text('+');
            break;
        case "minus":
            $('#operator').text('-');
            break;
        case "times":
            $('#operator').text('&times;');
            break;
        case "divide":
            $('#operator').text('&divide;');
            break;
        case "power":
            $('#operator').text('^');
            break;
        };
    }
})

$('.equal').on('click', function (){
    if(operator !== -1) {
        switch(operator){
            case "plus":
                    $('#result').text((parseInt(num1) + parseInt(num2)));
                    break;
                case "minus":
                    $('#result').text((parseInt(num1) - parseInt(num2)));
                    break;
                case "times":
                    $('#result').text((parseInt(num1) * parseInt(num2)));
                    break;
                case "divide":
                    $('#result').text((parseInt(num1) / parseInt(num2)));
                    break;
                case "power":
                    $('#result').text((Math.pow(parseInt(num1), parseInt(num2))));
                    break;
        }
    }
})

$('#button-clear').on('click', function() {
    num1 = "";
    num2 = "";
    operator = -1;

    $('#first-number, #second-number, #operator, #result').text('');
})


})