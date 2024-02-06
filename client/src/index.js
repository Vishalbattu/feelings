const React = require('react');
const ReactDOM = require('react-dom');

const App = () => {
  return React.createElement('div', null, 'Hello, feelings!');
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
