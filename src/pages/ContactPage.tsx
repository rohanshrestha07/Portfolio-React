import ContactBee from "../components/bee/ContactBee";
import ContactMinion from "../components/bee/ContactMinion";


export default function ContactPage() {
    return (
        <>
            <div id="contact" className=" relative min-h-screen min-w-screen px-24 border-b border-[#D3AF85]">
                <div className="text-center py-36">
                    <ContactMinion/>
                    <ContactBee/>
                    <div>
                        <h2 className="font-bold text-center text-[#F4B315] text-[50px]" data-aos="fade-up">CONTACT</h2>
                        <p className="text-[25px] mx-32 mb-8 text-center text-[#D3AF85]" data-aos="fade-up" data-aos-delay="300">
                            Interested in working together? <br/> Let's talk
                        </p>
                    </div>

                    <div>
                        <form action="#" className="grid gap-3 px-32" data-aos="fade-up" data-aos-delay="600">
                            <div className="flex flex-wrap gap-2">
                                <div className="flex-1 min-w-[240px]">
                                    <input
                                        type="text"
                                        className="form-control w-full"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="flex-1 min-w-[240px]">
                                    <input
                                        type="email"
                                        className="form-control w-full"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="form-control w-full"
                                    placeholder="Enter subject"
                                />
                            </div>
                            <div className="col-12">
                                <textarea
                                    name=""
                                    className="form-control w-full min-h-24 rounded-lg px-2 py-1"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="custom-cursor w-full bg-[#F4B315] h-16 rounded-lg font-semibold"
                                    style={{
                                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = '0 0px 15px rgba(244, 179, 21, 0.7)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    Contact me
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

