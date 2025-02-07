import Link from "next/link";

import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HomePage() {
  return (
    <div>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-slate-600">
          DnD Campaign Manager
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Welcome to Vizima
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Races
                </p>
                <div className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  <ul>
                    <li>
                      <div className="flex items-center p-4">
                        <Avatar>
                          <AvatarImage src={"/dark-elves.jpg"} />
                          <AvatarFallback></AvatarFallback>
                        </Avatar>
                        <Button asChild variant="link" className="p-2">
                          <Link href="/wiki/races/dark-elves">Dark Elves</Link>
                        </Button>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-4">
                        <Avatar>
                          <AvatarImage src={"/dragons.jpg"} />
                          <AvatarFallback></AvatarFallback>
                        </Avatar>
                        <Button asChild variant="link" className="p-2">
                          <Link href="/wiki/races/dragons">Dragons</Link>
                        </Button>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-4">
                        <Avatar>
                          <AvatarImage src={"/dwarves.jpg"} />
                          <AvatarFallback></AvatarFallback>
                        </Avatar>
                        <Button asChild variant="link" className="p-2">
                          <Link href="/wiki/races/dwarves">Dwarves</Link>
                        </Button>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-4">
                        <Avatar>
                          <AvatarImage src={"/elves.jpg"} />
                          <AvatarFallback></AvatarFallback>
                        </Avatar>
                        <Button asChild variant="link" className="p-2">
                          <Link href="/wiki/races/elves">Elves</Link>
                        </Button>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-4">
                        <Avatar>
                          <AvatarImage src={"/humans.jpg"} />
                          <AvatarFallback></AvatarFallback>
                        </Avatar>
                        <Button asChild variant="link" className="p-2">
                          <Link href="/wiki/races/humans">Humans</Link>
                        </Button>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-4">
                        <Avatar>
                          <AvatarImage src={"/orcs.jpg"} />
                          <AvatarFallback></AvatarFallback>
                        </Avatar>
                        <Button asChild variant="link" className="p-2">
                          <Link href="/wiki/races/orcs">Orcs</Link>
                        </Button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Overview
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Welcome to Vīlībāzma, a land shaped by the gods&apos;
                  relentless war. Though their battles once scarred the skies,
                  the gods now wage their conflict through races they created as
                  pawns in a grand, strategic game fueled by pride. Legend
                  speaks of the world&apos;s agonized cries after the gods&apos;
                  great war, its fury etched in endless chaos. The seas, they
                  say, will only rest when vengeance is served, and the gods
                  themselves are no more.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Continents
                </p>
                <div className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  <ul>
                    <li>
                      <div className="flex items-center p-4">
                        <Avatar>
                          <AvatarImage src={"/alfar-saltus.jpg"} />
                          <AvatarFallback></AvatarFallback>
                        </Avatar>
                        <Button asChild variant="link" className="p-2">
                          <Link href="/wiki/continents/alfar-saltus">
                            Alfar Saltus
                          </Link>
                        </Button>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-4">
                        <Avatar>
                          <AvatarImage src={"/oloklerious.jpg"} />
                          <AvatarFallback></AvatarFallback>
                        </Avatar>
                        <Button asChild variant="link" className="p-2">
                          <Link href="/wiki/continents/oloklerious">
                            Oloklerious
                          </Link>
                        </Button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Classes
                </p>
                <div className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  <ul>
                    <li>
                      <div className="flex items-center p-4">
                        <Avatar>
                          <AvatarImage src={"/artificer.jpg"} />
                          <AvatarFallback></AvatarFallback>
                        </Avatar>
                        <Button asChild variant="link" className="p-2">
                          <Link href="/wiki/classes/artificer">Artificer</Link>
                        </Button>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-4">
                        <Avatar>
                          <AvatarImage src={"/barbarian.jpg"} />
                          <AvatarFallback></AvatarFallback>
                        </Avatar>
                        <Button asChild variant="link" className="p-2">
                          <Link href="/wiki/classes/barbarian">Barbarian</Link>
                        </Button>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-4">
                        <Avatar>
                          <AvatarImage src={"/bard.jpg"} />
                          <AvatarFallback></AvatarFallback>
                        </Avatar>
                        <Button asChild variant="link" className="p-2">
                          <Link href="/wiki/classes/bard">Bard</Link>
                        </Button>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-4">
                        <Avatar>
                          <AvatarImage src={"/paladin.jpg"} />
                          <AvatarFallback></AvatarFallback>
                        </Avatar>
                        <Button asChild variant="link" className="p-2">
                          <Link href="/wiki/classes/paladin">Paladin</Link>
                        </Button>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-4">
                        <Avatar>
                          <AvatarImage src={"/rogue.jpg"} />
                          <AvatarFallback></AvatarFallback>
                        </Avatar>
                        <Button asChild variant="link" className="p-2">
                          <Link href="/wiki/classes/rogue">Rogue</Link>
                        </Button>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-4">
                        <Avatar>
                          <AvatarImage src={"/wizard.jpg"} />
                          <AvatarFallback></AvatarFallback>
                        </Avatar>
                        <Button asChild variant="link" className="p-2">
                          <Link href="/wiki/classes/wizard">Wizard</Link>
                        </Button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
