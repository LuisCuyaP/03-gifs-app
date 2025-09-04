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
    return(
        <>

        {/* header */}
        <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />

        {/* search */}
        <SearchBar placeholder="Buscar gifs..." />

        {/* previous searches */}
        <PreviousSearch searches={['Goku', 'Dragon Ball']} />

        {/* gifs */}
        <GifList gifs={mockGifs} />

        </>
    )
}