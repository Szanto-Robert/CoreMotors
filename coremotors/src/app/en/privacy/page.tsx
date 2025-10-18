import React from "react";

const PrivacyPolicyEN = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-red-600 mb-8">
          Privacy Policy
        </h1>

        <p className="mb-4">
          This policy explains how <span className="font-semibold">CoreMotors </span> 
          collects, uses, and protects the personal information of visitors and clients
          who use our website.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">1. Data Collected</h2>
        <p className="mb-4">
          Through our contact and booking forms, we may collect the following personal data:
          name, email address, phone number, and the message you provide.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">2. Purpose of Data Collection</h2>
        <p className="mb-4">
          The data is used solely to respond to customer requests and bookings, and to improve
          our services. We do not use your data for marketing purposes without your consent.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">3. Data Storage and Security</h2>
        <p className="mb-4">
          Your information is stored securely and is accessible only to authorized staff.
          We do not share data with third parties without your explicit consent.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">4. User Rights</h2>
        <p className="mb-4">
          According to Regulation (EU) 2016/679 (GDPR), you have the right to access, correct,
          or delete your personal data.  
          For any request, please contact us at:{" "}
          <a href="mailto:coremotors@gmail.com" className="text-red-600 underline">
            coremotors@gmail.com
          </a>.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">5. Cookies</h2>
        <p className="mb-4">
          Our website may use cookies to enhance the user experience.
          You can disable cookies at any time through your browser settings.
        </p>

        <p className="mt-8 text-sm text-gray-600 italic">
          Last updated: October 2025
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyEN;
