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
    <Body style={emailStyles.main}>
      <Container style={emailStyles.container}>
        <Section style={emailStyles.logoContainer}>
          <Heading style={emailStyles.h1}>{getAppName()}</Heading>
        </Section>
        <Heading style={emailStyles.h2}>Subscription Cancelled</Heading>
        <Text style={emailStyles.text}>Hi {userName},</Text>
        <Text style={emailStyles.text}>
          We&apos;re sorry to see you go! Your premium subscription to{" "}
          {getAppName()} has been cancelled and you&apos;ve been moved back to
          our free plan.
        </Text>
        <Section style={sectionStyles.info}>
          <Text style={emailStyles.sectionTitle}>What happens next:</Text>
          <Text style={emailStyles.sectionItem}>
            • Your premium features will remain active until the end of your
            current billing period
          </Text>
          <Text style={emailStyles.sectionItem}>
            • After that, you&apos;ll have access to our free tier features
          </Text>
          <Text style={emailStyles.sectionItem}>
            • Your account and data remain safe and accessible
          </Text>
          <Text style={emailStyles.sectionItem}>
            • You can reactivate your subscription anytime
          </Text>
        </Section>
        <Text style={emailStyles.text}>
          We&apos;d love to have you back! If you cancelled due to an issue we
          can help resolve, or if you have any feedback, please don&apos;t
          hesitate to reach out.
        </Text>
        <Section style={emailStyles.buttonContainer}>
          <Button style={emailStyles.button} href={getAppUrl("/pricing")}>
            Reactivate Subscription
          </Button>
        </Section>
        <Text style={emailStyles.text}>
          Thank you for being part of our community. We hope to see you again
          soon!
        </Text>
        <Hr style={emailStyles.hr} />
        <Text style={emailStyles.footer}>
          Best regards,
          <br />
          The {getCompanyName()} Team
        </Text>
        <Text style={emailStyles.footer}>
          This email was sent to {userEmail}. If you have questions, please{" "}
          <Link href={getAppUrl("/contact")} style={emailStyles.link}>
            contact our support team
          </Link>
          .
        </Text>
      </Container>
    </Body>
  </Html>
);

export default SubscriptionCancelledEmail;
