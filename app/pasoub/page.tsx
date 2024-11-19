"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Psswd = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!email) {
      setEmailError("Veuillez entrer une adresse email.");
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Veuillez entrer une adresse email valide.");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail()) {
      console.log("Validation réussie !");
      // Redirection ou autre logique ici
    }
  };

  return (
    <>
      <div>
        <main className="fixed flex h-screen w-screen items-center justify-center">
          <div className="w-fit bg-white flex flex-col p-7 h-fit shadow-2xl border rounded-xl">
            <div className="flex items-center justify-center">
              <Image
                src="/asset/Featured icon.svg"
                alt="Image d'exclamation"
                width={60}
                height={50}
              />
            </div>
            <h1 className="justify-center items-center flex font-MerriweatherBold pt-5 text-3xl">
              Mot de passe oublié ?
            </h1>
            <p className="text-xs font-WorkSans pt-3 text-center">
              Pas de problème, nous vous enverrons <br />
              des instructions de réinitialisation.
            </p>

            <label
              htmlFor="email"
              className="justify-center items-center flex pt-3 pb-2 pl-2 font-WorkSans text-xs"
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

           
              <button
                onClick={handleSubmit}
                className="hover:bg-purple-800 hover:cursor-default text-white justify-center items-center flex rounded-lg mt-4 bg-purple-600 h-10 w-full font-WorkSans transition duration-1000"
              >
                  <Link href="/verif">Demande de réinitialisation</Link>
              </button>
            

            <button className="hover:bg-purple-100 hover:cursor-default text-purple-600 justify-center items-center flex rounded-lg mt-4 h-10 font-WorkSans transition duration-1000">
              <Link href="/">Retour à la connexion</Link>
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Psswd;
