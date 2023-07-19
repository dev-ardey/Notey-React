// omdat dit een oudere? versie van react is moet ik useState zelf importen
import React, { useState } from "react";
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("")

  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Mindbend List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Mind bend 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Mind bend 2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  )
}