import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Whippets</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">History</h2>
          <p className="mb-4">
            Whippets, often referred to as the "poor man's racehorse," have a rich history dating
            back to the late 19th century. Originally bred in England, these dogs were created by
            crossing small Greyhounds with terriers and other small breeds.
          </p>
          <p>
            Initially used for rabbit hunting and dog racing, whippets quickly became popular
            companions due to their gentle nature and manageable size.
          </p>
        </div>
        <div>
          <img src="/placeholder.svg" alt="Historical whippet image" className="w-full h-64 object-cover rounded-lg shadow-md" />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Characteristics</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="physical">
            <AccordionTrigger>Physical Traits</AccordionTrigger>
            <AccordionContent>
              Whippets are medium-sized dogs with a sleek, athletic build. They typically weigh
              between 25-40 pounds and stand 18-22 inches tall. Their short, smooth coat comes in
              a variety of colors and patterns.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="temperament">
            <AccordionTrigger>Temperament</AccordionTrigger>
            <AccordionContent>
              Known for their gentle and affectionate nature, whippets are often described as
              "45 mph couch potatoes." They are typically calm indoors but enjoy short bursts of
              high energy activity. Whippets are generally good with children and other pets.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="care">
            <AccordionTrigger>Care Requirements</AccordionTrigger>
            <AccordionContent>
              Whippets require moderate exercise, including daily walks and opportunities to run
              in a secure area. Their short coat is low-maintenance, needing only occasional
              brushing. They are sensitive to cold and may need a coat in chilly weather.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default About;