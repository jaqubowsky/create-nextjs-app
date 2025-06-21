import { getAppName, getAppUrl } from "@/emails/config";
import { emailTailwindConfig } from "@/emails/tailwind-config";
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

interface SubscriptionCancelledEmailProps {
  userName?: string;
  userEmail?: string;
}

export const SubscriptionCancelledEmail = ({
  userName = "Valued Customer",
  userEmail = "",
}: SubscriptionCancelledEmailProps) => (
  <Html>
    <Head />
    <Preview>Your {getAppName()} subscription has been cancelled</Preview>
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
              Subscription Cancelled
            </Heading>

            <Text className="text-gray-600 text-base leading-relaxed mb-6">
              Hi {userName},
            </Text>

            <Text className="text-gray-600 text-base leading-relaxed mb-8">
              We&apos;re sorry to see you go! Your premium subscription has been
              cancelled and you&apos;ll be moved to our free plan.
            </Text>

            {/* What's Next */}
            <Section className="mb-8">
              <Text className="text-gray-900 text-base font-medium mb-4">
                What happens next:
              </Text>
              <Text className="text-gray-600 text-sm leading-relaxed mb-2">
                • Premium features remain active until your billing period ends
              </Text>
              <Text className="text-gray-600 text-sm leading-relaxed mb-2">
                • You&apos;ll then have access to free tier features
              </Text>
              <Text className="text-gray-600 text-sm leading-relaxed mb-2">
                • Your account and data remain safe and accessible
              </Text>
              <Text className="text-gray-600 text-sm leading-relaxed">
                • You can reactivate anytime
              </Text>
            </Section>

            <Text className="text-gray-600 text-base leading-relaxed mb-8">
              We&apos;d love to have you back! If you have feedback or need help
              with anything, please don&apos;t hesitate to reach out.
            </Text>

            {/* CTA Button */}
            <Section className="text-center">
              <Button
                className="bg-gray-900 rounded-lg text-white text-base font-medium no-underline text-center inline-block py-4 px-8 hover:bg-gray-800"
                href={getAppUrl("/pricing")}
              >
                Reactivate Subscription
              </Button>
            </Section>
          </Section>

          {/* Footer */}
          <Section className="text-center">
            <Text className="text-gray-500 text-sm leading-relaxed mb-2">
              Thank you for being part of our community.
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

export default SubscriptionCancelledEmail;
