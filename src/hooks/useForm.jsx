export const useForm = (inputvalue,setInputValue,categories,categoryToAdd) => {
    
    const handleOnChange = ({target}) => {
        setInputValue(target.value);
    }

    const handleOnKey = (e) => {
        if (e.key === "Enter") {
            if (categories.includes(inputvalue) || inputvalue.length <= 2) return
            categoryToAdd([inputvalue.toUpperCase(), ...categories]);
            setInputValue('');
        }
    }

    const handleOnclick = (e) => {
        e.key = "Enter";
        handleOnKey(e);
    }


     return {handleOnChange,handleOnclick,handleOnKey}

}