import { EffectCallback, useEffect } from "react";
import { useCustomCompare } from "./useCustomCompare";

export function useDeepEffect(callback: EffectCallback, deps: Array<any>) {
    useEffect(callback, useCustomCompare(deps))
}

