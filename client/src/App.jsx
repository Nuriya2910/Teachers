import { useEffect, useState, useRef } from "react"
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fet()
  }, [])

  async function fet() {
    let res = await fetch("http://localhost:3000/admin/teachers")
    let Data = await res.json()
    setData(Data.data);

  }

  const inp1 = useRef(null)
  const inp2 = useRef(null)
  const inp3 = useRef(null)
  const inp4 = useRef(null)
  const inp5 = useRef(null)
  const inp6 = useRef(null)
  const inp7 = useRef(null)
  const inp8 = useRef(null)



  function post() {
    let teacher = {
      firstName: inp1.current.value,
      lastName: inp2.current.value,
      email: inp3.current.value,
      phoneNumber: inp4.current.value,
      password: inp5.current.value,
      subject: inp6.current.value,
      // groupTitle: inp7.current.value,
      // groupTime: inp8.current.value
    }
    async function fet1() {
      let res = await fetch("http://localhost:3000/admin/teachers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(teacher),
      })
      let Data = await res.json()
      setData(Data.data);
    }
    fet1()
    inp1.current.value = ''
    inp2.current.value = ''
    inp3.current.value = ''
    inp4.current.value = ''
    inp5.current.value = ''
    inp6.current.value = ''


  }

  async function remove(id) {
    const data = await fetch(`http://localhost:3000/admin/teachers/${id}`, {
      method: 'DELETE'
    })
    fet()
  }


  async function update(id) {
    let res = await fetch(`http://localhost:3000/admin/teachers/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: inp1.current.value,
        lastName: inp2.current.value,
        email: inp3.current.value,
        phoneNumber: inp4.current.value,
        password: inp5.current.value,
        subject: inp6.current.value,
      }
      ),
    })
    let Data = await res.json()
    setData(Data.data);

    fet()
  }


  return (
    <div style={{ display: "flex", gap: "10px", padding: "50px" }}>
      <div className="left">
        {data.map((item, key) => {
          return (
            <div key={key} className="item" >
              <div className="l">
                <h4>firstName:  {item.firstName}</h4>
                <h4>lastName:  {item.lastName}</h4>
                <h4>email:  {item.email}</h4>
                <h4>phoneNumber:  {item.phoneNumber}</h4>
                <h4>password:  {item.password}</h4>
                <h4>subject:  {item.subject}</h4>
                {/* <h4>group-title:  {item.group[0].title}</h4>
                <h4>group-time:  {item.group[0].time}</h4> */}
              </div>
              <div className="r">
                <i onClick={() => { update(item.id) }} className="fa-solid fa-pencil"></i>
                <i onClick={() => { remove(item.id) }} className="fa-solid fa-trash-can"></i>
              </div>

            </div>
          )
        })}
      </div>

      <div className="right">
        <div>
          <label htmlFor="">First name</label>
          <input ref={inp1} type="text" />
        </div>
        <div>
          <label htmlFor="">Last name</label>
          <input ref={inp2} type="text" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input ref={inp3} type="email" />

        </div>
        <div>
          <label htmlFor="">Phone number</label>
          <input ref={inp4} type="number" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input ref={inp5} type="text" />
        </div>
        <div>
          <label htmlFor="">Subject</label>
          <input ref={inp6} type="text" />

        </div>
        {/* <div>
          <label htmlFor="">Group-title</label>
          <input ref={inp7} type="text" />
        </div>
        <div>
          <label htmlFor="">Group-time</label>
          <input ref={inp8} type="time" />
        </div> */}

        <button onClick={post}>Create</button>
      </div>


    </div>
  )
}

export default App
