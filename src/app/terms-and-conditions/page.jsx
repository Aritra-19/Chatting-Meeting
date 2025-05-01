"use client";
import React, { useState } from "react";

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      id: "overview",
      title: "Agreement Overview",
      content: (
        <div className="space-y-4">
          <p>Last updated: May 1, 2025</p>
          <p>
            Welcome to Chatting-Meeting. These Terms and Conditions constitute a
            legally binding agreement made between you and Chatting-Meeting
            ("we," "us," or "our"), governing your access to and use of our
            video conferencing platform and related services.
          </p>
          <p>
            By creating an account, accessing, or using our services, you agree
            to be bound by these Terms and Conditions. If you disagree with any
            part of these terms, you may not access our services.
          </p>
        </div>
      ),
    },
    {
      id: "accounts",
      title: "User Accounts",
      content: (
        <div className="space-y-4">
          <p>When creating and maintaining your Chatting-Meeting account:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              You must provide accurate, current, and complete information
              during registration
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials
            </li>
            <li>
              You are responsible for all activities that occur under your
              account
            </li>
            <li>
              You must notify us immediately of any unauthorized access or
              security breach
            </li>
            <li>
              You may not share your account or transfer it to another person or
              entity
            </li>
            <li>
              We reserve the right to suspend or terminate accounts with
              inaccurate information or suspected fraud
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "usage",
      title: "Acceptable Use",
      content: (
        <div className="space-y-4">
          <p>When using Chatting-Meeting services, you agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Use the service for any illegal purpose or in violation of any
              local, state, national, or international law
            </li>
            <li>
              Harass, abuse, or harm another person, including transmitting
              threatening or abusive content
            </li>
            <li>
              Share content that is defamatory, obscene, pornographic, indecent,
              or otherwise objectionable
            </li>
            <li>
              Impersonate another user or person, or falsely state or
              misrepresent your affiliation
            </li>
            <li>
              Interfere with or disrupt the service or servers connected to the
              service
            </li>
            <li>
              Attempt to gain unauthorized access to any part of the service
            </li>
            <li>
              Use the service to distribute malware, viruses, or other malicious
              code
            </li>
            <li>
              Use the service to collect user data without appropriate consent
            </li>
            <li>
              Engage in any automated use of the system or take any action that
              imposes an unreasonable load on our infrastructure
            </li>
          </ul>
          <p>
            We reserve the right to monitor content shared on our platform and
            remove any material that violates these terms.
          </p>
        </div>
      ),
    },
    {
      id: "content",
      title: "User Content and Responsibilities",
      content: (
        <div className="space-y-4">
          <p>With respect to content shared through our service:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              You retain all ownership rights to content you create or share
              through the service
            </li>
            <li>
              You are solely responsible for all content that you upload, post,
              email, transmit, or otherwise make available
            </li>
            <li>
              You grant us a worldwide, non-exclusive, royalty-free license to
              use, reproduce, adapt, and publish content solely for the purpose
              of displaying, distributing, and promoting the service
            </li>
            <li>
              You represent and warrant that you own or have the necessary
              licenses, rights, consents, and permissions to use and share any
              content
            </li>
            <li>
              You agree not to share content that infringes upon the
              intellectual property rights of others
            </li>
            <li>
              Meeting hosts are responsible for managing participant access and
              behaviors in their meetings
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "features",
      title: "Service Features and Limitations",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Meeting Features
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Meeting duration and participant limits may vary
            </li>
            <li>
              Screen sharing and file sharing features are provided for
              collaborative purposes
            </li>
            <li>
              Chat messages sent during meetings may be retained according to
              our data retention policies
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      content: (
        <div className="space-y-4">
          <p>To the maximum extent permitted by law:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES
            </li>
            <li>
              Our total liability for any claims under these terms shall not
              exceed the amount paid by you, if any, for the service during the
              twelve (12) months prior to the action giving rise to liability
            </li>
            <li>
              We are not liable for any loss or damage arising from your failure
              to comply with these terms
            </li>
            <li>
              We are not responsible for content shared by users or third
              parties through our service
            </li>
            <li>
              These limitations apply regardless of whether the damages are
              claimed under contract, tort, or any other legal theory
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "termination",
      title: "Account Termination",
      content: (
        <div className="space-y-4">
          <p>Regarding account suspension and termination:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              We reserve the right to suspend or terminate your access to our
              services at any time for violations of these terms
            </li>
            <li>
              We may terminate or suspend your account immediately, without
              prior notice or liability, for any reason
            </li>
            <li>
              Upon termination, your right to use the service will cease
              immediately
            </li>
            <li>
              All provisions of the Terms which by their nature should survive
              termination shall survive, including ownership provisions,
              warranty disclaimers, indemnity, and limitations of liability
            </li>
            <li>
              We are not obligated to maintain or return any of your content
              after account termination
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "changes",
      title: "Changes to Terms",
      content: (
        <div className="space-y-4">
          <p>
            We reserve the right to modify or replace these Terms at any time at
            our sole discretion. We will provide notice of any material changes
            through the service or by other means.
          </p>
          <p>
            Your continued use of our service after any such changes constitutes
            your acceptance of the new Terms.
          </p>
          <p>
            It is your responsibility to review these Terms periodically for
            changes.
          </p>
        </div>
      ),
    },
    {
      id: "contact",
      title: "Contact Information",
      content: (
        <div className="space-y-4">
          <p>
            If you have any questions about these Terms and Conditions, please
            contact us:
          </p>
          <ul className="list-none space-y-2">
            <li>Email: terms@chatting-meeting.com</li>
            <li>
              Online: Through our Help Center at chatting-meeting.com/help
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full min-h-screen px-4 py-10 sm:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
          Terms & Conditions
        </h1>
        <p className="mb-8 text-gray-600 dark:text-gray-300 text-base sm:text-lg">
          By using Chatting-Meeting, you agree to abide by these terms and
          conditions. Please read them carefully before using our service.
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
            For more information about how we handle your data, please refer to
            our{" "}
            <a href="/privacy-policy" className="text-blue-500 underline">
              Privacy Policy
            </a>
            .
          </p>
          <p className="mt-2">
            By using our service, you acknowledge that you have read and
            understood these Terms & Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
