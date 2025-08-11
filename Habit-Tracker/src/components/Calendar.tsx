import { useState } from "react";
import { Calendar, dateFnsLocalizer, type View } from "react-big-calendar";
import { format, parse, startOfWeek, getDay, set } from "date-fns";
import { es } from "date-fns/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  es: es,
};


const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});


export const CalendarPage = () => {
  const [view, setView] = useState<View>("month");
  const [date, setDate] = useState(new Date());
  const [habitState, setHabitState] = useState(null);

  const [events, setEvents] = useState([
    {
      id: 1,
    title: "Evento de prueba",
    start: new Date(2025, 7, 15, 10, 0),
    end: new Date(2025, 7, 15, 12, 0),
    allDay: false,
    habitState: false,
  },
  {
    id: 2,
    title: "Evento de prueba 2",
    start: new Date(2025, 7, 16, 14, 0),
    end: new Date(2025, 7, 16, 16, 0),
    allDay: false,
    habitState: true,
  },
]);

const stateStyle = (event: any) => {
  const  style = {
    background: event.habitState ? "green" : "red"};
    return { style };
  }

  const handleSelectEvent = (event: any) => {
    setEvents((prevEvents) => 
    prevEvents.map((e) => e.id === event.id ?{...e, habitState: !e.habitState} : e))
  }

  return (
    <div className="p-4">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="day"
        view={view}
        onView={(newView) => setView(newView)}
        date={date}
        onNavigate={(newDate) => setDate(newDate)}
        views={["month", "week", "day", "agenda"]}
        style={{ height: "90vh" }}
        eventPropGetter={stateStyle}
        onSelectEvent={handleSelectEvent}
      />
    </div>
  );
};