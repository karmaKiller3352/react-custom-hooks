import { usePrevious } from "./usePrevious";

export function useComponentUpdate<Props>(props:Props, callback: (prev: Props | null, next: Props) => void) {
    const prevProps = usePrevious<Props>(props)
    
    callback(prevProps.current, props)
}