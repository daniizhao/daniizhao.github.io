import Gallery from "../../gallery/Gallery";

const Details3D = () => {

  const Artwork3D = [
    {
      src: '/assets/img/artworks/AstridSheathe.png',
      width: 1080,
      height: 1920
    },
    {
      src: '/assets/img/castleProject/TURN_AROUND_KATRINA.mp4',
      width: 1920,
      height: 1080
    },
  ]

  return (
    <Gallery images={Artwork3D} />
  )
};

export default Details3D;