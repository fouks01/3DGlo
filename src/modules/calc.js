const calc = (price = 100) => {

  const calcBlock = document.querySelector('.calc-block');
  const calcSquare = document.querySelector('.calc-square');
  const calcCount = document.querySelector('.calc-count');
  const calcDay = document.querySelector('.calc-day');
  const calcType = document.querySelector('.calc-type');
  const total = document.getElementById('total');


  calcSquare.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D+/, '');
  });

  calcCount.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D+/, '');
  });

  calcDay.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D+/, '');
  });


  calcType.addEventListener('change', () => {
    // console.log(type.value);
  });

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcType.value && calcSquare.value) {
      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }

    total.textContent = totalValue;
  };

  calcBlock.addEventListener('input', (e) => {
    if (e.target === calcType || e.target === calcSquare || e.target === calcCount || e.target === calcDay) {
      countCalc();
    }
  });

};

export default calc;