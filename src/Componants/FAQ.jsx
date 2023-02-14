import React from "react";

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">
        <p>{faq.answer}</p>
        <p>{faq.answer2}</p>
        <p>{faq.answer3}</p>
      </div>
    </div>
  );
};

export default FAQ;
