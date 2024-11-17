import Banner from "@/components/banner/banner";
import { Faq4 } from "@/components/faqs/faqs";
import { Footer11 } from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Navigation from "@/components/navigation/navigation";
import Services from "@/components/services/services";
import { Testimonial17 } from "@/components/testimonials/testimonials";
import Wrapper from "@/components/wrapper/wrapper";

export default async function Home() {
  return (
    <>
      <Banner />
      <Hero />
      <Services />
      <Wrapper>
        <Testimonial17 />
      </Wrapper>
      <Wrapper>
        <Faq4 />
      </Wrapper>
    </>
  );
}
