import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  const buttonText = {
    text: 'tocak'
  };
  const labelName = 'Enter name:';

  return (
    <div>
      <label className="label" htmlFor="name">{labelName}</label>
      <input id="name" type="text"/>
      <button style={{backgroundColor: 'red', color: 'white'}}>
        {Object.values(buttonText)}
      </button>
    </div>
  );
};

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);