import React from 'react'

export default function Register(props) {
  return (
    <div className='container card p-3 mt-2 register-container'>
        <h1 className='text-center'>Registration from</h1>
      <form onSubmit={props.Submit}>
        <div className='form-group'>
        <label htmlFor='name'>Name:</label>
        <input name='name' type='text' required className='form-control'/>
        </div>
        <div className='form-group'>
        <label htmlFor='email'>Email:</label>
        <input name='email' type='email' required className='form-control'/>
        </div>
        <div className='form-group'>
        <label htmlFor='Password'>Password:</label>
        <input name='password' type='password'required className='form-control'/>
        </div>
        <button type="submit" className="btn btn-primary ">Register</button>

      </form>
    </div>
  )
}
