import Gallery from "../../gallery/Gallery";

const Details3D = () => {

  const Artwork3D = [
    {
      src: '/assets/img/artworks/AstridSheathe.png',
      width: 1080,
      height: 1920
    },
  ]

  const TurnAroundVideos = [
    "/assets/img/castleProject/TURN_AROUND_KATRINA.mp4"
  ]

  return (
    <Gallery images={Artwork3D} videos={TurnAroundVideos} />
  )
};

export default Details3D;