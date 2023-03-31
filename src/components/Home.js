import "./styles.css";
import React, {useState} from "react"
import DatePicker from "react-multi-date-picker"
import 'react-datepicker/dist/react-datepicker.css'
//import Modal from "react-modal"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Modal"
//import { Modal } from "rsuite";
import {nanoid} from "nanoid"
import data from './data.json';
import EmployeeList from "./EmployeeList";

 function Home() {
    const [selectedDate, setSelectedDate] = useState(null)
    const [selects, setSelects] = useState();
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [contacts, setContacts] = useState(data)
    const [addFormData, setAddFormData ] = useState({
      firsName: '',
      lastName: '',
      startDate: '',
      department: '',
      dateofBirth: '',
      street: '', 
      city: '', 
      state: '', 
      zipCode: ''
    })

    const handleAddFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;

      const newFormData = { ...addFormData};
      newFormData[fieldName] = fieldValue;

      setAddFormData(newFormData)
    }

    const handleAddFormSubmit = (event) =>{
      event.preventDefault();

      const newContact = {
        id: nanoid(),
        firstName: addFormData.firstName,
        lastName: addFormData.lastName,
        startDate: addFormData.startDate,
        department: addFormData.department,
        dateOfBirth: addFormData.dateOfBirth,
        street: addFormData.street,
        city: addFormData.city,
        state: addFormData.state,
        zipCode: addFormData.zipCode,
      }
      const newContacts = [...contacts, newContact];
      setContacts(newContacts)
    }

    function toggleShow(){
        setShow(!show)
    }
    
  return (
    <div className="App">
       <div className="title">
            <h1>HRnet</h1>
        </div>
        <div id="container" className= {"myClass " + (show ? "dark": null)}>
            <a href="./employee-list">View Current Employees</a>
            <h2>Create Employee</h2>
            <form 
               action="#" 
               id="create-employee"
               onSubmit={handleAddFormSubmit}>
                <label htmlFor="first-name">First Name</label>
                <input 
                  type="text" 
                  id="first-name" 
                  className= {"myClass " + (show ? "dark": null)}
                  name="firstName"
                  onChange={handleAddFormChange}/>

                <label htmlFor="last-name">Last Name</label>
                <input 
                  type="text" 
                  id="last-name" 
                  className= {"myClass " + (show ? "dark": null)}
                  name="lastName"
                  onChange={handleAddFormChange}/>

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePicker 
                  selected={selectedDate} 
                  id="date-of-birth"
                  onChange={date=> setSelectedDate(date)}
                  dateFormat="yyyy/MM/dd"
                  isClearable
                  showYearDropdown
                  scrollableMonthYearDropdown
                  name="dateOfBirth" 
                  onInput={handleAddFormChange}/>

                <label htmlFor="start-date">Start Date</label>
                <DatePicker selected={selectedDate} 
                    id="start-date" 
                    className= {"myClass " + (show ? "dark": null)}
                    onChange={date=> setSelectedDate(date)}
                    dateFormat="yyyy/MM/dd"
                    isClearable
                    showYearDropdown
                    scrollableMonthYearDropdown
                    name="startDate"
                    onInput={handleAddFormChange}/>
               

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input 
                      id="street" 
                      type="text" 
                      className= {"myClass " + (show ? "dark": null)}
                      name="street"
                      onChange={handleAddFormChange}/>

                    <label htmlFor="city">City</label>
                    <input 
                      id="city" 
                      type="text" 
                      className= {"myClass " + (show ? "dark": null)}
                      name="city"
                      onChange={handleAddFormChange}/>

                    <label htmlFor="state">State</label>
                    <select 
                      value={selects} 
                      name="state" 
                      id="state" 
                      className= {"myClass " + (show ? "dark": null)} 
                      onChange={e=>setSelects(e.target.value)}
                      onInput={handleAddFormChange}>
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
                      className= {"myClass " + (show ? "dark": null)}
                      name="zipCode"
                      onChange={handleAddFormChange}/>
                </fieldset>

                <label htmlFor="department">Department</label>
                <select 
                   name="department" 
                   id="department" 
                   className= {"myClass " + (show ? "dark": null)}
                   onChange={handleAddFormChange}>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            </form>
            

            <button show={false} onClick={handleShow}>Save</button>
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

export  default  Home