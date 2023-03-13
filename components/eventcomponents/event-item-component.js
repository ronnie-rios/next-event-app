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
        <p>{description}</p>
        <address>{formatAddress}</address>
        <date>{dateData}</date>
        <Button link={idNav}>Explore Event</Button>
      </div>
    </li>
  )
}

export default EventItemComponent