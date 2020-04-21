import React from "react"

export default ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">{employee.locationId}</div>
    </section>
)