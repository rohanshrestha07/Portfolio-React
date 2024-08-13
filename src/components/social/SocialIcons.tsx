import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function SocialIcons() {
    return (
        <div className="fixed flex flex-col w-16 h-56 p-5 right-0 my-64 rounded-s-3xl drop-shadow-2xl border-l-2 border-[#D3AF85] bg-[#F4B315] bg-transparent ">
            <LinkedInIcon
                style={{
                    marginTop: '0px',
                    cursor: 'pointer',
                    color: '#F4B315'                
                }}/>
            <XIcon
                style={{
                    marginTop: '15px',
                    cursor: 'pointer',
                    color: '#F4B315'
                }}/>
            <FacebookIcon
                style={{
                    marginTop: '15px',
                    cursor: 'pointer',
                    color: '#F4B315'
                }}/>
            <InstagramIcon
                style={{
                    marginTop: '15px',
                    cursor: 'pointer',
                    color: '#F4B315'
                }}/>
            <GitHubIcon
                style={{
                    marginTop: '15px',
                    cursor: 'pointer',
                    color: '#F4B315'
                }}/>
        </div>
    )
}
