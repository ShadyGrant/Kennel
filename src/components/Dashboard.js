import React from "react"
import Animal from "./animal/Animal"
import "./animal/Animal.css"
import Employee from "./employees/Employee"
import "./employees/Employee.css"
import Customer from "./customers/Customer"
import "./customers/Customer.css"
import Location from "./locations/Location"
import "./locations/Location.css"
import LocationList from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import AnimalList from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import EmployeeList from "./employees/EmployeeList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import CustomerList from "./customers/CustomerList"
import { CustomerProvider } from "./customers/CustomerProvider"
import "./Kennel.css"

export default () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
           <AnimalProvider>
               <LocationProvider>
                   <CustomerProvider>
                       <AnimalList />
                   </CustomerProvider>
               </LocationProvider>
               
           </AnimalProvider>

        {/* <h2>Employees</h2> */}
            <EmployeeProvider>
               <LocationProvider>
                   <EmployeeList />>
               </LocationProvider>
            </EmployeeProvider>

        <h2>Customers</h2>
           <CustomerProvider>
               <CustomerList />
           </CustomerProvider>

        <h2>Locations</h2>
            <LocationProvider>
                <LocationList />
            </LocationProvider>
       
    </>
)