import Image from "next/image";
import Typography from "../ui/typography";
import Wrapper from "../wrapper/wrapper";

type ImageProps = {
  src: string;
  alt?: string;
};

type StatsProps = {
  title: string;
  description: string;
};

type Props = {
  heading: string;
  description: string;
  stats: StatsProps[];
  image: ImageProps;
};

export type Layout27Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout27 = (props: Layout27Props) => {
  const { heading, description, image, stats } = {
    ...Layout27Defaults,
    ...props,
  } as Props;
  return (
    <Wrapper className="py-12 md:py-20 lg:py-24">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div>
          <img
            src={image.src}
            className="w-full object-cover w-[500px] h-[500px] mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            alt={image.alt || ""}
          />
        </div>
        <div>
          <Typography variant="h2">{heading} </Typography>
          <Typography className="max-w-[600px] text-muted-foreground ">
            {description}
          </Typography>

          <div className="grid grid-cols-1 gap-6 py-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <div key={index}>
                <Typography variant="h3"> {stat.title}</Typography>
                <p className="text-muted-foreground max-w-[500px]">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export const Layout27Defaults: Layout27Props = {
  heading:
    "Empowering communities through early childhood development for a brighter future.",
  description:
    "The 4 Future Generations Early Childhood Development Initiative was founded with a vision to improve the well-being of immigrants in the Lewiston/Auburn area through a community-led and data-driven approach. Our mission is to empower communities by focusing on early childhood development, a key determinant of a thriving community. Through evidence-based solutions and local engagement, we believe in creating a brighter future for all children.",
  stats: [
    {
      title: "50%",
      description: "Inception and Vision of 4 Future Generations Initiative",
    },
    {
      title: "50%",
      description: "Empowering Communities Through Early Childhood Development",
    },
  ],
  image: {
    src: "https://images.unsplash.com/photo-1517912570604-75e7c9416362?w=1770&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGNoaWxkaG9vZCUyMHByb2dyYW1zfGVufDB8fDB8fHwy",
    alt: "Early Childhood Development",
  },
};

const Layout6 = () => {
  return (
    <Wrapper className="py-12 md:py-20 lg:py-24">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <img
          src="https://images.unsplash.com/photo-1473280025148-643f9b0cbac2?w=1770&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxjaGlsZGhvb2QlMjBwcm9ncmFtc3xlbnwwfHwwfHx8Mg%3D%3D"
          width="550"
          height="550"
          alt="Hero"
          className="mx-auto w-[500px] h-[500px]  aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
        />
        <div className="flex flex-col justify-center items-start space-y-5">
          <div className="space-y-4">
            <Typography variant="h2">
              A Rich History: Tracing the Evolution of Our Organization{" "}
            </Typography>
            <Typography className="max-w-[600px] text-muted-foreground ">
              Discover the journey of our organization, from its roots in the
              DACEP initiative to its present-day impact.
            </Typography>
          </div>
          <div className="flex items-start justify-between flex-col sm:flex-row space-y-4 sm:space-y-0 ">
            <div className="flex flex-col space-y-2">
              <Typography variant="h4"> Roots Unveiled</Typography>
              <Typography className="text-muted-foreground max-w-[500px]">
                Explore the origins of our organization and the transformative
                DACEP initiative that sparked it.
              </Typography>
            </div>
            <div className="flex flex-col space-y-2">
              <Typography variant="h4"> Community-Driven Approach</Typography>
              <Typography className="text-muted-foreground max-w-[500px]">
                Learn how our organization embraces a community-led, data-driven
                process for lasting impact.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Layout6;
