import "./styles.css";
import { useEffect, useState } from "react"
import DataTable from "react-data-table-component";


export default function EmployeeList({ blogs }) {

  //const [pageSize, setPageSize] = useState(5)
  
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
    }, {
      name: 'City',
      selector: row => row.city,
      sortable: true
    }, {
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
  const [records, setRecords] = useState([]);
  const [filterValue, setFilterValue] = useState("")

  const fetchData = () => {
    return fetch("http://localhost:3003/employees").then((res) => res.json()).then((data) => {
      console.log(data);
      setRecords(data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  function handleFilter(event) {
    console.log("fired");
    event.preventDefault()

    if (filterValue === "") {
      fetchData()
    } else {

      fetch(`http://localhost:3003/employees?firstName=${filterValue.charAt(0).toUpperCase() + filterValue.slice(1)}`).then((res) => res.json()).then((data) => {
        console.log(data);
        setRecords(data)

      })
    }
  }


  return (
    <div className="container mt-5">
      <div id="employee-div" className="container">
        <h3>Current Employees</h3>
        <form onSubmit={handleFilter}>
          <div className="text-end"><input type="text" onChange={(e) => setFilterValue(e.target.value)} /></div>
        </form>

        <DataTable
          columns={columns}
          data={records}
          selectableRows
          pagination
          expandableRows
        ></DataTable>

        <a href="/">Home</a>
      </div>
    </div>
  );
}