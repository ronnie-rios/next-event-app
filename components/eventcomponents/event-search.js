import { useRef } from 'react'

const EventSearch = (props) => {
  const yearRef = useRef();
  const monthRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const selectYear = yearRef.current.value;
    const selectMonth = monthRef.current.value;

    props.onSearch(selectYear, selectMonth);
  } 

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label htmlFor="year" id="year">
            Year
          </label>
          <select id="year" ref={yearRef} className='block mb-2 text-sm font-medium text-white'>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div>
          <label htmlFor="month" id="month" className='block mb-2 text-sm font-medium text-white'>
            month
          </label>
          <select id="month" ref={monthRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">Novemeber</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <button>Find events</button>
    </form>
  )
}

export default EventSearch