import Image from "next/image";
import Link from "next/link";
const defmot = () => {
  return (
    <>
      <div>
        <main className="flex fixed  h-screen w-screen items-center justify-center ">
          <div className="  w-fit bg-white flex flex-col p-9 h-fit shadow-2xl border rounded-xl ">
            <div className=" flex items-center justify-center">
              <Image
                src="asset/exclam icon.svg"
                alt=" logo cle"
                width={60}
                height={50}
              />
            </div>
            <p className="text-3xl font-MerriweatherBold pt-3 text-center">
            Réinitialisation du mot
              <br />
              de passe
            </p>

            <p className="text-xs font-WorkSans pt-3 pb-3 text-center">
            Votre mot de passe a été réinitialisé avec <br /> succès. Cliquez ci-dessous pour vous <br /> connecter comme par magie.
            </p>

            

            <button className="hover:bg-purple-800 hover:cursor-default text-white justify-center items-center flex rounded-lg mt-4 bg-purple-600 h-10 font-WorkSans transition duration-1000">
              <Link href="/">Retour à la connexion</Link>
            </button>

            
           
          </div>
        </main>
      </div>
    </>
  );
};
export default defmot;
