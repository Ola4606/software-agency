import React from "react";
import softwareImage from "../../../images/software.jpg";
import websiteImage from "../../../images/web.jpg";
import appImage from "../../../images/app.jpg";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "#6366f1",
  border: `1px solid #6366f1`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "2rem" }}
        className="text-white"
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#6366f1",
  // flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid #FFFFFF",
}));

function WhatWeDoItems() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className="px-4 md:px-10 lg:pl-40 lg:pr-20">
      <div className="mt-7 md:mt-12 lg:mt-20">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <span className="accordion-header">
              1)&nbsp;Software Development
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <div className="accordion-body">
              <div className="flex justify-start items-start flex-col lg:flex-row">
                <div className="flex flex-col justify-start items-start">
                  <span className="mb-8 lg:mb-16">
                    We live in a world of constant technological change.
                    Businesses now have a wealth of cutting-edge solutions at
                    their disposal to remain competitive, such as computer
                    science, Big Data, Business Intelligence, and Machine
                    Learning. As trends and technologies shift so quickly,
                    choosing the right software development partner can be a key
                    factor determining your success or failure on the market.
                  </span>

                  <span className="underline decoration-white underline-offset-2 lg:cursor-pointer">
                    Let's Build Your Software!
                  </span>
                </div>
                <img
                  src={softwareImage}
                  alt="Software Design"
                  className="rounded-lg w-full mt-10 lg:mt-0 lg:ml-16 lg:rounded-xl lg:w-[600px]"
                />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mt-7 lg:mt-20">
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <span className="accordion-header">
              2)&nbsp;Website Development
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <div className="accordion-body">
              <div className="flex justify-start items-start flex-col lg:flex-row">
                <div className="flex flex-col justify-start items-start">
                  <span className="mb-8 lg:mb-16">
                    Build web applications with the world’s most trusted and
                    popular web development technologies, including Ruby on
                    Rails, JavaScript, Python with Django, and Elixir with
                    Phoenix. Whatever your dream, we can help you bring your web
                    project to life. We believe that top-quality software is
                    created through passion, dedication, and problem-solving
                    based on real experience. Our team shares your curiosity and
                    excitement fully during every project, caring as much about
                    its success as you do.
                  </span>

                  <span className="underline decoration-white underline-offset-2 lg:cursor-pointer">
                    Let's Build Your Website!
                  </span>
                </div>
                <img
                  src={websiteImage}
                  alt="Website Development"
                  className="rounded-lg w-full mt-10 lg:mt-0 lg:ml-16 lg:rounded-xl lg:w-[600px]"
                />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mt-7 lg:mt-20">
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <span className="accordion-header">
              3)&nbsp;App & Games Development
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <div className="accordion-body">
              <div className="flex justify-start items-start flex-col lg:flex-row">
                <div className="flex flex-col justify-start items-start">
                  <span className="mb-8 lg:mb-16">
                    Build stunning, usable mobile experiences for various
                    platforms and devices. Remember that iOS users expect
                    consistency and quality, while Android apps have to
                    accommodate a large variety of screen sizes and device
                    capabilities. Look for JavaScript experts fluent in all the
                    trusted frameworks that make apps like Facebook great.
                  </span>

                  <span className="underline decoration-white underline-offset-2 lg:cursor-pointer">
                    Let's Build Your Apps & Games!
                  </span>
                </div>
                <img
                  src={appImage}
                  alt="Website Development"
                  className="rounded-lg w-full mt-10 lg:mt-0 lg:ml-16 lg:rounded-xl lg:w-[600px]"
                />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default WhatWeDoItems;
