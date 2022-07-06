import { useState, useEffect } from "react"
import './App.css';

function App() {

  const remainder = "https://ibaslogic.com/simple-guide-to-react-form/ dodati ovaj oblik prigaza podataka u sekciju za iskustvo i edukaciju, srediti style iz FIGMA fajla"
  console.log(remainder);
  const [formData, setFormData] = useState(
    () => JSON.parse(localStorage.getItem(""))//formData
      ||
    {
      firstName: "Ime",
      lastName: "Prezime",
      hasPracticalExpirience: false,
      bio: "Biografija biografija, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      contact: "+000 111 2222 323, e@mail.com",
      education: "education, education, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      expirience: "expirience, expirience, expirience",
      employment: "",
      position: "",
      industryKnowledge: "industy, Knowlage",
      toolsAndTechnologies: "tools, and, tehnologies",
      otherSkills: "other, skills",
      languages: "llanguages, languages",
      social: "social, skills",
    }
  )

  // useEffect( () => {
  //   localStorage.setItem("formData", JSON.stringify(formData))
  // }, [formData])



  function handleChange(event) {

    const { name, value, type, checked } = event.target

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value

      }
    })
  }



  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
    writeFormData(formData)
  }

  const writeFormData = (data) => {
    const t = data.firstName
    console.log(t)
    return (
      <p>{data.firstName}</p>
    )
  }



  return (
    <div className="App">

      <div className="cvContainer">
        <div className="inData">
          <form onSubmit={handleSubmit}>

            <input
              className="inputFull"
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
            />


            <input
              className="inputFull"
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
            />

            <label htmlFor="hasPracticalExpirience">Practical expirience</label>
            <input
              className="checkbox"
              type="checkbox"
              id="hasPracticalExpirience"
              name="hasPracticalExpirience"
              onChange={handleChange}
              checked={formData.hasPracticalExpirience}
            />

            <textarea
              className="textarea"
              placeholder="Short biography"
              name="bio"
              onChange={handleChange}
              value={formData.bio}
            />

            <input
              className="inputFull"
              type="text"
              placeholder="Contact"
              name="contact"
              onChange={handleChange}
              value={formData.contact}
            />


            <input
              className="inputFull"
              type="text"
              placeholder="Education"
              name="education"
              onChange={handleChange}
              value={formData.education}
            />

            <input
              className="inputFull"
              type="text"
              placeholder="Experience"
              name="expirience"
              onChange={handleChange}
              value={formData.expirience}
            />

            <br />
            <br />

            <fieldset>
              <legend>Current employment status</legend>

              <input
                type="radio"
                id="unemployed"
                name="employment"
                value="unemployed"
                checked={formData.employment === "unemployed"}
                onChange={handleChange}
              />
              <label htmlFor="unemployed">unemployed</label>

              <input
                type="radio"
                id="employed"
                name="employment"
                value="employed"
                checked={formData.employment === "employed"}
                onChange={handleChange}
              />
              <label htmlFor="employed">employed</label>

              <input
                type="radio"
                id="part-time"
                name="employment"
                value="part-time"
                checked={formData.employment === "part-time"}
                onChange={handleChange}
              />
              <label htmlFor="part-time">part-time</label>

            </fieldset>

            <label htmlFor="Position">Position</label>
            <select
              id="position"
              value={formData.position}
              onChange={handleChange}
              name="position"
            >
              <option value="">-- Chose --</option>
              <option value="Junior">Junior</option>
              <option value="Medior">Medior</option>
              <option value="Senior">Senior</option>
            </select>

            <br />
            <label htmlFor="industryKnowlage">Industry Knowlage</label>
            <input
              className="inputFull"
              id="industryKnowlage"
              value={formData.industryKnowlage}
              onChange={handleChange}
              name="industryKnowlage"
            />

            <label htmlFor="toolsAndTechnologies">toolsAndTechnologies</label>
            <input
              className="inputFull"
              id="toolsAndTechnologies"
              value={formData.toolsAndTechnologies}
              onChange={handleChange}
              name="toolsAndTechnologies"
            />

            <label htmlFor="otherSkills">otherSkills</label>
            <input
              className="inputFull"
              id="otherSkills"
              value={formData.otherSkills}
              onChange={handleChange}
              name="otherSkills"
            />

            <label htmlFor="languages">languages</label>
            <input
              className="inputFull"
              id="languages"
              value={formData.languages}
              onChange={handleChange}
              name="languages"
            />

            <label htmlFor="social">social</label>
            <input
              className="inputFull"
              id="social"
              value={formData.social}
              onChange={handleChange}
              name="social"
            />
            <button>Submit data</button>
          </form>
        </div>

        <div className="outData">

          <div className="border header">
            <div className="userFirstName">{formData.firstName}</div>
            <div className="userLastName">{formData.lastName}</div>
            <div className="userTitle">{formData.title}</div>
            <div className="userExp">pomeri{formData.expirience ? "Yes" : "No"}</div>
            <div className="userEmployment">pomeri{formData.employment}</div>
          </div>

          <div className="cvMainContent">

            <div className="border expAndBio">
              <div className="userBio">{formData.bio}</div>
              <div className="horizontalDivider"></div>
              <div className="userEducation">{formData.education}</div>
            </div>{/* expAndBio*/}

            <div className="border aside">

              <div className="asideItem userContact">

                <span className="asideItemElement">{
                  formData.contact
                }
                </span>
              </div>



              <div className="asideItem userIndustryKnowlage">Title ----
                <span className="asideItemElement">{formData.industryKnowledge}</span>
              </div>

              <div className="asideItem userToolsAndTechnologies">Title ----
                <span className="asideItemElement">{formData.toolsAndTechnologies}</span>
              </div>

              <div className="asideItem userOtherSkills">Title ----
                <span className="asideItemElement">{formData.otherSkills}</span>
              </div>

              <div className="asideItem userLanguages">Title ----
                <span className="asideItemElement">{formData.languages}</span>
              </div>

              <div className="asideItem userSocial">Title ----
                <span className="asideItemElement">
                  {formData.social}</span>
              </div>

              <div className="userPosition">promeni{formData.position}</div>
            </div>{/*.aside */}
          </div>{/* .cvData */}

        </div>{/* .outData*/}


      </div>{/* cvContainer */}

    </div>
  );
}

export default App;
