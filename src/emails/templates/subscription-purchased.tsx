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

interface SubscriptionPurchasedEmailProps {
  userName?: string;
  userEmail?: string;
}

export const SubscriptionPurchasedEmail = ({
  userName = "Valued Customer",
  userEmail = "",
}: SubscriptionPurchasedEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Welcome to {getAppName()} Premium! Your subscription is now active.
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
              Welcome to Premium! 🎉
            </Heading>

            <Text className="text-gray-600 text-base leading-relaxed mb-6">
              Hi {userName},
            </Text>

            <Text className="text-gray-600 text-base leading-relaxed mb-8">
              Great news! Your premium subscription has been activated and you
              now have access to all our premium features.
            </Text>

            {/* Premium Features */}
            <Section className="mb-8">
              <Text className="text-gray-900 text-base font-medium mb-4">
                What&apos;s included:
              </Text>
              <Text className="text-gray-600 text-sm leading-relaxed mb-2">
                • Unlimited access to all features
              </Text>
              <Text className="text-gray-600 text-sm leading-relaxed mb-2">
                • Priority customer support
              </Text>
              <Text className="text-gray-600 text-sm leading-relaxed mb-2">
                • Advanced analytics and insights
              </Text>
              <Text className="text-gray-600 text-sm leading-relaxed">
                • No ads or limitations
              </Text>
            </Section>

            {/* CTA Button */}
            <Section className="text-center">
              <Button
                className="bg-gray-900 rounded-lg text-white text-base font-medium no-underline text-center inline-block py-4 px-8 hover:bg-gray-800"
                href={getAppUrl("/dashboard")}
              >
                Get Started with Premium
              </Button>
            </Section>
          </Section>

          {/* Footer */}
          <Section className="text-center">
            <Text className="text-gray-500 text-sm leading-relaxed mb-2">
              Questions? Our support team is here to help.
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

export default SubscriptionPurchasedEmail;
