import { env } from "@/lib/env";

export const emailConfig = {
	supportEmail: env.EMAIL_FROM,
	companyName: env.COMPANY_NAME,
	appName: env.APP_NAME,
	baseUrl: env.BETTER_AUTH_URL,
} as const;

export const getAppUrl = (path = "") => {
	return `${emailConfig.baseUrl}${path}`;
};

export const getSupportEmail = () => {
	return emailConfig.supportEmail;
};

export const getCompanyName = () => {
	return emailConfig.companyName;
};

export const getAppName = () => {
	return emailConfig.appName;
};
