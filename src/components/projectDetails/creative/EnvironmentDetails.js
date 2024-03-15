import Gallery from "../../gallery/Gallery";

const EnvironmentDetails = () => {

  const EnvironmentArtwork = [
    {
      src: '/assets/img/artworks/yonaSpelling.png',
      width: 2000,
      height: 1600
    },
  ]

  return (
    <Gallery images={EnvironmentArtwork} />
  )
};

export default EnvironmentDetails;