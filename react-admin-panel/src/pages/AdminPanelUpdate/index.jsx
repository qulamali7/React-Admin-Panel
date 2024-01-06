import React, { useEffect, useState } from 'react'
import "./index.scss";
import { useNavigate, useParams } from 'react-router-dom';
const AdminPanelUpdate = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")

  async function GetFetchById(id) {
    try {
      const res = await fetch("http://localhost:3100/blogs/" + id);
      const data = await res.json();
      setTitle(data.title);
      setText(data.description)
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    GetFetchById(id)
  }, [id])

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3100/blogs/" + id, {
      method: "PUT",
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
          <form onSubmit={handleSubmit}>
            <input value={title} className="addImg" type="text" placeholder="Add Title..." onChange={(e) => handleChange(e, setTitle)} />
            <input value={text} className="addName" type="text" placeholder="Add Text ..." onChange={(e) => handleChange(e, setText)} />
            <button>Update News</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default AdminPanelUpdate