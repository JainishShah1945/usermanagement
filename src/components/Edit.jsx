import React, { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();

  const etitleRef = useRef(null);
  const edescRef = useRef(null);
  const elevelRef = useRef(null);
  const edateRef = useRef(null);
  const id = useParams();
  const [status, setStatus] = useState(false);

  const handleEdit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authtoken");

    const editData = {
      title: etitleRef.current.value,
      description: edescRef.current.value,
      level: elevelRef.current.value,
      duedate: edateRef.current.value,
      status: status,
    };
    console.log(editData);
    await fetch(`http://localhost:5000/api/edittask/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,

        "Content-Type": "application/json",
      },
      body: JSON.stringify(editData),
    }).then(() => navigate("/task"));
  };

  return (
    <div
      className="container mt-5"
      style={{
        backgroundColor: "#f8f9fa",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h2 className="mb-4" style={{ color: "#007bff" }}>
        Edit Task
      </h2>
      <form onSubmit={handleEdit}>
        <div className="row">
          <div className="col-lg-6 col-sm-12 mb-3">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                className="form-control"
                type="text"
                name="title"
                ref={etitleRef}
                placeholder="Eg: Perform CRUD operation..."
                style={{ marginBottom: "10px" }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                id="description"
                className="form-control"
                type="text"
                name="description"
                ref={edescRef}
                placeholder="Describe your task..."
                style={{ marginBottom: "10px" }}
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 mb-3">
            <div className="form-group">
              <label htmlFor="level">Priority Level</label>
              <select
                id="level"
                name="level"
                className="form-control"
                required
                ref={elevelRef}
                style={{ marginBottom: "10px" }}
              >
                <option value="">Select Priority Level</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div className="form-group">
              <label>Status</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="status"
                    value={true}
                    checked={status === true}
                    onChange={() => setStatus(true)}
                  />
                  Completed
                </label>
                <label style={{ marginLeft: "15px" }}>
                  <input
                    type="radio"
                    name="status"
                    value={false}
                    checked={status === false}
                    onChange={() => setStatus(false)}
                  />
                  Pending
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="duedate">Due Date</label>
              <input
                id="duedate"
                className="form-control"
                type="date"
                name="duedate"
                ref={edateRef}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Edit;
