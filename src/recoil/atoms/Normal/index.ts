import { atom } from "recoil";
import { Atoms } from "@recoil/constants";

export const Normal = atom<boolean>({
    key: Atoms.Normal,
    default: false,
});
