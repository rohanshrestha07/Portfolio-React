
import { ReactNode } from 'react';
import Header from '../components/navbar/Header'
import SocialIcons from '../components/social/SocialIcons';

interface GuestLayoutProps {
    children: ReactNode;
}
export default function GuestLayout({ children }: GuestLayoutProps) {
    
    return (
    <>
        <div className="min-h-screen min-w-screen overflow-y-auto overflow-x-hidden bg-[#423738]">
            <Header/>
            <SocialIcons/>
            <div className={`mx-auto transition-all duration-700  ml-56`}>
                {children}
            </div>
        </div>
    </>
    )
}
