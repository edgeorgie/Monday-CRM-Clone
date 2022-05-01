import React, { useState } from 'react'
import './Styles.css'

export const Ticket = () => {
  const [formData, setFormData] = useState({
    satus: 'not started',
    progress: 0,
    timestamp: new Date().toISOString(),
  })

  const editMode = false

  const handleSubmit = () => {
    console.log('submit')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(
      (prevState) => ({
        ...prevState,
        [name]: value
      })
    )
  }

  const categories = ['test1', 'test2', 'test3']

  return (
    <div className="ticket">
      <h1>{editMode ? "Update your ticket" : "Create a new ticket"}</h1>
      <div className="ticket-container">
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
              required
              value={formData.title}
            />

            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              onChange={handleChange}
              required
              value={formData.description}
            />

            <label>Category</label>
            <select
              name="category"
              onChange={handleChange}
              value={formData.category}
            >
              {categories?.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <label htmlFor="new-category">New Category</label>
            <input
              type="text"
              id="new-category"
              name="new-category"
              onChange={handleChange}
              required
              value={formData.category}
            />

            <label>Priority</label>
            <div className="multiple-input-container">
              <input
                type="radio"
                id="priority-1"
                name="priority"
                onChange={handleChange}
                value={1}
                checked={formData.priority === 1}
              />
              <label htmlFor="priority-1">1</label>
              <input
                type="radio"
                id="priority-2"
                name="priority"
                onChange={handleChange}
                value={2}
                checked={formData.priority === 2}
              />
              <label htmlFor="priority-2">2</label>
              <input
                type="radio"
                id="priority-3"
                name="priority"
                onChange={handleChange}
                value={3}
                checked={formData.priority === 3}
              />
              <label htmlFor="priority-3">3</label>
              <input
                type="radio"
                id="priority-4"
                name="priority"
                onChange={handleChange}
                value={4}
                checked={formData.priority === 4}
              />
              <label htmlFor="priority-4">4</label>
              <input
                type="radio"
                id="priority-5"
                name="priority"
                onChange={handleChange}
                value={5}
                checked={formData.priority === 5}
              />
              <label htmlFor="priority-5">5</label>
            </div>

            {editMode && (
              <>
                <input
                  type="range"
                  id="progress"
                  name="progress"
                  value={formData.progress}
                  min="0"
                  max="100"
                  onChange={handleChange}
                />
                <label htmlFor="progress">Progress</label>

                <label htmlFor="status">Status</label>
                <select
                  name="status"
                  onChange={handleChange}
                  value={formData.status}
                >
                  <option selected={formData.status === "done"} value="done">
                    Done
                  </option>
                  <option
                    selected={formData.status === "working on it"}
                    value="working on it"
                  >
                    Working on it
                  </option>
                  <option
                    selected={formData.status === "not started"}
                    value="not started"
                  >
                    Not Started
                  </option>
                  <option selected={formData.status === "stuck"} value="stuck">
                    Stuck
                  </option>
                </select>
              </>
            )}

            <input type="submit" />
          </section>
          <section>
            <label htmlFor="owner">Owner</label>
            <input
              type="text"
              id="owner"
              name="owner"
              onChange={handleChange}
              required={true}
              value={formData.owner}
            />
            <label htmlFor="avatar">Avatar</label>
            <input
              type="text"
              id="avatar"
              name="avatar"
              onChange={handleChange}
              required={true}
              value={formData.avatar}
            />
            <div className="img-preview">
              {formData.avatar && <img src={formData.avatar} alt="avatar" />}
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}
