import './App.css'
import Board from './components/Board'

// function MyButton() {
//   const handleOnClick=() => {
//     alert("clicked")
//   }

//   return (
//     <button onClick={handleOnClick}>I'm a button</button>
//   );
// }

export default function MyApp() {
  return (
    <Board/>
  )

  //  const [count, setCount] = useState(0);
    
  //   const handleOnClick = () => {
  //       setCount(count+1)
  //   }
  
  // const user = {
  //   name: "Attiqa",
  //   age: 27,

  // }
  // return (
  //   <div className='container'>
  //     <h1>Welcome to my app, {user.name}</h1>
  //     <Counter counter={count} handleOnClick={handleOnClick} />
  //     <Counter counter={count} handleOnClick={handleOnClick} />
  //     <List />
  //   </div>
  // );
}



