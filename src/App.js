import './App.css';
import Header from './components/Header';
import Workout from './components/workout';
import { PlannerProvider } from './WorkContext/workContext';

function App() {
  return (
    <PlannerProvider>
      <Header />
      <Workout />
    </PlannerProvider>
  );
}

export default App;
