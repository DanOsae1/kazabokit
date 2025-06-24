import React from "react";

const PrivacyPolicy = () => (
  <main className="min-h-screen bg-gray-50 py-16 px-4">
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">Privacy Policy</h1>
      <p className="mb-4">
        <strong>Kaz A Bokit</strong> ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you provide your email address for marketing purposes.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Information We Collect</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Email Address:</strong> We collect your email address when you subscribe to our newsletter or marketing communications.
        </li>
        {/* <li><strong>{...information type...}:</strong> {...goes here...}</li> */}
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">How We Use Your Information</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          To send you marketing emails about our products, services, promotions, and updates.
        </li>
        <li>
          To improve our communications and provide relevant content.
        </li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">How We Protect Your Information</h2>
      <p className="mb-4">
        We implement appropriate technical and organizational measures to protect your email address from unauthorized access, disclosure, alteration, or destruction.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Sharing Your Information</h2>
      <p className="mb-4">
        We do <strong>not</strong> sell, trade, or otherwise transfer your email address to outside parties. Your information may be shared with trusted service providers who assist us in operating our website and sending emails, provided they agree to keep this information confidential.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Your Choices</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          You may unsubscribe from our marketing emails at any time by clicking the "unsubscribe" link in any email we send.
        </li>
        <li>
          To request access, correction, or deletion of your information, please contact us at <a href="mailto:Kazabokituk@gmail.com" className="text-orange-600 underline">Kazabokituk@gmail.com</a>.
        </li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">Children's Privacy</h2>
      <p className="mb-4">
        We do not knowingly collect or solicit personal information from anyone under the age of 16. If you believe a child has provided us with personal information, please contact us so we can remove the information.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:Kazabokituk@gmail.com" className="text-orange-600 underline">Kazabokituk@gmail.com</a>.
      </p>
      <p className="mt-8 text-sm text-gray-500">Effective Date: {new Date().toLocaleDateString()}</p>
    </div>
  </main>
);

export default PrivacyPolicy