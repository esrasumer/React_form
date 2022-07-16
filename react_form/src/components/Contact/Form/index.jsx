import { useState } from 'react'

function Form() {
  const [form, setForm] = useState({ fullname: "", phone_number: "" })

  function handleFormValue(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleClick() {
    console.log(form)
  }

  return (
    <>
      <div>
        <input name='fullname' onChange={handleFormValue} placeholder='Full Name' />
      </div>

      <div>
        <input name='phone_number' onChange={handleFormValue} placeholder='Phone Number' />
      </div>

      <div>
        <button onClick={handleClick}>Add</button>


      </div>
      {form.fullname && <div>
        <div>Name: {form.fullname}</div>
        <div>Phone: {form.phone_number}</div>
      </div>}
    </>
  )
}

export default Form;