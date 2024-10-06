import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const Navigation = () => {
  return (
    <header className="bg-white py-4">
      <div className="flex h-23 items-center justify-between">
        <div className="flex-1 md:flex md:items-center md:gap-12">
          <Image
            src="/logo_future_generation.png"
            width={130}
            height={130}
            alt="logo"
          />
        </div>

        <div className="md:flex md:items-center md:gap-12">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-muted-foreground transition text-[16px] hover:text-primary"
                  href="/programs"
                >
                  {" "}
                  Programs{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground transition text-[16px] hover:text-primary"
                  href="/about-us"
                >
                  {" "}
                  About US{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground transition text-[16px] hover:text-primary"
                  href="#"
                >
                  {" "}
                  Contact{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground transition text-[16px] hover:text-primary"
                  href="#"
                >
                  {" "}
                  Blog{" "}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Button>Contact Us</Button>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
