"use client"

function LandingPage() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="w-full">
        <h1 className="text-5xl font-bold text-center">Welcome to CalTrack</h1>
        <p className="mt-3 text-2xl text-center">Track your meals and ingredients with ease.</p>
        </div>

      </main>
    </div>
  );
}

export default LandingPage;