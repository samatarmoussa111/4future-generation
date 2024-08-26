import Banner from "@/components/banner/banner";
import Hero from "@/components/hero/hero";
import Navigation from "@/components/navigation/navigation";
import Services from "@/components/services/services";
import Wrapper from "@/components/wrapper/wrapper";

export default async function Home() {
  return (
    <>
      <Wrapper>
        <Navigation />
      </Wrapper>
      <Banner />
      <Hero />
      <Services />
    </>
  );
}
