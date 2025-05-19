function sumTwo(arr) {
  const numbers = arr.filter(n => typeof n === 'number' && !isNaN(n));
  if (numbers.length < 2) return null;

  let min1 = Infinity;
  let min2 = Infinity;

  for (let n of numbers) {
    if (n < min1) {
      min2 = min1;
      min1 = n;
    } else if (n < min2) {
      min2 = n;
    }
  }

  return min1 + min2;
}

function handleInput() {
  const input = document.getElementById('input').value;
  const strArr = input.split(',').map(x => parseFloat(x.trim()));
  const result = sumTwo(strArr);
  const output = document.getElementById('output');
  output.textContent = result !== null ? `Сумма: ${result}` : 'Введите минимум два числа';
}

document.getElementById('submit').addEventListener('click', handleInput);
document.getElementById('input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleInput();
});
