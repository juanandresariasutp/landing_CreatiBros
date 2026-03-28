/**
 * Utility to construct Cloudinary image URLs based on folder structure.
 * 
 * Future usage when moving from placeholders:
 * const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
 * return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/v1/${folder}/${filename}`;
 */

export function buildImageUrl(folder: string, filename: string): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  
  if (!cloudName || cloudName === "") {
    console.warn("Falta configurar NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME en .env.local");
    return `https://placehold.co/800x600/e2e8f0/8684FF?text=${encodeURIComponent(folder+'\n'+filename)}`;
  }

  const path = folder ? `${folder}/${filename}` : filename;
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/v1/${path}`;
}

export function buildVideoUrl(folder: string, filename: string): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  if (!cloudName || cloudName === "") {
    console.warn("Falta configurar NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME en .env.local");
    return "";
  }

  const path = folder ? `${folder}/${filename}` : filename;
  return `https://res.cloudinary.com/${cloudName}/video/upload/f_auto,q_auto/v1/${path}`;
}
