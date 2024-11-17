import {
  Button,
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from "@relume_io/relume-ui";

import type { ButtonProps } from "@relume_io/relume-ui";
import { RxPlus } from "react-icons/rx";
import Typography from "../ui/typography";

type QuestionsProps = {
  title: string;
  answer: string;
};

type Props = {
  heading: string;
  description: string;
  footerHeading: string;
  footerDescription: string;
  button: ButtonProps;
  questions: QuestionsProps[];
};

export type Faq4Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Faq4 = (props: Faq4Props) => {
  const {
    heading,
    description,
    questions,
    footerHeading,
    footerDescription,
    button,
  } = {
    ...Faq4Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className=" py-5 sm:py-20">
      <div className="container max-w-[1200px] sm:max-w-[70%] mx-auto">
        <div className="space-y-4 flex flex-col sm:items-center items-start justify-center sm:text-center">
          <Typography variant="h2"> {heading} </Typography>
          <Typography className=" max-w-3xl text-muted-foreground">
            {description}
          </Typography>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4 mt-10 sm:mt-20"
        >
          {questions.map((question, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border-primary px-5 md:px-6"
            >
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 p-1 text-text-primary transition-transform duration-300 md:size-8" />
                }
                className="md:py-5 [&[data-state=open]>svg]:rotate-45 font-normal"
              >
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6 text-muted-foreground text-sm">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export const Faq4Defaults: Faq4Props = {
  heading: "FAQs",
  description:
    "Find answers to frequently asked questions about our organization and initiatives.",
  questions: [
    {
      title: "What is our mission?",
      answer:
        "Our mission is to significantly improve the well-being of immigrants in the Lewiston/Auburn area through a strategic, community-led, and data-driven approach to early childhood development.",
    },
    {
      title: "How can I get involved?",
      answer:
        "There are several ways to get involved, including donating, volunteering, and partnering with us. Visit our 'Get Involved' page for more information.",
    },
    {
      title: "What programs do we offer?",
      answer:
        "We offer programs focused on early childhood development, health and wellness, and youth leadership. Visit our 'Programs' page to learn more.",
    },
    {
      title: "How can I donate?",
      answer:
        "Donating is easy! Visit our 'Donate' page to explore donation options and read impact stories of how your contribution can make a difference.",
    },
    {
      title: "How can I contact you?",
      answer:
        "You can contact us through the provided contact information, social media links, or by filling out the contact form on our 'Contact Us' page.",
    },
  ],
};
