import { Outlet } from "react-router";
import Hero from "../components/Hero";

function Authentication() {
    return (
        <div className='w-screen h-screen bg-[#F2F8F4] flex'>
            {/* Login/Signup */}
            <div className='h-full w-full xl-w-3/6 '>
                <Outlet />
            </div>


            {/* Poster */}
            <div className="hidden w-4/5 h-full md:flex flex-col justify-center items-center">
                <Hero/>
            </div>
        </div>
    )

}
export default Authentication;