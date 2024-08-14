import { Link } from "react-router-dom";

export default function Header() {
    return (
    <>
        <div className=" fixed w-56 h-screen flex-col flex justify-between bg-[#1A141A] drop-shadow-2xl text-[#D3AF85] py-16 font-semibold ">
            <div className="mx-auto h-40 w-40">
                <img className="custom-cursor rounded-full border-2 border-[#E59312]  overflow-hidden transition-all"
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = "0 0px 15px rgba(244, 179, 21, 0.7)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                    }}
                    src="/src/assets/profile2.jpg" alt="profile picture" />
            </div>
            <ul className="flex flex-col text-center">
                <Link to={"/"}>
                <li className="mt-8  hover:text-[#E59312] custom-cursor"><p>Home</p></li>
                </Link>
                <Link to={"/services"}>
                    <li className="mt-8  hover:text-[#E59312] custom-cursor"><p>Services</p></li>
                </Link>
                <Link to={"/skills"}>
                <li className="mt-8  hover:text-[#E59312] custom-cursor"><p>Skills</p></li>
                </Link>
                <Link to={"/projects"}>
                <li className="mt-8  hover:text-[#E59312] custom-cursor"><p>Projects</p></li>
                </Link>
                <Link to={"/experience"}>
                <li className="mt-8  hover:text-[#E59312] custom-cursor"><p>Experience</p></li>
                </Link>
                <Link to={"/contact"}>
                <li className="mt-8  hover:text-[#E59312] custom-cursor"><p>Contact</p></li>
                </Link>
            </ul>
            <div className="mx-auto custom-cursor">
                <label className=" border w-24 px-3 py-1 rounded-2xl text-center custom-cursor transition-all text-[#E59312] hover:bg-[#D3AF85] hover:text-[#1A141A]" htmlFor="download-cv"
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = "0 0px 15px rgba(244, 179, 21, 0.7)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                    }}
                    >Hire Me</label>
            </div>
        </div>
    
    </>
    )
}
