import './App.css'
import Counter from './components/Counter';
import List from './components/list/List';

function MyButton() {
  const handleOnClick=() => {
    alert("clicked")
  }

  return (
    <button onClick={handleOnClick}>I'm a button</button>
  );
}

export default function MyApp() {
  const user = {
    name: "Attiqa",
    age: 27,

  }
  return (
    <div className='container'>
      <h1>Welcome to my app, {user.name}</h1>
      <MyButton />
      <Counter/>
      <List />
    </div>
  );
}
