import { auth } from "@/auth";
import Link from "next/link"
import SignOutButton from "./component/SignOut"
export default async function Home() {
    const session = await auth()
    console.log(session);
    return (

        <div>
            {
                session?.user ? <SignOutButton /> : <Link href="sign-in">Sign In</Link>
            }
        </div>

    )
    
}