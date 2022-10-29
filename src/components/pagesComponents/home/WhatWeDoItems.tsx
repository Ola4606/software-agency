import React from "react";
import softwareImage from "../../../images/vr.jpg";
import websiteImage from "../../../images/web.jpg";
import appImage from "../../../images/app.jpg";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

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
    <div className="pl-40 pr-20">
      <div className="mt-20">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <span className="accordion-header">
              1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software Development
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <div className="accordion-body">
              <div className="flex justify-start items-start">
                <div className="flex flex-col justify-start items-start">
                  <span className="mb-16">
                    We live in a world of constant technological change.
                    Businesses now have a wealth of cutting-edge solutions at
                    their disposal to remain competitive, such as computer
                    science, Big Data, Business Intelligence, and Machine
                    Learning. As trends and technologies shift so quickly,
                    choosing the right software development partner can be a key
                    factor determining your success or failure on the market.
                  </span>

                  <a className="underline decoration-white underline-offset-2 cursor-pointer">
                    Let's Build Your Software!
                  </a>
                </div>
                <img
                  src={softwareImage}
                  alt="Software Design"
                  className="w-[600px] rounded-xl ml-16"
                />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mt-20">
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <span className="accordion-header">
              2)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Website Development
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <div className="accordion-body">
              <div className="flex justify-start items-start">
                <div className="flex flex-col justify-start items-start">
                  <span className="mb-16">
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

                  <a className="underline decoration-white underline-offset-2 cursor-pointer">
                    Let's Build Your Website!
                  </a>
                </div>
                <img
                  src={websiteImage}
                  alt="Website Development"
                  className="w-[600px] rounded-xl ml-16"
                />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mt-20">
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <span className="accordion-header">
              3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App & Games Development
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <div className="accordion-body">
              <div className="flex justify-start items-start">
                <div className="flex flex-col justify-start items-start">
                  <span className="mb-16">
                    Build stunning, usable mobile experiences for various
                    platforms and devices. Remember that iOS users expect
                    consistency and quality, while Android apps have to
                    accommodate a large variety of screen sizes and device
                    capabilities. Look for JavaScript experts fluent in all the
                    trusted frameworks that make apps like Facebook great.
                  </span>

                  <a className="underline decoration-white underline-offset-2 cursor-pointer">
                    Let's Build Your Apps & Games!
                  </a>
                </div>
                <img
                  src={appImage}
                  alt="Website Development"
                  className="w-[600px] rounded-xl ml-16"
                />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

// function WhatWeDoItemsd() {
//   return (
//     <div className="pl-40 pr-20">
//       <div className="mt-20">
//         <Accordion
//           open={open === 1}
//           animate={customAnimation}
//           icon={<Icon id={1} open={open} />}
//         >
//           <AccordionHeader
//             onClick={() => handleOpen(1)}
//             className="accordion-header"
//           >
//             1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software Design
//           </AccordionHeader>
//           <AccordionBody className="accordion-body">
//             <div className="flex justify-start items-start">
//               <div className="flex flex-col justify-start items-start">
//                 <span className="mb-16">
//                   We provide you the best and most innovative software and
//                   mobile app development services. Join us to build
//                   well-designed and fast- performing software today!
//                 </span>

//                 <a className="underline decoration-white underline-offset-2 cursor-pointer">
//                   Let's Design Your Software Idea!
//                 </a>
//               </div>
//               <img
//                 src={softwareImage}
//                 alt="Software Design"
//                 className="w-[600px] rounded-xl ml-16"
//               />
//             </div>
//           </AccordionBody>
//         </Accordion>
//       </div>

//       <div className="mt-20">
//         <Accordion
//           open={open === 2}
//           animate={customAnimation}
//           icon={<Icon id={2} open={open} />}
//         >
//           <AccordionHeader
//             onClick={() => handleOpen(2)}
//             className="accordion-header"
//           >
//             2)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software Development
//           </AccordionHeader>
//           <AccordionBody className="accordion-body">
//             <div className="flex justify-start items-start">
//               <div className="flex flex-col justify-start items-start">
//                 <span className="mb-16">
//                   We live in a world of constant technological change.
//                   Businesses now have a wealth of cutting-edge solutions at
//                   their disposal to remain competitive, such as computer
//                   science, Big Data, Business Intelligence, and Machine
//                   Learning. As trends and technologies shift so quickly,
//                   choosing the right software development partner can be a key
//                   factor determining your success or failure on the market.
//                 </span>

//                 <a className="underline decoration-white underline-offset-2 cursor-pointer">
//                   Let's Build Your Software!
//                 </a>
//               </div>
//               <img
//                 src={softwareImage}
//                 alt="Software Design"
//                 className="w-[600px] rounded-xl ml-16"
//               />
//             </div>
//           </AccordionBody>
//         </Accordion>
//       </div>

//       <div className="mt-20">
//         <Accordion
//           open={open === 3}
//           animate={customAnimation}
//           icon={<Icon id={3} open={open} />}
//         >
//           <AccordionHeader
//             onClick={() => handleOpen(3)}
//             className="accordion-header"
//           >
//             4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App & Games Development
//           </AccordionHeader>
//           <AccordionBody className="accordion-body">
//             <div className="flex justify-start items-start">
//               <div className="flex flex-col justify-start items-start">
//                 <span className="mb-16">
//                   Build web applications with the world’s most trusted and
//                   popular web development technologies, including Ruby on Rails,
//                   JavaScript, Python with Django, and Elixir with Phoenix.
//                   Whatever your dream, we can help you bring your web project to
//                   life. We believe that top-quality software is created through
//                   passion, dedication, and problem-solving based on real
//                   experience. Our team shares your curiosity and excitement
//                   fully during every project, caring as much about its success
//                   as you do.
//                 </span>

//                 <a className="underline decoration-white underline-offset-2 cursor-pointer">
//                   Let's Build Your Website!
//                 </a>
//               </div>
//               <img
//                 src={websiteImage}
//                 alt="Website Development"
//                 className="w-[600px] rounded-xl ml-16"
//               />
//             </div>
//           </AccordionBody>
//         </Accordion>
//       </div>

//       <div className="mt-20">
//         <Accordion
//           open={open === 4}
//           animate={customAnimation}
//           icon={<Icon id={4} open={open} />}
//         >
//           <AccordionHeader
//             onClick={() => handleOpen(4)}
//             className="accordion-header"
//           >
//             4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App & Games Development
//           </AccordionHeader>
//           <AccordionBody className="accordion-body h-full">
//             <div className="flex justify-start items-start">
//               <div className="flex flex-col justify-start items-start">
//                 <p className="mb-16">
//                   Build stunning, usable mobile experiences for various
//                   platforms and devices. Remember that iOS users expect
//                   consistency and quality, while Android apps have to
//                   accommodate a large variety of screen sizes and device
//                   capabilities. Look for JavaScript experts fluent in all the
//                   trusted frameworks that make apps like Facebook great.
//                 </p>

//                 <a className="underline decoration-white underline-offset-2 cursor-pointer">
//                   Let's Build Your App!
//                 </a>
//               </div>
//               <img
//                 src={appImage}
//                 alt="Mobile Development"
//                 className="w-[600px] rounded-xl ml-16"
//               />
//             </div>
//           </AccordionBody>
//         </Accordion>
//       </div>
//     </div>
//   );
// }

export default WhatWeDoItems;
