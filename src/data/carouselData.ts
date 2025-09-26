export type CarouselItem = {
  src: string;
  alt: string;
  artist: string;
  link: string;
};

export const artistName = {
  TameImpala: "Tame Impala",
  ChildishGambino: "Childish Gambino",
  M83: "M83",
  SmallForward: "Small Forward",
  UnknownArtist: "Unknown Artist"
};

export const carouselData: CarouselItem[] = [
  {
    src: "https://radioluz.pl/wp-content/uploads/2018/09/tame.jpg",
    alt: "Tame Impala",
    artist: artistName.TameImpala,
    link: "/artist/tame-impala"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f5/M83_mp3h1704.jpg",
    alt: "M83",
    artist: artistName.M83,
    link: "/artist/m83"
  },
  {
    src: "https://media.pitchfork.com/photos/6683fafc7d65150cae85b875/2:1/w_2560%2Cc_limit/Donald-Glover-Childish-Gambino.jpg",
    alt: "Childish Gambino",
    artist: artistName.ChildishGambino,
    link: "/artist/childish-gambino"
  },
  {
    src: "https://ktswblog.net/wp-content/uploads/2023/10/SmallForwardCoverPhoto.png",
    alt: "Small Forward Artist",
    artist: artistName.SmallForward,
    link: "/artist/small-forward"
  },
  {
    src: "https://goout.net/cdn-cgi/image/format=auto,width=383/i/134/1340647-383.jpg",
    alt: "Artist 5",
    artist: artistName.UnknownArtist,
    link: "/artist/unknown"
  },
];
