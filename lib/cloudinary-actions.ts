import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export type CloudinaryFolderImage = {
  publicId: string;
  format: string;
  url: string;
};

function mapCloudinaryResource(file: { public_id: string; format: string }): CloudinaryFolderImage {
  return {
    publicId: file.public_id,
    format: file.format,
    url: cloudinary.url(file.public_id, {
      secure: true,
      fetch_format: "auto",
      quality: "auto",
    }),
  };
}

export async function getImagesFromFolder(folderName: string): Promise<CloudinaryFolderImage[]> {
  try {
    const { resources } = await cloudinary.search
      .expression(`folder="${folderName}"`)
      .sort_by("created_at", "desc")
      .max_results(50)
      .execute();

    return resources.map(mapCloudinaryResource);
  } catch (error) {
    console.error("Error obteniendo imágenes de Cloudinary:", error);
    return [];
  }
}

export async function getCoverImageFromFolder(folderName: string): Promise<CloudinaryFolderImage | null> {
  try {
    // Prioridad 1: imagen con tag "cover" en esa carpeta.
    const taggedCover = await cloudinary.search
      .expression(`folder="${folderName}" AND tags="cover"`)
      .sort_by("created_at", "desc")
      .max_results(1)
      .execute();

    if (taggedCover.resources.length > 0) {
      return mapCloudinaryResource(taggedCover.resources[0] as { public_id: string; format: string });
    }

    // Prioridad 2: archivo llamado "cover" dentro de la carpeta.
    const namedCover = await cloudinary.search
      .expression(`folder="${folderName}" AND public_id="${folderName}/cover"`)
      .max_results(1)
      .execute();

    if (namedCover.resources.length > 0) {
      return mapCloudinaryResource(namedCover.resources[0] as { public_id: string; format: string });
    }

    return null;
  } catch (error) {
    console.error("Error obteniendo portada de Cloudinary:", error);
    return null;
  }
}
