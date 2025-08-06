import { useState } from "react";
import { Calendar, dateFnsLocalizer, type View } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
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

const events = [
  {
    title: "Evento de prueba",
    start: new Date(2025, 7, 7, 10, 0),
    end: new Date(2025, 7, 7, 12, 0),
    allDay: false,
  },
];

export const CalendarPage = () => {
  const [view, setView] = useState<View>("month");
  const [date, setDate] = useState(new Date());

  return (
    <div className="p-4">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        view={view}
        onView={(newView) => setView(newView)}
        date={date}
        onNavigate={(newDate) => setDate(newDate)}
        views={["month", "week", "day", "agenda"]}
        style={{ height: "90vh" }}
      />
    </div>
  );
};