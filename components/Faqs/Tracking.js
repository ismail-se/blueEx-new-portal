import AccordianCard from "../AccordianCard/AccordianCard";

const Tracking = () => {
    return ( 
        <div>
            <h2>TRACKING A SHIPMENT</h2>
            <AccordianCard heading="What is a Tracking / Consignment Note Number?" text="It is a number generated at the time of placing a booking. This allows you and your consignee the ability to track the parcel."/>
            <AccordianCard heading="How can I track my shipment?" text="You can track your shipments using blueEX booking app or the blueEX website." />
            <AccordianCard heading="How can I track multiple shipments?" text="Use the track page to track multiple shipments." />
            <AccordianCard heading="How can I track the status of my shipment during transit?" text="You will automatically receive a CN number when you book your shipment. You can use the tracking icon next to a shipment on the deliveries page to get detailed tracking information. The deliveries page also shows you the status of a shipment." />
            <AccordianCard heading="What do different shipment statuses mean?" text='
            BlueEX processes shipments in six broad steps, these are:
            <ul>
                <li>Booked–This is the status assigned to all new shipments.</li>  
                <li>Ready for pickup–indicates a shipment put on the load sheet</li>  
                <li>Arrival – shows a shipment that has been received by blueEX</li>  
                <li>In-transit – shows a shipment on route</li>  
                <li>Delivered / Returned–indicates delivery success or failure</li>  
            </ul>
            Other than these broad statuses, more granular details are available against every shipment. You can view the detailed tracking information for this.


            ' />
            <AccordianCard heading="How do I know my parcels are safe and secure?" text='
            Our couriers are knowing for the best delivery service in the industry. All our riders are instructed handle all packages with care. For further peace of mind you can also use blueEX’s insurance policy that ensures that any high value shipment is covered by insurance at the time of booking.

            <ul>
                <li>Shipment at Hold on Customer`s Request</li>  
                <li>Customer Not Answering Phone</li>  
                <li>Area Closed</li>  
                <li>CNIC Not Available</li>  
            </ul>
            ' />
        </div>
     );
}
 
export default Tracking;