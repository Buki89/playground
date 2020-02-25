const getRatingColor = (rating: number): string => {
  const R = (255 * (5 - rating)) / 5;
  const G = (255 * rating) / 5;
  const B = 0;
  return `rgb(${R},${G},${B})`;
};

export default getRatingColor;
