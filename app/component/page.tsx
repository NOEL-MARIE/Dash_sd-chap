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

  const [dashHover, setDashHover] = useState(false); // Pour gérer l'effet de hover
  const [isSelected, setIsSelected] = useState(false); // Pour suivre l'état du lien sélectionné

  const handleClick = () => {
    setIsSelected(true); // Marquer le lien comme sélectionné après un clic
  };

  const [Hovered, setHovered] = useState(false);
  const [transHover, settransHover] = useState(false);
  const [parHover, setparHover] = useState(false);
  const [AdminHover, setAdminHover] = useState(false);
  const [SupHover, setSupHover] = useState(false);
  const [SupportHover, setSupportHover] = useState(false);
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

          <div className=" flex flex-col  ">
            <div className="flex flex-col mt-5 ">
              <p className="font-WorkSans text-xs ml-7 md:ml-7 ">
                <u>P</u>rincipal
              </p>
              <ul className={`   pt-1    `}>
                <Link href="/Tab-bord">
                  <li className="flex flex-row space-x-4 pt-1 h-9 text-xl">
                    {/* Indicateur violet */}
                    <div
                      className={`flex mt-1 transition-all duration-500 ${
                        chemin === "/Tab-bord"
                          ? "w-1 h-5 bg-[#8559C5] rounded-r-lg"
                          : "w-1 h-full bg-transparent"
                      }`}
                    ></div>

                    {/* Conteneur du lien */}
                    <div
                      className={`flex space-x-3 w-52 rounded-lg h-7 pl-2 items-center 
              ${
                chemin === "/Tab-bord" || dashHover
                  ? "bg-[#F5F5F5]" // Fond gris actif ou hover
                  : ""
              }`}
                      onMouseEnter={() => setDashHover(true)} // Hover
                      onMouseLeave={() => setDashHover(false)} // Fin du hover
                    >
                      {/* Icône du lien */}
                      <div
                        className={`text-xl transition-all duration-500 ${
                          dashHover || chemin === "/Tab-bord"
                            ? "scale-110"
                            : "scale-100"
                        }`}
                      >
                        {dashHover || chemin === "/Tab-bord" ? (
                          <TbLayoutDashboardFilled />
                        ) : (
                          <TbLayoutDashboard />
                        )}
                      </div>

                      {/* Texte du lien */}
                      <p className="flex mt-1 text-xs">Tableau de bord</p>
                    </div>
                  </li>
                </Link>

                {/* Gestion des utilisateurs */}
                <Link href="/Gestion-user">
                  <li className="flex flex-row space-x-4 pt-1 h-9 text-xl">
                    {/* Indicateur violet */}
                    <div
                      className={`flex mt-1 transition-all duration-500 ${
                        chemin === "/Gestion-user"
                          ? "w-1 h-5 bg-[#8559C5] rounded-r-lg"
                          : "w-1 h-full bg-transparent"
                      }`}
                    ></div>

                    {/* Conteneur du lien */}
                    <div
                      className={`flex space-x-3 w-52 rounded-lg h-7 pl-2 items-center
              ${
                chemin === "/Gestion-user" || Userhover
                  ? "bg-[#F5F5F5]" // Fond gris actif ou hover
                  : ""
              }`}
                      onMouseEnter={() => setUserhover(true)} // Hover
                      onMouseLeave={() => setUserhover(false)} // Fin du hover
                    >
                      {/* Icône du lien */}
                      <div
                        className={`text-xl transition-all duration-500 ${
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
                      <p className="flex mt-1 text-xs">
                        Gestion des utilisateurs
                      </p>
                    </div>
                  </li>
                </Link>

                <Link href="/Cartecadeau">
                  <li
                    className={`flex flex-row space-x-4 pt-1  h-9 ${style.li_1}  text-xs   `}
                  >
                    <div
                      className={`flex mt-1 transition-all duration-500 ${
                        chemin === "/Cartecadeau"
                          ? "w-1 h-5 bg-[#8559C5] rounded-r-lg"
                          : "w-1 h-full bg-transparent"
                      }`}
                    ></div>

                    <div
                      className={`flex space-x-3 w-52 rounded-lg h-7 pl-2 items-center
                        ${
                          chemin === "/Cartecadeau" || Cardhover
                            ? "bg-[#F5F5F5]" // Fond gris actif ou hover
                            : ""
                        }`}
                      onMouseEnter={() => setCardhover(true)}
                      onMouseLeave={() => setCardhover(false)}
                    >
                      {/* Icône du lien */}
                      <div
                        className={`text-xl transition-all duration-500 ${
                          Cardhover || chemin === "/Cartecadeau"
                            ? "scale-110"
                            : "scale-100"
                        }`}
                      >
                        {Cardhover || chemin === "/Cartecadeau" ? (
                          <TbGiftCard />
                        ) : (
                          <TbGiftCardFilled />
                        )}
                      </div>

                      <p className=" flex mt-1 text-xs">Carte cadeau</p>
                    </div>
                  </li>
                </Link>

                <Link href="/Utilisateurs-pro">
                  <li
                    className={`flex flex-row space-x-4 pt-1  h-9 ${style.li_1}  text-xs   `}
                  >
                    <div
                      className={`flex mt-1 transition-all duration-500 ${
                        chemin === "/Utilisateurs-pro"
                          ? "w-1 h-5 bg-[#8559C5] rounded-r-lg"
                          : "w-1 h-full bg-transparent"
                      }`}
                    ></div>

                    <div
                      className={`flex space-x-3 w-52 rounded-lg h-7 pl-2 items-center
                        ${
                          chemin === "/Utilisateurs-pro" || UserStarhover
                            ? "bg-[#F5F5F5]" // Fond gris actif ou hover
                            : ""
                        }`}
                      onMouseEnter={() => setUserStarhover(true)}
                      onMouseLeave={() => setUserStarhover(false)}
                    >
                      {/* Icône du lien */}
                      <div
                        className={`text-xl transition-all duration-500 ${
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

                      <p className=" flex mt-1 text-xs">Utilisateurs Pro</p>
                    </div>
                  </li>
                </Link>

                <Link href="/Marchands">
                  <li
                    className={`flex flex-row space-x-4 pt-1  h-9 ${style.li_1}  text-xs   `}
                  >
                    <div
                      className={`flex mt-1 transition-all duration-500 ${
                        chemin === "/Marchands"
                          ? "w-1 h-5 bg-[#8559C5] rounded-r-lg"
                          : "w-1 h-full bg-transparent"
                      }`}
                    ></div>
                    <div
                      className={`flex space-x-3 w-52 rounded-lg h-7 pl-2 items-center
                        ${
                          chemin === "/Marchands" || ScanHover
                            ? "bg-[#F5F5F5]" // Fond gris actif ou hover
                            : ""
                        }`}
                      onMouseEnter={() => setScanHover(true)}
                      onMouseLeave={() => setScanHover(false)}
                    >
                      <div
                        className={`text-xs transition-all duration-500 ${
                          ScanHover || isSelected ? "scale-110" : "scale-100"
                        }`}
                      >
                        {ScanHover || isSelected ? (
                          <ScanEye  />
                        ) : (
                          <ScanLine />
                        )}
                      </div>

                      <p className=" flex mt-1">Marchands</p>
                    </div>
                  </li>
                </Link>

                <Link href="/Switch-agregateurs">
                  <li
                    className={`flex flex-row space-x-4 pt-1  h-9 ${style.li_1}  text-xs   `}
                  >
                    <div
                      className={`flex mt-1 transition-all duration-500 ${
                        chemin === "/Switch-agregateurs"
                          ? "w-1 h-5 bg-[#8559C5] rounded-r-lg"
                          : "w-1 h-full bg-transparent"
                      }`}
                    ></div>
                    <div
                      className={`flex space-x-3 w-52 rounded-lg h-7 pl-2 items-center
                        ${
                          chemin === "/Switch-agregateurs" || RepHover
                            ? "bg-[#F5F5F5]" // Fond gris actif ou hover
                            : ""
                        }`}
                      onMouseEnter={() => setRepHover(true)}
                      onMouseLeave={() => setRepHover(false)}
                    >
                      <div className="text-xs">
                        {RepHover ? <Repeat /> : <BookUser />}
                      </div>
                      <p className=" flex mt-1">Switch-agregateurs</p>
                    </div>
                  </li>
                </Link>

                <Link href="/Gestion-transactions">
                  <li
                    className={`flex flex-row space-x-4 pt-1  h-9 ${style.li_1}  text-xs   `}
                  >
                    <div
                      className={`flex mt-1 transition-all duration-500 ${
                        chemin === "/Gestion-transactions"
                          ? "w-1 h-5 bg-[#8559C5] rounded-r-lg"
                          : "w-1 h-full bg-transparent"
                      }`}
                    ></div>
                    <div
                      className={`flex space-x-3 w-52 rounded-lg h-7 pl-2 items-center
                        ${
                          chemin === "/Gestion-transactions" || transHover
                            ? "bg-[#F5F5F5]" // Fond gris actif ou hover
                            : ""
                        }`}
                      onMouseEnter={() => settransHover(true)}
                      onMouseLeave={() => settransHover(false)}
                    >
                      <div className="text-xs">
                        {transHover ? <Handshake /> : <Newspaper />}
                      </div>

                      <p className=" flex mt-1">Gestion transactions</p>
                    </div>
                  </li>
                </Link>

                <Link href="/Parrainage">
                  <li
                    className={`flex flex-row space-x-4 pt-1  h-9 ${style.li_1}  text-xs   `}
                  >
                    <div
                      className={`flex mt-1 transition-all duration-500 ${
                        chemin === "/Parrainage"
                          ? "w-1 h-5 bg-[#8559C5] rounded-r-lg"
                          : "w-1 h-full bg-transparent"
                      }`}
                    ></div>
                    <div
                      className={`flex space-x-3 w-52 rounded-lg h-7 pl-2 items-center
                        ${
                          chemin === "/Parrainage" || parHover
                            ? "bg-[#F5F5F5]" // Fond gris actif ou hover
                            : ""
                        }`}
                      onMouseEnter={() => setparHover(true)}
                      onMouseLeave={() => setparHover(false)}
                    >
                      <div className="text-xs">
                        {parHover ? <UserCheck /> : <User />}
                      </div>

                      <p className=" flex mt-1">Parrainage</p>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>

            <div className={`  ${style.dash}   `}>
              <p className={`  font-WorkSans text-xs flex ml-7 md:ml-7 `}>
                <u>A</u>utre
              </p>
              <ul className={`${style.list_2}    pt-1`}>
                <Link href="/Administration">
                  <li
                    className={`flex flex-row space-x-4 pt-1  h-9 ${style.li_1}  text-xs   `}
                  >
                    <div
                      className={`flex mt-1 h-7 ${
                        chemin === "/Administration"
                          ? "w-1 h-5 bg-[#8559C5] rounded-r-lg"
                          : "bg-transparent w-1"
                      }`}
                    ></div>
                    {/* n'oublie pas de mettre les effets */}

                    <div
                      className={`flex space-x-3 w-52 rounded-lg h-7 pl-2 items-center
                        ${
                          chemin === "/Administration" || AdminHover
                            ? "bg-[#F5F5F5]" // Fond gris actif ou hover
                            : ""
                        }`}
                      onMouseEnter={() => setAdminHover(true)}
                      onMouseLeave={() => setAdminHover(false)}
                    >
                      <div className="text-xs">
                        {AdminHover ? <Briefcase /> : <BriefcaseConveyorBelt />}
                      </div>

                      <p className=" flex mt-1">Administration</p>
                    </div>
                  </li>
                </Link>
                <Link href="/gestion_bugs">
                  <li
                    className={`flex flex-row space-x-4 pt-1  h-9 ${style.li_1}  text-xs   `}
                  >
                    <div
                      className={`flex mt-1 h-7 ${
                        chemin === "/gestion_bugs"
                          ? "w-1 h-5 bg-[#8559C5] rounded-r-lg"
                          : "bg-transparent w-1"
                      }`}
                    ></div>

                    <div
                      className={`flex space-x-3 w-52 rounded-lg h-7 pl-2 items-center
                        ${
                          chemin === "/gestion_bugs" || SupHover
                            ? "bg-[#F5F5F5]" // Fond gris actif ou hover
                            : ""
                        }`}
                      onMouseEnter={() => setSupHover(true)}
                      onMouseLeave={() => setSupHover(false)}
                    >
                      <div className="text-xs">
                        {SupHover ? <FileCog /> : <FileCheck2 />}
                      </div>

                      <p className=" flex mt-1">Support</p>
                    </div>
                  </li>
                </Link>
                <Link href="/Support">
                  <li
                    className={`flex flex-row space-x-4 pt-1  h-9 ${style.li_1}  text-xs   `}
                  >
                    <div
                      className={`flex mt-1 h-7 ${
                        chemin === "/Support"
                          ? "w-1 h-5 bg-[gestion_bugs#8559C5] rounded-r-lg"
                          : "bg-transparent w-1"
                      }`}
                    ></div>
                    <div
                      className={`flex space-x-3 w-52 rounded-lg h-7 pl-2 items-center
                        ${
                          chemin === "/Support" || SupportHover
                            ? "bg-[#F5F5F5]" // Fond gris actif ou hover
                            : ""
                        }`}
                      onMouseEnter={() => setSupportHover(true)}
                      onMouseLeave={() => setSupportHover(false)}
                    >
                      <div className="text-xs">
                        {SupportHover ? <MonitorCog /> : <MonitorCheck />}
                      </div>

                      <p className=" flex mt-1">Gestion des bug</p>
                    </div>
                  </li>
                </Link>
                <Link href="/analyse_donnees">
                  <li
                    className={`flex flex-row space-x-4 pt-1  h-9 ${style.li_1}  text-xs   `}
                  >
                    <div
                      className={`flex mt-1 h-7 ${
                        chemin === "/analyse_donnees"
                          ? "w-1 h-5 bg-[gestion_bugs#8559C5] rounded-r-lg"
                          : "bg-transparent w-1"
                      }`}
                    ></div>
                    <div
                      className={`flex space-x-3 w-52 rounded-lg h-7 pl-2 items-center
                        ${
                          chemin === "/analyse_donnees" || AnalyseHover
                            ? "bg-[#F5F5F5]" // Fond gris actif ou hover
                            : ""
                        }`}
                      onMouseEnter={() => setAnalyseHover(true)}
                      onMouseLeave={() => setAnalyseHover(false)}
                    >
                      <div className="text-xs">
                        {AnalyseHover ? <ChartScatter /> : <ChartColumn />}
                      </div>

                      <p className=" flex mt-1">Analyse des données</p>
                    </div>
                  </li>
                </Link>
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










