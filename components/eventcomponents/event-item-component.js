import React from "react";
import Link from 'next/link';
const EventItemComponent = (props) => {
  const { id, description, title, date, location } = props;
  const dateData = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatLocation = location.replace(", ", "\n");
  const idRoute = `/events/${id}`;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-emerald-700 p-5 mb-4">
      <li>
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2" key={id}>
            {title}
          </h2>
          <date className="text-gray-300 text-base">{dateData}</date>
          <p className="text-gray-300 text-base  my-4">{description}</p>
          <address className="text-gray-300 text-base">{formatLocation}</address>
        </div>
        <div>
          <button link={idRoute}>Explore Event</button>
        </div>
      </li>
    </div>
  );
};

export default EventItemComponent;
