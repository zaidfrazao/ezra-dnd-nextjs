export function Home() {
  return (
    <div className="flex flex-col items-center text-center bg-white text-gray-700">
      <div>
        <h1 className="flex text-6xl font-bold mb-4">Welcome to Vizima</h1>
        <p className="text-lg mb-8">A Dungeons and Dragons campaign manager.</p>
      </div>
      <div className="flex p-4 rounded-md mb-8 justify-center text-left">
        <div className="flex-1 mr-2 border-4 border-gray-400 rounded-md p-2">
          <h2 className="flex text-2xl font-bold mb-2">Welcome new players</h2>
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
        <div className="flex-1 border-4 mr-2 ml-2 px-4 rounded-md border-gray-400 w-48">
          <h2 className="flex text-2xl font-bold mb-2">Races</h2>
          <ul>
            <li>
              <Button asChild variant="link" className="p-2">
                <Link href="/human">Dark Elves</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="link" className="p-2">
                <Link href="/human">Dragons</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="link" className="p-2">
                <Link href="/human">Dwarves</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="link" className="p-2">
                <Link href="/human">Elves</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="link" className="p-2">
                <Link href="/human">Humans</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="link" className="p-2">
                <Link href="/human">Orcs</Link>
              </Button>
            </li>
          </ul>
        </div>
        <div className="flex-1 mr-2 ml-2 rounded-md px-4 border-4 border-gray-400 w-50">
          <h2 className="flex text-2xl font-bold mb-2">Continents</h2>
          <ul>
            <li>
              <Button asChild variant="link" className="p-2">
                <Link href="/human">Alfar Saltus</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="link" className="p-2">
                <Link href="/human">Oloklerious</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
