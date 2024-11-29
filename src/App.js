import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <Router>
      <div className="container mt-4">
      <Header />
      </div>
    </Router>
  );
};

export default App;
