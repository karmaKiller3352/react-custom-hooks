import { useRef } from "react";
import equal from "fast-deep-equal";

import { usePrevious } from "./usePrevious";

export function useCustomCompare(
  deps: Array<any>,
  isEqual: (a: any, b: any) => boolean = equal
) {
  const counterRef = useRef(0);

  const prevDeps = usePrevious(deps);

  if (!isEqual(prevDeps.current, deps)) {
    counterRef.current++;
  }

  return [counterRef.current]
}

