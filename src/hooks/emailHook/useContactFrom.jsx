import { useState } from "react";
import emailjs from "@emailjs/browser";

const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  function validate() {
    let te = {};
    let { name, email, subject, message } = formData;
    let emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!email && !emailFormat.test(email)) te.email = "Valid email required";
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (!message && !format.test(message))
      te.message = "Valid message required";
    if (!name && !format.test(name)) te.name = "Valid name required";
    if (!subject && !format.test(subject))
      te.subject = "Valid subject required";
    setErrors(te);
    return Object.keys(te).length === 0;
  }

  const handleSubmit = async (formRef) => {
    if (!validate()) {
      toast.error("Cannot send message containing invalid characters ...");
      return;
    }
    setIsSending(true);
    await emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLICKEY }
      )
      .then((res) => {
        setIsSuccessful("We aim to get back to you within 3 working days");
      })
      .catch((err) => {
        toast.error("Could not send email");
      })
      .finally(setIsSending(false));
  };

  return {
    formData,
    isSuccessful,
    isSending,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useContactForm;
