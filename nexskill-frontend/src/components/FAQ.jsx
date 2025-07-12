import React from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "Is it free to use?",
      a: "Yes, the platform is completely free for users to list their skills and connect with others.",
    },
    {
      q: "Is it secure?",
      a: "Absolutely. We ensure user privacy and data protection through secure authentication and encrypted communication.",
    },
    {
      q: "How does skill swapping work?",
      a: "You list the skills you can offer and the ones you're looking for. The platform helps match you with users who complement your skills.",
    },
    {
      q: "Do I need to meet in person?",
      a: "No, skill swaps can be conducted virtually through video calls, chats, or collaborative tools.",
    },
    {
      q: "Can I offer more than one skill?",
      a: "Yes, you can list as many skills as you'd like to share or learn.",
    },
  ];

  return (
    <section className="py-16 bg-transparent dark:bg-gray-900 mb-5">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold">{faq.q}</h3>
              <p className="text-black/80 dark:text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
