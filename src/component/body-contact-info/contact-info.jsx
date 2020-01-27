import React, {Fragment,useState, useEffect} from 'react'
import './contact-info.style.scss'
// import emailj from 'emailjs-com'
const ContactForm = () => {
  
  // state variable
  const [values, setValues] = useState({
    name: "",
    email: "",
    content: "",
    error: '',
    success: false
  })
  // destructor the state variable
  const {
    name,
    email,
    content,
    success,
    error
  } = values;

useEffect(() => {
// emailj.init("user_GJR1Oa40AZI8LzX9pslOe")
// Access token: 45d3093958a3185c9288405b1ed31fd8
},[])



const handleChange = name => event => {
  setValues({...values, error:false, [name]: event.target.value})
}





const btnEmailSend = (e) =>{
  e.preventDefault();
  var service_id = "default_service";
  var template_id = "wish_dev";
  // 
  if(name ===''){
    // alert("Name is empty")
    setValues({...values, error: "Name is empty", success:false})
  }else if(email === ''){
    // alert("email is empty")
    setValues({...values, error: "Email is empty", success:false})
  }else if(content ===''){
    // alert("Message is empty")
    setValues({...values, error: "Message is empty", success:false})
  }
  else{
    window.emailjs.send(service_id, template_id, {message_html:content, from_name: name, reply_to: email})
    // .then(response => console.log('SUCCESS!', response.status, response.text))
    .then(response => {
      if(response.status === 200){
        setValues({...values, name: '', email: '', content: '', error: false, success:true })
        
      }
    })

    .catch(err => {
      setValues({...values, error: "Message couldn't sent.", success:false})
    })
  }
 
  
}



// show error
const showError = () => (
  <div className="alert alert-danger alert_msg alert-dismissible fade show" style={{ display: error ? '' : 'none' }}>
    <strong>YUP !</strong> {error}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
  </div>
)


// show success message
const showSuccess = () => (
  <div className="alert alert-info alert_msg alert-dismissible fade show" style={{ display: success ? '' : 'none' }} role="alert">
    {/* Message has send successfully Wishvanath will get back soon ! */}
    <strong>Thanks for your time !</strong> I will get back to you soon !
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
)






  //render main component
  return (
    <Fragment>
      {/* {JSON.stringify(name)} */}
      {showSuccess()}
      {showError()}
      <section className="section section-on-footer" data-background="images/bg-dots.png" id="contact_section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="section-title">Contact Info</h3>
            </div>
            <div className="col-lg-8 mx-auto">
              <div className="bg-white rounded text-center p-5 shadow-down">
                <h4 className="mb-80">Contact Form</h4>
                <form className="row">
                  <div className="col-md-6">
                    <input type="text" id="name" name="name" placeholder="Full Name" className="form-control px-0 mb-4" onChange={handleChange('name')} value={name}/>
                  </div>
                  <div className="col-md-6">
                    <input type="email" id="email" name="email" placeholder="Email Address" className="form-control px-0 mb-4" onChange={handleChange('email')} value={email} />
                  </div>
                  <div className="col-12">
                    <textarea name="message" id="message" className="form-control px-0 mb-4"
                      placeholder="Type Message Here" onChange={handleChange('content')} value={content}>

                      </textarea>
                  </div>
                  <div className="col-lg-6 col-10 mx-auto">
                    <button type="submit" className="btn btn-primary w-100" onClick = {btnEmailSend}>send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
export default ContactForm;