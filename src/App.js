import './App.css';
import Signup from './components/Signup';
import Series from './components/Series';

function App() {
  return (
    <>
    <div className='signup'>
    <Signup title="Sign up Form" submitButtonText="Sign Up"></Signup>
    </div>
    <div>
    <Series></Series>
    </div>

    </>
  );
}

export default App;
