import Typography from "../ui/typography";

export interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className="rounded-xl bg-white border border-gray-200 max-w-[400px] ">
      <div>
        <img
          src={image}
          alt={title}
          width={400}
          height={300}
          className="mx-auto rounded-t-xl aspect-square overflow-hidden object-cover object-center"
        />
      </div>
      <div className="space-y-2 my-2 text-center p-2">
        <Typography variant="h3">{title}</Typography>

        <Typography className="text-muted-foreground">{description}</Typography>
      </div>
    </div>
  );
};

export default Card;
