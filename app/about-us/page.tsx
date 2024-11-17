import { HeaderAbout } from "@/components/header/header";
import Layout6, { Layout27 } from "@/components/relume-layouts/relume-layouts";

const AboutUsPage = () => {
  return (
    <>
      <HeaderAbout
        title="Discover Our Story"
        subtitle="Learn about our organization's history, evolution, and our community-led, data-driven approach."
      />
      <Layout27 />
      <Layout6 />
    </>
  );
};

export default AboutUsPage;
