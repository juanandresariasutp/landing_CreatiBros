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

const CACHE_TTL_MS = 10 * 60 * 1000;

const imagesCache = new Map<string, { expiresAt: number; data: CloudinaryFolderImage[] }>();
const coverCache = new Map<string, { expiresAt: number; data: CloudinaryFolderImage | null }>();

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

function isRateLimitError(error: unknown): boolean {
  const maybeError = error as { error?: { http_code?: number; message?: string } };
  return maybeError?.error?.http_code === 420;
}

function getErrorMessage(error: unknown): string {
  const maybeError = error as { error?: { message?: string }; message?: string };
  return maybeError?.error?.message ?? maybeError?.message ?? "Error desconocido";
}

export async function getImagesFromFolder(folderName: string): Promise<CloudinaryFolderImage[]> {
  const now = Date.now();
  const cached = imagesCache.get(folderName);

  if (cached && cached.expiresAt > now) {
    return cached.data;
  }

  try {
    const { resources } = await cloudinary.search
      .expression(`folder="${folderName}"`)
      .sort_by("created_at", "desc")
      .max_results(50)
      .execute();

    const data = resources.map(mapCloudinaryResource);
    imagesCache.set(folderName, { expiresAt: now + CACHE_TTL_MS, data });
    return data;
  } catch (error) {
    const message = getErrorMessage(error);
    console.error(`Error obteniendo imágenes de Cloudinary (${folderName}): ${message}`);

    if (isRateLimitError(error) && cached) {
      return cached.data;
    }

    return [];
  }
}

export async function getCoverImageFromFolder(folderName: string): Promise<CloudinaryFolderImage | null> {
  const now = Date.now();
  const cached = coverCache.get(folderName);

  if (cached && cached.expiresAt > now) {
    return cached.data;
  }

  try {
    // Una sola consulta: prioridad tag "cover" o archivo "cover".
    const result = await cloudinary.search
      .expression(`(folder="${folderName}" AND tags="cover") OR public_id="${folderName}/cover"`)
      .sort_by("created_at", "desc")
      .max_results(1)
      .execute();

    if (result.resources.length > 0) {
      const cover = mapCloudinaryResource(result.resources[0] as { public_id: string; format: string });
      coverCache.set(folderName, { expiresAt: now + CACHE_TTL_MS, data: cover });
      return cover;
    }

    coverCache.set(folderName, { expiresAt: now + CACHE_TTL_MS, data: null });
    return null;
  } catch (error) {
    const message = getErrorMessage(error);
    console.error(`Error obteniendo portada de Cloudinary (${folderName}): ${message}`);

    if (isRateLimitError(error) && cached) {
      return cached.data;
    }

    return null;
  }
}
