import Gallery from "../../gallery/Gallery";

const CharacterDetails = () => {

  const CharacterArtwork = [
    {
      src: '/assets/img/artworks/alone.png',
      width: 2000,
      height: 1500
    },
  ]

  return (
    <Gallery items={CharacterArtwork} />
  )
};

export default CharacterDetails;