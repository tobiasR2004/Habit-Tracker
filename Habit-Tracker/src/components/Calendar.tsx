import Calendar from "react-calendar";
import { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import '../styles/Calendar.css';

export default function CalendarComponent() {
    const [date, setDate] = useState<Date | null>(new Date());

    return (
        <div className="w-full h-90vw m-auto flex justify-center items-center">
            <Calendar
                onChange={(value) => setDate(value as Date | null)}
                value={date}
                className="custom-calendar" 
            />
        </div>
    );
}