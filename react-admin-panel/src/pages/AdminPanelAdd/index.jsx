import React, { useState } from 'react'
import "./index.scss";
import { useNavigate } from 'react-router-dom';
const AdminPanelAdd = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3100/blogs", {
      method: "POST",
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: title, description: text })
    })
      .then(x => navigate("/"))

  }
  function handleChange(e, stateChanger) {
    stateChanger(e.target.value)
  }
  return (
    <>
      <section id="addUpdate">
        <div className='add-update-blog'>
          <form action='#' onSubmit={handleSubmit}>
            <input value={title} className="addImg" type="text" placeholder="Add Title..." onChange={(e) => handleChange(e, setTitle)} />
            <input value={text} className="addName" type="text" placeholder="Add Text ..." onChange={(e) => handleChange(e, setText)} />
            <button>Add News</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default AdminPanelAdd