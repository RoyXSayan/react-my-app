import React, {} from 'react'

export default function About(props) {

    // const [ myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
        
    // })
let myStyle={
  color: props.mode === 'dark' ? 'white' : '#042743',
  backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
}

  return (
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button" style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             <strong> What is Text Textutils?</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             TextUtils is a tool that helps you clean up and organize your text. Whether you need to remove extra spaces, correct capitalization, or adjust line breaks, this tool simplifies your text editing tasks.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong> What is Word Counter?</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            The Word Counter tool is completely free and lets you quickly count words, characters, and sentences in your text. Perfect for writers, students, and anyone needing to track text length.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>What is Text Encryption and Decryption?</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Encrypt and decrypt your text for free to keep sensitive information secure. Protect your data with our easy-to-use encryption and decryption tools.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
