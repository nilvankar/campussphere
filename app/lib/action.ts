import { getIronSession } from "iron-session"
import { defaultSession, sessionData, sessionOptions } from "./lib"
import { cookies } from "next/headers"

export const getSession=async()=>{
    try {
        "use server"
        const session=await getIronSession<sessionData>(cookies(),sessionOptions)
        if(!session.isLogged){
            session.isLogged=defaultSession.isLogged
        }
        return session
    } catch (error) {
        console.error(error)
    }
}