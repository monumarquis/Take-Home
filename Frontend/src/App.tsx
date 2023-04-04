import { FC } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AllRoutes from './allRoutes/AllRoutes';

const App: FC = () => {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
