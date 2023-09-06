export const moveElementHandler = (event) => {
  const moveElement = event.currentTarget.moveelement;
  if (moveElement) {
    const x = event.clientX, y = event.clientY;
    moveElement.style.transform = `translate(${-x / 40}px,${-y / 80}px)`;
  }
};