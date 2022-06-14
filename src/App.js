import { useState } from "react"
import './App.css';

function App() {

  const [formData, setFormData] = useState(
    {
      firstName: "",
      lastName: "",
      hasPracticalExpirience: false,
      bio: "",
      contact: "",
      education: "",
      expirience: "",
      employment: "",
      position: "",
    }
  )


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
              className="inputHalf"
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
            />


            <input
              className="inputHalf"
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


            <button>Submit data</button>
          </form>
        </div>

        <div className="outData">
          
          <div className="cvData">
            <div className="userFirstName">{formData.firstName}</div>
            <div className="userLastName">{formData.lastName}</div>
            <div className="userTitle">{formData.title}</div>
            <div className="userBio">{formData.bio}</div>
            <div className="userContact">{formData.contact}</div>
            <div className="userEducation">{formData.education}</div>
            <div className="userExp">{formData.expirience ? "Yes" : "No"}</div>
            <div className="userEmployment">{formData.employment}</div>
            <div className="userPosition">{formData.position}</div>
          </div>
          
        </div>


      </div>


    </div>
  );
}

export default App;
