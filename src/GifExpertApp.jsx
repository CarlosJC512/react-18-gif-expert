import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import { useCounter } from './hooks/useCounter';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Perros']);
    const { counter, increment, decrement } = useCounter(0);

    const onAddCatetegory = (newCategory) => {
        const categorias = JSON.stringify(categories).toLowerCase();
        const categoria = JSON.stringify(newCategory).toLowerCase();

        if( categorias.includes(categoria)) return;
        setCategories( [ newCategory, ...categories ] );
    }
    // console.log();
    return (
        <>
            <header className="header">
                <h1>GifExpertApp</h1>
            </header>

            <div className="container">
                <AddCategory 
                    onNewCategory={ value => onAddCatetegory(value) } 
                />

                { 
                    categories.map( category => (
                        <GifGrid 
                            key={ category } 
                            category={ category }
                            counter={ counter }
                            increment={ () => increment(12) }
                            decrement={ () => decrement(12) } 
                        />
                    ) ) 
                }

            </div>
        </>
    );
}
