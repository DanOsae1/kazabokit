export const getImageUrl = (path, options = {}) => {
  if (process.env.NODE_ENV === "production") {
    const params = new URLSearchParams();
    params.append("url", path);
    if (options.width) params.append("w", options.width);
    params.append("q", options.quality || 80);
    params.append("fm", options.format || "webp");

    // Decode only the 'url' parameter to avoid %2F in the path
    const paramString = params
      .toString()
      .replace(
        /url=([^&]*)/,
        (_, urlValue) => `url=${decodeURIComponent(urlValue)}`
      );

    return `/.netlify/images?${paramString}`;
  }

  return `${path}`;
};
