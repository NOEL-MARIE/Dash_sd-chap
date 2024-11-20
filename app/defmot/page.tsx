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
                src="asset/key icon.svg"
                alt=" logo cle"
                width={60}
                height={50}
              />
            </div>
            <p className="text-3xl font-MerriweatherBold pt-3 text-center">
              Définir un nouveau
              <br />
              mot de passe
            </p>

            <p className="text-xs font-WorkSans pt-3 pb-3 text-center">
              Votre nouveau mot de passe doit être différent <br /> des mots de
              passe utilisés précédemment.
            </p>

            <label
              htmlFor="email"
              className=" justify-center items-center flexpt-3 pb-1  font-WorkSans text-xs"
            >
              Mot de passe
            </label>
            <input
              id="email"
              className="h-10 text-left border-[#CCCCCC] border rounded-lg  placeholder-gray-500 pl-3"
              type="text"
              placeholder="*********"
            />
            <p className="text-xs font-WorkSans text-left pb-3 ">
              Doit comporter au moins 8 caractères.
            </p>

            <label
              htmlFor="email"
              className=" justify-center items-center flexpt-3 pb-1  font-WorkSans text-xs"
            >
              Mot de passe
            </label>
            <input
              id="email"
              className=" placeholder-shown:marker:selection:file:placeholder:backdrop:before:after:first:last:only:odd:even:first-of-type:last-of-type h-10 text-left border-[#CCCCCC] border rounded-lg  placeholder-gray-500 p-3"
              type="email"
              placeholder="*********"
            />

            <button className="hover:bg-purple-800 hover:cursor-default text-white justify-center items-center flex rounded-lg mt-4 bg-purple-600 h-10 font-WorkSans transition duration-1000">
              <Link href="/clean">Réinitialiser le mot de passe</Link>
            </button>
          </div>
        </main>
      </div>
    </>
  );
};
export default defmot;
