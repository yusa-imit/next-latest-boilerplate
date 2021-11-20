import { atom } from "recoil";
import { Atoms } from "@recoil/constants";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const Persist = atom<boolean>({
    key: Atoms.Persist,
    default: false,
    effects_UNSTABLE: [persistAtom],
});
