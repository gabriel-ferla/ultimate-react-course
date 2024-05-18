import React from 'react'

const FormSliptBill = () => {
  return (
    <form className='form-split-bill'>
        <h2>Split a bill with X</h2>

        <label>Bill value</label>
        <input type="text" />

        <label>Your expense</label>
        <input type="text" />

        <label>X's expense</label>
        <input type="text" disabled />

        <label> Who is paying the bill</label>
        <select>
            <option value="user">You</option>
            <option value="friend">X</option>
        </select>

        <button className='button'>Split bill</button>
    </form>
  )
}

export default FormSliptBill