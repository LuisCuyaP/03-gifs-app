import { useState } from "react"
import { mockGifs } from "./data/gifs.mock"
import { GifList } from "./gifs/GifList"
import { CustomHeader } from "./shared/components/CustomHeader"
import { PreviousSearch } from "./shared/components/PreviousSearch"
import { SearchBar } from "./shared/components/SearchBar"

interface ItemGif {
    id?: string;
    url?: string;
    title?: string;
    width?: number;
    height?: number;
}




export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState(['dragon ball']);

    const handleTermClicked = (term: string) => {
        console.log({term});
    }

    const handleSearch = (query: string) => {
        console.log({query});
    }

    return(
        <>

        {/* header */}
        <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />

        {/* search */}
        <SearchBar placeholder="Buscar gifs..." onQuery={handleSearch} />

        {/* previous searches */}
        <PreviousSearch searches={['Goku', 'Dragon Ball']} onLabelClicked={(term: string) => handleTermClicked(term)} />

        {/* gifs */}
        <GifList gifs={mockGifs} />

        </>
    )
}