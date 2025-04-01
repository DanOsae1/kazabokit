import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import { useRef } from "react";
import useContactForm from "../../hooks/emailHook/useContactFrom";


const Contact = () => {
  const formRef = useRef();
  const {
    formData,
    isSuccessful,
    isSending,
    errors,
    handleChange,
    handleSubmit,
  } = useContactForm();

  const handleSubmitForEnquiry = (e) => {
    e.preventDefault();
    handleSubmit(formRef);
  };

  return (
    <section id="contact" className="py-20 bg-section-gradient">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title text-center after:left-1/4 after:w-1/2">
            Contact Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6 max-w-md">
              <p className="text-lg">
                Have a question or want to book us for your event? We'd love to
                hear from you!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-caribbean-orange/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-caribbean-orange" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href="mailto:Kazabokituk@gmail.com"
                      className="text-caribbean-orange hover:underline transition-all"
                    >
                      Kazabokituk@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-caribbean-orange/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-caribbean-orange" />
                  </div>
                  <div>
                    <h3 className="font-medium">Telephone</h3>
                    <a
                      href="tel:07903432256"
                      className="text-caribbean-orange hover:underline transition-all"
                    >
                      07903 432 256
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-caribbean-orange/10">
                <h3 className="font-medium mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/Kaza.bokituk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-caribbean-orange text-white flex items-center justify-center hover:bg-caribbean-yellow transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/KazAbokit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-caribbean-orange text-white flex items-center justify-center hover:bg-caribbean-yellow transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@Kazabokituk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-caribbean-orange text-white flex items-center justify-center hover:bg-caribbean-yellow transition-colors"
                    aria-label="TikTok"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                      <path d="M16 8v4a4 4 0 0 1-4 4"></path>
                      <path d="M8.5 9.5 6 11V6.5a2 2 0 0 1 2-2h.5L12 2h2v10.5"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-caribbean-orange/10">
              <h3 className="font-display text-xl font-bold mb-6">
                Send Us a Message
              </h3>
              <form
                ref={formRef}
                onSubmit={handleSubmitForEnquiry}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      onChange={handleChange}
                      value={formData.name}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caribbean-orange/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caribbean-orange/50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-1"
                  >
                    Subject
                  </label>
                  <input
                    value={formData.subject}
                    onChange={handleChange}
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caribbean-orange/50"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    onChange={handleChange}
                    value={formData.message}
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caribbean-orange/50"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   toast.success(
                  //     "Your message has been sent! We'll get back to you soon."
                  //   );
                  // }}
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send"}
                  {/* {isSuccessful && <p style={{ color: "green" }}>{success}</p>}
                  {errors && <p style={{ color: "red" }}>{errors}</p>} */}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
