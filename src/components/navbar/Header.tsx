import { Link } from "react-router-dom";


export default function Header() {
    return (
    <>
        <div className="fixed w-56 h-screen flex-col flex justify-between bg-[#1A141A] drop-shadow-2xl text-[#D3AF85] py-16 font-semibold ">
            <div className="mx-auto h-40 w-40 rounded-full border-2 border-[#E59312] overflow-hidden text-[#E59312] transition-all"
                onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 0px 15px rgba(244, 179, 21, 0.7)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                }}>
                <img className="cursor-pointer" src="/src/assets/profile2.jpg" alt="profile picture" />
            </div>
            <ul className="flex-col justify-between text-center">
                <Link to={"/"}>
                <li className="my-10  hover:text-[#E59312] cursor-pointer"><p>Home</p></li>
                </Link>
                <Link to={"/services"}>
                    <li className="my-10  hover:text-[#E59312] cursor-pointer"><p>Services</p></li>
                </Link>
                <Link to={"/skills"}>
                <li className="my-10  hover:text-[#E59312] cursor-pointer"><p>Skills</p></li>
                </Link>
                <Link to={"/projects"}>
                <li className="my-10  hover:text-[#E59312] cursor-pointer"><p>Projects</p></li>
                </Link>
                <Link to={"/experience"}>
                <li className="my-10  hover:text-[#E59312] cursor-pointer"><p>Experience</p></li>
                </Link>
                <Link to={"/contact"}>
                <li className="my-10  hover:text-[#E59312] cursor-pointer"><p>Contact</p></li>
                </Link>
            </ul>
            <div className="mx-auto cursor-pointer">
                <label className=" border w-24 px-3 py-1 rounded-2xl text-center cursor-pointer transition-all text-[#E59312] hover:bg-[#D3AF85] hover:text-[#1A141A]" htmlFor="download-cv"
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
