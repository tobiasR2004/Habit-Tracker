import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function InitComponent() {
    const navigate = useNavigate();
    const handleStart = () => {
        navigate('/Menu');
    }
    return(
    <section className="object-top-left mt-50 ml-32 w-xl ">
        <div className='mb-7 hover:scale-110 origin-bottom-left transition-all duration-150 cursor-default'>
            <h1 className='text-gray-200 font-kanit-bold text-7xl'>Habit Tracker</h1>
            <p className='text-gray-400 font-kanit-medium text-bold w-xl mt-2'> Podras definir que habitos deseas tener, realizar un seguimiento de los mismos y ademas ver tu puntuacion semanal, mensual y anual</p>
        </div>
        <button className='border-1 text-white font-bold py-2 px-10 rounded hover:bg-[#ffffff2e] hover:scale-110 origin-bottom-left transition-all duration-150 ' onClick={handleStart}> INICIAR </button>
    </section>
  )
}