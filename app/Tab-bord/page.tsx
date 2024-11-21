"use client";

// Importation des composants nécessaires
import Dashboard from "../component/page";

export default function CarteCadeau() {
  return (
    <>
      {/* Composant Dashboard */}
      <Dashboard />

      {/* Conteneur fixe pour la section */}
      <div className="ml-80  w-full h-full bg-[#f1f0f0]">
        <main className="">



          {/* section du haut "debut" */}
          <div className=" w-full h-full">
            <div className="pl-4 pt-4 flex flex-col">
              {/* Titre de la section */}
              <div>
                <p
                  className={`font-semibold font-WorkSans text-2xl  
              `}
                >
                  Section Carte cadeau -
                </p>
                <br />
                {/* Message de bienvenue */}
                <p className="font-semibold text-xs text-zinc-600">
                  Bienvenue, Philippe !
                </p>
              </div>
            </div>
          </div>
          {/* section du haut "fin" */}





          {/* section du bas "debut" */}
          <div></div>
          {/* section du bas "fin" */}
        </main>
      </div>
    </>
  );
}
