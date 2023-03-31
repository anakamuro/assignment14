import "./styles.css";
import {useState} from "react"
import DataTable from "react-data-table-component";
import data from './data.json';

export default function EmployeeList() {
  const [pageSize, setPageSize] = useState(5)
  /*
   const data = [
    {
     id: 1, 
     firstName: "John",
     lastName: "Doe",
     startDate: "3/24/2023",
     department: 'General',
     dateOfBirth: "1/1/1980",
     street: "Center Street", 
     city: "Boston", 
     state: "Massachusetts", 
     zipCode: "02215"
    }, 
    {
      id: 2, 
      firstName: "Aki",
      lastName: "Nakamura",
      startDate: "3/27/2023",
      department: 'Financial',
      dateOfBirth: "1/1/2000",
      street: "Main Street", 
      city: "Boston", 
      state: "Massachusetts", 
      zipCode: "02215"
    }, 
    {
      id: 3, 
      firstName: "Mike",
      lastName: "MacDonald",
      startDate: "1/27/2023",
      department: 'Sales',
      dateOfBirth: "1/1/1980",
      street: "Boston Street", 
      city: "New York", 
      state: "New York", 
      zipCode: "02445"
    }, 
    {
      id: 4, 
      firstName: "Bob",
      lastName: "Johns",
      startDate: "12/27/1993",
      department: 'Human Resource',
      dateOfBirth: "1/1/1970",
      street: "Ocean Street", 
      city: "Los Angels", 
      state: "California", 
      zipCode: "12445"
    }, 
    {
      id: 5, 
      firstName: "Taro",
      lastName: "Yamada",
      startDate: "12/27/2003",
      department: 'Marketing',
      dateOfBirth: "4/17/1970",
      street: "Valley Street", 
      city: "San Francisco", 
      state: "California", 
      zipCode: "22445"
    }, 
    {
      id: 5, 
      firstName: "Lisa",
      lastName: "Hamberger",
      startDate: "10/27/2008",
      department: 'Marketing',
      dateOfBirth: "4/27/1976",
      street: "Beach Street", 
      city: "Tokyo", 
      state: "Tokyo", 
      zipCode: "30990"
    },  
    {
      id: 5, 
      firstName: "Lisa",
      lastName: "Hamberger",
      startDate: "10/27/2008",
      department: 'Marketing',
      dateOfBirth: "4/27/1976",
      street: "Beach Street", 
      city: "Tokyo", 
      state: "Tokyo", 
      zipCode: "30990"
    },  
     {
      id: 6, 
      firstName: "Dunkin",
      lastName: "Donuts",
      startDate: "10/27/2002",
      department: 'Marketing',
      dateOfBirth: "4/26/1986",
      street: "Mountain Street", 
      city: "Osaka", 
      state: "Osaka", 
      zipCode: "30990"
    }, 
    {
      id: 7, 
      firstName: "Mary",
      lastName: "Smith",
      startDate: "10/27/2005",
      department: 'Finance',
      dateOfBirth: "4/26/1996",
      street: "Sunset Street", 
      city: "Somerville", 
      state: "Massachusetts", 
      zipCode: "02216"
    }, 
    {
      id: 8, 
      firstName: "Mary",
      lastName: "Smith",
      startDate: "10/27/2010",
      department: 'General',
      dateOfBirth: "4/26/1967",
      street: "Left Street", 
      city: "Malden", 
      state: "Massachusetts", 
      zipCode: "02216"
    }, 
    {
      id: 9, 
      firstName: "Tony",
      lastName: "Smith",
      startDate: "10/27/2015",
      department: 'Finance',
      dateOfBirth: "4/26/1998",
      street: "Santa Monica Street", 
      city: "Los Angeles", 
      state: "Califonia", 
      zipCode: "90216"
    }, 
    {
      id: 10, 
      firstName: "George",
      lastName: "Johns",
      startDate: "1/17/2015",
      department: 'Marketing',
      dateOfBirth: "4/26/1978",
      street: "Moon Street", 
      city: "Lowell", 
      state: "Massachusetts", 
      zipCode: "02296"
    }, 
    {
      id: 11, 
      firstName: "Ken",
      lastName: "Takagi",
      startDate: "10/27/1995",
      department: 'Cooking',
      dateOfBirth: "4/26/1994",
      street: "Fuji Street", 
      city: "Tokyo", 
      state: "Tokyo", 
      zipCode: "02216"
    }, 
    {
      id: 12, 
      firstName: "Tom",
      lastName: "House",
      startDate: "5/27/2009",
      department: 'Eating',
      dateOfBirth: "4/26/1909",
      street: "Heaven Street", 
      city: "Holbrook", 
      state: "Massachusetts", 
      zipCode: "02816"
    }, 
    {
      id: 13, 
      firstName: "Sean",
      lastName: "O'Connor",
      startDate: "11/11/2001",
      department: 'Construction',
      dateOfBirth: "4/26/1986",
      street: "Earth Street", 
      city: "Woburn", 
      state: "Massachusetts", 
      zipCode: "02416"
    }, 
    {
      id: 14, 
      firstName: "Mary",
      lastName: "Smith",
      startDate: "2/27/2002",
      department: 'Cleaning',
      dateOfBirth: "4/26/1996",
      street: "Slope Street", 
      city: "West Newton", 
      state: "Massachusetts", 
      zipCode: "02416"
    }, 
  ]
  */
  const columns = [
    {
      name: 'First Name',
      selector: row => row.firstName, 
      sortable: true
    }, 
    {
      name: 'Last Name',
      selector: row => row.lastName, 
      sortable: true
    }, 
    {
      name: 'Start Date',
      selector: row => row.startDate, 
      sortable: true
    }, 
    {
      name: 'Department',
      selector: row => row.department, 
      sortable: true
    }, 
    {
      name: 'Date of Birth',
      selector: row => row.dateOfBirth, 
      sortable: true
    }, 
    {
      name: 'Street',
      selector: row => row.street, 
      sortable: true
    },   {
      name: 'City',
      selector: row => row.city, 
      sortable: true
    },   {
      name: 'State',
      selector: row => row.state, 
      sortable: true
    }, 
    {
      name: 'Zip Code',
      selector: row => row.zipCode, 
      sortable: true
    }, 
  ]
  const [records, setRecords] = useState(data);

  function handleFilter(event){
    const newData = data.filter(row => {
      return row.firstName?.toLowerCase().includes(event.target.value?.toLowerCase())
    })
    setRecords(newData)
  }
  return (
    <div className="container mt-5">
      <div id="employee-div" className="container">
            <h3>Current Employees</h3>
            <div className="text-end"><input type="text" onChange={handleFilter}/></div>
            <DataTable
               columns={columns}
               data={records}
               selectableRows
               pagination
               ></DataTable>
            
            <a href="/">Home</a>
        </div>
    </div>
  );
}