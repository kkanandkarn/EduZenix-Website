import React from "react";

const Policy = () => {
  return (
    <div className="bg-primary text-white py-40 px-6 font-poppins flex items-center justify-center">
      <div className="border border-sky-300/30 rounded-lg bg-slate-900/80 backdrop-blur-md shadow-lg hover:shadow-sky-400/40 transition-shadow duration-300 w-full md:w-5/6 p-10">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm mb-8 text-gray-300">Last Updated: 8/14/2025</p>

        <p className="mb-6 text-gray-300">
          EduZenix Inc. ("us", "we", or "our") operates the EduZenix website and
          services (the "Service"). This page informs you of our policies
          regarding the collection, use, and disclosure of personal data when
          you use our Service and the choices you have associated with that
          data.
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              1. Information Collection and Use
            </h2>
            <p className="text-gray-300">
              We collect several different types of information for various
              purposes to provide and improve our Service to you. This includes
              personal data provided by institutions (e.g., staff information)
              and students (e.g., application details, academic records).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              2. Types of Data Collected
            </h2>
            <p className="text-gray-300">
              Personal Data: While using our Service, we may ask you to provide
              us with certain personally identifiable information that can be
              used to contact or identify you ("Personal Data"). This may
              include, but is not limited to: Email address, Name, Phone number,
              Address, Academic qualifications. Usage Data: We may also collect
              information on how the Service is accessed and used ("Usage
              Data").
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Use of Data</h2>
            <p className="text-gray-300">
              EduZenix Inc. uses the collected data for various purposes: to
              provide and maintain the Service; to notify you about changes to
              our Service; to allow you to participate in interactive features
              of our Service when you choose to do so; to provide customer care
              and support; to provide analysis or valuable information so that
              we can improve the Service; to monitor the usage of the Service;
              to detect, prevent and address technical issues.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
            <p className="text-gray-300">
              The security of your data is important to us but remember that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your Personal Data, we cannot
              guarantee its absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Service Providers</h2>
            <p className="text-gray-300">
              We may employ third-party companies and individuals to facilitate
              our Service ("Service Providers"), to provide the Service on our
              behalf, to perform Service-related services or to assist us in
              analyzing how our Service is used. These third parties have access
              to your Personal Data only to perform these tasks on our behalf
              and are obligated not to disclose or use it for any other purpose.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              6. Your Data Protection Rights
            </h2>
            <p className="text-gray-300">
              You have certain data protection rights. EduZenix Inc. aims to
              take reasonable steps to allow you to correct, amend, delete, or
              limit the use of your Personal Data. If you wish to be informed
              what Personal Data we hold about you and if you want it to be
              removed from our systems, please contact us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              7. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-300">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
              You are advised to review this Privacy Policy periodically for any
              changes.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Policy;
