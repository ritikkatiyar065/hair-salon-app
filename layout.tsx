import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Book Now", href: "/book" }
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-playfair text-[#F8B195]">Elegance</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className={cn(
                      "inline-flex items-center px-1 pt-1 text-sm font-medium",
                      location === item.href
                        ? "border-[#F8B195] text-gray-900 border-b-2"
                        : "text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    )}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Contact
              </h3>
              <div className="mt-4 space-y-2">
                <p className="text-base text-gray-500">123 Style Street</p>
                <p className="text-base text-gray-500">Fashionville, FV 12345</p>
                <p className="text-base text-gray-500">(555) 123-4567</p>
              </div>
            </div>

            <BusinessHours />

            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Follow Us
              </h3>
              <div className="mt-4 space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Added creator credits */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="flex-1 text-center">
                <p className="text-sm text-gray-400">© The Ritik Katiyar Production</p>
                <p className="text-sm text-gray-400">All rights reserved 2024</p>
              </div>
              <div className="text-sm text-gray-400">
                <p>Made with ❤️ by Ritik</p>
                <p>Crafted in Noida</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BusinessHours() {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
        Hours
      </h3>
      <div className="mt-4 space-y-2">
        <p className="text-base text-gray-500">Mon-Fri: 9:00 AM - 7:00 PM</p>
        <p className="text-base text-gray-500">Saturday: 9:00 AM - 5:00 PM</p>
        <p className="text-base text-gray-500">Sunday: Closed</p>
      </div>
    </div>
  );
}