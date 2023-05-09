import React, { useState } from 'react';

const DateSelector = () => {
  const [weekDay, setWeekDay] = useState('Monday');
  const [month, setMonth] = useState('January');

  const handleWeekDayChange = (event) => {
    setWeekDay(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  return (
    <div>
      <label>
        Week Day:
        <select value={weekDay} onChange={handleWeekDayChange}>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
        </select>
      </label>
      <br />
      <label>
        Month:
        <select value={month} onChange={handleMonthChange}>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </label>
      <br />
      <p>Selected Week Day: {weekDay}</p>
      <p>Selected Month: {month}</p>
    </div>
  );
};

export default DateSelector;