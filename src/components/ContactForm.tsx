'use client'

import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        setIsSubmitting(true);

        event.preventDefault();
        event.stopPropagation();

        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_YOUR_SERVICE_ID || "", process.env.NEXT_PUBLIC_EMAILJS_YOUR_TEMPLATE_ID || "", event.currentTarget, process.env.NEXT_PUBLIC_EMAILJS_YOUR_USER_ID || "")
        .then((result) => {
            setSubmitted(true);
        }, (error) => {
            setIsSubmitting(false);
            console.log(error.text);
        });
    }

    return submitted ? 
        <div>
            <h4>Thank you for your message :)</h4>
        </div>
        :
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <div className="flex gap-4 w-full">
                <div className="flex flex-col w-[calc(50%-8px)]">
                    <label htmlFor="name" className="mb-1">Name<sup>*</sup></label>
                    <input required name="name" id="name" type="text" placeholder="First and Last Name" className="border border-white/50 p-4"></input>
                </div>
                <div className="flex flex-col w-[calc(50%-8px)]">
                    <label htmlFor="email" className="mb-1">Email<sup>*</sup></label>
                    <input required name="email" id="email" type="email" placeholder="email@example.com" className="border border-white/50 p-4"></input>
                </div>
            </div>
            
            <div className="flex flex-col">
                <label htmlFor="message" className="mb-1">Message<sup>*</sup></label>
                <textarea required rows={4} name="message" id="message" className="border border-white/50 p-4"></textarea>
            </div>
        
            <input type="submit" value="Send" disabled={isSubmitting} className='rounded-full border border-solid transition-colors flex items-center justify-center gap-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 outline-offset-4 w-full sm:w-auto border-transparent dark:bg-white bg-foreground dark:text-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]'></input>
       </form> 
}

export default ContactForm; 
