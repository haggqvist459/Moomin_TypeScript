import { PATHS } from "./constants";

const mugImages = import.meta.glob("/public/mugs/*.{jpg,png}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export function getMugImage(slug: string): string | undefined {
  // Find by matching the slug in the filename
  const match = Object.entries(mugImages).find(([path]) =>
    path.includes(`${PATHS.IMAGE_PATH}/${slug}.`)
  );
  return match?.[1];
}