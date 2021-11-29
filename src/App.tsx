import './App.css';
import Button from './components/UI/Button';
import Input from './components/UI/Input';

function App() {
  return (
    <div className="App">
      <h1>Hi there!</h1>
      <Button onClick={() => console.log('clicked')}>Testing</Button>
      <br />
      <Input placeholder='first name' />
    </div>
  );
}

export default App;
