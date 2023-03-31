import React from "react"
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home"
import EmployeeList from "./components/EmployeeList"


class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/employee-list' element={<EmployeeList/>}/>
      </Routes>
      </Router>
    </div>
  );
}
}

export default App;
