import { useState } from "react";
import Confirmation from "./Confirmation";
import Password from "./Password";
import Email from "./Email";
function SignUp() {

    const [step, setStep] = useState('Email Step');

    return (
        <div className="w-full h-full flex flex-col justify-center items-start bg-white space-y-10 ">
            {
                {
                    'Email Step': <Email changeStep={setStep} />,
                    'Confirmation': <Confirmation changeStep={setStep} />,
                    'Password':<Password changeStep={setStep} />
                }[step]
            }
        </div>
    )

}
export default SignUp; 