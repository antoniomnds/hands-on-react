import Welcome from "./components/Welcome";
import Support from "./components/Support";
import ListCast from "./components/ListCast";
import {useState, useEffect} from "react";
import Modal from "./components/Modal.jsx";
import Nav from "./components/Nav";
import './App.css'

function App() {
  const [memberInfo, setMemberInfo] = useState(null);
  const [cast, setCast] = useState([]);

  async function fetchCast() {
    const response = await fetch("/cast.json");
    return await response.json();
  }

  useEffect(() => {
    fetchCast()
      .then(setCast);
  }, [])

  return (
    <>
      <Nav cast={cast} onChoice={(info) => setMemberInfo(info)}/>
      <div className="container">
        <article>
          <hgroup>
            <img src="/images/group.svg" alt="StarGazers Group"/>
            <Welcome name="StarGazers"/>
            <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They
              are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
            <br />
            <ListCast cast={cast} onChoice={(info) => setMemberInfo(info)}/>
            { memberInfo &&
              <Modal member={memberInfo}
                     handleClose={() => setMemberInfo(null)}
                     handleChange={(id) => setMemberInfo(cast[(id + cast.length) % cast.length])} // wraps around
              />
            }
            <Support/>
          </hgroup>
        </article>
      </div>
    </>

  )
}

export default App
