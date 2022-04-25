const calc = () => {
  const square = document.querySelector('.calc-square');
  const count = document.querySelector('.calc-count');
  const day = document.querySelector('.calc-day');
  const type = document.querySelector('.calc-type');

  square.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D+/, '');
  });

  count.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D+/, '');
  });

  day.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D+/, '');
  });


  type.addEventListener('change', () => {
    console.log(type.value);
  });

  console.log(type[0]);


  console.log(square);

};

export default calc;