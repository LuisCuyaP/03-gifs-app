import { mockGifs } from "./data/gifs.mock"

export const GifsApp = () => {
    return(
        <>

        {/* header */}
        <div className="content-center">
            <h1>Buscador de Gifs</h1>
            <p>Descubre y comparte el gif perfecto</p>
        </div>

        {/* search */}
        <div className="search-container">
            <input type="text" placeholder="Buscar gifs..." />
            <button>Buscar</button>
        </div>

        {/* busquedas previas */}
        <div className="previous-searches">
            <h2>Busquedas Previas</h2>
            <ul className="previous-searches-list">
                <li>Gif 1</li>
                <li>Gif 2</li>
                <li>Gif 3</li>
            </ul>
        </div>

        {/* gifs */}
        <div className="gifs-container">
            {
                mockGifs.map(gif => (
                    <div key={gif.id} className="gif-card">
                        <img src={gif.url} alt={gif.title} />
                        <h3>{gif.title}</h3>
                        <p>{gif.width} x {gif.height} (1.5mb)</p>
                    </div>
                ))
            }
        </div>
        
        </>
    )
}