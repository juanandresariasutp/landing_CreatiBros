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

export async function getImagesFromFolder(folderName: string): Promise<CloudinaryFolderImage[]> {
  try {
    const { resources } = await cloudinary.search
      .expression(`folder="${folderName}"`)
      .sort_by("created_at", "desc")
      .max_results(50)
      .execute();

    return resources.map((file: { public_id: string; format: string }) => ({
      publicId: file.public_id,
      format: file.format,
      url: cloudinary.url(file.public_id, {
        secure: true,
        fetch_format: "auto",
        quality: "auto",
      }),
    }));
  } catch (error) {
    console.error("Error obteniendo imágenes de Cloudinary:", error);
    return [];
  }
}
