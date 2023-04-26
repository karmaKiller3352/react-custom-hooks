import { useCallback, MutableRefObject, RefCallback } from "react";

type Ref<T> = null | undefined | MutableRefObject<T> | RefCallback<T>;

export function useCombinedRef<T>(...refs: Ref<T>[]) {
  const combinedRef = useCallback(
    (element: T) => {
      refs.forEach((ref) => {
        if (!ref) return;

        if (typeof ref === "function") {
          ref(element);
        } else {
          ref.current = element;
        }
      });
    },
    [refs]
  );

  return combinedRef;
}
