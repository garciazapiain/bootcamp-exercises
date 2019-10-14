import React from 'react';
import ReactDOM from 'react-dom';

// Add jsx files you create in other folders here
// import Week from './week/Week.jsx';

import './index.scss';
import './index.html';
import Questions from "./Questions.jsx"

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Questions/>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
