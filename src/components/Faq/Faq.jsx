import React from "react";
import "./Faq.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import data from "../../utils/accordion-info.json";
import { arrow } from "../../components";
const Faq = () => {
  return (
    <section className="fq-wrapper">
      <div className="paddings innerWidth flexCenter fq-container">
        <h3 className="primaryText">Frequently Asked Questions</h3>
        <p className="secondaryText">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>

        <Accordion preExpanded={[0]} allowMultipleExpanded={false}>
          {data.map((item, i) => {
            return (
              <AccordionItem className="accordionItem">
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCol accordionButton">
                    <span>{item.title}</span>
                    <span>
                      <img src={arrow} alt="arrowIcon" width={10} />
                    </span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="text">{item.info}</p>
                </AccordionItemPanel>
              </AccordionItem>
            );
          })}
        </Accordion>

        <button className="button">More Info</button>
      </div>
    </section>
  );
};

export default Faq;
