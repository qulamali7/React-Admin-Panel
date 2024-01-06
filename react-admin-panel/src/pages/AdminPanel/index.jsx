import { useEffect, useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

function AdminPanel() {

  const [data, setData] = useState(null);
  async function GetFetch() {
    try {
      const res = await fetch("http://localhost:3100/blogs");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function DeleteFetch(id) {
    await fetch("http://localhost:3100/blogs/" + id, { method: 'DELETE' });
    await GetFetch()
  }

  useEffect(() => {
    GetFetch();
  }, []);
  return (
    <>
      <section id="AdminPanel">
        <div className="buttons">
          <Link to="/add"><button>Add new News</button></Link>
        </div>
        <table>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          {data && data.map((x) => (
            <tr>
              <td>{x._id}</td>
              <td>{x.title}</td>
              <td>{x.description}</td>
              <td><Link to={"/update/" + x._id}><button>UPDATE</button></Link></td>
              <td><button className="btn" onClick={() => { DeleteFetch(x._id) }}>DELETE</button></td>
            </tr>
          ))}
        </table>
      </section>
    </>
  );
}

export default AdminPanel;
