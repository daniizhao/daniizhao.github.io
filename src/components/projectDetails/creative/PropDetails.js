import Gallery from "../../gallery/Gallery";

const PropDetails = () => {

  const PropArtwork = [
    {
      src: '/assets/img/artworks/vampire.png',
      width: 1080,
      height: 1386
    },
  ]

  return (
    <Gallery items={PropArtwork} />
  )
};

export default PropDetails;