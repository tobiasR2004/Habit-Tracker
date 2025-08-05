import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MenuComponent() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
    }
    const handleManage = () => {
        navigate('/ManageHabits');
    }

    return (
        <div className="flex gap-8 justify-center items-center">
             <button className='border-1 text-white font-bold py-2 px-10 rounded hover:bg-[#ffffff2e] hover:scale-110 origin-bottom-left transition-all duration-150 ' onClick={handleBack}> VOLVER </button>
             <button className='border-1 text-white font-bold py-2 px-10 rounded hover:bg-[#ffffff2e] hover:scale-110 origin-bottom-left transition-all duration-150 ' onClick={handleManage}> Manage Your Habits</button>
        </div>
    );
}
