import React, { useEffect, useState } from "react";
import axios from "axios";
import { GrFormView } from "react-icons/gr";
import { IoIosRemoveCircle } from "react-icons/io";
import { Link } from "react-router-dom";

function PendingTask() {
  const [task, settask] = useState([]);
  const [descview, setdescview] = useState(false);
  const [id, setid] = useState("");

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
  const token = localStorage.getItem("authtoken");

  if (token) {
    return (
      <div>
        <table className="table table-hover table-bordered table-dark mt-5">
          <thead className="thead-light">
            <tr>
              <th className="fs-5 text-center" scope="col">
                Sr No.
              </th>
              <th scope="col" className="fs-5 text-center">
                Title
              </th>
              <th scope="col" className="fs-5 text-center">
                Level
              </th>
              <th scope="col" className="fs-5 text-center">
                Due Date
              </th>
              <th scope="col" className="fs-5 text-center">
                Status
              </th>
              <th scope="col" className="fs-5 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {task !== null ? (
              task
                .filter((task) => !task.status)
                .map((task, index) => (
                  <React.Fragment key={task.taskId}>
                    <tr>
                      <th className="fs-4 text-center align-middle" scope="row">
                        {index + 1}
                      </th>
                      <td className="fs-4 text-center align-middle">
                        {task.title}
                      </td>
                      <td className="fs-4 text-center align-middle">
                        {task.level}
                      </td>
                      <td className="fs-4 text-center align-middle">
                        {new Date(task.duedate).toLocaleDateString()}
                      </td>
                      <td className="fs-4 text-center align-middle">
                        {task.status ? "Completed" : "Pending"}
                      </td>
                      <td className="text-center align-middle">
                        <div className="btn-group">
                          <button
                            className={
                              descview && task.taskId === id
                                ? "btn btn-danger me-2"
                                : "btn btn-success me-2"
                            }
                            onClick={() => {
                              setdescview(!descview);
                              setid(task.taskId);
                            }}
                          >
                            {descview && task.taskId === id ? (
                              <IoIosRemoveCircle size={20} />
                            ) : (
                              <GrFormView size={20} />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                    {descview && task.taskId === id ? (
                      <tr>
                        <td
                          colSpan="6"
                          className="bg-dark text-white fs-5 text-center"
                        >
                          {task.description}
                        </td>
                      </tr>
                    ) : null}
                  </React.Fragment>
                ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  <h1>No Tasks Found</h1>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
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

export default PendingTask;
