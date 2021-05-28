import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white bottom-0 w-full flex shadow p-[1.5rem] ml-auto lg:flex-row flex-row-reverse justify-center md:justify-start">
      <div className="flex space-x-4 items-center text-sm flex-col sm:flex-row ">
        <ul className="flex items-center space-x-5 mb-[0.8rem] sm:mb-0">
          <Link href="/about">
            <a>
              <li>About</li>
            </a>
          </Link>
          <Link href="/privacy-policy">
            <a>
              <li>Privacy Policy</li>
            </a>
          </Link>
          <Link href="/terms-conditions">
            <a>
              <li>T&C</li>
            </a>
          </Link>
        </ul>
        <div className="text-xs text-gray-400">
          Copyright 2021 © Powered by{" "}
          <a
            href="https://www.blue-ex.com/"
            target="_blank"
            className="text-[#0047ba] hover:text-[#007bff]"
          >
            blueEX
          </a>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
