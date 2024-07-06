import create from 'zustand';
import API_BASE_URL from "../apiConfig.ts";

interface Comment {
    id: number;
    text: string;
    albumId: number;
}

interface Album {
    id: number;
    title: string;
    releaseDate: string;
    coverUrl: string;
    comments: Comment[];
}

interface AlbumState {
    albums: Album[];
    setAlbums: (albums: Album[]) => void;
    fetchAlbums: () => Promise<void>;
    fetchAlbumById: (id: number) => Promise<Album | undefined>;
    addComment: (albumId: number, text: string) => Promise<void>;
}

const useAlbumStore = create<AlbumState>((set) => ({
    albums: [],
    setAlbums: (albums) => set({ albums }),
    fetchAlbums: async () => {
        const response = await fetch(`${API_BASE_URL}/albums`);
        const data = await response.json();
        set({ albums: data });
    },
    fetchAlbumById: async (id) => {
        const response = await fetch(`${API_BASE_URL}/albums/${id}`);
        const data = await response.json();
        return data;
    },
    addComment: async (albumId, text) => {
        const response = await fetch(`${API_BASE_URL}/albums/${albumId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        });
        const newComment = await response.json();
        set((state) => ({
            albums: state.albums.map((album) =>
                album.id === albumId
                    ? { ...album, comments: [...album.comments, newComment] }
                    : album
            ),
        }));
    },
}));

export default useAlbumStore;
