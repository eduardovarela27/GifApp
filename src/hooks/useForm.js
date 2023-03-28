export const useForm = (inputvalue,setInputValue,categories,categoryToAdd) => {
    
    const handleOnChange = ({target}) => {
        setInputValue(target.value);
    }

    const handleOnKey = (e) => {
        if (e.key === "Enter") {
            //validates if the category is  already in the array and if value has more than 2 characters
            if (categories.includes(inputvalue) || inputvalue.trim().length <= 2) return
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