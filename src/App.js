import React, { useState } from 'react';
import './style.css';

function DatePicker({ value, onDateChange }) {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    $(inputRef.current).datepicker({
      dateFormat: 'dd/mm/yy',
      onSelect: onDateChange,
    });
    $(inputRef.current).datepicker('setDate', value || '');
  }, [value, onDateChange]);

  return <input ref={inputRef} />;
}

export default function App() {
  const [date, setDate] = useState('');

  function handleDateChange(dateText) {
    setDate(dateText);
  }

  function handleResetDate() {
    setDate('');
  }

  return (
    <>
      <div>{date ? `Date: ${date}` : 'Select date'}</div>
      <div>
        <DatePicker value={date} onDateChange={handleDateChange} />
      </div>
      <div>
        <button onClick={handleResetDate}>Reset date</button>
      </div>
    </>
  );
}