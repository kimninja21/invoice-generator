import { SignIn } from "../component/SignIn"
import { auth } from "@/auth"
import {redirect} from "next/navigation"
export default async function SignInPage(){
    const session = await auth()
    if (session?.user) redirect('/invoice')
    return <SignIn />
}