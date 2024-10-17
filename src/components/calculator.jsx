import { useState } from 'react';

function Calculator() {
  const buttons = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    '+',
    '-',
    '*',
    '/',
    'CLR',
    'DEL',
    '=',
  ];
  const [input, setInput] = useState('');

  function handleButtonClick(button) {
    if (button == '=') {

      try {
        let ans = eval(input);
        ans = ans.toString();
        // console.log(ans);
        setInput(ans);
      } catch (error) {
        setInput(error.message);
      }

      
    } else if (button == 'CLR') {
      setInput('');
    } else if (button == 'DEL') {
      let new_input = '';
      if (input.length > 0) {
        new_input = input.slice(0, -1);
      }
      setInput(new_input);
    } else {
      setInput((prev) => prev + button);
    }
  }

  return (
    <div className="calc_box">
      <div className="input_box">
        <input value={input} />
      </div>
      <div className="buttons_box">
        {buttons.map((button) => {
          return (
            <button key={button} onClick={() => handleButtonClick(button)}>
              {button}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Calculator;
