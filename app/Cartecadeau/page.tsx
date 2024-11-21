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
      <div className="ml-80  flex flex-col  h-32 ">
        <main className="w-full  h-full">
          {/* Section principale de contenu */}
          <div className=" ml-10border shadow-sm p-4 flex items-center justify-between">
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

          {/* section des graphiques "debut" */}
          <div></div>
          {/* section des graphiques "fin" */}
        </main>
      </div>
    </>
  );
}
