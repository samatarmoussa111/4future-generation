import Card, { CardProps } from "../cards/cards";
import Typography from "../ui/typography";
import Wrapper from "../wrapper/wrapper";

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-[#5e82a8]/40 to-[#f4a82a] py-5 sm:py-20 ">
      <Wrapper>
        <div className="space-y-4 flex flex-col sm:items-center items-start justify-center sm:text-center">
          <Typography variant="h2">The Initiative We&apos;ve Taken </Typography>
          <Typography className=" max-w-3xl text-muted-foreground ">
            Join The 4 Future Generations in our mission to transform
            communities through early childhood development. We prioritize
            community involvement and quality education to create a brighter
            future for all children.
          </Typography>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-12 mt-10 sm:mt-20 space-y-2 sm:space-y-0  ">
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
    title: "Health & Wellness Initiatives",
    description:
      "Our ILMAHAGA KOORI program provides comprehensive health and wellness services to immigrant families.",
    image:
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGVhbHRoJTIwJTI2JTIwV2VsbG5lc3MlMjAlMjBjaGlsZHJlbnxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    title: "Early Childhood Development Programs",
    description:
      "We offer a range of programs focused on early childhood development, including Home & Family, Prenatal Services, and Great by Nine.",
    image:
      "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fEVhcmx5JTIwQ2hpbGRob29kJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDI%3D",
  },

  {
    title: "Youth Leadership Opportunities",
    description:
      "We offer mentorship and practical activities to empower immigrant youth and develop their leadership skills.",
    image:
      "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFlvdXRoJTIwTGVhZGVyc2hpcHxlbnwwfHwwfHx8Mg%3D%3D",
  },
];
