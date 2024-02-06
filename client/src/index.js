const React = require('react');
const ReactDOM = require('react-dom');

const App = () => {
  return React.createElement('div', null, 'Hello, feelings!');
};

// Check if 'document' is defined before rendering
if (typeof document !== 'undefined') {
  ReactDOM.render(React.createElement(App), document.getElementById('root'));
}
