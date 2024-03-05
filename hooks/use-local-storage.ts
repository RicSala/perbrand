import { useEffect, useState } from 'react';

/**
 * Custom hook to interact with localStorage.
 *
 * @template T Type of the stored value.
 * @param {string} key Key for the localStorage.
 * @param {T} initialValue Initial value to be set.
 * @returns {[T, function(T): void]} A tuple where the first item is the stored value and the second item is a setter function for the value.
 */
const useLocalStorage = (key: any, initialValue: any) => {
    const [storedValue, setStoredValue] = useState(initialValue);

    useEffect(() => {
        // Retrieve from localStorage when the component mounts
        const item = window.localStorage.getItem(key);
        if (item) {
            setStoredValue(JSON.parse(item)); // if there is a value, parse it and set it
        }
    }, [key]);

    /**
     * Setter function to update the stored value both in state and in localStorage.
     *
     * @param {T} value New value to be set.
     */
    const setValue = (value: any) => {
        // Save state
        setStoredValue(value);
        // Save to localStorage
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
};

export default useLocalStorage;
