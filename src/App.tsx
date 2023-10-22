import './App.css'
import List from './components/list/List';

function MyButton() {
  return (
    <button>I'm a button</button>
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
      <ul>
        <List />
      </ul>
    </div>
  );
}
