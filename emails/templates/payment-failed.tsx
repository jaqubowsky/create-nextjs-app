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
import {
  buttonStyles,
  emailStyles,
  headingStyles,
  sectionStyles,
} from "../styles";

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
    <Body style={emailStyles.main}>
      <Container style={emailStyles.container}>
        <Section style={emailStyles.logoContainer}>
          <Heading style={emailStyles.h1}>{getAppName()}</Heading>
        </Section>
        <Heading style={headingStyles.danger}>⚠️ Payment Failed</Heading>
        <Text style={emailStyles.text}>Hi {userName},</Text>
        <Text style={emailStyles.text}>
          We encountered an issue processing the payment for your {getAppName()}{" "}
          subscription. Don&apos;t worry - your account is still active, but we
          need you to update your payment information to avoid any service
          interruption.
        </Text>
        <Section style={sectionStyles.warning}>
          <Text style={emailStyles.sectionTitle}>What you need to do:</Text>
          <Text style={emailStyles.sectionItem}>
            1. Update your payment method or billing information
          </Text>
          <Text style={emailStyles.sectionItem}>
            2. Ensure your card has sufficient funds and hasn&apos;t expired
          </Text>
          <Text style={emailStyles.sectionItem}>
            3. Contact your bank if the issue persists
          </Text>
        </Section>
        <Text style={emailStyles.text}>
          We&apos;ll automatically retry the payment {nextRetryDate}. If the
          payment continues to fail, your subscription may be cancelled to avoid
          additional charges.
        </Text>
        <Section style={emailStyles.buttonContainer}>
          <Button style={buttonStyles.danger} href={getAppUrl("/billing")}>
            Update Payment Method
          </Button>
        </Section>
        <Text style={emailStyles.text}>
          If you&apos;re experiencing technical difficulties or need assistance,
          our support team is here to help.
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

export default PaymentFailedEmail;
