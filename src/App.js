import React from 'react'
import Restaurant from './components/Basics/Restaurant';
import UseState from './components/Hooks/useState';
import UseEffect from './components/Hooks/useEffect';
import UseReducer from './components/Hooks/useReducer';
import Todo from './components/todoreact/todo';
import Temp from './components/weather/temp';

const App = () => {
  // return <Restaurant/>
  // return <UseState />
  // return <UseEffect/>
  // return <UseReducer/>
  // return <Todo />
  return <Temp />
};

export default App;


// const App = () => {
//     return (
//     <>
//        <h1 className="myclassname">Hello World ! {3+3}</h1>
//        <p>Awesome </p>
//        <img src="" alt="" />    
//        <MyName/>
//        <MyName/>
//     </>
//     );
// }


// const MyName = () => {
//     return <h1>Anshir Chaudhary</h1>
// }


// how react is actually looking into it
//old approach (below 17 version)
// const App = () => {
//   return React.createElement(
    // "div",
    // {},
    // React.createElement("h1", {}, "Hello World")
// );
// };
