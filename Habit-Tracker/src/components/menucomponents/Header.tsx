import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.pathname;
    let buttons;
    const btnClass = 'border-1 text-white cursor-pointer font-bold py-2 px-8 rounded hover:bg-[#ffffff2e] hover:scale-110 origin-bottom-left transition-all duration-150';

    
    if(path === "/Menu"){
        buttons = (
            <>
            <button className={btnClass} onClick={() => {navigate("/ManageHabits")}}>
                Manage Habits 
            </button>
            <button className={btnClass} onClick={() => {navigate("/")}}>
                Menu
            </button>
            </>
        );
    }
        else if(path === "/ManageHabits"){
            buttons = (
                <>
                <button className={btnClass} onClick={() => {navigate("/Menu")}}>
                    Back to Home
                </button>
                </>
            );
        }
        
    return (
        <div className="flex gap-8 w-fit mx-auto p-2 px-20 mb-10 rounded-b-xl justify-center items-center bg-[#4b4b4b79]">
            {buttons}
        </div>
    );
}