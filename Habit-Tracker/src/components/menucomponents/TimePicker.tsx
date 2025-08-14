import { useState } from "react";

const dayOfWeek = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];
const hours = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, "0")}:00`);

interface TimePickerProps {
  onClose: () => void;
}

export default function TimePicker({ onClose }: TimePickerProps) {
  const [selectedDay, setSelectedDay] = useState<{ [day: string]: string[] }>(
    {}
  );

  const toggleSlot = (day: string, hour: string) => {
    setSelectedDay((prev) => {
      const current = prev[day] || [];
      if (current.includes(hour)) {
        return { ...prev, [day]: current.filter((h) => h !== hour) };
      } else {
        return { ...prev, [day]: [...current, hour] };
      }
    });
  };

  return (
    <div className="table-auto border-collapse w-max mx-auto shadow-lg rounded-lg overflow-hidden">
      <table className="table-auto border-collapse border w-max">
        <thead>
          <tr>
            <th className="px-2 py-1 border">Hs</th>
            {dayOfWeek.map((day) => (
              <th key={day} className="border border-gray-300 px-2 py-1">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour}>
              <td className="border border-gray-300 px-2 py-1 text-center">
                {" "}
                {hour}{" "}
              </td>
              {dayOfWeek.map((day) => {
                const isSeleceted = selectedDay[day]?.includes(hour);
                return (
                  <td
                    key={day}
                    onClick={() => toggleSlot(day, hour)}
                    className={`border border-gray-300 cursor-pointer w-16 h-8 ${
                      isSeleceted
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black"
                    } hover:bg-blue-200`}
                  ></td>
                );
              })}
            </tr>
          ))}          
        </tbody>
      </table>

      <div className="p-4 space-y-4">
        {Object.entries(selectedDay).filter(([, hours]) => hours.length > 0).map(([day, hours]) => (
          <div key={day}>
            <h3 className="font-semibold text-gray-700 mb-2">{day}</h3>
            <div className="flex flex-wrap gap-2">
              {hours.length > 0 ? (
                hours.map((hour) => (
                  <span
                    key={hour}
                    className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm"
                  >
                    {hour}
                  </span>
                ))
              ) : (
                <span className="text-gray-400 text-sm">
                  No hay horarios seleccionados
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <button onClick={onClose}> Close </button>
    </div>
  );
}
