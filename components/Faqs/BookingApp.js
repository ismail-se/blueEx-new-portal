import AccordianCard from "../AccordianCard/AccordianCard";

const BookingApp = () => {
    return ( 
        <div>
            <h2>USING THE NEW BOOKING APP</h2>
            <AccordianCard heading="How is the new booking app better than the old customer portal?" text='
            The new booking app has been designed with your ease in mind. It is an easy to use modern application with a user friendly interface. It adapts well to most screen resolutions and is also faster fetching data from the back-end database. For a complete list of new features, view the <a href="https://app.blue-ex.com/StarterGuide.pdf" target="_blank" class="m-link m--font-boldest">starter pack</a>
            ' linkText="Here" />
            <AccordianCard heading="Can I export my customer data?" text="You can use the export icon next to any table based view to download the data in excel format." />
            <AccordianCard heading="What to do if I don’t understand a certain feature or process?" text="You can use this knowledge base that has FAQs, you can also use the chat option to speak to a customer services agent." />
        </div>
     );
}
 
export default BookingApp;