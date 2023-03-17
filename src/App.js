import React, { useState } from 'react';
import SingleColor from './components/SingleColor';
import Values from 'values.js';
const App = () => {
  const [value, setValue] = useState('')
  const [color, setColor] = useState([])
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    try{
      let colors = new Values(value).all(10)
      setColor(colors)
      setError(false)
    }catch (error) {
      console.log(error)
      setError(true)
    }
  }

  return (
    <>
      <section className='text-center py-5'>
        <h2 className='text-3xl font-bold mb-5'>Color Generator</h2>
        <form type='submit' onSubmit={handleSubmit}>
          <input type="text"
           value={value}
           onChange={(e) => setValue(e.target.value)}
           placeholder='#fff' className={`border-2 outline-none ${error && 'border-red-500'} p-2`} />
          <button type="submit"
           className="border-2 p-2 hover:shadow-lg transition-shadow ease-in"
            style={{backgroundColor: `${value}`}}
            >Submit</button>
        </form>
      </section>
      <section className='flex flex-wrap justify-center'>
        {color.map((list, index) => {
          return (
            <SingleColor key={index} index={index} list={list} />
          )
        })}
      </section>
    </>
  )
}

export default App
