import AccordianCard from "../AccordianCard/AccordianCard";

const GeneralFaq = () => {
    return ( 
        <div>
            <h2>GENERAL</h2>
            <AccordianCard heading="To which destinations am I able to ship with blueEX?" text="Please see list of destinations and standard rates <a href='/CityListNew.xls' download>Here</a>" />
            <AccordianCard heading="What are your office hours?" text="You can call us from Monday to Friday, 09.00 – 19.00 and on Saturday from 09:00-13:00. We are closed on Sunday." />
            <AccordianCard heading="What is your phone number?" text="Please call us at: 021-111-BLUE-EX (021-111-258339)" />
            <AccordianCard heading="How can I contact blueEX?" 
            text="Phone: 021-111-BLUE-EX (021-111-258339) <br/>
            Email: <a href='mailto:info@blue-ex.com' target='_blank'>info@blue-ex.com</a><br/>
            Website: <a href='https://www.blue-ex.com' target='_blank'>https://www.blue-ex.com</a><br/>
            Facebook: <a href='https://facebook.com/blueEXlive' target='_blank'>Facebook.com/blueEXlive</a><br/>
            " 
            />
            <AccordianCard heading="Can I export my customer data?" text="You can use the export icon next to any table based view to download the data in excel format." />
            <AccordianCard heading="Do you have a list of products that can’t be sent with blueEX?" text="Yes, please see the terms and conditions for using blueEX <a href='https://app.blue-ex.com/terms-conditions' target='_blank'>services</a>" />
        </div>
     );
}
 
export default GeneralFaq;