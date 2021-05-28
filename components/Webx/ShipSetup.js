const ShipSetup = () => {
    return ( 
        <div>
            <h1 className="text-[2rem] my-6 text-[#575962]">Shipping Setup</h1>
            <p className="mb-4 text-[#575962]">
            Before you take your first order, you need to decide what shipping methods you want to use, and then set up your store's shipping so that your customers can choose a delivery method at checkout.
            </p>
            <h1 className="text-[1.5rem] my-6 text-[#575962]">Shipping Zones</h1>
            <p className="mb-4 text-[#575962]">
            The regions (countries, states or cities) that you ship to are known as shipping zones. Each shipping zone includes shipping rates that apply to customers whose addresses are within that zone. You can set your shipping zones and shipping rates on the Shipping Setup page in your Webx admin.
            </p>
            <p className="mb-4 text-[#575962]">To create a shipping zone</p>
            <ol className="text-[#575962] list-decimal">
                <li>From your Webx admin, go to Settings > Shipping Setup</li>
                <li>Click Create New Shipping Zone</li>
                <li>In Manage Shipping Zone popup, enter the required information
                    <ul className="list-disc text-[#575962]">
                        <li>If Countries is selected, select the countries where you want to offer this payment method</li>
                        <li>If States is selected, select the states where you want to offer this payment method</li>
                        <li>Similarly, if Cities is selected, select the cities where you want to offer this payment method</li>
                    </ul>
                </li>
                <li>Click Save</li>
            </ol>
            <p className="mb-4 text-[#575962]">To add rules to your shipping zones</p>
            <ol className="text-[#575962] list-decimal">
                <li>From your Webx admin, go to Settings > Shipping Setup</li>
                <li>In your existing shipping zone, click any of the given options
                <ul className="list-disc text-[#575962]">
                    <li>Add fix rate per item</li>
                    <li>Add fix rate per order</li>
                    <li>Add weight based rates</li>
                    <li>Add amount based rates</li>
                </ul>
                </li>
                <li>Enter the amount and other values</li>
                <li>Click Add Shipping Charges</li>
            </ol>
        </div>
     );
}
 
export default ShipSetup;