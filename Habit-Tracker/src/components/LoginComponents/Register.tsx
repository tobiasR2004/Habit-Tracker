import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [nombreUs, setNombreUs] = useState("");
    const [contraseña, setContraseña] = useState("");

    const handleRegister = async (e: React.FormEvent) =>{
        e.preventDefault();

        const userData = { nombreUs, contraseña }
        try{
            const res = await  fetch("http://localhost:8080/api/usuario/register", {
                method: "POST",
                headers: { 
                    "content-type": "application/json"
                 },
                body: JSON.stringify(userData),
        });
        if (!res.ok){
            throw new Error("Error al registrar el usuario");
        }

        const data = await res.json();
        console.log("Usuario registrado:", data);
        alert("Usuario registrado con exito");
        navigate("/");
    } catch (error) {
        console.error("Error al registrar el usuario:", error);
        alert("Error al registrar el usuario");
    }
}



  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex-col items-center py-10 rounded-2xl justify-center w-xl min-h-70vh bg-[#d5d5d572]">
        <form className="max-w-md mx-auto" onSubmit={handleRegister}>
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
              value= { nombreUs }
              onChange= { (e) => setNombreUs(e.target.value) }
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
              value={ contraseña }
              onChange = { (e) => setContraseña(e.target.value) }
              required
            />
          </div>
          <button type="submit" className="flex border-1 m-auto text-gray-200 font-bold mt-5 py-2 px-10 rounded cursor-pointer hover:bg-[#2929296c] hover:scale-110  transition-all duration-150 ">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
