
import './App.css';
import React, { useState, useEffect } from 'react';


// const product = [
//   {title: 'apple', id: 1 },
//   {title: 'melon', id: 2},
//   {title: 'cherry', id: 3}
// ]

// export default function App(){
//   const listItem = product.map(product => 
//   <li
//   key = {product.id}
//   style={{
//     color: 'aqua',
//     fontWeight: 100,
//     fontSize: 30
//   }}
//   >
//     {product.title}
//   </li>
//   );

//   return (<table
//   style={{
//     border: 30,
//     borderRadius: 20,
//     backgroundColor: 'green',
//     width: 700,
//     height: 200,
//     textAlign: 'center'
//   }}
//   >{listItem}</table>);
//   }



// export default function MyApp() {
//   const [count, setCount] = useState(0)
//   function handleClick(){
//     setCount(count + 1);
//   }
//   return(
//     <div>
//       <h1>Nhan vo day</h1>
//       <MyButton count={count} onClick={handleClick}/>
//       <MyButton count={count} onClick={handleClick}/>
//     </div>
//   )
// }
//   function MyButton({count, onClick}){

//   return (
//     <button
//     onClick={onClick}
//     >
//       Click {count} here
//     </button>
//   )
// }



//   function Calculate (a, b) {
//     const add = a + b;
//     const subtract = a - b;
//     const multiply = a * b;
//     const divide = a / b;
//     return [add, subtract, multiply, divide]
//   }

//   const [add, subtract, multiply, divide] = Calculate(18, 15);

//   document.write("<p>add: " + add);
//   document.write("<p>subtract: " + subtract);
//   document.write("<p>multiply: " + multiply);
//   document.write("<p>divide: " + divide);
// }

// export default function MyElement() {
  

// }

// function Age(props){
//   return <h1 className='name'>Toi nam nay hom {props.age} roi ma toi chua bao h thay truong hop nao ntn</h1>
// }
// export default function myElement() {
//   return <Age age="20 tuoi"/>
// }



export default class Weed extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: "Weed",
      type: "vip",
      race: "10",
      feel: "Get High"
    };
  }
  handleClick = () => {
  // this.setState({race: 'phee'})
    alert("Ok")
  }

  render(){
    return(
      <div>
      <h1 onClick={this.handleClick}>This is {this.state.name}, its {this.state.type} type, {this.state.race} and make us {this.state.feel}</h1>
      <button
      type='button'
      onClick={this.handleClick}
      >
        Click to change race
      </button>
      </div>
    )
  }
}


// const Clock = () => {
// const [currentTime, setCurrentTime] = useState(new Date());

// useEffect(() => {
// // Cép nhöt thöi gian möi giäy
// const interval = setInterval(() => { 
// setCurrentTime(new Date());
// }, 1000);
// // Clean up khi component bj xöa khöi DOM
// // Näu khöng thi interval vän sé chay
// return () => {
// clearInterval (interval);
// };
// }, []);

// const formatTime = (time) => {
// const hours = time.getHour().toString().padStart(2, '0');
// const minutes = time.getMinutes().toString().padStart(2, '0' );
// const seconds = time.getSeconds().toString().padStart(2, '0');
// return `${hours}:${minutes}:${seconds}`;
// };
// return (
// <div>
// <h1>Real time</h1>
// <p>{formatTime(currentTime)}</p>
// </div>
// )
// }
// export default Clock;
