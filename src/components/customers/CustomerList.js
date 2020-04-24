import React, { useContext } from "react"
import { CustomerContext } from "./CustomerProvider"
import Customer from "./Customer"
import "./Customer.css"

export default () => {
    const { customers } = useContext(CustomerContext)

    return (
        <>
            <h2>Customers</h2>

            <ul className="customers">
                {
                    customers.map(customer => {
                        return <Customer key={customer.id} customer={customer} />
                    })
                }
            </ul>
        </>
    )
}