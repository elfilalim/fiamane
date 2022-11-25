import { Link } from "react-router-dom";

import precedent from '../assets/precedent.png'
type Props = {
    changeStep: Function
}

function Confirmation({ changeStep }: Props) {
    return (
        // <div>
        //     <p>test confirmation</p>
        //     <button className='bg-red-500 p-50 w-40 h-12' onClick={() => changeStep('Password')}>Test confirmation button</button>
        // </div>
        <>
            <b className="mt-[68px] ml-[80%]"><Link to='/auth/signin'>Se connecter</Link></b>
            <div className="w-full h-full flex flex-col justify-center items-start bg-white space-y-10 px-36">
                <h1 className="font-bold text-3xl">Un code de confirmation vous attend dans votre boîte e-mail</h1>
                <p>Choisissez un mot de passe sécurisé dont vous vous souviendrez facilement.</p>
                
                <div className="h-12 w-full">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Code de confirmation</label>
                    <input type="email" id="email" className="bg-gray-50 border text-sm rounded-lg focus:ring-[#62C247] focus:border-blue-500 block w-full p-2.5 " placeholder="XXX - XXX" required />
                </div>
               
                <p>Votre code est peut-être dans vos spams, Toujours rien ?<br />
                     <span className="text-[#62C247]"><Link to='#'> Envoyer un nouveau code</Link></span> 
                </p>
                <div className="h-12 w-full">
                <div className="float-left">
                    <img src={precedent} alt="" className="float-left mt-1"/>
                    <b  onClick={() => changeStep('Email Step')}><Link to='/auth/signUp'>Retour</Link></b>
                </div>
                <div className="float-right">    
                
                    <b onClick={() => changeStep('Password')} ><Link to='/auth/signUp'>Suivent</Link></b>
                    
                </div>
            </div>
            </div>
        </>
    )

}
export default Confirmation; 