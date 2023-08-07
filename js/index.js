let string = '';
let operand1 = '';
let operand2 = '';
let operator = '';
let result = '';
let zerohandle =''
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (event) => {
    let h = document.querySelectorAll('.data-number');
    console.log(h);
    if (event.target.innerHTML == 'C') {
      document.querySelector('input').value = '';
      result = '';
      operand1 = '';
      operand2 = '';
      string = '';
      operator = '';
      zerohandle='';
      console.log('reuslt' + result);
      console.log('operand1' + operand1);
      console.log('operand2' + operand2);
    }
    else if (event.target.innerHTML == '='&&operand1===''&&operand2==''&&operator==='') {
      document.querySelector('input').value = '';
    }
    else if (event.target.innerHTML == '00'&&operand1===''&&operand2==''&&operator==='') {
      document.querySelector('input').value = '';
    }
else if(event.target.innerHTML ==='0'&&operand2===''&&operator===''&&operand1===''){
  zerohandle+=event.target.innerHTML;
  
    document.querySelector('input').value =zerohandle;
    console.log(zerohandle);
    zerohandle = '';
 

}
    else if (event.target.innerHTML == 'del') {
      //  string = string.slice(0, -1);
      string = document.querySelector('input').value.slice(0, -1);
      console.log(string);
      document.querySelector('input').value = string;
    }
    else if (event.target.innerHTML == '=') {
      result = eval(result);
      document.querySelector('input').value = result;
      operand1 = result;
      operand2 = '';
      return;
    }
    else {
      string = string + event.target.innerHTML;
      console.log(event.target.innerHTML);
      if (event.target.innerHTML === '+' || event.target.innerHTML === '-' || event.target.innerHTML === '*' || event.target.innerHTML === '%' || event.target.innerHTML === '/') {
        document.querySelector('input').value = ' ';
        console.log(event.target.innerHTML)
        operator = event.target.innerHTML;
        string = '';
      }
      else if (operand1 !== '' && operator !== '') {
        operand2 += string;
        document.querySelector('input').value = operand2;
        string = '';
        console.log('hellp' + operand2);
      }
      else {
        operand1 += string;
        document.querySelector('input').value = operand1;
        string = '';
        console.log('op' + operand1)
      }
      result = operand1 + operator + operand2;
    }
  })
})
