import ContactForm from "../../Components/Form/form";

function ContactSection() {
    

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

            <ContactForm />

        </section>
    )
}

export default ContactSection;