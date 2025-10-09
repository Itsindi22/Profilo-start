import React, { useRef, useState }  from "react";
import emailjs from '@emailjs/browser';
const Contact = () => {
    const fromRef = useRef(null)
    const [form,setForm] =useState({name: '', message: ''})
    const  [isLoading, setIsLoading] = useState(false);
   
   const handleChange = (e) => {
setForm({ ...form, [e.target.name] : e.target.value})
   };
   const handleFocus = () => {
   
   }
    const handleBlur = () => {
    
   }
   const  handleSubmit = (e) => {
     e.preventDefault();
    setIsLoading(true)

    console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,)
    emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
            from_name:form.name,
            to_name: "Inderpreet",
            form_email: form.email,
            to_email: 'isinghcode@gmail.com',
            message: form.message
        }, 
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY

    ).then (() => {
        setIsLoading(false)
// TODO: SHOW success message
// TODO:hide an alert
    }).catch ((error) => {
setIsLoading(false)
console.log(error)
    })

   }


   return (
<section className="relative flex Lg:flex-row flex-col 
max-container"> 
<div className="flex-1 main-w-[50%] flex flex-col">
    <h1 className="head-text"> Get in Touch</h1>

    <form
        className="w-full flex flex-col gap-7 mt-14"
            onSubmit={ handleSubmit}
            > 

            <label className="text-black-500 font semibold">Name
            <input 
            type=" text"
            name="name"
            className="input"
            placeholder="John"
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}


            />
             </label>
             <label className="text-black-500 font semibold">Email
             <input 
            type=" email"
            name="email"
            className="input"
            placeholder="john@gmail.com"
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}


            />

            </label>
             <label className="text-black-500 font semibold">Name
                        Your Message
         <textarea 
            type=" text"
            name="message"
            rows={4}
            className="textarea"
            placeholder="let me know how I can help you!"
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
 />
</label>
<button
type="submit"
className="btn"
disabled={isLoading}
onFocus={handleFocus}
onBlur={handleBlur}
>
    {isLoading ? 'sending...' : 'Send Message' }
</button>
    </form>
</div>

</section>    )
    
}

export default Contact