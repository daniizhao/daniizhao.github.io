import Gallery from "../../gallery/Gallery";
import "../ProjectDetails.scss";

const DigitalDetails = () => {

  const DigitalArtwork = [
    {
      src: '/assets/img/artworks/alone.png',
      width: 2000,
      height: 1500
    },
    {
      src: '/assets/img/artworks/portraitEmerald.png',
      width: 1500,
      height: 2000
    },
    {
      src: '/assets/img/artworks/vampire.png',
      width: 1080,
      height: 1386
    },
    {
      src: '/assets/img/artworks/yonaSpelling.png',
      width: 2000,
      height: 1600
    },
    {
      src: '/assets/img/artworks/AstridSheathe.png',
      width: 1080,
      height: 1920
    },
    {
      src: '/assets/img/artworks/mononoke.png',
      width: 874,
      height: 1240
    },
    {
      src: '/assets/img/artworks/sailormoonredraw.png',
      width: 2000,
      height: 1500
    },
    {
      src: '/assets/img/artworks/crosshatching.png',
      width: 1600,
      height: 2000
    },
    {
      src: '/assets/img/artworks/JustineFlorentinoChallenge.png',
      width: 1600,
      height: 2000
    },{
      src: '/assets/img/artworks/sketches_Hands.png',
      width: 1107,
      height: 761
    },
    {
      src: '/assets/img/artworks/sketches_heads.png',
      width: 1081,
      height: 761
    },
    {
      src: '/assets/img/artworks/sketches.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/artworks/sketches_2.png',
      width: 1920,
      height: 1080
    },
  ];

  return (
    <Gallery images={DigitalArtwork} />
  )
};

export default DigitalDetails;