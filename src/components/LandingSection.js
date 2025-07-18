import React from "react";
import { Avatar, Heading, VStack, Highlight } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Chitesh!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
      <VStack spacing={4}>
        <Avatar src="https://i.pravatar.cc/150?img=7" size="2xl" name="Pete" />
        <Heading as="h4" size="md">{greeting}</Heading>
      </VStack>
      <VStack spacing={4}>
        <Heading as="h1" size="4xl">{bio1}</Heading>
        <Heading as="h1" size="4xl"> {bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;