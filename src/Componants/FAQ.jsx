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
        <p>
          {faq.answer}
          <br />
          <br />
          {faq.answer2}
          <br />
          <br />
          {faq.answer3}
        </p>
        <br />
        {faq.part1Title ? (
          <p>
            <br />
            <span>{faq.part1Title}</span>
            {faq.part1Array.map((arr, i) => (
              <>
                <br key={index + "" + i} />
                {arr}
              </>
            ))}
          </p>
        ) : (
          ""
        )}
        {faq.part2Title ? (
          <p>
            <br />
            <span>{faq.part2Title}</span>
            {faq.part2Array.map((arr, index) => (
              <>
                <br />
                {arr}
              </>
            ))}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FAQ;
