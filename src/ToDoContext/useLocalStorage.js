import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
        React.useEffect(() => {
        setTimeout(() => {
        try {
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;
            if (!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify([initialValue]));
            parsedItem = [];
            } else {
            parsedItem = JSON.parse(localStorageItem);
            }
            setItem(parsedItem);
            setLoading(false);
        } catch (error) {
            setError(error);
        }
        }, 1000);
    });
    
        const saveItem = (newItem) => {
        try {
        const stringifyToDoS = JSON.stringify(newItem)
        localStorage.setItem(itemName, stringifyToDoS)
        setItem(newItem);
        } catch (error) {
        setError(error);
        }
    };
        return {
        item: item || [],
        saveItem,
        loading,
        error
    };
}


export { useLocalStorage }
