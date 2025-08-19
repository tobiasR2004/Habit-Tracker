import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  /*const data = [
    {nombreUs: "Tobias", contraseña: "1234"}];*/
  const handleStart = async () => {
    /*try {
            for (const Usuario of data){
                const res = await fetch("http://localhost:8080/api/usuario", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(Usuario)
                });
                if (res.ok) {
                    navigate('/ManageHabits');
                } else {
                    console.error("Error al iniciar sesión");
                }
            }
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }*/
    navigate("/ManageHabits");
  };
  return (
    <div className="flex flex-col items-center py-10 rounded-2xl justify-center w-xl h-full bg-[#d5d5d572]">
      <form className="w-full max-w-md mx-auto">
        <div className="w-full max-w-md mx-auto">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
            placeholder=""
            required
          />
        </div>
        <div className="w-full max-w-md mx-auto">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <button
          type="button"
          className="border-1 m-auto text-white font-bold py-2 px-10 rounded hover:bg-[#ffffff2e] hover:scale-110  transition-all duration-150 "
          onClick={handleStart}
        >
          {" "}
          INICIAR{" "}
        </button>
      </form>
    </div>
  );
}
