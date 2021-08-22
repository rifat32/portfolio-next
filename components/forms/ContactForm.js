import axios from "axios";
import { useState } from "react"

const ContactForm = () => {
 const [state,setState] = useState({
   name:"",
   email:"",
   message:""
 })
 const [error,setError] = useState("")
 const [loading,setLoading] = useState(false)
 const [success,setSuccess] = useState(false)
 const handleSubmit = (e) => {
   e.preventDefault();
   console.log("submit")
   setLoading(true)
   setError("")
   setSuccess(false)
   axios.post("https://immense-beyond-81444.herokuapp.com/api/message",{
  name:state.name,
  email:state.email,
  message:state.message,
  visitorId:localStorage.getItem("visitorId")
   })
   .then(res => {
console.log(res)
setLoading(false)
setSuccess(true)
   })
   .catch(err => {
     setError(err.response.data.message[0])
     setLoading(false)
   }) 

 }
 const handleChange = (e) => {
setState({...state,[e.target.name]:e.target.value})


 }
 
    return (
        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
        <form  className="php-email-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Your Name</label>
              <input type="text" name="name" className="form-control" id="name" required value={state.name} onChange={handleChange} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email">Your Email</label>
              <input type="email" className="form-control" name="email" id="email" required value={state.email} onChange={handleChange} />
            </div>
          </div>
        
          <div className="form-group">
            <label htmlFor="name">Message</label>
            <textarea className="form-control" name="message" rows={10} required value={state.message} onChange={handleChange} >

            </textarea>
          </div>
          <div className="my-3">
            {loading &&   <div className="loading">Loading</div>}
          
            {
              error && <div className="error-message"> {error}
              </div>
            }
          {
            success &&   <div className="sent-message">Your message has been sent. Thank you!</div>
          }
          
          </div>
          <div className="text-center"><button type="submit" >Send Message</button></div>
        </form>
      </div>
    )
}

export default ContactForm
