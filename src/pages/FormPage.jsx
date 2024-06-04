import React from 'react'

function FormPage() {
  return (
    <div>
         <form className=''>
            <label>Title:
                <input type="text" />
            </label>
            <label>Content:
                <input type="text" />
            </label>
            <button type='submit' className=' bg-blue-500'>Submit</button>
        </form>
    </div>
  )
}

export default FormPage