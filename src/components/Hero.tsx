import logo from '../assets/logo.png';
import profile from '../assets/profile.png';

function Hero() {
    return (
        <div className="grid grid-cols-1 place-content-center w-3/4 mx-20  max-w-lg mx-auto ">
            <img alt="logo" src={logo} className="mx-auto mb-[80px]" />
            <div className="bg-[#285C57] rounded-3xl text-center h-72  ">
                <img alt="profile" src={profile} className="mx-auto my-6"/>
                <p className="text-white mx-[34px]  mb-[63px]">
                    “In the tech world, you can’t afford to be slow. Because of Uizard, within five days of getting my idea – 
                    with only two days of working in the Uizard platform –
                     I already had a proof of concept.”
                </p>

            </div>

            <div >
                <div className="bg-[#62C247]  ">
                    
                </div>
                <p className="text-white bg-[#62C247] w-36 rounded-2xl text-center -mt-8 mb-[100px] px-4  py-5 ml-[60%]">
                Nthalie Durand,
                WellPharma
                </p>
            </div>
            <b  className="text-[#285C57]  mx-[100px]  text-center text-lg">
                Rejoingez +10,000 pharmaciens connectés
            </b>
        </div>
    )

}
export default Hero; 