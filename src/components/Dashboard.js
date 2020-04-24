import React, { useState } from "react"
import { LocationProvider } from "./locations/LocationProvider"
import LocationList from "./locations/LocationList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import EmployeeList from "./employees/EmployeeList"
import { AnimalProvider } from "./animal/AnimalProvider"
import AnimalList from "./animal/AnimalList"
import { CustomerProvider } from "./customers/CustomerProvider"
import CustomerList from "./customers/CustomerList"
import { SearchBar } from "./search/SearchBar"
import { SearchResults } from "./search/SearchResults"
import "./Layout.css"

export default () => {
    const [searchTerms, setTerms] = useState(null)

    return (
        <div className="mainContainer">
            <AnimalProvider>
                <CustomerProvider>
                    <EmployeeProvider>
                        <LocationProvider>
                            <div className="searchContainer">
                                <SearchBar setTerms={setTerms} />
                                <SearchResults searchTerms={searchTerms} />
                            </div>
                            <div className="dataContainer">
                                <h2>Nashville Kennels</h2>
                                <small>Loving care when you're not there.</small>
                                <LocationList />
                                <AnimalList />
                                <CustomerList />
                                <EmployeeList />
                            </div>
                        </LocationProvider>
                    </EmployeeProvider>
                </CustomerProvider>
            </AnimalProvider>
        </div>
    )
}