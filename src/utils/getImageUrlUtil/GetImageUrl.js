export const getImageUrl = (path, options = {}) => {
  if (process.env.NODE_ENV === "production") {
    const params = new URLSearchParams({
      url: `${path}`,
      ...(options.width && { w: options.width }),
      q: options.quality || 80,
      fm: options.format || "webp",
    });
    return `/.netlify/images?${params}`;
  }

  return `${path}`;
};
