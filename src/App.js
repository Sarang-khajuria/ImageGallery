import Header from './Components/Header/header';
import Images from './Components/Images/Images'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Images  limit={20} page={1}></Images>
    </div>
  );
}

export default App;
