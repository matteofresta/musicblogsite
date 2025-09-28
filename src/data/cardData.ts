export type cardItem = {
    src: string;
    alt: string;
    artist: string;
    link: string;
    songTitle?: string;
    videoSong?: string;
};

export const cardData: cardItem[] = [
    {
        src: "https://media.timeout.com/images/101580049/750/562/image.jpg",
        alt: "Mac DeMarco",
        artist: "Mac DeMarco",
        link: "/artist/mac-demarco",
        songTitle: "On The Level",
        videoSong: "https://pub-26ba5a2a37094571843721111e0968ad.r2.dev/Mac%20DeMarco%20-%20On%20The%20Level.mp4"
    },
    {
        src: "https://nefariousrealm.com/wp-content/uploads/2023/11/20230925-DrabMajesty-HouseOfBlues-BostonMA-0004-MattDarcy.jpg",
        alt: "Drab Majesty",
        artist: "Drab Majesty",
        link: "/artist/drab-majesty",
        songTitle: "A Dialogue",
        videoSong: "https://pub-26ba5a2a37094571843721111e0968ad.r2.dev/ssvid.net--Drab-Majesty-A-Dialogue-Official-Audio_v720P.mp4"
    },
];
