import React, { useRef, useState } from "react";
import WomanImg from "../img/contact/woman.png";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "06 31 89 45 66",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "lucasju@hotmail.fr",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "59000 Lille, France",
  },
];

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g2rmp9q",
        "template_2vct25s",
        form.current,
        "65cpTbJonagAtRqck"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setMessageSent(true);
          setError(false);
          // setTimeout(() => {
          //   setMessageSent(false);
          // }, 5000);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          console.log("message not sent");
          setError(true);
          setMessageSent(false);
          // setTimeout(() => {
          //   setError(false);
          // }, 5000);
        }
      );
  };

  return (
    <div className="overflow-hidden">
      <motion.section
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={transition1}
        className="section bg-white"
      >
        <div className="container mx-auto h-full">
          <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-[100px] gap-x-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={transition1}
              className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10"
            ></motion.div>
            <div className="lg:flex-1 lg:pt-32 px-4">
              <h1 className="h1">Contact <span className="text-[#339989]">me</span></h1>
              <p className="mb-4">I would love to get suggestions from you.</p>

              <div className="flex-1 flex items-center order-1 xl:order-none mb-8 xl:mb-0">
                <ul className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
                  {info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={`flex items-center gap-6 ${
                          item.title === "Address" ? "lg:col-span-2" : ""
                        }`}
                      >
                        <div className="w-[52px] h-[52px] bg-black/20 rounded-md flex items-center justify-center">
                          <div className="text-[28px]">{item.icon}</div>
                        </div>
                        <div className="flex flex-col items-start">
                          <p>{item.title}</p>
                          <h3>{item.description}</h3>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-y-4 relative"
              >
                <div className="flex gap-x-10">
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    placeholder="Your name*"
                    required
                    className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  />
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    placeholder="Your email address*"
                    required
                    className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  />
                </div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message*"
                  required
                  className="pt-[15px] outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                />
                <button
                  type="submit"
                  className="btn mb-[30px] mx-auto lg:mx-0 self-start"
                >
                  <span>Send it</span>
                </button>

                {messageSent && !error && (
                  <div
                    className="absolute left-0 right-0 bottom-[-50px] z-50 mt-2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded"
                    role="alert"
                  >
                    <strong className="font-bold">Message envoyé ! </strong>
                    <span className="block sm:inline">
                      Nous vous recontacterons dès que possible.
                    </span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                      <svg
                        className="fill-current h-6 w-6 text-green-500"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <title>Close</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                      </svg>
                    </span>
                  </div>
                )}
                {error && (
                  <div
                    className="absolute left-0 right-0 bottom-[-50px] mt-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
                    role="alert"
                  >
                    <strong className="font-bold">Erreur ! </strong>
                    <span className="block sm:inline">
                      Une erreur s'est produite, veuillez réessayer.
                    </span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                      <svg
                        className="fill-current h-6 w-6 text-red-500"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <title>Close</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                      </svg>
                    </span>
                  </div>
                )}
              </form>
            </div>
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ transition: transition1, duration: 1.5 }}
              className="lg:flex-1"
            >
              <img src={WomanImg} alt="" />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
