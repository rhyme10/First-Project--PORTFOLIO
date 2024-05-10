import React from 'react'
import './Contact.css'


const Contact = () => {

    const onSubmit = async (event) => {

        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "51f6c3f6-49a8-4c10-a7ed-577d8eab94f1");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };
    

return (
    <div className='contact'>
        <div className="contact-title">
            <h1>GET IN TOUCH</h1>
        </div>
        <div className="contact-section">


            <div id='contact' className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm cuurently available to work as an intern , to acquire experience and learn through some projects.</p>
                <p><img  className='contact-detail' src="https://cdn-icons-png.flaticon.com/128/13432/13432100.png" height='20' width='20' />  rhymelko2004@gmail.com</p>
                <p><img className='contact-detail' src='https://cdn-icons-png.flaticon.com/128/3814/3814671.png' height="20" width='20'></img> 7880405860</p>
                <p><img className='contact-detail' src='https://cdn-icons-png.flaticon.com/128/5495/5495037.png' height="20" width='20'></img>  Lucknow</p>
            </div>
            <div >
                <form onSubmit={onSubmit} className="contact-right">
                    <label for='name'>Your Name : </label>
                    <input type='text'value={'name'} placeholder=' Enter your name' id='naam'></input><br></br>
                    <label for='email' >Your Email : </label>
                    <input type='email' value={'email'} placeholder=' Enter your email' id='email'></input><br></br>
                    <label for='text' size='200'>Write Message: </label>
                    <textarea type='message' value={'message'} rows={"5"} placeholder='Enter your message' id='sms'></textarea>
                    <div className="button">
                        <button>SUBMIT</button>
                    </div>

                </form>

            </div>


        </div>
        <hr></hr>
    </div>

)
}

export default Contact