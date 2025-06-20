import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { getAppName, getAppUrl, getCompanyName } from "../config";
import { emailStyles, sectionStyles } from "../styles";

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
    <Body style={emailStyles.main}>
      <Container style={emailStyles.container}>
        <Section style={emailStyles.logoContainer}>
          <Heading style={emailStyles.h1}>{getAppName()}</Heading>
        </Section>
        <Heading style={emailStyles.h2}>🔒 Reset Your Password</Heading>
        <Text style={emailStyles.text}>Hi {userName},</Text>
        <Text style={emailStyles.text}>
          We received a request to reset your password for your {getAppName()}{" "}
          account. If you didn&apos;t make this request, you can safely ignore
          this email.
        </Text>
        <Section style={sectionStyles.info}>
          <Text style={emailStyles.sectionTitle}>Security Notice:</Text>
          <Text style={emailStyles.sectionItem}>
            • This reset link will expire in 1 hour for security reasons
          </Text>
          <Text style={emailStyles.sectionItem}>
            • You can only use this link once
          </Text>
          <Text style={emailStyles.sectionItem}>
            • If you didn&apos;t request this, your account is still secure
          </Text>
        </Section>
        <Text style={emailStyles.text}>
          Click the button below to reset your password:
        </Text>
        <Section style={emailStyles.buttonContainer}>
          <Button style={emailStyles.button} href={resetUrl}>
            Reset Password
          </Button>
        </Section>
        <Text style={emailStyles.text}>
          If the button doesn&apos;t work, you can copy and paste this link into
          your browser:
        </Text>
        <Text style={emailStyles.text}>
          <Link href={resetUrl} style={emailStyles.link}>
            {resetUrl}
          </Link>
        </Text>
        <Hr style={emailStyles.hr} />
        <Text style={emailStyles.footer}>
          Best regards,
          <br />
          The {getCompanyName()} Team
        </Text>
        <Text style={emailStyles.footer}>
          This email was sent to {userEmail}. If you need help, please{" "}
          <Link href={getAppUrl("/contact")} style={emailStyles.link}>
            contact our support team
          </Link>
          .
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ResetPasswordEmail;
