"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PConnexion = () => {
  // États pour les champs et les messages d'erreur individuels
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Fonction de validation
  const validateForm = () => {
    let isValid = true;

    // Validation de l'email
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!email) {
      setEmailError("Veuillez entrer une adresse email.");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Veuillez entrer une adresse email valide.");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validation du mot de passe
    if (!password) {
      setPasswordError("Veuillez entrer un mot de passe.");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Votre mot de passe doit contenir au moins 8 caractères.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  // Fonction exécutée au clic du bouton
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    if (validateForm()) {
      // Logique d'envoi (exemple : API, redirection, etc.)
      console.log("Formulaire validé !");
    }
  };

  return (
    <div>
      <main className="fixed w-screen h-screen flex">
        <>
          {/* Section de connexion */}
          <div className="max-sm:w-screen max-sm:bg-gray-600 max-sm:flex p-10 w-1/2 h-screen bg-white flex flex-col justify-center">
            <Image
              src="/asset/app icons.svg"
              alt="Logo Send Chap"
              width={60}
              height={50}
            />
            <h1 className="font-MerriweatherBold capitalize pt-5 text-3xl">
              Connexion
            </h1>
            <p className="text-xs font-WorkSans pt-3">
              Bienvenue à nouveau ! Veuillez saisir <br /> vos coordonnées.
            </p>

            {/* Champ e-mail */}
            <label
              htmlFor="email"
              className="pt-3 pb-2 pl-2 font-WorkSans text-xs"
            >
              Email
            </label>
            <input
              id="email"
              className="h-10 text-left border-[#CCCCCC] border rounded-lg shadow-xl placeholder-gray-500 pl-3"
              type="email"
              placeholder="Entrer votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <p className="text-red-500 text-sm pt-1">{emailError}</p>
            )}

            {/* Champ mot de passe */}
            <label
              htmlFor="password"
              className="pt-3 pb-2 pl-2 font-WorkSans text-xs"
            >
              Mot de passe
            </label>
            <input
              id="password"
              className="h-10 text-left border-[#CCCCCC] border rounded-lg shadow-xl placeholder-gray-500 pl-3"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <p className="text-red-500 text-sm pt-1">{passwordError}</p>
            )}

            {/* Option de se souvenir */}
            <div className="flex items-center font-WorkSans pr-2 pt-3">
              <input
                id="rememberMe"
                type="checkbox"
                className="hover:cursor-pointer"
              />
              <label
                htmlFor="rememberMe"
                className="text-sm font-WorkSans ml-2"
              >
                Se souvenir pendant 30 jours
              </label>
            </div>

            {/* Bouton de connexion */}
            <button
              onClick={handleSubmit}
              className="hover:bg-purple-800 text-white justify-center items-center flex rounded-lg mt-4 bg-purple-600 h-10 font-WorkSans transition duration-1000"
            >
              Se connecter
            </button>

            {/* Lien vers mot de passe oublié */}
            <button className="hover:bg-purple-100 text-purple-600 justify-center items-center flex rounded-lg mt-4 h-10 font-WorkSans transition duration-1000">
              <Link href="/pasoub">Mot de passe oublié ?</Link>
            </button>

            {/* Pied de page */}
            <footer className="w-full pt-14 pl-0">
              <Image
                src="/asset/dev std.svg"
                width={90}
                height={90}
                alt="Dev Std"
              />
            </footer>
          </div>

          {/* Image à droite */}
          <div className="w-1/2 h-screen relative max-sm:hidden">
            <Image
              src="/asset/Section.svg"
              alt="Section Image"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </>
      </main>
    </div>
  );
};

export default PConnexion;
