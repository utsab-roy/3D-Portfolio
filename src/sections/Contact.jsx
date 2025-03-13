import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const fromRef = useRef();

    const [loading , setLoading] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handelChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value})
    }

    //service_rbnh6wg
    const handelSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        try{
            await emailjs.send('service_rbnh6wg',
                'template_jbvl6cs',
                {
                    from_name: form.name,
                    to_name: 'Utsab Roy',
                    from_email: form.email,
                    to_email: 'greatgoku001@gmail.com',
                    message: form.message,
                },
                'l2Nnosafndov6YnoY'
                );

            setLoading(false);
            alert('Thank you. I will get back to you as soon as possible.');

            setForm({
                name: '',
                email: '',
                message: '',
            })

        } catch (error) {
            setLoading(false);
            console.log(error);
            alert('Something went wrong. Please try again.');

        }
    }

    return (
        <section className="c-space my-20">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen" />
                <div className="contact-container">
                    <h3 className="head-text">Let's Talk</h3>
                    <p className="text-lg text-white-600 mt-3">Excited to collaborate or just have a quick chat? I’d love to hear from you! Feel free to reach out, and let’s create something amazing together.</p>

                    <form ref={fromRef} onSubmit={handelSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handelChange}
                                required
                                className="field-input"
                                placeholder="Utsab Roy"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handelChange}
                                required
                                className="field-input"
                                placeholder="utsabroy01022001@gmail.com"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Your Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handelChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Hi, I'm interested in..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact
