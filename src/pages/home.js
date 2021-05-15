import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";

import Layout from "../components/layout";
import Banner from "../sections/banner";
import KeyFeature from "../sections/key-feature";
import ServiceSection from "../sections/service-section";
import Feature from "../sections/feature";
import CoreFeature from "../sections/core-feature";
import WorkFlow from "../sections/workflow";
import TeamSection from "../sections/team-section";
// import TestimonialCard from "../sections/testimonial";

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout colorSwitch={true}>
        <Banner />
        <KeyFeature />
        <ServiceSection />
        <Feature />
        <CoreFeature />
        <WorkFlow />
        <TeamSection />
      </Layout>
    </ThemeProvider>
  );
}
