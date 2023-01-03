import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "../../../../redux/actions/homePageAction";

const FAQ = () => {
  const counter = useSelector((state) => state.homePageReducer.FAQ);
  const dispatch = useDispatch();
  return (
    <div className="lg:px-36 md:px-12 sm:px-8 px-4 py-6" id="FAQ">
      <div className="grid gap-4 lg:grid-cols-5 md:grid-cols-3 grid-cols-1 grid-flow-row">
        <div className="lg:col-span-2 md:col-span-1">
          <p className="text-2xl font-bold">{counter.title}</p>
          <p className="font-bold my-4">{counter.desc}</p>
        </div>
        <div className="lg:col-span-3 md:col-span-2">
          {counter.content.map((item, index) => (
            <Accordion
              expanded={counter.expanded === `panel${item.no}`}
              onChange={(event, isExpanded) => {
                const payload = { panel: `panel${item.no}`, isExpanded };
                dispatch(handleChange(payload));
              }}
              key={index}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${item.no}bh-content`}
                id={`panel${item.no}bh-header`}
              >
                <p className="font-bold text-sm">{item.summary}</p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque condimentum elementum venenatis. Mauris erat nunc,
                  pretium ac erat at, volutpat congue urna. Praesent vehicula
                  nulla.
                </p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
