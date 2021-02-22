import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Person name="Masudur Rahman" id="181-15-1743"></Person>
          <Person name="Jannatul" id="181-15-1744"></Person>
      </header>
    </div>
  );
}

function Person(props){
  var stylefordiv={
    border:'2px solid green',
    margin:'10px',
    width:'600px',

  }
  return(
    <div style={stylefordiv}>
      <h1><span style={{color:'green'}}>Name: {props.name}</span> </h1>
      <h2><span style={{color:'green'}}>ID: {props.id}</span> </h2>
    </div>
  );
}

export default App;
