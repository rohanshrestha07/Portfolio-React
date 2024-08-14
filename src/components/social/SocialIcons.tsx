import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function SocialIcons() {
    return (
        <div className="fixed flex flex-col w-16 h-56 p-5 right-0 my-64 rounded-s-3xl drop-shadow-2xl border-l-2 border-[#D3AF85] bg-[#423738] transition-all z-10"
        onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0px 15px rgba(244, 179, 21, 0.7)";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
        }}>
            <LinkedInIcon className='custom-cursor'
                style={{
                    marginTop: '0px',
                    color: '#F4B315'                
                }}/>
            <XIcon className='custom-cursor'
                style={{
                    marginTop: '15px',
                    color: '#F4B315'
                }}/>
            <FacebookIcon className='custom-cursor'
                style={{
                    marginTop: '15px',
                    color: '#F4B315'
                }}/>
            <InstagramIcon className='custom-cursor'
                style={{
                    marginTop: '15px',
                    color: '#F4B315'
                }}/>
            <GitHubIcon className='custom-cursor'
                style={{
                    marginTop: '15px',
                    color: '#F4B315'
                }}/>
        </div>
    )
}
