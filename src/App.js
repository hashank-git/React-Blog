import Counter from './components/Counter'
import Nav from './components/Nav'
import Student from './components/Student'

function App() {
  return (

    <div className="App">
      <Nav />
      <h1> Hello World </h1>
      <Student firstname='Muhammad'/>
      <Student firstname='Hashan'/>
      <Student firstname='Khan'/>
      <Counter />
    </div>
  );
}

export default App;
