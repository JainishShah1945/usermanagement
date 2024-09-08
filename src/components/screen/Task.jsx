import React, { useEffect, useRef, useState } from "react";
import { GrFormView } from "react-icons/gr";
import { MdModeEdit } from "react-icons/md";

import { MdDeleteSweep } from "react-icons/md";
import { IoIosRemoveCircle } from "react-icons/io";
import axios from "axios";
import { Link } from "react-router-dom";

function Task() {
  const [task, settask] = useState([]);
  const [descview, setdescview] = useState(false);
  const [id, setid] = useState("");

  const title = useRef();
  const desc = useRef();
  const date = useRef();
  const level = useRef();
  const handleondelete = async (id) => {
    const token = localStorage.getItem("authtoken");

    console.log(id);
    try {
      const response = await fetch(`http://localhost:5000/api/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        settask((task) => task.filter((task) => task.taskId !== id));
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      alert("Invalid Action");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authtoken");
    axios
      .get("http://localhost:5000/api/task", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((response) => {
        console.log(response.data);
        settask(response.data);
      })

      .catch((error) => console.log(error));
  }, []);

  const handleonsubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authtoken");

    const titleref = title.current.value;
    const descref = desc.current.value;
    const dateref = date.current.value;
    const levelref = level.current.value;
    await fetch("http://localhost:5000/api/createtask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: titleref,
        description: descref,
        duedate: dateref,
        level: levelref,
      }),
    });
    settask([
      ...task,
      {
        title: titleref,
        description: descref,
        duedate: dateref,
        level: levelref,
      },
    ]);
  };
  const token = localStorage.getItem("authtoken");

  if (token) {
    return (
      <>
        <form onSubmit={handleonsubmit} className="container h-100 mt-5 p-3">
          <div className="row bg-white ">
            <div className="col-lg-6 col-sm-12 mt-3">
              <table class="table table-striped table-dark">
                <thead>
                  <tr>
                    <td>
                      <input
                        className="p-1 mt-2 mb-2"
                        style={{ width: "150px" }}
                        type="text"
                        name="title"
                        ref={title}
                        placeholder="Eg:Perform CRUD operation..."
                      ></input>
                    </td>
                    <td>
                      <input
                        className="p-1 mt-2 mb-2"
                        style={{ width: "150px" }}
                        type="text"
                        name="description"
                        ref={desc}
                        placeholder="Describe your task..."
                      ></input>
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="col-lg-6 col-sm-12 mt-3">
              <table class="table table-striped table-dark">
                <thead>
                  <tr>
                    <td>
                      <select
                        name="level"
                        required
                        className="p-1 mt-2 mb-2"
                        style={{ width: "150px" }}
                        ref={level}
                      >
                        <option value="">Select Priority Level</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                      </select>
                    </td>

                    <td>
                      <input
                        className="p-1 mt-2 mb-2"
                        style={{ width: "150px" }}
                        type="date"
                        name="duedate"
                        ref={date}
                      ></input>
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="">
              <button className="btn btn-success mt-3 mb-3">ADD</button>
            </div>
          </div>
        </form>

        <table class="table table-dark mgt p-5">
          <thead>
            <tr>
              <th className="fs-5" scope="col">
                Sr No.
              </th>
              <th scope="col" className="fs-5">
                Title
              </th>
              <th scope="col" className="fs-5">
                Level
              </th>

              <th scope="col" className="fs-5">
                Due Date
              </th>

              <th scope="col" className="fs-5">
                Status
              </th>
              <th scope="col" className="fs-5">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {console.log(task)}
            {task !== null ? (
              task.map((task, index) => (
                <>
                  <tr>
                    <th className="fs-4" scope="row">
                      {index + 1}
                    </th>
                    <td className="fs-4">{task.title}</td>
                    <td className="fs-4">{task.level}</td>

                    <td className="fs-4">
                      {new Date(task.duedate).toLocaleDateString()}
                    </td>
                    <td className="fs-4">
                      {!task.status === false ? "Completed" : "Pending"}
                    </td>

                    <td>
                      <button
                        className={
                          descview && task.taskId === id
                            ? "bg-danger"
                            : "bg-success"
                        }
                        onClick={() => {
                          {
                            !descview ? setdescview(true) : setdescview(false);
                          }
                          setid(task.taskId);
                        }}
                      >
                        {descview && task.taskId === id ? (
                          <IoIosRemoveCircle></IoIosRemoveCircle>
                        ) : (
                          <GrFormView></GrFormView>
                        )}
                      </button>
                      <Link to={`/edittask/${task.taskId}`}>
                        <button className="bg-primary">
                          <MdModeEdit />
                        </button>
                      </Link>

                      <button
                        className="bg-danger"
                        onClick={() => handleondelete(task.taskId)}
                      >
                        <MdDeleteSweep></MdDeleteSweep>
                      </button>
                    </td>
                  </tr>
                  {descview && task.taskId === id ? (
                    <td colspan="4" className="bg-black text-white fs-5">
                      {task.description}
                    </td>
                  ) : null}
                </>
              ))
            ) : (
              <h1>Hello</h1>
            )}
          </tbody>
        </table>
      </>
    );
  } else {
    return (
      <>
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <div
            className="card text-center p-5 shadow-lg"
            style={{ width: "30rem" }}
          >
            <h1 className="card-title text-danger mb-4">Access Denied</h1>
            <p className="card-text fs-4 mb-4">
              Sorry, you can't access this page.
            </p>
            <p className="card-text fs-5 mb-4">
              Please <span className="text-primary">log in</span> first to
              continue.
            </p>
            <Link to="/login" className="btn btn-primary fs-5">
              Go to Login
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Task;
