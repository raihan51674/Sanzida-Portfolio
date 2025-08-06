import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone, MdWhatsapp, MdLocationOn, MdSend } from 'react-icons/md';
import { FaLinkedin } from "react-icons/fa6";
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import emailjs from '@emailjs/browser';

const MySwal = withReactContent(Swal);

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onChange',
    defaultValues: { name: '', email: '', subject: '', message: '' }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_nynr5dj',
        'template_4hpms5h',
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          time: new Date().toLocaleString(),
          message: data.message,
        },
        'z20e81QJ7954OO52b'
      );

      MySwal.fire({
        title: <p className="text-2xl font-bold">✅ Message Sent!</p>,
        html: <p className="text-gray-700">Thank you for reaching out. I'll respond within 24 hours.</p>,
        icon: 'success',
        confirmButtonColor: '#3b82f6',
        confirmButtonText: 'Okay',
        customClass: { popup: 'rounded-xl shadow-2xl', confirmButton: 'px-6 py-2 rounded-lg' }
      });
      reset();
    } catch (error) {
      MySwal.fire({
        title: 'Error!',
        text: 'Failed to send message. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#ef4444'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } }
  };

  return (
    <section id="contact" className="relative bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-28 px-4 overflow-hidden">
      {/* Floating particles */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full opacity-20 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 5}s`,
          }}
        ></div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.4)] mb-4">
            Let's Connect
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Got a project or opportunity? Reach out and let's make something amazing together!
          </p>
        </motion.div>

        {/* Contact grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            {[
              { icon: <MdEmail className="text-2xl text-blue-400" />, title: "Email", info: "Shanzidashopna2017@gmail.com", link: "mailto:mdraihan51674@gmail.com" },
              { icon: <FaLinkedin className="text-2xl text-blue-400" />, title: "LinkedIn", info: "Connect with me", link: "#" },
              { icon: <MdPhone className="text-2xl text-green-400" />, title: "Phone", info: "+88 01978216907", link: "tel:+88 01978216907" },
              { icon: <MdWhatsapp className="text-2xl text-emerald-400" />, title: "WhatsApp", info: "+88 01978216907", link: "https://wa.me/+88 01978216907" },
              { icon: <MdLocationOn className="text-2xl text-purple-400" />, title: "Location", info: "C Block, Basundhara R/A, Dhaka, Bangladesh" }
            ].map((item, index) => (
              <motion.a
                whileHover={{ scale: 1.02 }}
                key={index}
                href={item.link || "#"}
                target={item.link?.includes("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-blue-500/50 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-300">{item.title}</h4>
                  <p className="text-blue-300">{item.info}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 space-y-6 hover:shadow-[0_0_35px_rgba(59,130,246,0.2)] transition-all"
              noValidate
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              {['name', 'email', 'subject', 'message'].map((field, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-300 mb-2 capitalize">
                    {field} <span className="text-red-500">*</span>
                  </label>
                  {field !== 'message' ? (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      {...register(field, { required: `${field} is required`, minLength: { value: 3, message: `${field} too short` } })}
                      className="w-full px-4 py-3 bg-white/5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border border-white/10"
                      placeholder={field === 'name' ? "John Doe" : field === 'email' ? "john@example.com" : "Project Inquiry"}
                    />
                  ) : (
                    <textarea
                      id="message"
                      rows="5"
                      {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message too short" } })}
                      className="w-full px-4 py-3 bg-white/5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border border-white/10"
                      placeholder="Your message here..."
                    ></textarea>
                  )}
                  {errors[field] && <p className="mt-1 text-sm text-red-400">{errors[field].message}</p>}
                </motion.div>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <MdSend className="text-lg" /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
