import { useRef } from "react";
// import { EmailJSResponseStatus } from "@emailjs/browser";
import emailjs from '@emailjs/browser';

function ContactSection() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_iul91wp', 'template_120flnk', form.current, {
                publicKey: 'TKS-AwTMlLHKZZHoO'
            }).then((result) => {
                console.log('SUCCESS!', result.text);
                alert("Message sent!");
            }, (error) => {
                    console.error("FAILED...", error.text);
                    alert("Message failed to send.")
                },
            );
    };

    return (
        <section id="contact" className="w-full h-auto pt-20 pb-20 md:pb-40">

            <div className="flex flex-col items-center justify-center">
                <h2 className="font-michroma text-4xl md:text-6xl text-center capitalize mb-10">Let's chat</h2>

                <div className="max-w-4xl text-center">
                    <p className="font-poppins leading-relaxed">
                        If you need a modern and powerful website for your business, start-ups or personally, you can email me; <br /> I will give you a time and cost estimate.
                    </p>
                </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className="px-4 md:px-10 lg:px-20">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 mt-10 w-full">
                    <input type="text" placeholder="Your Name" className="w-full border-1 border-black/25 py-3 px-2 my-3 focus:outline-none font-oswald" required/>
                    <input type="email" placeholder="Your Email" className="w-full border-1 border-black/25 py-3 px-2 my-3 focus:outline-none font-oswald" required/>
                </div>

                <div>
                    <textarea rows="5" placeholder="Your Message" className="w-full border-1 border-black/25 py-3 px-2 my-5 focus:outline-none font-oswald" required></textarea>
                </div>

                <div className="text-center">
                    <input type="submit" value="Send Message" className="inline-block bg-black text-white py-2 px-6 mt-5 cursor-pointer font-montserrat">
                    </input>
                </div>
            </form>

        </section>
    )
}

export default ContactSection;