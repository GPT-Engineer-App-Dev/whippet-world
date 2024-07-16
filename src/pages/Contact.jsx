import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <Input type="text" placeholder="Your Name" />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" />
            </div>
            <div>
              <Textarea placeholder="Your Message" rows={4} />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="mr-2" />
              <span>info@whippetworld.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" />
              <span>123 Whippet Lane, Dogtown, CA 90210</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;