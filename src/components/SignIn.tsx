import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {

    const navigate = useNavigate();
    // ------------------------------backend tools -----------------------------
    // const [email, setemail] = useState('email');
    // const [password, setpassword] = useState('password');

    function toSignup() {
        // tasks //

        navigate('/');
    }


    return (
        <div className="w-full h-full flex flex-col justify-center items-start bg-white space-y-10 px-36">
            <h1 className="font-bold text-3xl">Se connecter</h1>
            <p>Pas de compte  ?  <span className="text-[#62C247]"><Link to='/auth/signup'>S’inscrire</Link></span> </p>

            <div className="h-12 w-full">
                <input type="email" id="email" className="bg-gray-50 border text-sm rounded-lg focus:ring-[#62C247] focus:border-blue-500 block w-full p-2.5 " placeholder="Adresse e-mail" required />
            </div>
            <div className="h-12 w-full">
                <input type="password" id="password" className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Mot de passe" required />
            </div>
            <div className="h-12 w-full">
                <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  />
                <label htmlFor="disabled-checkbox" className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">Rester connecter</label>
                <div className="float-right">    
                    <Link to='/auth/signup'  onClick={() => changeStep('Confirmation')}> Mot de passe oublié ?</Link>
                </div>
            </div>
            <button
                className="w-full bg-[#62C247] rounded h-12 text-white"
                onClick={() => toSignup()}
            >
                Se connecter
            </button>
        </div>
    )

}
export default SignIn; 

function changeStep(arg0: string): void {
    throw new Error("Function not implemented.");
}
