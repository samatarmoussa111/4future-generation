import { HeaderAbout } from "@/components/header/header";
import Layout6, {
  Layout239,
  Layout27,
} from "@/components/relume-layouts/relume-layouts";

const AboutUsPage = () => {
  return (
    <>
      <HeaderAbout
        title="Discover Our Story"
        subtitle="Learn about our organization's history, evolution, and our community-led, data-driven approach."
      />
      <Layout27 />
      <Layout6 />
      <Layout239
        heading="Meet Our Dedicated Leadership Team"
        description="Our leadership team is comprised of passionate individuals who are committed to driving positive change in our community. With their expertise and dedication, we are able to make a lasting impact on the lives of immigrants in the Lewiston/Auburn area."
      />
    </>
  );
};

export default AboutUsPage;
