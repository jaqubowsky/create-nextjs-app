import bcrypt from "bcryptjs";
import { AUTH_CONFIG } from "@/config";

export async function hashPassword(password: string): Promise<string> {
	const salt = await bcrypt.genSalt(AUTH_CONFIG.BCRYPT_SALT_ROUNDS);
	return bcrypt.hash(password, salt);
}

export async function verifyPassword({
	hash,
	password,
}: {
	hash: string;
	password: string;
}): Promise<boolean> {
	return bcrypt.compare(password, hash);
}
