import './App.css';
import Header from './components/Header';
import Timer from './components/timer';
import Workout from './components/workout';
import { PlannerProvider } from './WorkContext/workContext';

function App() {
  return (
    <PlannerProvider>
      <Header />
      <Workout />
      <Timer seconds={30} />
    </PlannerProvider>
  );
}

export default App;
