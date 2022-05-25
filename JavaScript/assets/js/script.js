var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    document.getElementById('subtrair').style.display = 'inline'

    if(currentNumber >= 10){
        document.getElementById('somar').style.display = 'none'
    }
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    document.getElementById('somar').style.display = 'inline'
    
    if(currentNumber < 1){
        document.getElementById('subtrair').style.display = 'none'
    }
}