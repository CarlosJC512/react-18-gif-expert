import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Prueba en < GifGrid />', () => {

    const category = 'Naruto';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category } />);
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );
    });

    test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'x5f4D5Ls',
                title: 'Naruto',
                url: 'https://www.google.com/'
            },
            {
                id: 'x5f4D5sdLs',
                title: 'Goku',
                url: 'https://www.google.com/'
            },
        ];
        

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render( <GifGrid category={ category } />);
        expect( screen.getAllByRole('img').length ).toBe(2);
    });
});