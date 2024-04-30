"use client";
import React, { useState } from "react";
import Image from "next/image";

const Carousel = () => {
  const [next, setNext] = useState(false);
  const [previous, setPrevious] = useState(false);
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image
            className="d-block w-100"
            height={100}
            width={100}
            src="/images/dashbord.png"
            alt="Dashboard slide"
          />
        </div>
        <div className="carousel-item">
          <Image
            className="d-block w-100"
            height={100}
            width={100}
            src="/images/acedemics.jpeg"
            alt="Accounts slide"
          />
        </div>
        <div className="carousel-item">
          <Image
            className="d-block w-100"
            height={100}
            width={100}
            src="/images/dashbord.png"
            alt="Faculty slide"
          />
        </div>
        <div className="carousel-item">
          <Image
            className="d-block w-100"
            height={100}
            width={100}
            src="/images/dashbord.png"
            alt="Hr slide"
          />
        </div>
        <div className="carousel-item">
          <Image
            className="d-block w-100"
            height={100}
            width={100}
            src="/images/dashbord.png"
            alt="Mobile App slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only" onClick={() => setPrevious(true)}>
          Previous
        </span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only" onClick={() => setNext(true)}>
          Next
        </span>
      </a>
    </div>
  );
};

export default Carousel;
