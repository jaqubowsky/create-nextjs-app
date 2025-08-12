type CacheTag = "user";

export function getIdTag(tag: CacheTag, id: string) {
  return `id:${id}-${tag}` as const;
}
