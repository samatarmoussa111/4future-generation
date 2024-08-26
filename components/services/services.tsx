import Card, { CardProps } from "../cards/cards";
import Typography from "../ui/typography";
import Wrapper from "../wrapper/wrapper";

const Services = () => {
  return (
    <div className="bg-muted/35 py-5 sm:py-10 ">
      <Wrapper>
        <div className="space-y-4 flex flex-col sm:items-center items-start justify-center sm:text-center">
          <Typography variant="h2">The Initiative We&apos;ve Taken </Typography>
          <Typography className=" max-w-3xl text-muted-foreground md:text-xl">
            Join The 4 Future Generations in our mission to transform
            communities through early childhood development. We prioritize
            community involvement and quality education to create a brighter
            future for all children.
          </Typography>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-12 mt-10 space-y-2 sm:space-y-0  ">
            {SERVICES.map((service) => (
              <Card
                key={service.title}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Services;

export const SERVICES: CardProps[] = [
  {
    title: "Home & Family",
    description:
      "We support families as the first educators, providing home visits, resources, and parent groups to help them thrive.",
    image:
      "https://images.unsplash.com/photo-1577896850715-ed0b7e3ece57?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Prenatal Services",
    description:
      "Prepare for parenthood with 4 Future Generations. We support healthy pregnancies, births, and early parenting through specialized education and local partnerships.",
    image:
      "https://images.unsplash.com/photo-1617793693166-46895aefc066?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBhcmVudHN8ZW58MHx8MHx8fDI%3D",
  },

  {
    title: " Elementary Education",
    description:
      "Our elementary program supports families with children ages 5–9, guiding them through the school selection process and providing academic support.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RWxlbWVudGFyeSUyMEVkdWNhdGlvbnxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    title: "Health & Wellness",
    description:
      "We support healthy homes through our ILMAHAGA KOORI program, offering prenatal care, nutrition, immunizations, and safety education for families.",
    image:
      "https://images.unsplash.com/photo-1640504410124-461df050ec7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlYWx0aCUyMGFuZCUyMHdlbGxuZXNzfGVufDB8fDB8fHwy",
  },
];
