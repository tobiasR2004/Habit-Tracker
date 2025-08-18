import TimePicker from "./TimePicker";

interface TimePickerModalProps {
  onClose: () => void;
}

export default function TimePickerModal({ onClose }: TimePickerModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-[#1f1f1fe0] flex flex-col } rounded-xl p-6 max-h-[90vh] w-[40vw] overflow-auto shadow-2xl">
        <button
          onClick={onClose}
          className="text-white  w-20 h-10 justify-end self-end bg-blue-600 hover:bg-blue-700 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          {" "}
          Cerrar{" "}
        </button>
        <h2 className="text-xl font-bold mb-4 text-center text-white">
          Selecciona horarios
        </h2>
        <div className="overflow-auto flex-1">
          <TimePicker onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
