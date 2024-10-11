import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import LeftBar from "./_component/LeftBar/index";
import RightBar from "./_component/RightBar";
import Center from "./_component/center";
import PageClient from "./PageClient";
interface User {
  name: string;
  email: string;
  image: string;
}
export default async function Home() {
  const session = await getServerSession(options);

  const user = session?.user || null;
  console.log(user);
  
  return (
    <PageClient/>
  );
}
