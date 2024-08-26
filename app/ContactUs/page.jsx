"use client";
import { cloneElement, useState } from "react";
import {
  CiMobile1,
  CiMail,
  CiLinkedin,
  CiTwitter,
  CiFacebook,
  CiInstagram,
} from "react-icons/ci";
import { FaRegBuilding } from "react-icons/fa";
export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    extension: "",
    phone: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    const response = await fetch("http://localhost:3000/api/ContactUs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        extension: formData.extension,
        phone: formData.phone,
        message: formData.message,
      }),
    });

    if (response.status == 200) {
      setFormData({
        name: "",
        email: "",
        extension: "",
        phone: "",
        message: "",
      });
      setSuccess(true);
      setOpacity(100);
      setTimeout(() => {
        setSuccess(false);
        setOpacity(0);
      }, "2000");
    } else {
      setFail(true);
      setOpacity(100);
      setTimeout(() => {
        setFail(false);
        setOpacity(0);
      }, "2000");
    }

    // Trigger the transition
    console.log(response);
  };
  const extensions = [
    ["India", "+91"],
    ["US", "+100"],
  ];

  return (
    <div className="w-fit  m-auto flex justify-evenly items-center gap-28 px-10  py-3 mb-10 bg-ContactBg backdrop-blur-md rounded-xl">
      {success && (
        <div
          role="alert"
          className={`absolute top-10 z-100 alert alert-success flex justify-center w-1/5 transition duration-500 ease-in-out opacity-${opacity} top-0`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Successfully Submited</span>
        </div>
      )}
      {fail && (
        <div
          role="alert"
          className={`absolute top-10 z-100 alert alert-error flex justify-center w-1/5  transition duration-500 ease-in-out opacity-${opacity} top-0`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Failed To Submit.</span>
        </div>
      )}
      <div className="text-lg font-extrabold h-full w-1/2 dark:text-white flex flex-col justify-around items-center gap-3 ">
        <div className="text-xl text-center">Get in Touch</div>
        <div className="flex flex-col justify-around items-start gap-3 p-4">
          <div className="flex  items-center justify-center gap-2">
            <CiMobile1 /> <b>+91-9650021057</b>
          </div>
          <div className="flex  items-center justify-center gap-2">
            <CiMail /> <b>sales@letsgoSolutions.com</b>
          </div>
          <div className="flex  items-center justify-center gap-2">
            <FaRegBuilding /> <b>Delhi, cyber city, gurugram</b>
          </div>
          <div className="flex justify-around w-full p-2 text-3xl">
            <a href="">
              <CiLinkedin />
            </a>
            <a href="">
              <CiFacebook />
            </a>
            <a href="">
              <CiInstagram />
            </a>
            <a href="">
              <CiTwitter />
            </a>
          </div>
        </div>
      </div>
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-5">
        <div className="flex flex-col">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-matteBlack"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-matteBlack"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="extension">Extension: </label>
          <select
            name="extension"
            id="extension"
            value={formData.extension}
            onChange={handleChange}
            className="bg-matteBlack"
          >
            <option value="">Select Extension: </option>
            {extensions.map((el, key) => (
              <option key={key} value={`${el[0]} ${el[1]}`}>
                {el[0]} {el[1]}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone">Phone: </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="bg-matteBlack"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Message: </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-matteBlack"
          ></textarea>
           
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
