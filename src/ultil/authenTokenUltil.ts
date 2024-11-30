import { StorageEnum } from "./ultilEnums";

export function addJwt(token: string) {
    localStorage.setItem(StorageEnum.authenToken, token)
}

export function getJwt() {
    return localStorage.getItem(StorageEnum.authenToken)
}