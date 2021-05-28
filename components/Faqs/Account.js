import AccordianCard from "../AccordianCard/AccordianCard";

const Account = () => {
    return ( 
        <div>
            <h2>ACCOUNT OPENING AND SETTLEMENT</h2>
            <AccordianCard heading="Do I have to pay anything extra, in addition to the finalized rates?" text='
            No, you only pay the tariff that you and your Account Manager have decided. BlueEX does not have an account opening fee. For COD services the tariff format is a per kg rate which is added to a cash handling fee to calculate blueEX’s charges.'
            linkText="Here" />
            <AccordianCard heading="Can my customer / consignee pay using a credit card?" text='
            No, customers at the moment can only pay using Cash Payments. For collection of cheques or other financial instruments please contact your Account Manager.
            ' />
            <AccordianCard heading="When and how often do I get paid?" text="The payment cycle for payouts is fortnightly. You will be paid via crossed cheque." />
        </div>
     );
}
 
export default Account;