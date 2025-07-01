'use client'

import { useState } from 'react';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = () => {

    }

    return (
       <form className="flex flex-col gap-8">
            <div className="flex gap-4 w-full">
                <div className="flex flex-col w-[calc(50%-8px)]">
                    <label htmlFor="name" className="mb-1">Name</label>
                    <input name="name" id="name" placeholder="First and Last Name" className="border border-white/50 p-4"></input>
                </div>
                <div className="flex flex-col w-[calc(50%-8px)]">
                    <label htmlFor="email" className="mb-1">Email</label>
                    <input name="email" id="email" placeholder="email@example.com" className="border border-white/50 p-4"></input>
                </div>
            </div>
            
            <div className="flex flex-col">
                <label htmlFor="message" className="mb-1">Message</label>
                <textarea rows={4} name="message" id="message" className="border border-white/50 p-4"></textarea>
            </div>
        
            <input onClick={handleSubmit} type="submit" value="Send" disabled={isSubmitting} className='rounded-full border border-solid transition-colors flex items-center justify-center gap-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 outline-offset-4 w-full sm:w-auto border-transparent dark:bg-white bg-foreground dark:text-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]'></input>
       </form>
    )
}

export default ContactForm; 
