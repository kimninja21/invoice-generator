import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "./lib/db"
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GitHub],
  adapter: MongoDBAdapter(clientPromise),
})