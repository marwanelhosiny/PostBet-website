import React from "react";
import banner from "../../assets/images/who.jpg";
import "./about.scss";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { t } from "i18next";

function About() {
  return (
    <div className="whoAreUs">
      <div className="img">
        <img src={banner} alt="" />
      </div>
      <div className="container">
        <div className="title">
          <h1>{t("Welcome with Bolivard Company")}</h1>
        </div>
        <Accordion defaultIndex={[0]} allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {t("Industry Expertise")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {t(
                " With years of experience, we have a deep understanding of the evolving digital world and are equipped to meet the needs of modern businesses."
              )}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {t("Innovation & Technology")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {t(
                "We leverage cutting-edge technologies to deliver powerful, user-centric solutions that enable our clients to stay ahead in the competitive market."
              )}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {t("Client-Centric Approach")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {t(
                "Our focus is on building long-term relationships with our clients, ensuring that every solution is customized to their unique goals and challenges."
              )}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {t("Commitment to Quality")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {t(
                "At Bolivard, we pride ourselves on delivering solutions that are not only effective but also of the highest quality, ensuring seamless performance and user satisfaction."
              )}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {t("Comprehensive Digital Solutions")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {t(
                "From social media management platforms like Postbet to custom-built software and mobile apps, we offer a wide range of services designed to fuel digital transformation."
              )}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default About;
