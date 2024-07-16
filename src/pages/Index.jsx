import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="container mx-auto px-4">
      <section className="py-12 md:py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Whippet World</h1>
          <p className="text-xl md:text-2xl mb-8">Discover the grace and charm of whippets</p>
          <img src="/placeholder.svg" alt="Whippet hero image" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg mb-8" />
          <Button size="lg">Learn More</Button>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">About Whippets</h2>
          <p className="text-lg mb-6">
            Whippets are gentle, affectionate, and incredibly fast sighthounds. Known for their
            sleek bodies and sweet temperaments, these dogs make wonderful companions for active
            individuals and families alike.
          </p>
          <Button variant="outline">Explore Characteristics</Button>
        </div>
      </section>
    </div>
  );
};

export default Index;