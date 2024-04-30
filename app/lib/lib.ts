import { SessionOptions } from "iron-session";

export interface sessionData{
    id:string
    fullName:string;
    instituteName:string;
    email:string;
    isLogged:boolean
}
const secret:string=process.env.SECRET_KEY as string
export const defaultSession:sessionData={
    isLogged: false,
    id: "",
    fullName: "",
    instituteName: "",
    email: ""
}
export const sessionOptions:SessionOptions={
    password:secret,
    cookieName:"campus_key",
    cookieOptions:{httpOnly:true,secure:process.env.NODE_ENV==="development"}

}