import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from './store/redux/hooks';
import Login from './pages/Login/Login';
import MainLayout from './layouts/MainLayout';
import People from './pages/People/People';
import Planets from './pages/Planets/Planets';
import Starships from './pages/Starships/Starships';
import HomePage from './pages/Home/Home';
import './App.css';

const App: React.FC = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route element={isAuthenticated ? <MainLayout /> : <Navigate to="/login" />} >
          <Route path="/home" element={<HomePage />} />
          <Route path="/people/:page?" element={<People />} />
          <Route path="/planets/:page?" element={<Planets />} />
          <Route path="/starships/:page?" element={<Starships />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
