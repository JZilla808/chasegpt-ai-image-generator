import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md">
      {/* left div */}
      <div className="flex space-x-2 items-center">
        <span className="bg-violet-500/70">
          <Image
            src="/ChaseGPT Logo Only.svg"
            width={30}
            height={30}
            alt="ChaseGPT Logo"
          />
        </span>

        <div className="">
          <h1 className="font-bold">
            The ChaseGPT <span className="text-violet-500">AI</span> Image
            Generator
          </h1>
          <h2 className="text-xs">
            Powered by DALL·E, ChatGPT & Microsoft Azure!
          </h2>
        </div>
      </div>

      {/* right div */}
      <div className="hidden md:flex text-xs md:text-base divide-x items-center text-gray-500 ">
        {/* TODO: Update the link to portfolio site */}
        <Link
          href="https://github.com/JZilla808"
          className="px-2 font-light text-right"
        >
          Created by Jay Zhou in LA
        </Link>
        <Link href="https://www.chasegpt.com" className="px-2 font-light">
          ChaseGPT Chatbot
        </Link>
      </div>
    </header>
  );
}

export default Header;
