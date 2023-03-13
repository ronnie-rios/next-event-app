const EVENTS = [
    {
        id: '1',
        title: 'Event number 1',
        description: 'This is event number 1',
        location: '123 Main Street, Main City',
        date: '2023-12-12',
        isFeatured: true,
        image: ''
    },
    {
        id: '2',
        title: 'Event number 2',
        description: 'This is event number 2',
        location: '123 Cool Street, Cool Town',
        date: '2023-11-11',
        isFeatured: false,
        image: ''
    },
    {
        id: '3',
        title: 'Event number 3',
        description: 'This is event number 3',
        location: '123 Awesome Street, Awesome City',
        date: '2023-09-09',
        isFeatured: false,
        image: ''
    },
    {
        id: '4',
        title: 'Event number 4',
        description: 'This is event number 4',
        location: '123 Whoa lane, Whoa City',
        date: '2022-10-10',
        isFeatured: false,
        image: ''
    },
    {
        id: '5',
        title: 'Event number 5',
        description: 'This is event number 5',
        location: '123 Chill Blvd., Chill Village',
        date: '2022-03-03',
        isFeatured: false,
        image: ''
    },
]

export function getFeaturedEvents() {
    return EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return EVENTS.find((event) => event.id === id);
  }