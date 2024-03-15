import Gallery from "../../gallery/Gallery";

const CreatureDetails = () => {

  const CreatureArtwork = [
    {
      src: '/assets/img/artworks/portraitEmerald.png',
      width: 1500,
      height: 2000
    },
  ]

  return (
    <Gallery images={CreatureArtwork} />
  )
};

export default CreatureDetails;