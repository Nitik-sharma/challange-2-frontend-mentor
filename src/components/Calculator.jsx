import React, { useState } from "react";

function Calculator() {
  const [age, setAge] = useState({
    year: "",
    month: "",
    days: "",
  });
  const [error, setError] = useState({
    invalid: "",
    errorD: "",
    errorM: "",
    errorY: "",
  });
  const upDate = (e) => {
    if (!age.days || !age.days || age.year) {
      setError({ ...error, invalid: "Invalid Inputs" });
    }
    if (age.days < 1 && age.days > 31) {
      setError({ ...error, errorD: "Must be the valid days" });
    }
    if (age.month < 1 && age.month > 12) {
      setError({ ...error, errorM: "Must be the valid Month" });
    }
    if (age.year > 2024) {
      setError({ ...error, errorY: "Must be the valid year" });
    }

    console.log("hello");
    console.log(age, "age");
  };

  return (
    <div className=" flex items-center justify-center m-auto mt-16">
      <div className=" w-[54%] h-[400px] border border-red-700 m-auto shadow-lg">
        <div className=" flex justify-between flex-col md:flex-row   pb-20 ">
          <div className=" p-3">
            <span className=" font-bold text-gray-500 p-3">Day</span>
            <input
              type="text"
              name="days"
              id=""
              className=" border border-gray-400 p-2  rounded-md w-32"
              value={age.days}
              onChange={(e) => setAge({ ...age, days: e.target.value })}
            />
          </div>
          <div className=" p-3">
            <span className=" font-bold text-gray-500 p-3">Month</span>
            <input
              type="text"
              name="month"
              id=""
              className=" border border-gray-400 p-2  rounded-md w-32"
              value={age.month}
              onChange={(e) => setAge({ ...age, month: e.target.value })}
            />
          </div>
          <div className=" p-3">
            <span className=" font-bold text-gray-500 p-3">Year</span>
            <input
              type="text"
              name="year"
              id=""
              className=" border border-gray-400 p-2  rounded-md w-32"
              value={age.year}
              onChange={(e) => setAge({ ...age, year: e.target.value })}
            />
            <br />
          </div>
        </div>
        <hr />
        <button onClick={upDate}>Click me</button>
        <div>
          <h1 className=" text-5xl font-bold">
            <span className=" text-blue-700">{age.year}</span>{" "}
            <span>Years</span>
          </h1>
          <h1 className=" text-5xl font-bold">
            <span className=" text-blue-700">{age.month}</span>{" "}
            <span>months</span>
          </h1>
          <h1 className=" text-5xl font-bold">
            <span className=" text-blue-700">{age.days}</span>
            <span>days</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
