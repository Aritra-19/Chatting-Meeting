"use client";
import React, { useState } from "react";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      id: "overview",
      title: "Privacy Policy Overview",
      content: (
        <div className="space-y-4">
          <p>Last updated: May 1, 2025</p>
          <p>
            This Privacy Policy explains how Chatting-Meeting ("we", "us", or
            "our") collects, uses, and shares your information when you use our
            video conferencing application and related services. By using our
            services, you consent to the data practices described in this
            policy.
          </p>
          <p>
            Our commitment is to be transparent about the data we collect,
            provide you with meaningful choices about how it's used, and protect
            your information with industry-standard security practices.
          </p>
        </div>
      ),
    },
    {
      id: "collection",
      title: "Information We Collect",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Account Information
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Basic profile data (name, email address, profile picture) when you
              sign in with Google or GitHub
            </li>
            <li>Account preferences and settings</li>
            <li>Optional information you choose to add to your profile</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Meeting Data
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Meeting titles, participants, duration, and join/leave times
            </li>
            <li>Chat messages exchanged during meetings</li>
            <li>
              Meeting recordings (only if explicitly initiated by the host with
              participant notification)
            </li>
            <li>Shared files and screen content during meetings</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Technical Data
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address and general location data</li>
            <li>
              Device information (browser type, operating system, device type)
            </li>
            <li>Network performance metrics</li>
            <li>Service usage statistics</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </div>
      ),
    },
    {
      id: "usage",
      title: "How We Use Your Information",
      content: (
        <div className="space-y-4">
          <p>We use your information for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              To provide, maintain, and improve our video conferencing services
            </li>
            <li>To authenticate your identity and manage your account</li>
            <li>
              To personalize your experience and remember your preferences
            </li>
            <li>To facilitate communication between meeting participants</li>
            <li>To analyze usage patterns and optimize service performance</li>
            <li>
              To detect, prevent, and address technical issues and security
              threats
            </li>
            <li>To comply with applicable laws and regulations</li>
            <li>To respond to your requests, questions, and feedback</li>
          </ul>
        </div>
      ),
    },
    {
      id: "sharing",
      title: "Information Sharing",
      content: (
        <div className="space-y-4">
          <p>We may share your information in the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              With other meeting participants (names, email addresses, profile
              pictures, and shared content)
            </li>
            <li>
              With third-party service providers who help us operate our service
              (hosting, authentication, analytics)
            </li>
            <li>If required by law or to respond to legal process</li>
            <li>
              To protect the rights, property, or safety of our users, our
              company, or others
            </li>
            <li>
              In connection with a business transfer, merger, or acquisition
            </li>
          </ul>
          <p>
            We do not sell your personal information to advertisers or other
            third parties.
          </p>
        </div>
      ),
    },
    {
      id: "security",
      title: "Data Security",
      content: (
        <div className="space-y-4">
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>End-to-end encryption for meeting content</li>
            <li>
              Secure data storage and transmission using industry-standard
              protocols
            </li>
            <li>Regular security audits and vulnerability assessments</li>
            <li>
              Access controls limiting data access to authorized personnel
            </li>
            <li>
              Meeting protection features (waiting rooms, participant
              management, meeting locks)
            </li>
          </ul>
          <p>
            While we strive to protect your information, no method of
            transmission over the Internet or electronic storage is 100% secure.
            We cannot guarantee absolute security.
          </p>
        </div>
      ),
    },
    {
      id: "children",
      title: "Children's Privacy",
      content: (
        <div className="space-y-4">
          <p>
            Our services are not intended for children under 16 years of age. We
            do not knowingly collect personal information from children under
            16. If you are a parent or guardian and believe your child has
            provided us with personal information, please contact us
            immediately.
          </p>
          <p>
            For educational use involving children, we recommend that
            administrators and educators:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Obtain appropriate parental consent</li>
            <li>Use institution-managed accounts</li>
            <li>
              Enable additional privacy protections available in account
              settings
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "changes",
      title: "Changes to This Privacy Policy",
      content: (
        <div className="space-y-4">
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last updated" date.
          </p>
          <p>
            We encourage you to review our Privacy Policy periodically for any
            changes. Your continued use of our services after we post changes to
            the Privacy Policy constitutes your acceptance of those changes.
          </p>
        </div>
      ),
    },
    {
      id: "contact",
      title: "Contact Us",
      content: (
        <div className="space-y-4">
          <p>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us:
          </p>
          <ul className="list-none space-y-2">
            <li>Email: privacy@[chatting-meeting].com</li>
            <li>Online: Through our Help Center at [chatting-meeting].com/help</li>
          </ul>
          <p>
            For data subjects in the EU, our Data Protection Officer can be
            contacted at dpo@[chatting-meeting].com.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full min-h-screen px-4 py-10 sm:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
          Privacy Policy
        </h1>
        <p className="mb-8 text-gray-600 dark:text-gray-300 text-base sm:text-lg">
          We respect your privacy and are committed to protecting your personal
          data. This policy describes how we collect, use, and share your
          information when you use our video conferencing application.
        </p>

        <div className="space-y-6">
          {sections.map((section) => (
            <div
              key={section.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 dark:bg-gray-800 flex justify-between items-center"
                onClick={() => toggleSection(section.id)}
              >
                <span className="text-xl font-semibold text-gray-800 dark:text-white">
                  {section.title}
                </span>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    activeSection === section.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeSection === section.id && (
                <div className="px-6 py-4 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-base">
          <p>
            For more information, please refer to our{" "}
            <a href="/terms-and-conditions" className="text-blue-500 underline">
              Terms & Conditions
            </a>
            .
          </p>
          <p className="mt-2">
            By using our service, you acknowledge that you have read and
            understood this Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
