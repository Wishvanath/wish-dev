import React, {useState} from 'react'

const Test = () => {

    const[values, setValues] = useState({
        name: "",
        email: "",
        message: ""
    })

    //destructure the state variable
    const{
        name,
        email,
        message
    } = values;

    //handle change event
    const handleChange =  name => event => {
        setValues({...values, [name] : event.target.value})
    }

     //form data
     const formData ={
         name,
         email,
         message
     }
     //btn submit event
     const btnSubmit = (event) =>{
        //  event.preventDefault();
         console.log(formData)
     }

    //return main component
    return(
        <div>
            <section className="demo">
                <div className="container">
                    <div className="col-6 mx-auto mt-5">
                        {JSON.stringify(formData)}
                        <h2>Contact form</h2>
                        <form>
                            <div className="form-group">
                                <input type="text" name="name" id="" className="form-control" placeholder="Name" required value={name} onChange={ handleChange('name')}/>  
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" id="" className="form-control" placeholder="Email" required value ={email} onChange={handleChange('email')} />  
                            </div>
                            <div className="form-group">
                               <textarea name="message" id="" cols="30" rows="10" className="form-control" placeholder="Message" required onChange={handleChange('message')} >
                                    {message}
                               </textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={btnSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Test;