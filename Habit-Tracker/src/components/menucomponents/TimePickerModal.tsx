import TimePicker from "./TimePicker";

interface TimePickerModalProps {
  onClose: () => void;
}

export default function TimePickerModal({ onClose }: TimePickerModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl p-6 max-h-[90vh] w-[50vw] overflow-auto shadow-2xl">
        <h2 className="text-xl font-bold mb-4 text-center">
          Selecciona horarios
        </h2>
        <TimePicker onClose={onClose} />
      </div>
    </div>
  );
}