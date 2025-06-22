import {
	Body,
	Button,
	Container,
	Head,
	Heading,
	Html,
	Link,
	Preview,
	Section,
	Tailwind,
	Text,
} from "@react-email/components";
import { getAppName, getAppUrl } from "@/emails/config";
import { emailTailwindConfig } from "@/emails/tailwind-config";

interface VerifyEmailProps {
	userName?: string;
	userEmail?: string;
	verificationUrl: string;
}

export const VerifyEmailEmail = ({
	userName = "User",
	userEmail = "",
	verificationUrl,
}: VerifyEmailProps) => (
	<Html>
		<Head />
		<Preview>Verify your {getAppName()} email address</Preview>
		<Tailwind config={emailTailwindConfig}>
			<Body className="bg-gray-50 font-sans">
				<Container className="mx-auto py-12 px-6 max-w-600px">
					{/* Header */}
					<Section className="text-center mb-12">
						<Heading className="text-gray-900 text-2xl font-semibold m-0">
							{getAppName()}
						</Heading>
					</Section>

					{/* Main Content */}
					<Section className="bg-white rounded-lg px-10 py-12 mb-8">
						<Heading className="text-gray-900 text-xl font-medium mb-6 text-center">
							Verify Your Email
						</Heading>

						<Text className="text-gray-600 text-base leading-relaxed mb-6">
							Hi {userName},
						</Text>

						<Text className="text-gray-600 text-base leading-relaxed mb-8">
							Welcome to {getAppName()}! Please verify your email address to
							complete your account setup and start using all our features.
						</Text>

						{/* CTA Button */}
						<Section className="text-center mb-8">
							<Button
								className="bg-gray-900 rounded-lg text-white text-base font-medium no-underline text-center inline-block py-4 px-8 hover:bg-gray-800"
								href={verificationUrl}
							>
								Verify Email Address
							</Button>
						</Section>

						{/* Alternative Link */}
						<Text className="text-gray-500 text-sm leading-relaxed mb-4">
							If the button doesn&apos;t work, copy and paste this link:
						</Text>
						<Text className="text-gray-500 text-sm leading-relaxed mb-8 break-all">
							<Link href={verificationUrl} className="text-gray-600 underline">
								{verificationUrl}
							</Link>
						</Text>

						{/* Benefits */}
						<Section className="mb-8">
							<Text className="text-gray-900 text-base font-medium mb-4">
								Why verify your email?
							</Text>
							<Text className="text-gray-600 text-sm leading-relaxed mb-2">
								• Secure your account and enable password recovery
							</Text>
							<Text className="text-gray-600 text-sm leading-relaxed mb-2">
								• Receive important account notifications
							</Text>
							<Text className="text-gray-600 text-sm leading-relaxed mb-2">
								• Get updates about new features
							</Text>
							<Text className="text-gray-600 text-sm leading-relaxed">
								• Ensure you don&apos;t miss important messages
							</Text>
						</Section>

						{/* Security Notice */}
						<Section className="bg-gray-50 rounded-lg p-6">
							<Text className="text-gray-900 text-sm font-medium mb-3">
								Important
							</Text>
							<Text className="text-gray-600 text-sm leading-relaxed mb-2">
								• This verification link expires in 1 hour
							</Text>
							<Text className="text-gray-600 text-sm leading-relaxed mb-2">
								• Can only be used once
							</Text>
							<Text className="text-gray-600 text-sm leading-relaxed">
								• If you didn&apos;t create this account, please ignore this
								email
							</Text>
						</Section>
					</Section>

					{/* Footer */}
					<Section className="text-center">
						<Text className="text-gray-400 text-xs leading-relaxed">
							This email was sent to {userEmail} •{" "}
							<Link
								href={getAppUrl("/contact")}
								className="text-gray-600 underline"
							>
								Contact Support
							</Link>
						</Text>
					</Section>
				</Container>
			</Body>
		</Tailwind>
	</Html>
);

export default VerifyEmailEmail;
