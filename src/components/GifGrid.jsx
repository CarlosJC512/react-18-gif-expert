import PropTypes from 'prop-types'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { NextButton } from './NextButton';

export const GifGrid = ({ category, counter, increment, decrement }) => {

    const { images, isLoading } = useFetchGifs( category, counter );
    
    return (
        <div className="images">
            <h3>{ category }</h3>
            {
                isLoading
                    && ( <h2>Cargando...</h2> )
            }

            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifItem 
                            key={ image.id }
                            { ...image }
                        />
                    ))
                }
            </div>

            <NextButton
                key={ category.length }
                decrement={ decrement }
                increment={ increment }
            />
        </div>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
    counter: PropTypes.number.isRequired,
}