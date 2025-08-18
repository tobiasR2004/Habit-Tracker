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
const hours = Array.from(
  { length: 24 },
  (_, i) => `${String(i).padStart(2, "0")}:00`
);

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
    <div className="table-auto border-collapse w-max mx-auto shadow-lg rounded-s overflow-hidden">

      <table className="table-auto border-collapse border w-max">
        <thead>
          <tr>
            <th className="px-2 py-1 border text-gray-300">Hs</th>
            {dayOfWeek.map((day) => (
              <th key={day} className="text-gray-300 border border-gray-100">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour}>
              <td className="border text-gray-300 border-gray-300 px-2 py-0.3 text-center">
                {" "}
                {hour}{" "}
              </td>
              {dayOfWeek.map((day) => {
                const isSeleceted = selectedDay[day]?.includes(hour);
                return (
                  <td
                    key={day}
                    onClick={() => toggleSlot(day, hour)}
                    className={`border text-gray-300 border-gray-300 cursor-pointer w-16 h-1 ${
                      isSeleceted
                        ? "bg-blue-100 text-white"
                        : "bg-[#1f1f1fe0] text-gray-100"
                    } hover:bg-blue-100`}
                  ></td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="p-4 space-y-4">
        {Object.entries(selectedDay)
          .filter(([, hours]) => hours.length > 0)
          .map(([day, hours]) => (
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

      <button
        onClick={onClose}
        className="text-white bg-blue-600 hover:bg-blue-700 cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5"
      >
        {" "}
        Aceptar{" "}
      </button>
    </div>
  );
}
