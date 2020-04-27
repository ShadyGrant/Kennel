import React from "react"

// When we use Animal component in AnimalList, React takes the keys passed
// to the Animal component and puts it into one object
export const Animal = ({animal, location, customer}) => (
    <section className="animal">
        <div className="animal__breed">Breed: {animal.breed}</div>
        <div className="animal__owner">Customer Name: {customer.name}</div>
        <div className="animal__location">Checked-in at: {location.name}</div>
    </section>
)