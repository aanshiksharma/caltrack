import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth";
import Dashboard from "@/components/dashboard/Dashboard";

async function DashboardPage() {
  // const user = await getUser();

  // if (!user) {
  //   redirect("/");
  // }

  return <Dashboard />;
}

export default DashboardPage;