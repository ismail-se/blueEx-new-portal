import styles from "./AccordianCard.module.css"
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const AccordianCard = ({ heading, text, linkText, linkAddress }) => {
    return ( 
        <div className={styles.accordianCard}>
            <Accordion className={styles.accordian}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>{heading}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={styles.type} dangerouslySetInnerHTML={{__html: text}}>
                    
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
     );
}
 
export default AccordianCard;