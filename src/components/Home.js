import "./styles.css";
import React, { useState } from "react"
//import DatePicker from "react-multi-date-picker"
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from "react-datepicker";
//import Modal from "react-modal"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Modal"
//import { Modal } from "rsuite";
import { nanoid } from "nanoid"
// import data from './data.json';
import EmployeeList from "./EmployeeList";


function Home() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selects, setSelects] = useState();
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
  const [isPending, setIsPending] = useState(false)

  const [dateValue, setDateValue] = useState(new Date())

  const handleSubmit = (event) => {
    event.preventDefault();

    const formattedStartDate = startDate.getDate() + "/" + (startDate.getMonth() + 1) + "/" + startDate.getFullYear();
    const formattedBirthDate = dateOfBirth.getDate() + "/" + (dateOfBirth.getMonth() + 1) + "/" + dateOfBirth.getFullYear();
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
      console.log(data)
      setShow(true)
    })
  }

  function toggleShow() {
    setShow(!show)
  }

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
            const formattedDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
            console.log(formattedDate);
            setDateOfBirth(date)
          }} dateFormat="yyyy/MM/dd"
          // isClearable
          // showYearDropdown
          // scrollableMonthYearDropdown
          />

          {/* <DatePicker value={dateValue} onChange={setDateValue} /> */}
          {/* <DatePicker
            selected={selectedDate}
            id="date-of-birth"
            value={dateOfBirth}
            onChange={date => setSelectedDate(date)}
            dateFormat="yyyy/MM/dd"
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
            name="dateOfBirth"
            onInput={(e) => setDateOfBirth(e.target.value)} /> */}

          <label htmlFor="start-date">Start Date</label>
          <DatePicker selected={startDate} onChange={(date) => {
            const formattedDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
            console.log(formattedDate);
            setStartDate(date)
          }} dateFormat="yyyy/MM/dd"
            // isClearable
            showYearDropdown
            scrollableMonthYearDropdown />
          {/* <DatePicker selected={selectedDate}
            id="start-date"
            className={"myClass " + (show ? "dark" : null)}
            onChange={date => setSelectedDate(date)}
            dateFormat="yyyy/MM/dd"
            value={startDate}
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
            name="startDate"
            onInput={(e) => setStartDate(e.target.value)} /> */}


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
            <select
              value={selects}
              name="state"
              id="state"
              //value={state}
              className={"myClass " + (show ? "dark" : null)}
              onChange={e => setSelects(e.target.value)}
              onInput={(e) => setState(e.target.value)}>
              <option value=""></option>
              <option>Alabama</option>
              <option>Alaska</option>
              <option>Arizona</option>
              <option>Arkansas</option>
              <option>California</option>
              <option>Colorado</option>
              <option>Connecticut</option>
              <option>Delaware</option>
              <option>Florida</option>
              <option>Georgia</option>
              <option>Hawaii</option>
              <option>Georgia</option>
              <option>Hawaii</option>
              <option>Idaho</option>
              <option>Illinois</option>
              <option>Indiana</option>
              <option>Iowa</option>
              <option>Kansas</option>
              <option>Kentucky</option>
              <option>Louisiana</option>
              <option>Maine</option>
              <option>Maryland</option>
              <option>Massachusetts</option>
              <option>Michigan</option>
              <option>Minnesota</option>
              <option>Mississippi</option>
              <option>Missouri</option>
              <option>Montana</option>
              <option>Nebraska</option>
              <option>Nevada</option>
              <option>New Hampshire</option>
              <option>New Jersey</option>
              <option>New Mexico</option>
              <option>New York</option>
              <option>North Carolina</option>
              <option>North Dakota</option>
              <option>Ohio</option>
              <option>Oklahoma</option>
              <option>Oregon</option>
              <option>Pennsylvania</option>
              <option>Rhode Island</option>
              <option>South Carolina</option>
              <option>South Dakota</option>
              <option>Tennessee</option>
              <option>Texas</option>
              <option>Utah</option>
              <option>Vermont</option>
              <option>Virginia</option>
              <option>Washington</option>
              <option>West Virginia</option>
              <option>Wisconsin</option>
              <option>Wyoming</option>
            </select>
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
        {/* <button disabled show={false} onClick={handleShow}>Saving..</button> */}
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