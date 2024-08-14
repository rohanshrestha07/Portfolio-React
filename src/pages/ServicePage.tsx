import '../App.css'; // Import your CSS file for styling
// You can use any icon library like FontAwesome, Material-UI, etc.
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';
import ServiceBee2 from '../components/bee/ServiceBee2';
import MinionsHanging from '../components/bee/MinionsHanging';
import MinionsWatching from '../components/bee/MinionsWatching';

export default function ServicePage(){
    const servicesData = [
        {
        icon: <FaCode />,
        title: 'Web Development',
        description: 'Building responsive and functional websites using modern technologies.',
        },
        {
        icon: <FaPaintBrush />,
        title: 'UI/UX Design',
        description: 'Designing user-friendly interfaces with a focus on user experience.',
        },
        {
        icon: <FaMobileAlt />,
        title: 'Mobile App Development',
        description: 'Creating cross-platform mobile applications that provide a seamless experience.',
        },
    ];

    return (
        <>
        <div className='relative min-h-screen min-w-screen '>
            <div className="py-36 mx-24 border-b border-[#D3AF85]"> 
                <MinionsHanging/>
                <ServiceBee2/>
                <MinionsWatching/>
                <h2 className="font-bold text-center text-[#F4B315] text-[50px]" data-aos="fade-left">SERVICES</h2>
                <p className="mx-32 my-8 text-center text-[#D3AF85] " data-aos="fade-right" data-aos-delay="300">
                I offer a range of services to help bring your ideas to life. Whether you need a complete website, a mobile app, or just a stunning design, I've got you covered.
                </p>
                <div className="services-grid" data-aos="fade-up" data-aos-delay="600">
                    {servicesData.map((service, index) => (
                        <div key={index} className="service-item custom-cursor">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title text-[#F4B315]">{service.title}</h3>
                            <p className="service-description text-[#D3AF85]">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

