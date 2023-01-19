const defaultResult = 0;
let currentResult = defaultResult;

function add(){
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, '');
    /*const result = currentResult + userInput.value;
    alert('The result is ' + result);
    return result;*/
}

addBtn.addEventListener('click', add);


