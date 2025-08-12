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

interface ResetPasswordEmailProps {
  userName?: string;
  userEmail?: string;
  resetUrl: string;
}

export const ResetPasswordEmail = ({
  userName = "User",
  userEmail = "",
  resetUrl,
}: ResetPasswordEmailProps) => (
  <Html>
    <Head />
    <Preview>Reset your {getAppName()} password</Preview>
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
              Reset Your Password
            </Heading>

            <Text className="text-gray-600 text-base leading-relaxed mb-6">
              Hi {userName},
            </Text>

            <Text className="text-gray-600 text-base leading-relaxed mb-8">
              We received a request to reset your password. If you didn&apos;t
              make this request, you can safely ignore this email.
            </Text>

            {/* CTA Button */}
            <Section className="text-center mb-8">
              <Button
                className="bg-gray-900 rounded-lg text-white text-base font-medium no-underline text-center inline-block py-4 px-8 hover:bg-gray-800"
                href={resetUrl}
              >
                Reset Password
              </Button>
            </Section>

            {/* Alternative Link */}
            <Text className="text-gray-500 text-sm leading-relaxed mb-4">
              If the button doesn&apos;t work, copy and paste this link:
            </Text>
            <Text className="text-gray-500 text-sm leading-relaxed mb-8 break-all">
              <Link href={resetUrl} className="text-gray-600 underline">
                {resetUrl}
              </Link>
            </Text>

            {/* Security Notice */}
            <Section className="bg-gray-50 rounded-lg p-6">
              <Text className="text-gray-900 text-sm font-medium mb-3">
                Security Notice
              </Text>
              <Text className="text-gray-600 text-sm leading-relaxed mb-2">
                • This link expires in 1 hour
              </Text>
              <Text className="text-gray-600 text-sm leading-relaxed mb-2">
                • Can only be used once
              </Text>
              <Text className="text-gray-600 text-sm leading-relaxed">
                • Your account remains secure if you didn&apos;t request this
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

export default ResetPasswordEmail;
