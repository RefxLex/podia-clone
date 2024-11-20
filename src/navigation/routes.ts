import { PUBLIC_PATH } from "../environments"

export enum routes {
    Home = '/',
    Contacts = 'contacts',
}

export const addPublicPath = (route: string) => {
    return PUBLIC_PATH + route
}