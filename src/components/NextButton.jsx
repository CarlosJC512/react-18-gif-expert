
export const NextButton = ( { increment, decrement }) => {

    return (
        <div className="container-button">
            <button 
                className="btn-danger"
                onClick={ decrement }
            >
                Anterior
            </button>
            <button 
                className="btn-success"
                onClick={ increment }
            >
                Siguiente
            </button>

        </div>
    )
}
