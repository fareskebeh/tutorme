import {useState, useEffect} from "react"

function useDebounce<T>(val: T, delay: number): T {
    const[debVal, setDebVal] = useState(val)

    useEffect(()=> {
        const debounce = setTimeout(()=> setDebVal(val), delay)

        return()=> clearTimeout(debounce)

    },[val,delay])

    return debVal;
}

export default useDebounce