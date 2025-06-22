import { env } from "./env";

export const absoluteUrl = (path: string) => {
	const baseUrl = env.BETTER_AUTH_URL;
	return `${baseUrl}${path}`;
};
