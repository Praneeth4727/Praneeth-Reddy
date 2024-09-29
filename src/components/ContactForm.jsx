import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { FiSend } from 'react-icons/fi';
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!formData.name) errors.name = "Please enter your name";
    if (!formData.email) {
      errors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!formData.message) errors.message = "Please enter your message";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_tgve42i",
          "template_ef35f6j",
          formData,
          "vLZkp831eSqHnhL9t",
        )
        .then(() => {
          toast.success("Message Sent Successfully..!");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Something went wrong..!");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className="p-4 lg:w-3/4" id="contact">
      <Toaster />
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">Connect With Me</h2>
      <motion.form
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.8, delay: 0.7}}
      
      onSubmit={handleSubmit}>
        <div className="mb-4 flex space-x-4">
          <div className="lg:w-1/2">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="mb-8 w-full rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby="name-error"
            />
            {errors.name && (
              <motion.p 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}    
              className="text-sm text-red-800">{errors.name}</motion.p>
            )}
          </div>

          <div className="lg:w-1/2">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="mb-8 w-full rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby="email-error"
            />
            {errors.email && (
              <motion.p
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}

              id="email-error" className="text-sm text-red-800">{errors.email}</motion.p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="mb-8 w-full rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            rows="6"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby="message-error"
          />
          {errors.message && (
            <motion.p
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
            
            id="message-error" className="text-sm text-red-800">{errors.message}</motion.p>
          )}
        </div>
        <button
          type='submit'
          className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
          disabled={isSending}
        >
          <div className='flex items-center justify-center gap-2'>
            {isSending ? "Sending..." : "Send"}
            <FiSend />
          </div>
        </button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
