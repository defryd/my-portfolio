
import { useState } from 'react';

export const FormSection = () => {

    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);
    const [isHuman, setIsHuman] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleCaptchaChange = (e) => {
        setIsHuman(e.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('form', form);
            const response = await fetch('https://formspree.io/f/mvgayozr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    message: form.message
                })
            });

            if (response.ok) {
                setStatus('success');
                setForm({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus(error);
        }
    };

    return (
        <section id='contact' className='pt-6'>
            <h2 className='text-3xl font-semibold mb-6 text-center'>Contact Me</h2>
            <p className='text-lg text-gray-300 text-center mb-4'>
                Feel free to reach out to me on my social media:
            </p>
            <div className='flex justify-center space-x-4'>
                <a href="https://www.linkedin.com/in/freddychiav" className='text-blue-400 hover:underline'>LinkedIn</a>
                <a href="https://github.com/defryd" className='text-blue-400 hover:underline'>GitHub</a>
            </div>

            <form onSubmit={handleSubmit} className='mt-6 max-w-md mx-auto'>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className='w-full p-2 mb-4 bg-gray-800 rounded-lg'
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className='w-full p-2 mb-4 bg-gray-800 rounded-lg'
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className='w-full p-2 mb-4 bg-gray-800 rounded-lg'
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    required
                />

                <label className="flex items-center mb-4 text-sm text-gray-300">
                    <input
                        type="checkbox"
                        checked={isHuman}
                        onChange={handleCaptchaChange}
                        className="mr-2"
                    />
                    I'm not a robot
                </label>

                <button
                    type="submit"
                    className={`py-2 px-4 rounded-lg transition duration-300 
                    ${isHuman
                    ? 'bg-matrix-green text-black hover:bg-matrix-other'
                    : 'bg-gray-500 text-white cursor-not-allowed'}`}
                    disabled={!isHuman}
                >
                    Send Message
                </button>

                {status === 'success' && (
                    <p className="text-green-400 mt-2 text-center">Message sent successfully!</p>
                )}
                {status === 'error' && (
                    <p className="text-red-400 mt-2 text-center">Something went wrong. Please try again.</p>
                )}
            </form>
        </section>
    )
}
