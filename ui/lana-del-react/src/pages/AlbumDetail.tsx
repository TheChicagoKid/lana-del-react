import { useEffect, useState } from 'react';
import useAlbumStore from '../store/Store.ts'
import { useParams } from "react-router-dom";

interface Album {
    id: number;
    title: string;
    releaseDate: string;
    coverUrl: string;
    comments: Comment[];
}

interface Comment {
    id: number;
    text: string;
    albumId: number;
}


const AlbumDetail = () => {
    const { id } = useParams<{ id: string }>();
    const { albums, fetchAlbumById, addComment } = useAlbumStore();
    const [album, setAlbum] = useState<Album | undefined>(albums.find((album) => album.id === Number(id)));
    const [commentText, setCommentText] = useState('');

    useEffect(() => {
        if (!album) {
            fetchAlbumById(Number(id)).then((data) => setAlbum(data));
        }
    }, [album, fetchAlbumById, id]);

    const handleAddComment = () => {
        if (album) {
            addComment(album.id, commentText).then(() => {
                setCommentText('');
                fetchAlbumById(album.id).then((data) => setAlbum(data));
            });
        }
    };

    if (!album) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{album.title}</h1>
            <p>Release Date: {album.releaseDate}</p>
            <img src={album.coverUrl} alt={album.title} />
            <h2>Comments</h2>
            <ul>
                {album.comments.map((comment) => (
                    <li key={comment.id}>{comment.text}</li>
                ))}
            </ul>
            <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
            />
            <button onClick={handleAddComment}>Add Comment</button>
        </div>
    );
};

export default AlbumDetail;

