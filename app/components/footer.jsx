// @flow strict
import Link from 'next/link';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm text-gray-400">
              © {currentYear}{' '}
              <span className="text-[#16f2b3] font-medium">Anish Kumar Prajapati</span>
              {' '}— Aspiring Java Backend Developer
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Built with Next.js · Chittaurgarh, Rajasthan, India
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/#contact"
              className="text-xs text-gray-400 hover:text-[#16f2b3] transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              href="/#projects"
              className="text-xs text-gray-400 hover:text-[#16f2b3] transition-colors duration-200"
            >
              Projects
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-[#16f2b3] transition-colors duration-200"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
