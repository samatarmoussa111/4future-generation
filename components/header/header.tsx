import Typography from "../ui/typography";

type HeaderProps = {
  title: string;
  subtitle: string;
};

const HeaderAbout = ({ title, subtitle }: HeaderProps) => {
  return (
    <section className="w-full h-[300px] relative bg-[url('https://images.unsplash.com/photo-1490538383478-359216f5c02f?w=1770&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWxkaG9vZHxlbnwwfHwwfHx8Mg%3D%3D')]  bg-cover bg-center flex items-center justify-center before:absolute before:inset-0 before:bg-black/60">
      <div className="text-center text-white relative z-10">
        <Typography variant="h2">{title}</Typography>
        <Typography className="max-w-3xl">{subtitle}</Typography>
      </div>
    </section>
  );
};

export default HeaderAbout;

const HeaderPrograms = ({ title, subtitle }: HeaderProps) => {
  return (
    <section className="w-full h-[300px] relative bg-[url('https://images.unsplash.com/photo-1482224757388-c0cb2bf7296f?w=1770&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hpbGRob29kJTIwcHJvZ3JhbXN8ZW58MHx8MHx8fDI%3D')]  bg-cover bg-center flex items-center justify-center before:absolute before:inset-0 before:bg-black/60">
      <div className="text-center text-white relative z-10">
        <Typography variant="h2">{title}</Typography>
        <Typography className="max-w-3xl">{subtitle}</Typography>
      </div>
    </section>
  );
};

export { HeaderAbout, HeaderPrograms };
