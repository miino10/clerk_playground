
import { UserButton } from "@clerk/nextjs";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <div>
      <Welcome />
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
