import { useRouter } from 'next/router';
import { getEventById } from '../../data';
import Link from 'next/link';

const EventDetails = () => {
  const id = useRouter(); //set the router metho to a variable
  const params = id.query.eventId;
  const foundEvent = getEventById(params);

  if(!foundEvent) { return <p>no event found</p> }

  return (
    <div>
      <h1>{foundEvent.title}</h1>
      <p>{foundEvent.description}</p>
    </div>
  )
}

export default EventDetails