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
import { getAppName, getAppUrl } from "../config";
import { emailTailwindConfig } from "../tailwind-config";

interface PaymentFailedEmailProps {
	userName?: string;
	userEmail?: string;
	nextRetryDate?: string;
}

export const PaymentFailedEmail = ({
	userName = "Valued Customer",
	userEmail = "",
	nextRetryDate = "in a few days",
}: PaymentFailedEmailProps) => (
	<Html>
		<Head />
		<Preview>
			Action required: Payment failed for your {getAppName()} subscription
		</Preview>
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
							Payment Issue Detected
						</Heading>

						<Text className="text-gray-600 text-base leading-relaxed mb-6">
							Hi {userName},
						</Text>

						<Text className="text-gray-600 text-base leading-relaxed mb-8">
							We couldn&apos;t process your recent payment for {getAppName()}.
							Your account remains active, but please update your payment method
							to avoid any service interruption.
						</Text>

						{/* Action Items */}
						<Section className="mb-8">
							<Text className="text-gray-900 text-base font-medium mb-4">
								Quick steps to resolve:
							</Text>
							<Text className="text-gray-600 text-sm leading-relaxed mb-2">
								• Update your payment method or billing information
							</Text>
							<Text className="text-gray-600 text-sm leading-relaxed mb-2">
								• Verify your card has sufficient funds and hasn&apos;t expired
							</Text>
							<Text className="text-gray-600 text-sm leading-relaxed mb-2">
								• Contact your bank if the issue persists
							</Text>
						</Section>

						<Text className="text-gray-600 text-sm leading-relaxed mb-8">
							We&apos;ll automatically retry the payment {nextRetryDate}. If
							unsuccessful, your subscription may be cancelled to avoid
							additional charges.
						</Text>

						{/* CTA Button */}
						<Section className="text-center">
							<Button
								className="bg-gray-900 rounded-lg text-white text-base font-medium no-underline text-center inline-block py-4 px-8 hover:bg-gray-800"
								href={getAppUrl("/billing")}
							>
								Update Payment Method
							</Button>
						</Section>
					</Section>

					{/* Footer */}
					<Section className="text-center">
						<Text className="text-gray-500 text-sm leading-relaxed mb-2">
							Need help? Our support team is here to assist you.
						</Text>
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

export default PaymentFailedEmail;
