import { useState } from "react"
import './App.css';
import Display from "./Components/Display"

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
    }
  )

  console.log(formData.employment)

  function handleChange(event) {

    const {name, value, type, checked} = event.target

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
        
      }
    })
  }


  console.log(formData)
  return (
    <div className="App">
      <form>
        
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

      </form>

    <Display data={formData}/>

    </div>
  );
}

export default App;
