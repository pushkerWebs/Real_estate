import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", '0fc58be2-d38b-4808-85db-08e913dad1b9');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
     toast.success("Form Submitted Successfully")
    }
  };
  return (
    <div className="flex flex-col items-center container justify-center mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden" id="Contact">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Contact <span className="font-light underline decoration-1 underline-offset-8">With Us</span></h1>
      <p className="text-gray-600 text-lg text-center mb-8 max-w-80 ">Ready to Make a Move? Let’s Build Your Future Together</p>

      <form onSubmit={onSubmit} action="" className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">Your Name
            <input name="Name" className="w-full border border-gray-300 rounded py-3 px-3 mt-2" type="text" placeholder="Your Name" required />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4" >Your Email
            <input name="Email" className="w-full border border-gray-300 rounded py-3 px-3 mt-2" type="email" placeholder="Your Email" required />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-28 resize-none" name="Message" placeholder="Message" required></textarea>
        </div>
        <button className="bg-blue-600 text-white py-3 px-8 mb-10 rounded ">Send Message</button>
      </form>
    </div>
  )
}
export default Contact






