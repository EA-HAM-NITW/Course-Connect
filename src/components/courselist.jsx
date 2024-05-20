import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

function CourseList(props) {
  const datalist = props.list;
  const listItems = datalist.map((item, index) => (
    <Accordion key={index} allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              {item}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <form action="#">
            <label for="rating">Give Your Rating:</label>

            <select id="rating" name="rating">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Submit" />
          </form>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ));

  return <>{listItems}</>;
}

export default CourseList;
