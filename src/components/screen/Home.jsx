import React from "react";
import Task from "../../Assests/task.jpg";

function Home() {
  return (
    <div className="container main h-100">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
          <img className="w-75 mt-5 ms-5" src={Task}></img>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 ">
          <p className="fs-1 fw-bolder mt-5 text-white">
            Unlock Your Daily Earnings: Simple Tasks, Big Rewards!
          </p>
          <p className="fs-4 mt-5" style={{ color: "#000000" }}>
            Discover how easy it is to boost your income by completing simple,
            everyday tasks on our platform. Whether you’re looking for a side
            hustle or a way to make the most of your spare time, our website
            offers a variety of tasks that fit your schedule and pay well. Start
            earning today!
          </p>
        </div>
      </div>
      <hr className="mt-5" />
      <div
        id="carouselExampleCaptions"
        class="carousel slide mb-5"
        data-bs-ride="carousel"
        style={{ width: "98%", maxWidth: "98%", backgroundColor: "white" }}
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner ">
          <div class="carousel-item active">
            <div className="fs-3 car1">
              Be a Pro Member and earn double!!! <br></br>
              50% off on membership
            </div>
          </div>
          <div class="carousel-item">
            <div className="car2 fs-3">
              Be Alert!
              <br></br>
              Sunday Special Task Is Upcoming!!!!
            </div>
          </div>
          <div class="carousel-item ">
            <div className="fs-3 car3">
              <p className="">COmplete Your Task Fast And Earn More</p>

              <button className="">Start</button>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
