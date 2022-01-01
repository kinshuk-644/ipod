// import all necessary packages, styles and components
import './App.css';
import React from "react";
import Ipod from './Ipod';

// a class component "App" which contains "Ipod" component inside it
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Ipod />
      </div>
    );
  }
}

// export the component
export default App;
