import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: Props) => {
  return (
    <div className={cn("max-w-[80%] mx-auto", className)}> {children} </div>
  );
};

export default Wrapper;
