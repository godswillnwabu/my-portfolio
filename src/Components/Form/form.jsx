import { useRef } from "react";
import emailjs from '@emailjs/browser';

function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8o7wads', 'template_120flnk', form.current, {
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
        <form ref={form} onSubmit={sendEmail} className="px-4 md:px-10 lg:px-20">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 mt-10 w-full">
                <input type="text" name="from_name" placeholder="Your Name" className="w-full border-1 border-black/25 py-3 px-2 my-3 focus:outline-none font-oswald" required />
                <input type="email" name="from_email" placeholder="Your Email" className="w-full border-1 border-black/25 py-3 px-2 my-3 focus:outline-none font-oswald" required />
            </div>

            <div>
                <textarea name="message" rows="5" placeholder="Your Message" className="w-full border-1 border-black/25 py-3 px-2 my-5 focus:outline-none font-oswald" required></textarea>
            </div>

            <div className="text-center">
                <input type="submit" value="Send Message" className="inline-block bg-black text-white py-2 px-6 mt-5 cursor-pointer font-montserrat">
                </input>
            </div>
        </form>
    )
}

export default ContactForm;