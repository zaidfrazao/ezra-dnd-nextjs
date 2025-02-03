import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-white text-gray-700">
      <div>
        <h1 className="flex text-4xl font-bold mb-4">Welcome to Ezra DnD</h1>
        <p className="text-lg mb-8">A Dungeons and Dragons campaign manager.</p>
      </div>
      <div className="flex p-4 rounded-md mb-8">
        <div className="mr-4 border-2 border-gray-400">
          <p>
            Welcome to the world of Vīlībāzma, a world once, and still, seen as
            the battleground of the gods, where their never-ending conflict
            rages on. Over time, however, the gods have shifted their approach.
            Instead of directly waging war, they now create various races to
            serve as their representatives, engaging in a long, strategic game
            where lives are treated as mere pawns, and pride is the ultimate
            stake. According to legend, after the great war of the gods, the
            world itself began to scream in agony, lashing out in endless
            turmoil. It is said that the seas will only calm when the world has
            exacted its retribution, and when all the gods have finally been
            vanquished.
          </p>
        </div>
        <div className="ml-4">
          <h3>Races:</h3>
          <ul>
            <li>Human</li>
            <li>Elf</li>
            <li>Dwarf</li>
            <li>Orc</li>
            <li>Dragons</li>
            <li>Dark Elves</li>
          </ul>
        </div>
      </div>
      <div className="flex p-4 rounded-md mb-8">
        <h3>Continents:</h3>
        <ul>
          <li>oloklerious</li>
          <li>alfar saltus</li>
        </ul>
      </div>
      <Link href="/dashboard" passHref>
        <button className="px-5 py-2.5 text-base bg-gray-400 text-white border-0 rounded-md cursor-pointer">
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
}
