import React from 'react'

const EventItemComponent = (props) => {
  const { id, description, title, date, location } = props;
  const dateData = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatLocation = location.replace(', ', '\n');;
  const idRoute = `/events/${id}`

  return (
    <li>
      <div>
        <h2 key={id}>{title}</h2>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <address>{formatLocation}</address>
      </div>
      <div>
        <date>{dateData}</date>
      </div>
      <div>
        <button link={idRoute}>Explore Event</button>
      </div>
    </li>
  )
}

export default EventItemComponent