import React, {useState} from 'react'

const Form = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const createUser = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }


    return (
        <div>
            <div className='row'>
                <form action='' className='col-md-4 offset-1 bg-secondary border-3 border-black rounded py-3'>
                <h1>Create User!</h1>
                    <div className='form-group'>
                        <label htmlFor='firstName'>First Name:</label>
                        <input type='text' name='firstName' id='firstName' className='form-control' onChange={createUser}/>
                        {user.firstName !== '' && user.firstName.length < 2 ? <p>Name must be more than 2 characters.</p>:null}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='lastName'>Last Name:</label>
                        <input type='text' name='lastName' id='lastName' className='form-control' onChange={createUser}/>
                        {user.lastName !== '' && user.lastName.length < 2 ? <p>Name must be more than 2 characters.</p>:null}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' name='email' id='email' className='form-control' onChange={createUser}/>
                        {user.email !== '' && user.email.length < 5 ? <p>Email must be more than 5 characters.</p>:null}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' name='password' id='password' className='form-control' onChange={createUser}/>
                        {user.password !== '' && user.password.length < 8 ? <p>Password must be at least 8 characters.</p>:null}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='confirmPassword'>Confirm Password:</label>
                        <input type='password' name='confirmPassword' id='confirmPassword' className='form-control' onChange={createUser}/>
                        {user.confirmPassword !== user.password ? <p>Passwords must match.</p>:null}
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Form;