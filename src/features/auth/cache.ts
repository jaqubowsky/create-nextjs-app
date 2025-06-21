import { getGlobalTag, getIdTag } from "@/lib/data-cache";
import { revalidateTag } from "next/cache";

export function getUserGlobalTag() {
  return getGlobalTag("user");
}

export function getUserIdTag(userId: string) {
  return getIdTag("user", userId);
}

export function revalidateUserCache(userId: string) {
  revalidateTag(getUserGlobalTag());
  revalidateTag(getUserIdTag(userId));
}
