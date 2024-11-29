import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./pages/mainPage"
import MyAccount from "./pages/myAccount"
import PetSearch from "./pages/animalSearch"
import AnimalAdd from "./pages/animalAdd";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationPage from "./pages/registrationPage";




const App = () => {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
      <Routes>
        <Route path={'/'} element={<MainPage />}/>
        <Route path={'/registration'} element={<RegistrationPage/>}/>
        <Route path={'/myaccount'} element={<MyAccount/>}/>
        <Route path={'/add-pet'} element={<AnimalAdd/>}/>
        <Route path={'/pet-search'} element={<PetSearch/>}/>
      </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
