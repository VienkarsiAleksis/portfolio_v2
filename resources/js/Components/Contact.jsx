import React, { useState } from 'react';
import styles from '../../css/Home.module.scss';
import Wave from '../Components/Waves';

export default function Contact() {
    const [formErrors, setFormErrors] = useState({});
    const [formValues, setFormValues] = useState({
        from_name: '',
        user_email: '',
        message: ''
    });
    const [processing, setProcessing] = useState(false);
    const [emailStatus, setEmailStatus] = useState('');

const showEmailStatus = (message) => {
    setEmailStatus(message);

    setTimeout(() => {
        setEmailStatus('');
    }, 3000);
};

const sendEmail = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    setProcessing(true);
    setEmailStatus('');

    try {
        const response = await fetch('https://formspree.io/f/xnpnvoqa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                from_name: formValues.from_name,
                user_email: formValues.user_email,
                message: formValues.message,
            }),
        });

        if (response.ok) {
            console.log('SUCCESS!');

            setFormValues({
                from_name: '',
                user_email: '',
                message: '',
            });

            setFormErrors({});

            showEmailStatus('Email sent successfully!');
        } else {
            const data = await response.json();

            console.log('FAILED...', data);

            showEmailStatus(
                'Failed to send email. Please try again later.'
            );
        }
    } catch (error) {
        console.error('FAILED...', error);

        showEmailStatus(
            'Failed to send email. Please try again later.'
        );
    } finally {
        setProcessing(false);
    }
};

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const validateForm = () => {
        let errors = {};

        if (!formValues.from_name) {
            errors.from_name = 'Name is required';
        }

        if (!formValues.user_email) {
            errors.user_email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formValues.user_email)) {
            errors.user_email = 'Email address is invalid';
        }

        if (!formValues.message) {
            errors.message = 'Message is required';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    return (
        <section
            id="contact"
            className={`${styles.contacts} relative flex min-h-screen items-center justify-center bg-[#F5F5F3] px-5 py-20`}
        >
            <Wave
                color="#BC707A"
                position="top"
                flip
            />
            <div className="flex min-h-[80vh] w-full max-w-[1100px] flex-col items-center justify-center rounded-sm border border-[#E2E0DC] bg-[#FDFCF9] px-6 py-16 md:px-16 lg:px-30">

                <h2>Send me a message!</h2>

                <p className="text-center">
                    Got a question or proposal, or just want to say hello?
                    Go ahead.
                </p>

                {emailStatus && (
                <div
                    className={`fixed right-5 top-5 z-50 rounded-sm border px-5 py-3 shadow-lg ${
                        emailStatus === 'Email sent successfully!'
                            ? 'border-green-200 bg-green-50 text-green-600'
                            : 'border-red-200 bg-red-50 text-red-600'
                    }`}
                >
                    {emailStatus}
                </div>
            )}

                <form
                    onSubmit={sendEmail}
                    className="mt-8 flex w-full max-w-[800px] flex-col gap-6"
                >
                    <div className="flex flex-col border-b border-[#BC707A]">
                        <label htmlFor="from_name">Name</label>
                        <input
                            id="from_name"
                            name="from_name"
                            type="text"
                            value={formValues.from_name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="border-0 bg-transparent py-3 outline-none"
                        />
                        {formErrors.from_name && (
                            <span className="mb-2 text-sm text-[#BC707A]">
                                {formErrors.from_name}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col border-b border-[#BC707A]">
                        <label htmlFor="user_email">Email</label>
                        <input
                            id="user_email"
                            name="user_email"
                            type="email"
                            value={formValues.user_email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="border-0 bg-transparent py-3 outline-none"
                        />
                        {formErrors.user_email && (
                            <span className="mb-2 text-sm text-[#BC707A]">
                                {formErrors.user_email}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col border-b border-[#BC707A]">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formValues.message}
                            onChange={handleChange}
                            placeholder="Hi! Love your websites, keep it up!"
                            className="min-h-[120px] resize-none border-0 bg-transparent py-3 outline-none"
                        />
                        {formErrors.message && (
                            <span className="mb-2 text-sm text-[#BC707A]">
                                {formErrors.message}
                            </span>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="mx-auto mt-4 w-36 rounded-sm border-2 border-[#BC707A] bg-white py-2 transition hover:bg-[#BC707A] hover:text-white disabled:opacity-50"
                    >
                        {processing ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </div>
        </section>
    );
}