import { useState } from "react";

interface AltaModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function AltaModal({ open, setOpen }: AltaModalProps) {
  const hoursOfDay = [];

  for (let i = 0; i < 24; i++) {
    hoursOfDay.push(i.toString().padStart(2, "0") + ":00");
    hoursOfDay.push(i.toString().padStart(2, "0") + ":30");
  }
  return (
    <div
      className={`${
        open ? "flex" : "hidden"
      } fixed inset-0 z-50 items-center justify-center bg-opacity-50`}
    >
      <div
        id="crud-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="flex gap-4 m-auto p-4 w-full max-w-md max-h-full">
          <div className=" bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Habit
              </h3>
              <button
                onClick={() => setOpen(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form className="flex flex-col gap-4 p-4 md:p-5">
              <div className="flex flex-col gap-4 mb-4">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    ¿Cuál será tu nuevo hábito?
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <select className="block py-2.5 px-0 w-full text-sm caret-transparent text-gray-100 bg-transparent border-0 border-b-2 border-gray-200 appearance-none text-white focus:text-gray-800">
                  <option>Seleccionar hora ▲</option>
                  {hoursOfDay.map((time) => (
                    <option key={time}>{time}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="text-white inline-flex items-center cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="me-1 text-center -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Agregar nuevo hábito
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
