import { Mail, Phone } from "lucide-react";
import Socials from "../../components/socials/Socials";
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

              <Socials />
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-caribbean-orange/10">
              <h3 className="font-display text-xl font-bold mb-6">
                Send Us a Message
              </h3>
              {/* Feedback messages */}
              {isSuccessful && (
                <div className="mb-4 p-3 rounded bg-green-100 text-green-700 border border-green-300">
                  Thank you! Your message has been sent.
                </div>
              )}
              {errors && (
                <div className="mb-4 p-3 rounded bg-red-100 text-red-700 border border-red-300">
                  {typeof errors === "string"
                    ? errors
                    : "Sorry, something went wrong. Please try again."}
                </div>
              )}
              <form
                ref={formRef}
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmitForEnquiry}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

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
                      name="name"
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
                      name="email"
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
                    name="subject"
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
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caribbean-orange/50"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send"}
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
