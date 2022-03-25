import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {Navbar,Container,Nav,Button } from 'react-bootstrap';
import './App.css';
import { useLocation,useNavigate } from 'react-router-dom';





const Dashboard = () =>{
    const navigate=useNavigate();

    
    const location=useLocation();
console.log(location);
    const Data = [
       {No: "1", Activity: `${location.state.email} has logged in`, Timestamp: `${location.state.date}`},
    ]

   const column = [
       {
          headerName:"#",field: "No" 
       },
       { 
           headerName:"Activity",field: "Activity" 
       },
       { 
           headerName:"Timestamp",field: "Timestamp" 
       }
   ]       
   const defaultColDef = {
       sortable:true,editable:true,filter:true,resizable: true
   }


   const logout = () =>{
       navigate('/')
   }



    return(
        <>
        <div>
        <Navbar bg="light">
            <Container>
           <Navbar.Brand  href="#home">STUDENT PORTAL</Navbar.Brand>
           <Nav className="justify-content-end">
           <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
           <Navbar.Brand href="#home">Results</Navbar.Brand>
           <Navbar.Brand href="#home">My Account</Navbar.Brand>
           <Navbar.Brand href="#home">My Activity</Navbar.Brand>
           <Navbar.Brand href="#home">Help</Navbar.Brand>
           <Button variant="outline-primary" style={{marginLeft:'5px',borderRadius:'20px'}}>
               Take test
            </Button>
           <Button variant="primary" style={{marginLeft:'5px',borderRadius:'20px'}} onClick={logout}>
               Logout
            </Button>
           </Nav>
            </Container>
        </Navbar>
        </div>
        <Container>
        <div className="ag-theme-alpine" style={{height: 400, width: 1100}}>
            <AgGridReact rowData={Data} columnDefs={column} defaultColDef={defaultColDef}/>
        </div>
        </Container>
        </>
    )
}
export default Dashboard;