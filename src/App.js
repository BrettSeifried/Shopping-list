import './App.css';
import Workout from './components/workout';
import DarkModeToggle from './darkmode/DarkModeToggle';

function App() {
  return (
    <>
      <div>
        <DarkModeToggle />
      </div>
      <Workout />;
    </>
  );
}

export default App;
