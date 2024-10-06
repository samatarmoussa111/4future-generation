import Wrapper from "../wrapper/wrapper";
import Typography from "../ui/typography";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <Wrapper className="py-12 md:py-20 lg:py-24">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <img
          src="https://images.unsplash.com/photo-1472586662442-3eec04b9dbda?w=1770&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoaWxkaG9vZCUyMGRldmVsb3BtZW50fGVufDB8fDB8fHwy"
          width="550"
          height="550"
          alt="Hero"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
        />
        <div className="flex flex-col justify-center items-start space-y-5">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Empowering
            </div>
            <Typography variant="h2">
              Improving Lives Through Early Childhood Development
            </Typography>
            <Typography className="max-w-[600px] text-muted-foreground ">
              The 4 Future Generations; Early Childhood Development Initiative
              is dedicated to improving the overall well-being of the Immigrants
              in the Lewiston/Auburn area. Through a community-led and
              data-driven approach, we aim to create a thriving community by
              focusing on the most compelling determinant of success: Early
              Childhood Development.
            </Typography>
          </div>
          <div className="flex items-start justify-between flex-col sm:flex-row space-y-4 sm:space-y-0 ">
            <div className="flex flex-col space-y-2">
              <Typography variant="h4"> Our mission</Typography>
              <Typography className="text-muted-foreground max-w-[500px]">
                To create a thriving community by focusing on Early Childhood
                Development and supporting immigrant families.
              </Typography>
            </div>
            <div className="flex flex-col space-y-2">
              <Typography variant="h4"> Our vision</Typography>
              <Typography className="text-muted-foreground max-w-[500px]">
                A future where all immigrant children have equal opportunities
                to succeed and thrive.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
