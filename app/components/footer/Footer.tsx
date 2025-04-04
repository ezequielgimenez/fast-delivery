import Image from "next/image";
export default function FooterComp() {
  return (
    <div>
      <footer className="bg-[#222132] text-white p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image src="/logo.png" width={50} height={45} alt="logo"></Image>

            <h3 className="font-oxanium font-bold text-[25px] text-[#f95c19] ">
              FastDelivery
            </h3>
          </div>

          <div className="pt-12">
            <h3 className="text-lg font-oxanium font-semibold mb-2">
              Quick Links
            </h3>
            <ul className="text-sm text-gray-400 space-y-4">
              <li>
                <a
                  className="hover:text-[#f95c19] transition-all duration-300"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#f95c19] transition-all duration-300"
                  href="#services"
                >
                  Our services
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#f95c19] transition-all duration-300"
                  href="#choose"
                >
                  Why Choose Us?
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#f95c19] transition-all duration-300"
                  href="#question"
                >
                  F&Q
                </a>
              </li>
            </ul>
          </div>

          <div className="pt-12 space-y-4">
            <h3 className="text-lg font-oxanium font-semibold mb-2 ">
              Contact
            </h3>
            <p className="text-sm text-gray-400">📍 123 Main St, City</p>
            <p className="text-sm text-gray-400">📞 +1 (123) 456-7890</p>
            <p className="text-sm text-gray-400">
              📧 ezequielgimenezdev@gmail.com
            </p>
          </div>

          <div className="pt-12">
            <h3 className="text-lg font-oxanium font-semibold mb-2">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <img src="/ig.png" alt="" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <img src="/facebook.png" alt="" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <img src="/twitter.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-sm text-gray-500">
          © 2025 FastDelivery. Built with ❤️ using Next.js by
          ezequielgimenezdev@gmail.com
        </div>
      </footer>
    </div>
  );
}
