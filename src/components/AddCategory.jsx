import { useState } from "react"

export const AddCategory = ({ onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const value = inputValue.trim();
        if(value.length <= 1) 
            return;

        // setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory( value )
        setInputValue('');
    }

    return (
        <form
            className="form" 
            onSubmit={ onSubmit }
        >
            <input
            className="input"
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
