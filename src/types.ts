export interface Project {
    title: string;
    image: string;
    imagealt: string;
    date: string;
    artworks: Artwork[];
}

export interface Artwork {
    title: string;
    size: string;
    description: string;
    image: string;
    imagealt: string;
    date: string;
}

export interface Publication {
    title: string;
    description: string;
    image: string;
    imagealt: string;
    url?: string;
    date: string;
    isbn: string;
    shop?: string;
}

export interface Media {
    title: string;
    image: string;
    imagealt: string;
    url: string;
    date: string;
}

export interface Seminar {
    title: string;
    description?: string;
    image?: string;
    imagealt?: string;
    url?: string;
    date: string;
}

export interface ExhibitionYear {
    year: string;
    entries: string[];
}

export interface News {
    title: string;
    description: string;
    url?: string;
    image?: string;
    imagealt?: string;
    date: string;
    type: string;
}