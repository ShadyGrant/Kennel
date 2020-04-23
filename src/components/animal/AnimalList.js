import React, { useContext, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animal.css"
import { LocationContext } from "../locations/LocationProvider"
import { CustomerContext } from "../customers/CustomerProvider"
import { Button, Modal, ModalBody, ModalHeader} from "reactstrap"
import AnimalForm from "./AnimalForm"

export default () => {
    const { animals } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const { customers } = useContext(CustomerContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <h2>Animals</h2>
            <Button onClick={() => {
                // check if the user is authenticated
                const userId = localStorage.getItem("kennel_customer")
                if(userId){
                    // If the user is authenticated, show the animal form
                    toggle()
                }
            }}>Make Appointment</Button>
            <div className="animals">
                {
                    animals.map(ani => {
                        const matchingLocation = locations.find(loc => loc.id === ani.locationId)
                        const matchingCustomer = customers.find(customer => customer.id === ani.customerId)

                        return <Animal key={ani.id} animal={ani}
                            customer={matchingCustomer}
                            location={matchingLocation} />
                    })
                }
            </div>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Admit an Animal
                </ModalHeader>
                <ModalBody>
                    <AnimalForm toggler={toggle}/>
                </ModalBody>
            </Modal>
        </>
    )
}