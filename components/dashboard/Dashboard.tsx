"use client"

import useOverlay from "@/hooks/useOverlay";

function Dashboard() {
    const { openOverlay } = useOverlay();

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
                <div className="grid grid-cols-2 gap-4 mt-10 w-full">
                    <button onClick={() => openOverlay("ADD_INGREDIENT")} className="bg-pink-800 py-3 rounded">Add Ingredient</button>
            
                    <button onClick={() => openOverlay("ADD_MEAL")} className="bg-pink-800 py-3 rounded">Add Meal</button>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;