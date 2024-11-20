"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

import style from "../dash.module.css";
import Link from "next/link";
import Image from "next/image";
import {
  TbGiftCard,
  TbGiftCardFilled,
  TbLayoutDashboard,
  TbLayoutDashboardFilled,
} from "react-icons/tb";

import { LuUser, LuUsers } from "react-icons/lu";
import { RiUserStarFill, RiUserStarLine } from "react-icons/ri";
import {
  BookUser,
  Briefcase,
  BriefcaseConveyorBelt,
  ChartColumn,
  ChartScatter,
  FileCheck2,
  FileCog,
  Handshake,
  LogIn,
  LogOut,
  MonitorCheck,
  MonitorCog,
  Newspaper,
  Repeat,
  ScanEye,
  ScanLine,
  User,
  UserCheck,
} from "lucide-react";

export default function Dashboard() {
  {
    /*======================================================================= POUR MON hover=================================================================================*/
  }

  const [DashHover, setDashHover] = useState(false); // Pour gérer l'effet de hover
  const [isSelected, setIsSelected] = useState(false); // Pour suivre l'état du lien sélectionné

  const handleClick = () => {
    setIsSelected(true); // Marquer le lien comme sélectionné après un clic
  };

  const [Hovered, setHovered] = useState(false);
  const [transHover, settransHover] = useState(false);
  const [parHover, setparHover] = useState(false);
  const [AdminHover, setAdminHover] = useState(false);
  const [bugsHover, setbugsHover] = useState(false);

  const [SupHover, setSupHover] = useState(false);
  const [AnalyseHover, setAnalyseHover] = useState(false);

  const [ScanHover, setScanHover] = useState(false);
  const [RepHover, setRepHover] = useState(false);
  const [Cardhover, setCardhover] = useState(false);
  const [Userhover, setUserhover] = useState(false);
  // const [Dashhover, setDashhover] = useState(false);
  const [UserStarhover, setUserStarhover] = useState(false);

  const chemin = usePathname();
  {
    /*======================================================================= POUR MON hover =================================================================================*/
  }

  return (
    <>
      {/* {`w-96 h-full max-sm:w-56 max-sm:transition-all max-sm:duration-1000 fixed ${style.dash} max-lg:w-56 max-lg:transition-all max-lg:duration-1000`} */}

      <main className="w-96 h-full">
        <div
          className={` ${style.dash}  fixed  border-r-2 hover:border-[#CCCCCC]  lg:w-80 max-sm:w-52 h-full  
        max-md:w-40 md:h-full`}
        >
          {/*======================================================================= DEBUT HEADER =================================================================================*/}

          <header
            className={`  ${style.dash} border-b-2 hover:border-[#CCCCCC] md:w-40 lg:ml-6 lg:w-64  max-sm:ml-5 max-sm:mr-8  `}
          >
            <div className="lg:h-16  max-sm:flex max-sm:items-center max-sm:justify-center   lg:flex flex lg:flex-row  ">
              <div className="   md:flex md:items-center max-sm:w-20 ">
                <Link href="https://sendchap.ci/">
                  {" "}
                  <Image
                    src="/asset/app icons.svg"
                    width={60}
                    height={50}
                    alt="logo"
                    className=" max-sm: h-10  "
                  />
                </Link>
              </div>

              <div className=" ">
                <p className=" max-sm:hidden  font-WorkSans font-semibold text-xl sm:text-xs md:pt-4 ">
                  Send Chap
                </p>
                <p className="  font-WorkSans max-sm:hidden  md:text-xs ">
                  Espace Administration
                </p>
              </div>
            </div>
          </header>
          {/*======================================================================= FIN HEADER =================================================================================*/}

          {/*======================================================================= DEBUT MENU PRINCIPAL =================================================================================*/}

          <div className=" flex flex-col">
            <div className="flex flex-col mt-5 ">
              <p className="font-WorkSans text-xs ml-7 md:ml-7 ">
                <u>P</u>rincipal
              </p>
              <ul className={`   pt-1    `}>
                <Link
                  href="/Tab-bord"
                  className="flex mt-1 w-52 h-9 rounded-lg  items-center space-x-3 transition-all duration-300"
                  onMouseEnter={() => setDashHover(true)} // Hover
                  onMouseLeave={() => setDashHover(false)} // Fin du hover
                >
                  {/* Indicateur violet */}
                  <div
                    className={`w-1 h-5 rounded-r-lg transition-all duration-300 ${
                      chemin === "/Tab-bord" ? "bg-[#8559C5]" : "bg-transparent"
                    }`}
                  ></div>

                  {/* Conteneur principal du contenu */}
                  <div
                    className={`flex w-full items-center space-x-3 h-7 transition-all duration-300 ${
                      DashHover || chemin === "/Tab-bord" ? "bg-[#F5F5F5]" : ""
                    }`}
                  >
                    {/* Icône du lien */}
                    <div
                      className={`text-xl transition-transform duration-300 ${
                        DashHover || chemin === "/Tab-bord"
                          ? "scale-110"
                          : "scale-100"
                      }`}
                    >
                      {DashHover || chemin === "/Tab-bord" ? (
                        <TbLayoutDashboardFilled />
                      ) : (
                        <TbLayoutDashboard />
                      )}
                    </div>

                    {/* Texte du lien */}
                    <p className="text-xs">Tableau de bord</p>
                  </div>
                </Link>

                <Link
                  href="/Gestion-user"
                  className="flex mt-1 w-52 h-9 rounded-lg  items-center space-x-3 transition-all duration-300"
                  onMouseEnter={() => setUserhover(true)} // Hover
                  onMouseLeave={() => setUserhover(false)} // Fin du hover
                >
                  {/* Indicateur violet */}
                  <div
                    className={`w-1 h-5 rounded-r-lg transition-all duration-300 ${
                      chemin === "/Gestion-user"
                        ? "bg-[#8559C5]"
                        : "bg-transparent"
                    }`}
                  ></div>

                  {/* Conteneur principal du contenu */}
                  <div
                    className={`flex w-full items-center space-x-3 h-7 transition-all duration-300 ${
                      Userhover || chemin === "/Gestion-user"
                        ? "bg-[#F5F5F5]"
                        : ""
                    }`}
                  >
                    {/* Icône du lien */}
                    <div
                      className={`text-xl transition-transform duration-300 ${
                        Userhover || chemin === "/Gestion-user"
                          ? "scale-110"
                          : "scale-100"
                      }`}
                    >
                      {Userhover || chemin === "/Gestion-user" ? (
                        <LuUsers />
                      ) : (
                        <LuUser />
                      )}
                    </div>

                    {/* Texte du lien */}
                    <p className="text-xs">Gestion utilisateur </p>
                  </div>
                </Link>

                <Link
                  href="/Cartecadeau"
                  className="flex mt-1 w-52 h-9 rounded-lg  items-center space-x-3 transition-all duration-300"
                  onMouseEnter={() => setCardhover(true)} // Hover
                  onMouseLeave={() => setCardhover(false)} // Fin du hover
                >
                  {/* Indicateur violet */}
                  <div
                    className={`w-1 h-5 rounded-r-lg transition-all duration-300 ${
                      chemin === "/Cartecadeau"
                        ? "bg-[#8559C5]"
                        : "bg-transparent"
                    }`}
                  ></div>

                  {/* Conteneur principal du contenu */}
                  <div
                    className={`flex w-full items-center space-x-3 h-7 transition-all duration-300 ${
                      Cardhover || chemin === "/Cartecadeau"
                        ? "bg-[#F5F5F5]"
                        : ""
                    }`}
                  >
                    {/* Icône du lien */}
                    <div
                      className={`text-xl transition-transform duration-300 ${
                        Cardhover || chemin === "/Cartecadeau"
                          ? "scale-110"
                          : "scale-100"
                      }`}
                    >
                      {Cardhover || chemin === "/Cartecadeau" ? (
                        <TbGiftCardFilled />
                      ) : (
                        <TbGiftCard />
                      )}
                    </div>

                    {/* Texte du lien */}
                    <p className="text-xs">Carte cadeau</p>
                  </div>
                </Link>

                {/* Gestion des utilisateurs */}

                <Link
                  href="/Utilisateurs-pro"
                  className="flex mt-1 w-52 h-9 rounded-lg  items-center space-x-3 transition-all duration-300"
                  onMouseEnter={() => setUserStarhover(true)} // Hover
                  onMouseLeave={() => setUserStarhover(false)} // Fin du hover
                >
                  {/* Indicateur violet */}
                  <div
                    className={`w-1 h-5 rounded-r-lg transition-all duration-300 ${
                      chemin === "/Utilisateurs-pro"
                        ? "bg-[#8559C5]"
                        : "bg-transparent"
                    }`}
                  ></div>

                  {/* Conteneur principal du contenu */}
                  <div
                    className={`flex w-full items-center space-x-3 h-7 transition-all duration-300 ${
                      UserStarhover || chemin === "/Utilisateurs-pro"
                        ? "bg-[#F5F5F5]"
                        : ""
                    }`}
                  >
                    {/* Icône du lien */}
                    <div
                      className={`text-xl transition-transform duration-300 ${
                        UserStarhover || chemin === "/Utilisateurs-pro"
                          ? "scale-110"
                          : "scale-100"
                      }`}
                    >
                      {UserStarhover || chemin === "/Utilisateurs-pro" ? (
                        <RiUserStarFill />
                      ) : (
                        <RiUserStarLine />
                      )}
                    </div>

                    {/* Texte du lien */}
                    <p className="text-xs">Utilisateurs Pro</p>
                  </div>
                </Link>

                <Link
                  href="/Marchands"
                  className="flex mt-1 w-52 h-9 rounded-lg  items-center space-x-3 transition-all duration-300"
                  onMouseEnter={() => setScanHover(true)} // Hover
                  onMouseLeave={() => setScanHover(false)} // Fin du hover
                >
                  {/* Indicateur violet */}
                  <div
                    className={`w-1 h-5 rounded-r-lg transition-all duration-300 ${
                      chemin === "/Marchands"
                        ? "bg-[#8559C5]"
                        : "bg-transparent"
                    }`}
                  ></div>

                  {/* Conteneur principal du contenu */}
                  <div
                    className={`flex w-full items-center space-x-3 h-7 transition-all duration-300 ${
                      ScanHover || chemin === "/Marchands" ? "bg-[#F5F5F5]" : ""
                    }`}
                  >
                    {/* Icône du lien */}
                    <div
                      className={`text-xl transition-transform duration-300 ${
                        ScanHover || chemin === "/Marchands"
                          ? "scale-110"
                          : "scale-100"
                      }`}
                    >
                      {ScanHover || chemin === "/Marchands" ? (
                        <ScanEye />
                      ) : (
                        <ScanLine />
                      )}
                    </div>

                    {/* Texte du lien */}
                    <p className="text-xs">Carte cadeau</p>
                  </div>
                </Link>

                <Link
                  href="/Switch-agregateurs"
                  className="flex mt-1 w-52 h-9 rounded-lg  items-center space-x-3 transition-all duration-300"
                  onMouseEnter={() => setRepHover(true)} // Hover
                  onMouseLeave={() => setRepHover(false)} // Fin du hover
                >
                  {/* Indicateur violet */}
                  <div
                    className={`w-1 h-5 rounded-r-lg transition-all duration-300 ${
                      chemin === "/Switch-agregateurs"
                        ? "bg-[#8559C5]"
                        : "bg-transparent"
                    }`}
                  ></div>

                  {/* Conteneur principal du contenu */}
                  <div
                    className={`flex w-full items-center space-x-3 h-7 transition-all duration-300 ${
                      RepHover || chemin === "/Switch-agregateurs"
                        ? "bg-[#F5F5F5]"
                        : ""
                    }`}
                  >
                    {/* Icône du lien */}
                    <div
                      className={`text-xl transition-transform duration-300 ${
                        RepHover || chemin === "/Switch-agregateurs"
                          ? "scale-110"
                          : "scale-100"
                      }`}
                    >
                      {RepHover || chemin === "/Switch-agregateurs" ? (
                        <Repeat />
                      ) : (
                        <BookUser />
                      )}
                    </div>

                    {/* Texte du lien */}
                    <p className="text-xs">Switch agregateurs</p>
                  </div>
                </Link>

                <Link
                  href="/Gestion-transactions"
                  className="flex mt-1 w-52 h-9 rounded-lg  items-center space-x-3 transition-all duration-300"
                  onMouseEnter={() => settransHover(true)} // Hover
                  onMouseLeave={() => settransHover(false)} // Fin du hover
                >
                  {/* Indicateur violet */}
                  <div
                    className={`w-1 h-5 rounded-r-lg transition-all duration-300 ${
                      chemin === "/Gestion-transactions"
                        ? "bg-[#8559C5]"
                        : "bg-transparent"
                    }`}
                  ></div>

                  {/* Conteneur principal du contenu */}
                  <div
                    className={`flex w-full items-center space-x-3 h-7 transition-all duration-300 ${
                      transHover || chemin === "/Gestion-transactions"
                        ? "bg-[#F5F5F5]"
                        : ""
                    }`}
                  >
                    {/* Icône du lien */}
                    <div
                      className={`text-xl transition-transform duration-300 ${
                        transHover || chemin === "/Gestion-transactions"
                          ? "scale-110"
                          : "scale-100"
                      }`}
                    >
                      {transHover || chemin === "/Gestion-transactions" ? (
                        <Handshake />
                      ) : (
                        <Newspaper />
                      )}
                    </div>

                    {/* Texte du lien */}
                    <p className="text-xs">Switch agregateurs</p>
                  </div>
                </Link>

                <Link
                  href="/Parrainage"
                  className="flex mt-1 w-52 h-9 rounded-lg  items-center space-x-3 transition-all duration-300"
                  onMouseEnter={() => setparHover(true)} // Hover
                  onMouseLeave={() => setparHover(false)} // Fin du hover
                >
                  {/* Indicateur violet */}
                  <div
                    className={`w-1 h-5 rounded-r-lg transition-all duration-300 ${
                      chemin === "/Parrainage"
                        ? "bg-[#8559C5]"
                        : "bg-transparent"
                    }`}
                  ></div>

                  {/* Conteneur principal du contenu */}
                  <div
                    className={`flex w-full items-center space-x-3 h-7 transition-all duration-300 ${
                      parHover || chemin === "/Parrainage" ? "bg-[#F5F5F5]" : ""
                    }`}
                  >
                    {/* Icône du lien */}
                    <div
                      className={`text-xl transition-transform duration-300 ${
                        parHover || chemin === "/Parrainage"
                          ? "scale-110"
                          : "scale-100"
                      }`}
                    >
                      {parHover || chemin === "/Parrainage" ? (
                        <UserCheck />
                      ) : (
                        <User />
                      )}
                    </div>

                    {/* Texte du lien */}
                    <p className="text-xs">Parrainage</p>
                  </div>
                </Link>
                {/* Parrainage fin */}
              </ul>
            </div>

            <div className={`  ${style.dash}   `}>
              <p className={`  font-WorkSans text-xs flex ml-7 md:ml-7 `}>
                <u>A</u>utre
              </p>
              <ul className={`${style.list_2}    pt-1`}>
                {/* Administration debut */}
                <Link
                  href="/administration"
                  className="flex mt-1 w-52 h-9 rounded-lg  items-center space-x-3 transition-all duration-300"
                  onMouseEnter={() => setAdminHover(true)} // Hover
                  onMouseLeave={() => setAdminHover(false)} // Fin du hover
                >
                  {/* Indicateur violet */}
                  <div
                    className={`w-1 h-5 rounded-r-lg transition-all duration-300 ${
                      chemin === "/administration"
                        ? "bg-[#8559C5]"
                        : "bg-transparent"
                    }`}
                  ></div>

                  {/* Conteneur principal du contenu */}
                  <div
                    className={`flex w-full items-center space-x-3 h-7 transition-all duration-300 ${
                      AdminHover || chemin === "/administration"
                        ? "bg-[#F5F5F5]"
                        : ""
                    }`}
                  >
                    {/* Icône du lien */}
                    <div
                      className={`text-xl transition-transform duration-300 ${
                        AdminHover || chemin === "/administration"
                          ? "scale-110"
                          : "scale-100"
                      }`}
                    >
                      {AdminHover || chemin === "/administration" ? (
                        <Briefcase />
                      ) : (
                        <BriefcaseConveyorBelt />
                      )}
                    </div>

                    {/* Texte du lien */}
                    <p className="text-xs">Administration</p>
                  </div>
                </Link>
                {/*Administration fin */}
                {/* Support fin */}
                <Link
                  href="/support"
                  className="flex mt-1 w-52 h-9 rounded-lg  items-center space-x-3 transition-all duration-300"
                  onMouseEnter={() => setSupHover(true)} // Hover
                  onMouseLeave={() => setSupHover(false)} // Fin du hover
                >
                  {/* Indicateur violet */}
                  <div
                    className={`w-1 h-5 rounded-r-lg transition-all duration-300 ${
                      chemin === "/support" ? "bg-[#8559C5]" : "bg-transparent"
                    }`}
                  ></div>

                  {/* Conteneur principal du contenu */}
                  <div
                    className={`flex w-full items-center space-x-3 h-7 transition-all duration-300 ${
                      SupHover || chemin === "/support" ? "bg-[#F5F5F5]" : ""
                    }`}
                  >
                    {/* Icône du lien */}
                    <div
                      className={`text-xl transition-transform duration-300 ${
                        SupHover || chemin === "/support"
                          ? "scale-110"
                          : "scale-100"
                      }`}
                    >
                      {SupHover || chemin === "/support" ? (
                        <FileCog />
                      ) : (
                        <FileCheck2 />
                      )}
                    </div>

                    {/* Texte du lien */}
                    <p className="text-xs">Support</p>
                  </div>
                </Link>
                {/* Support fin */}

                {/* Gestion des bug fin */}
                <Link
                  href="/gestion_bugs"
                  className="flex mt-1 w-52 h-9 rounded-lg  items-center space-x-3 transition-all duration-300"
                  onMouseEnter={() => setbugsHover(true)} // Hover
                  onMouseLeave={() => setbugsHover(false)} // Fin du hover
                >
                  {/* Indicateur violet */}
                  <div
                    className={`w-1 h-5 rounded-r-lg transition-all duration-300 ${
                      chemin === "/gestion_bugs"
                        ? "bg-[#8559C5]"
                        : "bg-transparent"
                    }`}
                  ></div>

                  {/* Conteneur principal du contenu */}
                  <div
                    className={`flex w-full items-center space-x-3 h-7 transition-all duration-300 ${
                      bugsHover || chemin === "/gestion_bugs"
                        ? "bg-[#F5F5F5]"
                        : ""
                    }`}
                  >
                    {/* Icône du lien */}
                    <div
                      className={`text-xl transition-transform duration-300 ${
                        bugsHover || chemin === "/gestion_bugs"
                          ? "scale-110"
                          : "scale-100"
                      }`}
                    >
                      {bugsHover || chemin === "/gestion_bugs" ? (
                        <MonitorCog />
                      ) : (
                        <MonitorCheck />
                      )}
                    </div>

                    {/* Texte du lien */}
                    <p className="text-xs">Gestion Des Bugs</p>
                  </div>
                </Link>
                {/* Gestion des bug fin */}

                {/* analyse_donnees */}
                <Link
                  href="/analyse_donnees"
                  className="flex mt-1 w-52 h-9 rounded-lg  items-center space-x-3 transition-all duration-300"
                  onMouseEnter={() => setAnalyseHover(true)} // Hover
                  onMouseLeave={() => setAnalyseHover(false)} // Fin du hover
                >
                  {/* Indicateur violet */}
                  <div
                    className={`w-1 h-5 rounded-r-lg transition-all duration-300 ${
                      chemin === "/analyse_donnees"
                        ? "bg-[#8559C5]"
                        : "bg-transparent"
                    }`}
                  ></div>

                  {/* Conteneur principal du contenu */}
                  <div
                    className={`flex w-full items-center space-x-3 h-7 transition-all duration-300 ${
                      AnalyseHover || chemin === "/analyse_donnees"
                        ? "bg-[#F5F5F5]"
                        : ""
                    }`}
                  >
                    {/* Icône du lien */}
                    <div
                      className={`text-xl transition-transform duration-300 ${
                        AnalyseHover || chemin === "/analyse_donnees"
                          ? "scale-110"
                          : "scale-100"
                      }`}
                    >
                      {AnalyseHover || chemin === "/analyse_donnees" ? (
                        <ChartScatter />
                      ) : (
                        <ChartColumn />
                      )}
                    </div>

                    {/* Texte du lien */}
                    <p className="text-xs">Gestion Des Bugs</p>
                  </div>
                </Link>
                {/* analyse_donnees */}
              </ul>
            </div>
          </div>
          {/*======================================================================= FIN MENU PRINCIPAL =================================================================================*/}

          {/*======================================================================= DEBUT FOOTER =================================================================================*/}
          <div className="lg:h-20 h-20 max-sm:flex max-sm:items-center max-sm:justify-center   lg:flex flex lg:flex-row flex-row">
            <footer className="lg:flex lg:justify-center border-t-2 hover:border-[#CCCCCC] md:w-40 lg:ml-6 lg:w-64  max-sm:ml-5 max-sm:m  ">
              <div
                className={`lg:h-20 lg:space-x-2 lg:ml-5 pt-3 mb-5 max-sm:w-40 lg:flex lg:flex-row items-center  `}
              >
                <Link href="https://sendchap.ci/" className="flex-shrink-0">
                  <Image
                    src="/asset/img-user.svg"
                    width={50}
                    height={50}
                    alt="logo"
                    className="rounded-full"
                  />
                </Link>

                <div className="lg:flex lg:flex-row items-center lg:space-x-4">
                  <div className="text-center lg:text-left">
                    <p className="hidden lg:block font-WorkSans font-semibold text-xs">
                      Philippe Jeans
                    </p>
                    <p className="hidden lg:block font-WorkSans text-xs">
                      philippe@gmail.com
                    </p>
                  </div>
                  <div
                    className="text-xl cursor-pointer transition-all ease-linear duration-100"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <Link
                      href="/"
                      className={`text-xl transition-all duration-500 ${
                        Hovered || isSelected ? "scale-110" : "scale-100"
                      }`}
                    >
                      {Hovered ? <LogIn /> : <LogOut />}
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>

          {/*======================================================================= FIN FOOTER =================================================================================*/}
        </div>
      </main>
    </>
  );
}
