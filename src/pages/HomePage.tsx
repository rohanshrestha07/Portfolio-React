import DownloadIcon from '@mui/icons-material/Download';
import ServicePage from './ServicePage';
import SkillPage from './SkillPage';
import ProjectPage from './ProjectPage';
import ExperiencePage from './ExperiencePage';
import ContactPage from './ContactPage';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom';
import BeeImg from '../components/bee/BeeImg';
import BeeImg2 from '../components/bee/BeeImg2';

export default function HomePage() {
    useEffect(() => {
        AOS.init({
          offset: 200,        // offset (in px) from the original trigger point
          duration: 1000,     // values from 0 to 3000, with step 50ms
          easing: 'ease-in-out', // default easing for AOS animations
          delay: 100,         // values from 0 to 3000, with step 50ms
          once: true,         // whether animation should happen only once - while scrolling down
        });
    }, []);
    
    return (
        <>
        <div className=' min-h-screen min-w-screen mx-24 border-b border-[#D3AF85]' >
            <div className="py-44  text-[#D3AF85] ">
                <BeeImg/>
                <BeeImg2/>
                <div className="py-10">
                    <h1 className="font-extrabold text-[50px] " data-aos="fade-up">Hi ! I am A <span className="text-[#F4B315]">Frontend Developer</span> <br /> from Nepal</h1>
                    <p className="mt-10 pr-64" data-aos="fade-up" data-aos-delay="300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, sint. Odio, eos perferendis incidunt praesentium pariatur veniam est recusandae dolor dignissimos omnis architecto harum maxime libero reprehenderit, in quasi fuga exercitationem mollitia repellendus et accusantium?</p>
                </div>
                <div className="flex gap-10 font-semibold text-[#F4B315]" data-aos="fade-up" data-aos-delay="600">
                    <Link to={"/projects"}>
                    <button className="custom-cursor border-2 px-3 py-2 bg-[#D3AF85] text-[#1A141A] rounded-3xl border-[#D3AF85] hover:bg-[#D3AF85] hover:text-[#1A141A] transition-all"
                        style={{
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = "0 0px 15px rgba(244, 179, 21, 0.7)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "none";
                        }}
                        >Explore work</button>
                    </Link>
                    <button className="custom-cursor px-3 py-2 rounded-3xl border-2 border-[#D3AF85] transition-all"
                        style={{
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = "0 0px 15px rgba(244, 179, 21, 0.7)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "none";
                        }}>Download CV
                        <DownloadIcon/>
                        </button>
                </div>
            </div>
        </div>
                <ServicePage />
                <SkillPage />
                <ProjectPage />
                <ExperiencePage />
                <ContactPage />
        </>
    )
}
