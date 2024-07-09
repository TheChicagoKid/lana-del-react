import { useEffect } from "react";
import { Link } from "react-router-dom";
import useAlbumStore from "../store/Store.ts";
import "../styles/Home.scss"

const Home = () => {
    const { albums, fetchAlbums } = useAlbumStore();

    useEffect(() => {
        fetchAlbums().then(() => {
        }).catch(error => {
            console.error("Error fetching albums: ", error);
        });
    }, [fetchAlbums]);

    return (
        <div className="home">
            <img className="lana-image" src="../../lana-bad.png" alt="hi"/>
            <h1>Lana Del Rey Discography</h1>
            <ul>
                {albums.map((album) => (
                    <li key={album.id}>
                        <Link to={`/albums/${album.id}`}>
                            {album.title} ({album.releaseDate})
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;