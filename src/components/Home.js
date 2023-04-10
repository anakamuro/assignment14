import "./styles.css";
import React, { useState } from "react"
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from "react-datepicker";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Modal"
import { nanoid } from "nanoid"
//import {  history } from "react-router"
//import { useNavigate } from "react-router-dom";
import StateDropDown from 'state-drop-down'



function Home() {
  //const path = useNavigate()
  //const [selectedDate, setSelectedDate] = useState(null)
  const [selects, setSelects] = useState();
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [department, setDepartment] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState(new Date())
  const [street, setStreet] = useState('')
  const [zipCode, setZipCode] = useState("")
  const [blog, setBlog] = useState("")

  const handleSelect = (event) => {
    
    setState(event.target.value)
  }

  // const [dateValue, setDateValue] = useState(new Date())

  const handleSubmit = (event) => {
    event.preventDefault();
    // path('/employee-list')
    const formattedStartDate = (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear();

    const formattedBirthDate = (dateOfBirth.getMonth() + 1) + "/" + dateOfBirth.getDate() + "/" + dateOfBirth.getFullYear();
    console.log("birth", formattedBirthDate);
    let id = nanoid()
    const blogs = { id, firstName, lastName, dateOfBirth: formattedBirthDate, department, state, city, startDate: formattedStartDate, blog, street, zipCode }
    console.log(blogs)

    fetch('http://localhost:3003/employees', {
      method: 'POST',
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify(blogs)

    }).then((res) =>
      res.json()
    ).then((data) => {
      // history.push({pathname: '/employee-list'})
      //  path('/employee-list')
      console.log(data)

      setShow(true)
    })
  }
  /*
  function toggleShow() {
    setShow(!show)
  }*/

  return (
    <div className="App">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div id="container" className={"myClass " + (show ? "dark" : null)}>
        <a href="./employee-list">View Current Employees</a>
        <h2>Create Employee</h2>
        <form
          action="#"
          id="create-employee"
          onSubmit={handleSubmit}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            value={firstName}
            id="first-name"
            className={"myClass " + (show ? "dark" : null)}
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)} />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            value={lastName}
            id="last-name"
            className={"myClass " + (show ? "dark" : null)}
            name="lastName"
            onChange={(e) => setLastName(e.target.value)} />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker selected={dateOfBirth} onChange={(date) => {

            setDateOfBirth(date)
          }}
            // dateFormat="MM/DD/YYYY"
            showYearDropdown
            scrollableMonthYearDropdown
          />



          <label htmlFor="start-date">Start Date</label>
          <DatePicker selected={startDate} onChange={(date) => {
            setStartDate(date)
          }}
            // dateFormat="MM/DD/YYYY"
            //isClearable
            showYearDropdown
            scrollableMonthYearDropdown />



          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              className={"myClass " + (show ? "dark" : null)}
              name="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)} />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              className={"myClass " + (show ? "dark" : null)}
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)} />

            <label htmlFor="state">State</label>
            <StateDropDown 
              onChange={handleSelect}
              name="state"
              id="state" />
            
            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              className={"myClass " + (show ? "dark" : null)}
              name="zipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)} />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select
            name="department"
            value={department}
            id="department"
            className={"myClass " + (show ? "dark" : null)}
            onChange={(e) => setDepartment(e.target.value)}>

            <option value=""></option>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>

        <button show={false} onClick={handleSubmit}>Save</button>
      </div>
      <Modal show={show} onHide={handleClose} backdrop="false" id="confirmation" >
        <Modal.Header closeButton className="close" >
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>Employee Created</Modal.Body>
        <Modal.Footer size="lg">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home
