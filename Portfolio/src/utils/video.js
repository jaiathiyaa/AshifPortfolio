const CLOUDINARY_BASE =
  import.meta.env.VITE_CLOUDINARY_BASE_URL ||
  "https://res.cloudinary.com/yzt49wms/video/upload";

export const getVideoUrl = (path) => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;

  // Remove leading slash and optional "video/" prefix
  // e.g. "/video/Main1.mp4" -> "Main1.mp4"
  // "OnamLoop1.mp4" -> "OnamLoop1.mp4"
  const cleanPath = path.replace(/^\/?(video\/)?/, "");
  return `${CLOUDINARY_BASE}/${cleanPath}`;
};
