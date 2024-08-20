import { Button } from "../ui/button";
import Typography from "../ui/typography";

const Banner = () => {
  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?w=1770&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNvbW11bml0eXxlbnwwfHwwfHx8Mg%3D%3D)] bg-cover bg-center bg-no-repeat h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 "></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 flex items-center justify-center ">
        <div className="max-w-4xl text-center mx-auto flex flex-col items-center justify-center">
          <Typography variant="h1" className="text-white">
            Empowering Immigrant Families Through Early Childhood Development
          </Typography>
          <Typography className="mt-2 mb-3 max-w-2xl text-white font-medium">
            Welcome to The 4 Future Generations initiative. We are dedicated to
            improving the well-being of Immigrants in the Lewiston/Auburn area
            by focusing on Early Childhood Development. Join us in creating a
            thriving community for all.
          </Typography>
          <div>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
