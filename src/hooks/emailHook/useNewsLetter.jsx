import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const useNewsLetterForm = () => {
  const [contact, setContact] = useState({
    email: "",
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
    let { email } = contact;
    let emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!email && !emailFormat.test(email)) te.email = "Valid email required";
  }


  const handleSubmit = async (formRef) => {
    if (!validate()) {
      console.log({ ...errors });
      toast.error("Cannot send message containing invalid characters ...");
      console.log("invalid");
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
        console.log(res);
        setIsSuccessful("We aim to get back to you within 3 working days");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Could not send email");
      })
      .finally(setIsSending(false));
  };

  return {
    contact,
    isSuccessful,
    isSending,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useNewsLetterForm;
