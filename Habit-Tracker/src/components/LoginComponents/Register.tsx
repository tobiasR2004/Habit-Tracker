export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex-col items-center py-10 rounded-2xl justify-center w-xl min-h-70vh bg-[#d5d5d572]">
        <form className="max-w-md mx-auto">
          <div className="w-full mx-auto">
            <label
              htmlFor="User"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              User
            </label>
            <input
              type="text"
              id="User"
              className="bg-gray-50 border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
              placeholder=""
              required
            />
          </div>
          <div className="w-full max-w-md mx-auto">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-200 dark:text-white"
            >
              password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 "
              required
            />
          </div>
          <button className="flex border-1 m-auto text-gray-200 font-bold mt-5 py-2 px-10 rounded cursor-pointer hover:bg-[#2929296c] hover:scale-110  transition-all duration-150 ">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
