import AccordianCard from "../AccordianCard/AccordianCard";

const Return = () => {
    return ( 
        <div>
            <h2>SHIPPING, RETURNS AND REFUSALS</h2>
            <AccordianCard heading="Does blueEX provide tracking details for returned shipments?" text='
            Yes, blueEX provides its shippers the exact reason why a shipment was returned. Some reasons for return can be:

            <ul>
                <li>Incomplete Address</li>
                <li>Address Untraceable</li>
                <li>Refused to accept</li>
                <li>Return to shipper</li>
                <li>Customer not available</li>
                <li>Address Closed</li>
                <li>No Such Customer / Office</li>
            </ul>
            ' />
            <AccordianCard heading="What happens if a shipment is undelivered?" text="In case it is not delivered in the first attempt a reattempt* is initiated the next day, in case it is still not delivered, we make a third attempt before returning the shipment to the shipper." />
            <AccordianCard heading="How can I get a proof of delivery (POD)?" text="In case you would like to request a POD, you can ask your blueEX Account Manager for the POD.A scanned copy of the POD will be sent to you by your Account Manager." />
            <AccordianCard heading="Do you deliver on holidays?" text="No, we do not deliver on Holidays." />
            <AccordianCard heading="Can I send fragile goods via courier?" text="Depending on the Nature of the Product, you can. To get a list of goods prohibited, please see the terms and conditions. The shipper is responsible for ensuring that all shipments/parcels are packed properly." />
            <AccordianCard heading="Is my consignment insured?" text="No, your consignment is not insured until you exclusively specify insurance of a particular." />
        </div>
     );
}
 
export default Return;