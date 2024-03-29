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
      education: ["education, education, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "],
      expirience: ["expirience, expirience, expirience"],
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


    const [anotherItem, setAnotherItem] = useState("")
  // add another item
  const addAnotherItemToTheList = (AnotherItem) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newItem = { id, ...AnotherItem }
    setAnotherItem ([...AnotherItem], newItem)
  }

  // delete the existing item
  const deleteItemFromTheList = (id) => {
    setAnotherItem()
  }


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
            <button className="btnAdd">Add</button>


            <input
              className="inputFull"
              type="text"
              placeholder="Education"
              name="education"
              onChange={handleChange}
              value={formData.education}
            />
            <button className="btnAdd">Add</button>

            <input
              className="inputFull"
              type="text"
              placeholder="Experience"
              name="expirience"
              onChange={handleChange}
              value={formData.expirience}
            />
            <button className="btnAdd">Add</button>

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
            <button className="btnAdd">Add</button>

            <label htmlFor="toolsAndTechnologies">toolsAndTechnologies</label>
            <input
              className="inputFull"
              id="toolsAndTechnologies"
              value={formData.toolsAndTechnologies}
              onChange={handleChange}
              name="toolsAndTechnologies"
            />
            <button className="btnAdd">Add</button>

            <label htmlFor="otherSkills">otherSkills</label>
            <input
              className="inputFull"
              id="otherSkills"
              value={formData.otherSkills}
              onChange={handleChange}
              name="otherSkills"
            />
            <button className="btnAdd">Add</button>

            <label htmlFor="languages">languages</label>
            <input
              className="inputFull"
              id="languages"
              value={formData.languages}
              onChange={handleChange}
              name="languages"
            />
            <button className="btnAdd">Add</button>

            <label htmlFor="social">social</label>
            <input
              className="inputFull"
              id="social"
              value={formData.social}
              onChange={handleChange}
              name="social"
            />
            <button className="btnAdd">Add</button>

            <button type="submit">Submit data</button>
          </form>
        </div>




      </div>{/* cvContainer */}

    </div>
  );
}

export default App;
