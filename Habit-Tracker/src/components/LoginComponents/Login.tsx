import { Link, useNavigate } from "react-router-dom";

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
    <div className="flex-col items-center py-10 rounded-2xl justify-center w-xl min-h-70vh bg-[#d5d5d572]">
      <form className="max-w-md mx-auto">
        <div className="w-full mx-auto">
          <label
            htmlFor="email"
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
          className="flex border-1 m-auto text-gray-200 font-bold py-2 px-10 rounded cursor-pointer hover:bg-[#2929296c] hover:scale-110  transition-all duration-150 "
          onClick={handleStart}
        >
          {" "}
          INICIAR{" "}
        </button>
        <Link to="/Register" className="flex mt-5 justify-center text-[#0c0235] hover:underline">Registrarse</Link>
      </form>
    </div>
  );
}
