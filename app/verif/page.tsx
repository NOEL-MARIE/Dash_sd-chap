import Image from "next/image";
import Link from "next/link";

const psswd = () => {
  return (
    <>
      <div>
        <main className="flex fixed  h-screen w-screen items-center justify-center ">
          <div className="  w-fit bg-white flex flex-col p-7 h-fit shadow-2xl border rounded-xl ">
            <div className=" flex items-center justify-center">
              <Image
                src="/asset/Featured icon.svg"
                alt="img .exclamation"
                width={60}
                height={50}
              />
            </div>
            <p className=" font-MerriweatherBold pt-3 text-center text-3xl ">
              Vérifiez votre courrier <br />
              électronique
            </p>

            <p className="text-xs  pt-3 text-center">
              Nous avons envoyé un lien de réinitialisation <br />
              du mot de passe à philippe@gmail.com
            </p>

            <p className="text-xs font-WorkSans pt-3 text-center">
              Vous n'avez pas reçu l'e-mail ?
              <Link
                href="/defmot"
                className="text-[#633DA5]
"
              >
                Cliquer pour renvoyer
              </Link>
            </p>

            <button className=" border hover:bg-[#EEEEEE]  hover:cursor-default text-slate-950 justify-center items-center flex rounded-lg mt-4 h-10 font-WorkSans transition duration-1000">
              <Link href="/">Retour à la connexion</Link>
            </button>

            <button className="hover:bg-purple-800 hover:cursor-default text-white justify-center items-center flex rounded-lg mt-4 bg-purple-600 h-10 font-WorkSans transition duration-1000">
              <Link href="/component">DASHBOARD</Link>
            </button>
          </div>
        </main>
      </div>
    </>
  );
};
export default psswd;
