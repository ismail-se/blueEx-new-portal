import AccordianCard from "../AccordianCard/AccordianCard";

const Damage = () => {
    return ( 
        <div>
            <h2>DAMAGE, CLAIMS AND INSURANCE</h2>
            <AccordianCard heading="What do I do if my shipment is lost or damaged?" text="You can email your claim directly to your account manager." />
            <AccordianCard heading="What evidence is required to make a claim?" text="A picture of the damaged item, before it was sent and packaged and what it looks like after delivery" />
            <AccordianCard heading="Do you offer insurance?" text='
            Yes blueEX offers insurance, you can choose from either two insurance options

            <ul>
                <li>Insure your entire account – this means every shipment you create will be insured</li>
                <li>Insure chosen shipments – this means you can pick and choose between insured and uninsured shipments when you are booking them</li>
            </ul>

            Please view our services page for more details.
            ' />
        </div>
     );
}
 
export default Damage;