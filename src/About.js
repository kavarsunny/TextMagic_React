import React from "react";

export default function About(props) {
  // Set up style for dark and light modes
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
  };

  return (
    <div className="container">
      <h1
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        {/* First Accordion Item */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count, or other text
              analysis.
            </div>
          </div>
        </div>

        {/* Second Accordion Item */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              TextUtils reports the number of words and characters. Thus it is
              suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>

        {/* Third Accordion Item */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browser such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits
              counting characters in Facebook, blogs, books, Excel documents,
              PDF documents, essays, etc.
            </div>
          </div>
        </div>
      </div>

      {/* Personal Introduction */}
      <div
        className="my-4"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <p>
          Hello! I am Sunny Kavar, a dedicated and passionate student currently
          pursuing a Bachelor of Engineering (BE) in the Information Technology
          field at SSEC College.
        </p>

        <p>
          With a strong interest in technology, coding, and problem-solving, I
          am constantly striving to enhance my knowledge and skills to
          contribute to the rapidly growing IT industry. My journey as an
          engineering student at SSEC has provided me with invaluable learning
          experiences and opportunities to explore a wide range of tech-related
          topics.
        </p>

        <p>
          I am excited to continue growing, collaborating with like-minded
          peers, and exploring the world of software development and IT
          solutions. Through hard work and perseverance, I aim to make
          meaningful contributions to the tech community and make the most of
          every opportunity that comes my way.
        </p>

        <p>
          Thank you for visiting my profile, and I look forward to the future!
        </p>
      </div>

      {/* Footer */}
      <div className="footer text-center my-4">
        <p>&copy; 2025 Sunny Kavar. All rights reserved.</p>
      </div>
    </div>
  );
}
