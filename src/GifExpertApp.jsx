import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Perros']);

    const onAddCatetegory = (newCategory) => {
        const categorias = JSON.stringify(categories).toLowerCase();
        const categoria = JSON.stringify(newCategory).toLowerCase();

        if( categorias.includes(categoria)) return;
        setCategories( [ newCategory, ...categories ] );
    }


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
                        />
                    ) ) 
                }

            </div>
        </>
    );
}
