function Buttons() {
  let btns = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '+',
    '-',
    '/',
    '*',
    'C',
    '=',
  ];

  return (
    <>
      <div className='buttons'>
        {btns.map((btn) => {
          return (
            <button key={btn} onClick={display_text}>
              {btn}
            </button>
          );
        })}
      </div>
    </>
  );
}
function display_text() {
  let b = event.target.innerText;
  let inp = document.querySelector('.input');

  // console.log(b);
  // console.log(inp);

  if (b === '=') {
    try {
      if (eval(inp.value) === 'Undefined') {
        inp.value = 'Error';
      } else {
        inp.value = eval(inp.value);
        console.log(eval(inp.value));
      }
    } catch (Error) {
      inp.value = Error;
    }
  } else if (b == 'C') {
    inp.value = '';
  } else {
    inp.value += b;
  }
}
export default Buttons;
