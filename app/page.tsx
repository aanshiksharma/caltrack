import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth";
import LandingPage from "@/components/landing/LandingPage";

async function Home() {
  // const user = await getUser();

  // if (user) {
  //   redirect('/dashboard');
  // }

  return <LandingPage />
}

export default Home;