import { signIn } from "@/auth"

export function SignIn(){
    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <form 
                style={{ width: 'auto', minWidth: '250px' }}
                action={
                async () => {
                    "use server"
                    await signIn('github')
                }
            }>
                <button className="w-full max-w-sm bg-gray-800 p-6 rounded-lg shadow-md" type="submit">
                    Sign in with Github
                </button>
            </form>
        </div>
    )
}