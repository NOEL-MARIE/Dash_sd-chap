"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PConnexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateForm = () => {
    let isValid = true;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulaire validé !");
    }
  };

  return (
    <div>
      <main className="fixed w-screen h-screen">
        {/* Image de fond pour sm */}
        <div className="absolute inset-0 bg-cover bg-center max-sm:bg-[url('/asset/Section.svg')] sm:bg-[url('/asset/Section.svg')] sm:z-0 max-sm:z-0"></div>

        {/* Section de connexion */}
        <div className="relative z-10 max-sm:absolute max-sm:inset-0 sm:absolute sm:inset-0 sm:flex max-sm:flex sm:items-center max-sm:items-center sm:justify-center max-sm:justify-center h-screen w-full  sm:w-11/12  max-sm:mx-auto sm:mx-auto max-sm:rounded-lg sm:rounded-3xl bg-white p-6 max-sm:shadow-2xl sm:shadow-2xl">
          <div className="w-full max-w-md">
            <Image
              src="/asset/app icons.svg"
              alt="Logo Send Chap"
              width={60}
              height={50}
              className="mx-auto"
            />
            <h1 className="font-MerriweatherBold text-center capitalize pt-5 text-3xl">
              Connexion
            </h1>
            <p className="text-center text-xs font-WorkSans pt-3 max-sm:text-white sm:text-gray-600">
              Bienvenue à nouveau ! Veuillez saisir vos coordonnées.
            </p>

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="pt-6">
              {/* Email */}
              <label
                htmlFor="email"
                className="block pb-2 font-WorkSans text-xs max-sm:text-white"
              >
                Email
              </label>
              <input
                id="email"
                className="w-full h-10 border-[#CCCCCC] border rounded-lg shadow-sm pl-3"
                type="email"
                placeholder="Entrer votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <p className="text-red-500 text-sm pt-1">{emailError}</p>
              )}

              {/* Mot de passe */}
              <label
                htmlFor="password"
                className="block pt-4 pb-2 font-WorkSans text-xs max-sm:text-white"
              >
                Mot de passe
              </label>
              <input
                id="password"
                className="w-full h-10 border-[#CCCCCC] border rounded-lg shadow-sm pl-3"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <p className="text-red-500 text-sm pt-1">{passwordError}</p>
              )}

              {/* Checkbox */}
              <div className="flex items-center pt-4">
                <input
                  id="rememberMe"
                  type="checkbox"
                  className="hover:cursor-pointer"
                />
                <label
                  htmlFor="rememberMe"
                  className="text-sm font-WorkSans ml-2 max-sm:text-white"
                >
                  Se souvenir pendant 30 jours
                </label>
              </div>

              {/* Bouton de connexion */}
              <button
                type="submit"
                className="w-full h-10 bg-purple-600 hover:bg-purple-800 text-white rounded-lg mt-4 font-WorkSans transition duration-300"
              >
                Se connecter
              </button>
            </form>

            {/* Lien mot de passe oublié */}
            <div className="text-center pt-4">
              <Link
                href="/pasoub"
                className="text-purple-600 hover:underline text-sm"
              >
                Mot de passe oublié ?
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PConnexion;
