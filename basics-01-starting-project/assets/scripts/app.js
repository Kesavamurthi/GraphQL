let currentNumber = 0;

function add(){
    currentNumber = currentNumber + parseInt(userInput.value);
    outputResult(currentNumber,'');
}
addBtn.addEventListener('click',add);