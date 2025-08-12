import { revalidateTag } from "next/cache";
import { getIdTag } from "@/lib/data-cache";

export function getUserIdTag(userId: string) {
  return getIdTag("user", userId);
}

export function revalidateUserCache(userId: string) {
  revalidateTag(getUserIdTag(userId));
}
