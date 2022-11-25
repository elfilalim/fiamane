import { Link } from "react-router-dom";

type Props = {
    changeStep: Function
}

function Email({ changeStep }: Props) {
    return (
        <>
        <b  className="mt-[68px] ml-[80%]"><Link to='/auth/signin'>Se connecter</Link></b>
        <div className="w-full h-full flex flex-col justify-center items-start bg-white space-y-10 px-36">
            <h1 className="font-bold text-3xl">Saisissez votre adresse e-mail</h1>
            <p>Vous en aurez besoin pour vous connecter et accéder à votre application .</p>

            <div className="h-12 w-full">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Adresse e-mail</label>
                <input type="email" id="email" className="bg-gray-50 border text-sm rounded-lg focus:ring-[#62C247] focus:border-blue-500 block w-full p-2.5 " placeholder="Adresse e-mail" required />
            </div>
            
            
            <button
                className="w-full bg-[#62C247] rounded h-12 text-white"
                onClick={() => changeStep('Confirmation')}
            >
                Confirmer
            </button>
            <p>
            En cliquant sur Confirmer, vous acceptez notre <b><Link to='#'>Politique de Confidentialité</Link></b> applicable au traitement de vos données personnelles.

            </p>
        </div>
        </>
    )

}
export default Email; 