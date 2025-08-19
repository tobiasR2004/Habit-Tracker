
import { useNavigate } from 'react-router-dom';

export default function InitComponent() {
    const navigate = useNavigate();
    const data = [
    {nombreUs: "Tobias", contraseña: "1234"}];
    const handleStart = async() => {
        try {
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
        }
    }
    return(
    <section className="object-top-left mt-50 ml-32 w-xl ">
        <div className='mb-7 hover:scale-110 origin-bottom-left transition-all duration-150 cursor-default'>
            <h1 className='text-gray-200 font-kanit-bold text-7xl'>Habit Tracker</h1>
            <p className='text-gray-400 font-kanit-medium text-bold w-xl mt-2'> Podras definir que habitos deseas tener, realizar un seguimiento de los mismos y ademas ver tu puntuacion semanal, mensual y anual</p>
        </div>
        <button type='button' className='border-1 text-white font-bold py-2 px-10 rounded hover:bg-[#ffffff2e] hover:scale-110 origin-bottom-left transition-all duration-150 ' onClick={handleStart}> INICIAR </button>
    </section>
  )
}