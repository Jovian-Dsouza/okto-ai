import Link from "next/link";
export default function Logo() {
  return (
      <Link href="/" aria-label="logo" className="flex space-x-2 items-center">
        <img
          src="/bitbirdie2.png"
          alt="logo"
          className="h-8 md:h-[3.04rem] md:w-[3.87rem] "
        />
        <span className="text-lg md:text-xl font-bold text-[#F1F5F9] font-kumbhsans">BitBirdie</span>
      </Link>
  );
}
