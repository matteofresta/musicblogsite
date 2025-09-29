export type cardItem = {
    src: string;
    alt: string;
    artist: string;
    link: string;
    songTitle?: string;
    songImg: string;
    song?: string;
};

export const cardData: cardItem[] = [
    {
        src: "https://media.timeout.com/images/101580049/750/562/image.jpg",
        alt: "Mac DeMarco",
        artist: "Mac DeMarco",
        link: "/artist/mac-demarco",
        songTitle: "On The Level",
        songImg: "",
        song: "https://pub-26ba5a2a37094571843721111e0968ad.r2.dev/Mac%20DeMarco%20-%20On%20The%20Level.mp4"
    },
    {
        src: "https://nefariousrealm.com/wp-content/uploads/2023/11/20230925-DrabMajesty-HouseOfBlues-BostonMA-0004-MattDarcy.jpg",
        alt: "Drab Majesty",
        artist: "Drab Majesty",
        link: "/artist/drab-majesty",
        songTitle: "A Dialogue",
        songImg: "https://f4.bcbits.com/img/a4190738787_10.jpg",
        song: "https://pub-26ba5a2a37094571843721111e0968ad.r2.dev/Drab%20Majesty%20-%20A%20Dialogue%20(Official%20Audio).mp3"
    },
    {
        src: "https://www.headfirstbristol.co.uk/images/events/867/e86777_i141312_s5.jpg",
        alt: "Mareux",
        artist: "Mareux",
        link: "/artist/Mareux",
        songTitle: "A Dialogue",
        songImg: "https://i.scdn.co/image/ab67616d0000b2735fc4ac49ed0023106a6fbf85",
        song: "https://pub-26ba5a2a37094571843721111e0968ad.r2.dev/Mareux%2C%20Riki%20-%20E%CC%81be%CC%80ne%20Fume%CC%81%20(Official%20Music%20Video).mp3"
    },
];
