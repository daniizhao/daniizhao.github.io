export const _renderVideo = (item) => {
  return (
    <div>
      <div className="video-wrapper">
        <iframe
          title="sample video"
          width="560"
          height="315"
          src={item.original}
          style={{ border: "none" }}
          allowFullScreen
        />
      </div>
    </div>
  );
};