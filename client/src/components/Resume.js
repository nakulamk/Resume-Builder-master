import React, { useState } from "react";
import Profile from "./Profile";
import Education from "./Education";
import Projects from "./Projects";
import Experience from "./Experience";
import Extras from "./Extras";

function Resume() {
  const [step, setStep] = useState(1);
  const [state, setState] = useState({
    step: 1,
    // Personal Profile Details...
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    facebook: "",
    instagram: "",

    // Education Information
    college: "",
    fromyear1: "",
    toyear1: "",
    qualification1: "",
    description1: "",
    school: "",
    fromyear2: "",
    toyear2: "",
    qualification2: "",
    description2: "",

    // Project Information...
    title1: "",
    link1: "",
    projectDescription1: "",
    title2: "",
    link2: "",
    projectDescription2: "",
    title3: "",
    link3: "",
    projectDescription3: "",

    // Experience Information
    institute1: "",
    position1: "",
    duration1: "",
    experienceDescription1: "",
    institute2: "",
    position2: "",
    duration2: "",
    experienceDescription2: "",

    // Extra Information
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    interest1: "",
    interest2: "",
    interest3: "",
    interest4: "",
    interest5: "",
    interest6: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  // const handleChange = (name, value) => {
  //   setState({ ...state, [name]: value });
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const values = state;
  console.log(values);

  switch (step) {
    case 1:
      return (
        <div className="App mt-3">
          <div className="container col-lg-10 mx-auto text-center">
            <Profile
              nextStep={nextStep}
              handleChange={handleChange}
              values={values}
            />
          </div>
        </div>
      );
    case 2:
      return (
        <div className="App mt-3">
          <div className="container col-lg-10 mx-auto text-center">
            <Education
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange={handleChange}
              values={values}
            />
          </div>
        </div>
      );
    case 3:
      return (
        <div className="App mt-3">
          <div className="container col-lg-8 mx-auto text-center">
            <Projects
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange={handleChange}
              values={values}
            />
          </div>
        </div>
      );
    case 4:
      return (
        <div className="App mt-3">
          <div className="container col-lg-10 mx-auto text-center">
            <Experience
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange={handleChange}
              values={values}
            />
          </div>
        </div>
      );
    case 5:
      return (
        <div className="App mt-3">
          <div className="container col-lg-10 mx-auto text-center">
            <Extras
              prevStep={prevStep}
              handleChange={handleChange}
              values={values}
            />
          </div>
        </div>
      );
    default:
      return <div />;
  }
}

export default Resume;
