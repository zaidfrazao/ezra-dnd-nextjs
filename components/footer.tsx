import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto px-8 py-6 md:flex md:items-center md:justify-between lg:px-8">
        <p className="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0">
          Created and maintained by{" "}
          <b>
            <Link href="https://github.com/suburban-loner">Trent Mokoena</Link>
          </b>
        </p>
      </div>
    </footer>
  );
}
