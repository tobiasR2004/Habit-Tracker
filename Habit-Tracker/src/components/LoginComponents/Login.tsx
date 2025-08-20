import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [contraseña, setContraseña] = useState("");
  const [nombreUs, setNombreUs] = useState("");


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const loginData = { nombreUs, contraseña };
    try {
    const res = await fetch("http://localhost:8080/api/usuario/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData)
    });

    if(!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Error al iniciar sesión");
    }

    const data = await res.json();
    console.log("Usuario logueado:", data);
    navigate("/ManageHabits");
  } catch (error: any) { 
    console.error("Error al iniciar sesión:", error);
    alert(error.message);
  }
}
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
            value={nombreUs}
            onChange={(e) => setNombreUs(e.target.value)}
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
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
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
          onClick={handleLogin}
        >
          {" "}
          INICIAR{" "}
        </button>
        <Link to="/Register" className="flex mt-5 justify-center text-[#0c0235] hover:underline">Registrarse</Link>
      </form>
    </div>
  );
}
