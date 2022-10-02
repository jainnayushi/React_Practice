import "./form.css";
// import { getFormData } from "./form.js";

import { useState } from "react";

function Comp4() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    comment: "",
    radio: "",
    checkbox: "",
    dropdown: "",
  });
  const [userErr, setUserErr] = useState({
    nameErr: "",
    emailErr: "",
    ageErr: "",
    commentErr: "",
    radioErr: "",
    checkboxErr: "",
    dropdownErr: "",
  });

  const [err, setErr] = useState();
  //   const [pass, setPass] = useState();

  const getFormData = (e) => {
    e.preventDefault();

    // Validate Name
    if (user.name === "") {
      setUserErr({ nameErr: "Name cannot be Empty!" });
      setErr("true");
    } else if (String(user.name).length <= 3) {
      setUserErr({ nameErr: "Name must be more than 3 character" });
      setErr("true");
    } else {
      setErr("false");
    }
    // Validate Email
    let mailformat = /^[^ ]+@[^ ]+\.([a-z]{2,3})$/;
    if (user.email === "") {
      setUserErr({ emailErr: "Email cannot be Empty!" });
      setErr("true");
    } else if (!String(user.email).match(mailformat)) {
      setUserErr({ emailErr: "Email must be in proper format!" });
      setErr("true");
    } else {
      setErr("false");
    }
    // Validate Comment
    if (user.comment === "") {
      setUserErr({ commentErr: "Comment cannot be Empty!" });
      setErr("true");
    } else {
      setErr("false");
    }
    // // Validate Radio button
    // let radio = document.getElementById("radio");
    // if (document.querySelector('input[name="recommend"]:checked') == null) {
    //   setError(radio, "Cannot be Empty!");
    // } else {
    //   setSuccess(radio);
    //   // console.log("Selected radio is", radio.value);
    // }
    // // Validate Checkbox Button
    // let checkbox = document.getElementById("checkbox");
    // if (document.querySelector('input[type="checkbox"]:checked') == null) {
    //   setError(checkbox, "Cannot be Empty!");
    // } else {
    //   setSuccess(checkbox);
    // }
    // // Validate Dropdown
    // let dropdownValue = dropdown.value;
    // // let dropdown = document.getElementById("feature")
    // if (dropdownValue == null) {
    //   setError(dropdown, "Cannot be Empty!");
    // } else {
    //   setSuccess(dropdown);
    // }
    console.log("user Error", userErr, user);
  };
  return (
    <>
      <body className="body">
        <section className="section">
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          <div className="container">
            <div className="form-container">
              <form id="form">
                <div className="row">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                    onChange={(e) => {
                      setUser({ name: e.target.value });
                      setUserErr({ nameErr: "" });
                      setErr(false);
                    }}
                  />
                  {err === "true" ? (
                    <i
                      className="fa fa-exclamation-circle"
                      aria-hidden="true"
                    ></i>
                  ) : err === "false" ? (
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                  ) : (
                    " "
                  )}
                  {userErr.nameErr && <p className="err">{userErr.nameErr}</p>}
                </div>
                <div className="row">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                    onChange={(e) => {
                      setUser({ email: e.target.value });
                      setUserErr({ emailErr: "" });
                      setErr(false);
                    }}
                  />
                  {err === "true" ? (
                    <i
                      className="fa fa-exclamation-circle"
                      aria-hidden="true"
                    ></i>
                  ) : err === "false" ? (
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                  ) : (
                    " "
                  )}
                  {userErr.emailErr && (
                    <p className="err">{userErr.emailErr}</p>
                  )}
                </div>

                <div className="row overflow">
                  <label htmlFor="feature">
                    Which option best describes you ?
                  </label>
                  <select id="feature" name="feature">
                    <option value="student">Student</option>
                    <option value="intern">Intern</option>
                    <option value="professional">Professional</option>
                    <option value="other">Other</option>
                  </select>
                  <i className="fa fa-check-circle" aria-hidden="true"></i>
                  <i
                    className="fa fa-exclamation-circle"
                    aria-hidden="true"
                  ></i>
                  <small>Error</small>
                </div>

                <div className="row">
                  <label>Would you recommend GeeksforGeeks to a friend?</label>
                  <br />
                  <div id="radio" name="radio" className="radio">
                    <div>
                      <input type="radio" name="recommend" value="yes" />
                      <label htmlFor="yes">Yes</label>
                    </div>
                    <div>
                      <input type="radio" name="recommend" value="no" />
                      <label htmlFor="no">No</label>
                    </div>
                    <div>
                      <input type="radio" name="recommend" value="maybe" />
                      <label htmlFor="maybe">Maybe</label>
                    </div>
                  </div>
                  <i className="fa fa-check-circle" aria-hidden="true"></i>
                  <i
                    className="fa fa-exclamation-circle"
                    aria-hidden="true"
                  ></i>
                  <small>Error</small>
                </div>

                <div className="row">
                  <label htmlFor="lang">
                    Languages and frameworks known (Check all that apply)
                  </label>
                  <div id="checkbox" className="wrapper">
                    <div className="checkbox">
                      <div className="div">
                        <input type="checkbox" id="C" name="lang" value="C" />
                        <label htmlFor="lang"> C</label>
                        <br />
                      </div>
                      <div className="div">
                        <input
                          type="checkbox"
                          id="C++"
                          name="lang"
                          value="C++"
                        />
                        <label htmlFor="lang"> C++</label>
                        <br />
                      </div>
                      <div className="div">
                        <input type="checkbox" id="C#" name="lang" value="C#" />
                        <label htmlFor="lang"> C#</label>
                        <br />
                      </div>
                      <div className="div">
                        <input
                          type="checkbox"
                          id="Java"
                          name="lang"
                          value="Java"
                        />
                        <label htmlFor="lang"> Java</label>
                        <br />
                      </div>
                      <div className="div">
                        <input
                          type="checkbox"
                          id="Python"
                          name="lang"
                          value="Python"
                        />
                        <label htmlFor="lang"> Python</label>
                        <br />
                      </div>
                      <div className="div">
                        <input
                          type="checkbox"
                          id="JavaScript"
                          name="lang"
                          value="JavaScript"
                        />
                        <label htmlFor="lang"> JavaScript</label>
                        <br />
                      </div>
                      <div className="div">
                        <input
                          type="checkbox"
                          id="React"
                          name="lang"
                          value="React"
                        />
                        <label htmlFor="lang"> React</label>
                        <br />
                      </div>
                      <div className="div">
                        <input
                          type="checkbox"
                          id="Angular"
                          name="lang"
                          value="Angular"
                        />
                        <label htmlFor="lang"> Angular</label>
                        <br />
                      </div>
                      <div className="div">
                        <input
                          type="checkbox"
                          id="Django"
                          name="lang"
                          value="Django"
                        />
                        <label htmlFor="lang"> Django</label>
                        <br />
                      </div>
                      <div className="div">
                        <input
                          type="checkbox"
                          id="Spring"
                          name="lang"
                          value="Spring"
                        />
                        <label htmlFor="lang"> Spring</label>
                        <br />
                      </div>
                    </div>
                  </div>
                  <i className="fa fa-check-circle" aria-hidden="true"></i>
                  <i
                    className="fa fa-exclamation-circle"
                    aria-hidden="true"
                  ></i>
                  <small>Error</small>
                </div>

                <div className="row">
                  <label htmlFor="comment">Any comment or suggestion?</label>
                  <textarea
                    id="comment"
                    name="comment"
                    autoComplete="off"
                    onChange={(e) => {
                      setUser({ comment: e.target.value });
                      setUserErr({ commentErr: "" });
                      setErr(false);
                    }}
                  ></textarea>
                  {err === "true" ? (
                    <i
                      className="fa fa-exclamation-circle"
                      aria-hidden="true"
                    ></i>
                  ) : err === "false" ? (
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                  ) : (
                    " "
                  )}
                  {userErr.commentErr && (
                    <p className="err">{userErr.commentErr}</p>
                  )}
                </div>

                <div>
                  <button onClick={getFormData}>Submit</button>
                  {/* <input type="submit" value="Submit" /> */}
                </div>
                <br />
              </form>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default Comp4;
