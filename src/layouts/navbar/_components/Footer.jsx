import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => (
  <footer className="bg-gray-100 py-6">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-600">© 2024 Whippet World. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);