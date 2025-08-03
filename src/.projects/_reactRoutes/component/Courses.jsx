import React from "react";
import courses from "../data/data";
const Courses = () => {
  return (
    <div className="coursesWrapper">
      <h1>Our Courses</h1>
      <div className="iconWrapper">
        {courses.map((course) => (
          <div className="card" key={course.id}>
            <img src={course.img} alt={course.name} />
            <h2>{course.name}</h2>
            <p>{course.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
