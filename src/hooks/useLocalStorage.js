import React, { useEffect, useState } from "react"

export function useLocalStorage(key, initialValue = null) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? item : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue;
    }
  });

  const setValue = (value) => { setStoredValue(value) }
    useEffect(() => {
        try {
            if (storedValue === null || storedValue === undefined) {
                window.localStorage.removeItem(key)
            } else {
                window.localStorage.setItem(key, storedValue)
            } 
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error)
        }
    }, [key, storedValue])

  return [storedValue, setValue]
}
