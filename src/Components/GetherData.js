import { useState, useEffect } from "react"




const GetherData = () => {

  const [formData, setFormData] = useState(
    () => JSON.parse(localStorage.getItem(""))//formData
      ||
    // {
    //   firstName: "",
    //   lastName: "",
    //   dateOfBirth: "",
    //   contact: {
    //     phone: "a",
    //     email: "",
    //     address: "",
    //     website: "",
    //     socialLinks: [""]
    //   },
    //   bio: "",
    //   education: [
    //     {
    //       educationInstitution: "",
    //       title: "",
    //       degree: ""
    //     }
    //   ],
    //   employmentStatus: "",
    //   jobTitle: "",
    //   personalValues: [""],
    //   expertise: [""],
    //   skills: [
    //     { skill: "", percentage: 0 }
    //   ],
    //   languages: [""],
    //   interests: [""],
    //   workExpirience: [
    //     {
    //       company: "",
    //       position: "",
    //       description: ""
    //     }
    //   ]
    // }


    // backup
    {
      firstName: "Ime",
      lastName: "Prezime",
      dateOfBirth: "august 22, 1999",
      contact: {
        phone: "+123-456-789",
        email: "email@example.com",
        address: "street 55, city00",
        website: "http://example.com",
        socialLinks: ["gacebook", "instagram", "twitter"]
      },
      bio: "Biografija biografija, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      education: [
        {
          educationInstitution: "univeristy",
          title: "Graphic Designer",
          degree: "type of degree"
        }
      ],
      employmentStatus: "Looking for Job",
      jobTitle: "designer",
      personalValues: ["value1", "value2", "value3"],
      expertise: ["expertise1", "expertise2", "expertise3"],
      skills: [
        { skill: "html", percentage: 100 },
        { skill: "css3", percentage: 88 },
        { skill: "JavaScript", percentage: 75 },
        { skill: "Figma", percentage: 70 },
        { skill: "Photoshop", percentage: 50 }
      ],
      languages: "llanguages, languages",
      interests: ["interests1", "interests2", "interests3"],
      workExpirience: [
        {
          company: "company",
          position: "job title",
          description: "description lorem ipsum dolor sit amet"
        },
        {
          company: "company",
          position: "job title",
          description: "description lorem ipsum dolor sit amet"
        },
        {
          company: "company",
          position: "job title",
          description: "description lorem ipsum dolor sit amet"
        }
      ]
    }
  )

  console.log(formData.contact.phone)
  console.log(formData)

  const handleSubmitTest = (e) => {

    // e.preventDefault()
    // const formData = new FormData(e.target)
    // const inputObject = Object.fromEntries(formData)
    // console.log(inputObject)

    console.log("Submited form")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    console.log("Submited form")
  }

  const handleChange = (e) => {

    const { name, value, type } = e.target

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })

    console.log("changed")
  }









  return (
    <div id='GetherData'>

      <form onSubmit={handleSubmit}>

        <fieldset id="formBasicInfo">
          <legend>Basic Information</legend>
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
            type="text"
            className="inputText"
            placeholder="First Name"
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
            type="text"
            className="inputText"
            placeholder="Last Name"
          />

          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            name="dateOfBirth"
            onChange={handleChange}
            value={formData.dateOfBirth}
            type="text"
            className="inputText"
            placeholder="dateOfBirth"
          />

          <label htmlFor="jobTitle">jobTitle</label>
          <input
            name="jobTitle"
            onChange={handleChange}
            value={formData.jobTitle}
            type="text"
            className="inputText"
            placeholder="jobTitle"
          />

          <label htmlFor="employmentStatus">employmentStatus</label>
          <input
            name="employmentStatus"
            onChange={handleChange}
            value={formData.employmentStatus}
            type="text"
            className="inputText"
            placeholder="employmentStatus"
          />
        </fieldset>

        <fieldset id="formContactInfo">
          <legend>Contact informations</legend>

          <label htmlFor="phone">Phone</label>
          <input
            name="phone"
            onChange={handleChange}
            value={formData.contact.phone}
            type="text"
            className="inputText fullWidth"
            placeholder="phone"
          />

          <label htmlFor="email">E-mail:</label>
          <input
            name="email"
            onChange={handleChange}
            value={formData.contact.email}
            type="email"
            className="inputText"
            placeholder="E-mail"
          />

          <label htmlFor="addres">Address</label>
          <input
            name="addres"
            onChange={handleChange}
            value={formData.contact.address}
            type="text"
            className="inputText"
            placeholder="addres"
          />

          <label htmlFor="website">website</label>
          <input
            name="website"
            onChange={handleChange}
            value={formData.contact.website}
            type="text"
            className="inputText"
            placeholder="website"
          />
        </fieldset>

        <fieldset id="formBio">
          <legend>bio</legend>
          <label htmlFor="bio">Short Biography</label>
          <textarea
            name="bio"
            onChange={handleChange}
            value={formData.bio}
            type="text"
            className="bio"
            placeholder="website"
          ></textarea>
        </fieldset>

        <fieldset id="formEducation">
          <legend>Education</legend>

          <label htmlFor="educationInstitution">educationInstitution</label>
          <input
            id="educationInstitution"
            name="educationInstitution"
            onChange={handleChange}
            value={formData.education[0].educationInstitution}
            type="text"
            className="inputText"
            placeholder="educationInstitution"
          />

          <label htmlFor="Graphic Designe">Graphic Designe</label>
          <input
            name="Graphic Designe"
            onChange={handleChange}
            value={formData.education[0].title}
            type="text"
            className="inputText"
            placeholder="Graphic Designe"
          />

          <label htmlFor="degree">degree</label>
          <input
            name="degree"
            onChange={handleChange}
            value={formData.education[0].degree}
            type="text"
            className="inputText"
            placeholder="degree"
          />
        </fieldset>


        <fieldset id="formPersonalValues">
          <legend>PersonalValues</legend>

          <label htmlFor="personalValues">personalValues</label>
          (*divide by , )
          <input
            name="personalValues"
            onChange={handleChange}
            value={formData.personalValues}
            type="text"
            className="inputText fullWidth"
            placeholder="degree"
          />
        </fieldset>

        <fieldset id="formExpertise">
          <legend>expertise</legend>

          <label htmlFor="expertise">expertise</label>
          <input
            name="expertise"
            onChange={handleChange}
            value={formData.expertise}
            type="text"
            className="inputText fullWidth"
            placeholder="expertise"
          />
        </fieldset>

        <fieldset id="formSkills">
          <legend>Skills</legend>

          <label htmlFor="skills">expertise</label>
          <input
            name="skills"
            onChange={handleChange}
            value={formData.skills[0].skill}
            type="text"
            className="inputText"
            placeholder="skill"
          />

          <label htmlFor="percentage">percentage</label>
          <input
            name="percentage"
            onChange={handleChange}
            value={formData.skills[0].percentage}
            type="text"
            className="inputText"
            placeholder="percentage"
          />

          

        </fieldset>

        <fieldset id="formLanguages">
          <legend>Languages</legend>

          <label htmlFor="languages">languages</label>
          <input
            name="languages"
            onChange={handleChange}
            value={formData.languages}
            type="text"
            className="inputText fullWidth"
            placeholder="languages"
          />
        </fieldset>

        <fieldset id="formInterests">
          <legend>interests</legend>

          <label htmlFor="interests">interests</label>
          <input
            name="interests"
            onChange={handleChange}
            value={formData.interests}
            type="text"
            className="inputText fullWidth"
            placeholder="interests"
          />
        </fieldset>

        <fieldset id="formWorkExpirience">
          <legend>Work expirience</legend>

          <label htmlFor="company">company</label>
          <input
            name="company"
            onChange={handleChange}
            value={formData.workExpirience.company}
            type="text"
            className="inputText fullWidth"
            placeholder="company"
          />

          <label htmlFor="position">position</label>
          <input
            name="position"
            onChange={handleChange}
            value={formData.workExpirience.position}
            type="text"
            className="inputText fullWidth"
            placeholder="position"
          />

          <label htmlFor="description">description</label>
          <input
            name="description"
            onChange={handleChange}
            value={formData.workExpirience.description}
            type="text"
            className="inputText fullWidth"
            placeholder="description"
          />

          
        </fieldset>

        <button type="submit" onClick={handleSubmitTest}>Submit</button>
      </form>




    </div>
  )
}

export default GetherData
