const defaultResult = 0;
let currentResult = defaultResult;

// 입력 필드에서 입력 값을 가져옴
function getUserNumberInput() {
    return parseInt(userInput.value) //parseInt(userInput.value) == +userInput.value
}

// 계산 로그 생성과 작성
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    // const calcDescription = currentResult + resultBeforeCalc + calcNumber;
    outputResult(currentResult, calcDescription); // outputResult 함수는 vendor.js에서 호출
}

function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber; // currentResult = currentResult + enteredNumber; 
    createAndWriteOutput('+', initialResult, enteredNumber)
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber)
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber)
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
