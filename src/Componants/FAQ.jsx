import React, { Fragment } from "react";

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
          {faq.answer2}
          <br />
          {faq.answer3}
        </p>
        {faq.part1Title ? (
          <p>
            <span>{faq.part1Title}</span>
            {faq.part1Array.map((arr, i) => (
              <Fragment key={index + "" + i}>
                <br />
                {arr}
              </Fragment>
            ))}
          </p>
        ) : (
          ""
        )}
        <br />
        {faq.part2Title ? (
          <p>
            <span>{faq.part2Title}</span>
            {faq.part2Array.map((arr, i) => (
              <Fragment key={index + "" + i}>
                <br />
                {arr}
              </Fragment>
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
