import { profile } from "console";
import { Link } from "react-router-dom";
import check from "../assets/check.png";
import pharmacie from "../assets/pharmacie.png"
import logOut from "../assets/logOut.png"
function Home() {
    return (
        <>
            <b className="mt-[68px] ml-[70%] "><Link to='#'>Nouvelle Pharmacie</Link></b>
            <div className="grid grid-cols-1 place-content-center w-3/4   my-[20px] max-w-lg  mx-auto w-full h-full flex flex-col justify-center items-start">
                <img alt="logo" src={check} className="mx-auto " />
                <h1 className="font-bold text-3xl text-center my-4">Vos identifiants sont prêts</h1>
                <p className="mx-auto my-4">Nous allons procéder à l’enregistrement de votre entreprise.</p>
                <div className="bg-[#62C24714] rounded-3xl text-center  my-4">
                    <img alt="profile" src={pharmacie} className="my-6 float-left mx-4" />
                    <p className="text-[#62C247] my-6">
                        Numéro de Siret de votre entreprise
                    </p>

                </div>

                <div >
                    <button
                        className="w-full bg-[#62C247] rounded h-12 text-white my-4" 
                       
                    >
                        Commencer la configuration
                    </button>
                </div>
                <p className="text-[#285C57]   text-left text-lg">
                    Il vous manque des éléments ? Connectez-vous à tout moment pour finaliser l’inscription
                </p>
                <div className="float-left  mx-auto  mt-[30%]">
                    <img src={logOut} alt="" className="float-left mt-1 mr-3" />
                    <b  ><Link to='/auth/signIn'>Deconnexion</Link></b>
                </div>
            </div>

        </>
    )

}
export default Home;


