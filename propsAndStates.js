import './App.css';

function App() {
  // const name = <h1>Apurv Chauhan</h1>
  // const age = <h2>20</h2>
  // const email = <h3>apurv@gmail.com</h3>
  const age = 20;
  return (
    <div className="App">
      {name}
      {age}
      {email}
      <UserComponent name="Apurv" age={20} email="apurv@gmail.com"/>
      <UserComponent name="Akshay" age={20} email="akshay@gmail.com" />


    </div>
  );
}
const UserComponent =(props) =>{
  return(
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.email}</h3>
    </div>
  );
}

export default App;