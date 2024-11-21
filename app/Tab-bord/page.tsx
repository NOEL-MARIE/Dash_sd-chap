"use client";

import { BellRing } from "lucide-react";
// Importation des composants nécessaires
import Dashboard from "../component/page";

export default function CarteCadeau() {
  return (
    <>
      {/* Composant Dashboard */}
      <Dashboard />

      {/* Conteneur fixe pour la section */}
      <div className="ml-80  flex flex-col  ">
        <main className="w-full  h-full">
          {/* Section principale de contenu */}
          <div className=" ml-10  p-4 flex items-center justify-between">
            <div>
              {/* Titre de la section */}
              <p className="font-semibold font-WorkSans text-2xl">
                Section Carte cadeau -
              </p>

              {/* Message de bienvenue */}
              <p className="font-semibold text-xs text-zinc-600">
                Bienvenue, Philippe !
              </p>
            </div>

            {/* Icône de la cloche */}
            <div>
              <BellRing />
            </div>
          </div>

          {/* section des filtres "debut" */}
          <div>
            {/* les filtres de dates  ======DEBUT====== */}
            <div>
              <ul
                className={`bg-[#F5F5F5] h-11 flex w-fit justify-center ml-7 rounded-lg`}
              >
                <button>
                  {" "}
                  <li
                    className={` flex text-xs font-WorkSans hover:font-semibold hover:bg-white h-9 pt-3 pl-2 ml-1 pr-2 rounded-lg`}
                  >
                    24 heures
                  </li>
                </button>
                <button>
                  <li
                    className={` text-xs font-WorkSans hover:font-semibold hover:bg-white h-9 pt-3 pl-2 pr-2 rounded-lg`}
                  >
                    7 jours
                  </li>
                </button>
                <button>
                  <li
                    className={` text-xs font-WorkSans hover:font-semibold hover:bg-white h-9 pt-3 pl-2 pr-2 rounded-lg`}
                  >
                    30 jours
                  </li>
                </button>
                <button>
                  <li
                    className={` text-xs font-WorkSans hover:font-semibold hover:bg-white h-9 pt-3 pl-2 pr-2 rounded-lg mr-1`}
                  >
                    12 mois
                  </li>
                </button>
              </ul>
            </div>
            {/* les filtres de dates  ======FIN====== */}
          </div>
          {/* section des filtres "fin" */}
          <div className="flex items-center bg-gray-200 p-2 rounded-md max-w-md mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 111.06-1.06m-1.06 1.06L21 21z"
              />
            </svg>
            <input
              type="text"
              placeholder="Rechercher..."
              className="flex-grow bg-transparent outline-none text-gray-700"
            />
          </div>
          {/* section des graphiques "debut" */}
          <div></div>
          {/* section des graphiques "fin" */}
        </main>
      </div>
    </>
  );
}
