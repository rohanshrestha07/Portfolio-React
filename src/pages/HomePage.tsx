import DownloadIcon from '@mui/icons-material/Download';
import ToolIcons from '../components/toolicons/ToolIcons';

export default function HomePage() {
    return (
        <>
            <div className="mx-24 my-48 text-[#D3AF85]">
                <div className="my-10">
                    <h1 className="font-extrabold text-[50px] row">Hi ! I am A <span className="text-[#F4B315]">Frontend Developer</span> <br /> from Nepal</h1>
                    <p className="mt-10 pr-64">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, sint. Odio, eos perferendis incidunt praesentium pariatur veniam est recusandae dolor dignissimos omnis architecto harum maxime libero reprehenderit, in quasi fuga exercitationem mollitia repellendus et accusantium?</p>
                </div>
                <div className="flex gap-10 font-semibold text-[#F4B315]">
                    <button className="border-2 px-3 py-2 bg-[#D3AF85] text-[#1A141A] rounded-3xl border-[#D3AF85] hover:bg-[#D3AF85] hover:text-[#1A141A] transition-all"
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = "0 0px 15px rgba(244, 179, 21, 0.7)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "none";
                        }}
                        >Explore work</button>
                    <button className="px-3 py-2 rounded-3xl border-2 border-[#D3AF85] transition-all"
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
            <ToolIcons/>
        </>
    )
}
