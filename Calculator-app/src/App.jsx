import './App.css';
import Display from './components/display';
import Buttons from './components/Buttons';
function App() {
  return (
    <>
      <div className='wrapper'>
        <h1>Calculator</h1>
        <div className='container'>
          <Display />
          <Buttons />
        </div>
      </div>
    </>
  );
}

export default App;
