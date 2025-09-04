import { useState } from "react"
import { mockGifs } from "./data/gifs.mock"
import { GifList } from "./gifs/GifList"
import { CustomHeader } from "./shared/components/CustomHeader"
import { PreviousSearch } from "./shared/components/PreviousSearch"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const handleTermClicked = (term: string) => {
        console.log({ term });
    }

    const handleSearch = async (query: string = '') => {
        query = query.trim().toLowerCase();

        if (query.length === 0) return;

        if (previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms].splice(0, 8));

    };


    return (
        <>

            {/* header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />

            {/* search */}
            <SearchBar placeholder="Buscar gifs..." onQuery={handleSearch} />

            {/* previous searches */}
            <PreviousSearch searches={previousTerms} onLabelClicked={handleTermClicked} />

            {/* gifs */}
            <GifList gifs={mockGifs} />

        </>
    )
}