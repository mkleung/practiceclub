import React from "react";

const Days = () => {
  const currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();

  // BUILD WEEKS ARRAY
  let monthArray = [];
  var firstOfMonth = new Date(year, month, 1);
  var lastOfMonth = new Date(year, month + 1, 0);
  let weeksNum = Math.ceil(firstOfMonth.getDay() + lastOfMonth.getDate() / 7);
  for (let i = 0; i < weeksNum; i++) {
    monthArray.push([]);
  }

  // POPULATE EMPTY DAYS
  var emptyDays = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();
  for (let i = 0; i < emptyDays; i++) {
    monthArray[0].push(<div key={"empty" + i} className="date" />);
  }

  // POPULATE FULL DAYS
  // get all dates
  var count = 0;
  for (var i = firstOfMonth; i <= lastOfMonth; i.setDate(i.getDate() + 1)) {
    let day = new Date(i);
    monthArray[count].push(
      <div className="square">
        <button
          className={
            "date btn " +
            (day.getDate() === new Date().getDate() ? "current" : "")
          }
          key={i}
        >
          {day.getDate()}
          {/* <br />
          {day.getMonth()}
          <br />
          {day.getFullYear()} */}
        </button>
      </div>
    );

    if (Object.keys(monthArray[count]).length === 7) {
      count++;
    }
  }

  // DISPLAY CALENDAR
  return (
    <div>
      {monthArray.map((week, i) => {
        return (
          <div className="daysRow" key={i}>
            {week.map((day, index) => (
              <div className="daysCell" key={index}>
                {day}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Days;