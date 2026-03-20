/**
 * Utility to construct Cloudinary image URLs based on folder structure.
 * 
 * Future usage when moving from placeholders:
 * const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
 * return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/v1/${folder}/${filename}`;
 */

export function buildImageUrl(folder: string, filename: string): string {
  // Currently using placeholder.co for active development as requested
  // Dimensions can be extracted loosely or we return a standard size
  // Since we require different shapes, we can encode sizes in the filename temporarily if needed
  
  // Return placeholder
  return `https://placehold.co/800x600/e2e8f0/8684FF?text=${encodeURIComponent(folder+'\n'+filename)}`;
}
