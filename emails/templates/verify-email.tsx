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
    <Body style={emailStyles.main}>
      <Container style={emailStyles.container}>
        <Section style={emailStyles.logoContainer}>
          <Heading style={emailStyles.h1}>{getAppName()}</Heading>
        </Section>
        <Heading style={emailStyles.h2}>✉️ Verify Your Email</Heading>
        <Text style={emailStyles.text}>Hi {userName},</Text>
        <Text style={emailStyles.text}>
          Welcome to {getAppName()}! To complete your account setup and start
          using all our features, please verify your email address.
        </Text>
        <Section style={sectionStyles.benefits}>
          <Text style={emailStyles.sectionTitle}>
            Why verify your email address?
          </Text>
          <Text style={emailStyles.sectionItem}>
            ✅ Secure your account and enable password recovery
          </Text>
          <Text style={emailStyles.sectionItem}>
            ✅ Receive important account notifications
          </Text>
          <Text style={emailStyles.sectionItem}>
            ✅ Get updates about new features and improvements
          </Text>
          <Text style={emailStyles.sectionItem}>
            ✅ Ensure you don&apos;t miss any important messages
          </Text>
        </Section>
        <Text style={emailStyles.text}>
          Click the button below to verify your email address:
        </Text>
        <Section style={emailStyles.buttonContainer}>
          <Button style={emailStyles.button} href={verificationUrl}>
            Verify Email Address
          </Button>
        </Section>
        <Text style={emailStyles.text}>
          If the button doesn&apos;t work, you can copy and paste this link into
          your browser:
        </Text>
        <Text style={emailStyles.text}>
          <Link href={verificationUrl} style={emailStyles.link}>
            {verificationUrl}
          </Link>
        </Text>
        <Section style={sectionStyles.info}>
          <Text style={emailStyles.sectionTitle}>Important:</Text>
          <Text style={emailStyles.sectionItem}>
            • This verification link will expire in 1 hour
          </Text>
          <Text style={emailStyles.sectionItem}>
            • You can only use this link once
          </Text>
          <Text style={emailStyles.sectionItem}>
            • If you didn&apos;t create this account, please ignore this email
          </Text>
        </Section>
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

export default VerifyEmailEmail;
