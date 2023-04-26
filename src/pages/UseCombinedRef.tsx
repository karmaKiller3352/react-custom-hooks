import { forwardRef, useLayoutEffect, useRef } from "react";

import { useCombinedRef } from "../hooks/useCombinedRef";

const AbstractInput = forwardRef<HTMLInputElement>((props, ref) => {
  const componentRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    componentRef.current?.focus()
    console.log(`AbstractInput ref - `, componentRef)
  })

  const combinedRef = useCombinedRef(componentRef, ref);

  return <input ref={combinedRef} {...props} />;
});

export const UseCombinedRef = () => {
  const parentRef = useRef(null);

  useLayoutEffect(() => {
    console.log(`Parent ref - `, parentRef)
  })

  return <AbstractInput ref={parentRef} />;
};
