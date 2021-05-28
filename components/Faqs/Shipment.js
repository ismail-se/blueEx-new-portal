import AccordianCard from "../AccordianCard/AccordianCard";

const Shipment = () => {
    return ( 
        <div>
            <h2>CREATING A NEW SHIPMENT & GETTING IT PICKED UP</h2>
            <AccordianCard heading="What happens after I've placed a booking?" text='
            After you’ve placed a booking, the consignment number will be automatically posted to our system and pickup and delivery will be arranged accordingly. You can also set the status of the shipment to “Ready for Pickup” if you want to use the load sheet feature for generating multiple CNs.' 
            linkText="Here" />
            <AccordianCard heading="What does the “Ready for Pickup” status mean?" text="You can set the “Ready for pickup” status to a shipment if you want to push it to the load sheet. The load sheet gives you an easy way to generate multiple CNs and keep a track of all your pickups for the day." />
            <AccordianCard heading="What is the latest time for booking if I want to arrange collection on the same day?" text="The final time point (cut off time) for collection on the same day is not later than 5 PM." />
            <AccordianCard heading="How can I get a shipment picked up from a different location in the city?" text="You can do this by specifying a new pickup location on the create shipment page. You can also add new locations by visiting your profile page." />
            <AccordianCard heading="Is it possible to have my shipment collected and delivered on the same day?" text="Yes, you can have your consignments collected and delivered on the same day using blueEX’s same day service. Please contact your Account Manager to find out more." />
            <AccordianCard heading="When will the courier arrive to collect my shipment?" text="Collection, can be at any time during the day. BlueEX couriers sometimes work earlier than stated times and finish much later in the evening. This makes it quite hard to exactly appoint at which time your shipment will be collected or delivered." />
            <AccordianCard heading="What happens when the courier does not arrive?" text="In the case of non-collection, it is best to let us know straightaway. We will sort out why the courier did not pick up your shipment. If the courier is found to be at fault, we well re-book collection for the next day or another moment and place suitable for you." />
            <AccordianCard heading="Who will pack my shipment?" text="You are responsible for ensuring that all your shipments are packed and prepared properly for shipping. blueEX will not be liable for any damages that occur due to incorrectly packed shipments. For high volume customers blueEX provides E-Commerce Fulfillment services where blueEX warehouses, packs and processes your online orders. For more details connect with your account manager." />
            <AccordianCard heading="How do I calculate cubic weight?" text="You can calculate cubic weight using the following formula = Height x Width x Length x 250" />
        </div>
     );
}
 
export default Shipment;