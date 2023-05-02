//import logo from './logo.svg';
import './App.css';
import { Detail } from './components/public/Detail';
import Main from './components/public/Main';
import NavBar from './components/public/NavBar';
import Pie from './components/public/Pie';
import {Route,Routes,Switch } from "react-router-dom";
import { UserForm } from './components/public/UserForm';


function App() {
  return (
   <div>
    <NavBar/>
    <Routes>
      <Route exact path={"/"} element={<Main/>}/>
      <Route path={"/details/:id"} element={<Detail/>} />
      <Route path={"/user-form"} element={<UserForm/>} />
    </Routes>
    <Pie/>

    </div>
  );
}

export default App;
