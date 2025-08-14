import React from "react";

const Terms = () => {
  return (
    <div className="bg-primary text-white py-40 px-6 font-poppins flex items-center justify-center">
      <div className="border border-sky-300/30 rounded-lg bg-slate-900/80 backdrop-blur-md shadow-lg hover:shadow-sky-400/40 transition-shadow duration-300 w-full md:w-5/6 p-10">
        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-sm mb-8 text-gray-300">Last Updated: 8/14/2025</p>

        <p className="mb-6 text-gray-300">
          Please read these Terms of Service ("Terms", "Terms of Service")
          carefully before using the EduZenix website and services (the
          "Service") operated by EduZenix Inc. ("us", "we", or "our").
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-300">
              By accessing or using the Service, you agree to be bound by these
              Terms. If you disagree with any part of the terms, then you may
              not access the Service. These Terms apply to all visitors, users,
              and others who access or use the Service, including institutions
              and students.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              2. Description of Service
            </h2>
            <p className="text-gray-300">
              EduZenix provides a comprehensive, cloud-based ERP platform for
              educational institutions. The Service includes features for
              admission and counseling, accounts management, hostel allotment,
              HRMS, academic management, and other related services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. User Accounts</h2>
            <p className="text-gray-300">
              When you create an account with us, you must provide information
              that is accurate, complete, and current at all times. Failure to
              do so constitutes a breach of the Terms, which may result in
              immediate termination of your account on our Service. You are
              responsible for safeguarding the password that you use to access
              the Service and for any activities or actions under your password.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Content</h2>
            <p className="text-gray-300">
              Our Service allows institutions to post, link, store, share, and
              otherwise make available certain information, text, graphics, or
              other material ("Content"). You are responsible for the Content
              that you post to the Service, including its legality, reliability,
              and appropriateness.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              5. Intellectual Property
            </h2>
            <p className="text-gray-300">
              The Service and its original content (excluding Content provided
              by users), features, and functionality are and will remain the
              exclusive property of EduZenix Inc. and its licensors.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Termination</h2>
            <p className="text-gray-300">
              We may terminate or suspend your account immediately, without
              prior notice or liability, for any reason whatsoever, including
              without limitation if you breach the Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-300">
              In no event shall EduZenix Inc., nor its directors, employees,
              partners, agents, suppliers, or affiliates, be liable for any
              indirect, incidental, special, consequential or punitive damages,
              including without limitation, loss of profits, data, use,
              goodwill, or other intangible losses, resulting from your access
              to or use of or inability to access or use the Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
            <p className="text-gray-300">
              These Terms shall be governed and construed in accordance with the
              laws of the jurisdiction in which our company is established,
              without regard to its conflict of law provisions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">9. Changes to Terms</h2>
            <p className="text-gray-300">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. We will provide at least 30 days' notice
              prior to any new terms taking effect. By continuing to access or
              use our Service after those revisions become effective, you agree
              to be bound by the revised terms.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Terms;
