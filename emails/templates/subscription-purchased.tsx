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
    <Body style={emailStyles.main}>
      <Container style={emailStyles.container}>
        <Section style={emailStyles.logoContainer}>
          <Heading style={emailStyles.h1}>{getAppName()}</Heading>
        </Section>
        <Heading style={emailStyles.h2}>🎉 Welcome to Premium!</Heading>
        <Text style={emailStyles.text}>Hi {userName},</Text>
        <Text style={emailStyles.text}>
          Great news! Your premium subscription to {getAppName()} has been
          successfully activated. You now have access to all our premium
          features and benefits.
        </Text>
        <Section style={sectionStyles.benefits}>
          <Text style={emailStyles.sectionTitle}>
            What&apos;s included in your premium subscription:
          </Text>
          <Text style={emailStyles.sectionItem}>
            ✅ Unlimited access to all features
          </Text>
          <Text style={emailStyles.sectionItem}>
            ✅ Priority customer support
          </Text>
          <Text style={emailStyles.sectionItem}>
            ✅ Advanced analytics and insights
          </Text>
          <Text style={emailStyles.sectionItem}>✅ No ads or limitations</Text>
        </Section>
        <Section style={emailStyles.buttonContainer}>
          <Button style={emailStyles.button} href={getAppUrl("/dashboard")}>
            Get Started with Premium
          </Button>
        </Section>
        <Text style={emailStyles.text}>
          If you have any questions or need assistance, don&apos;t hesitate to
          reach out to our support team.
        </Text>
        <Hr style={emailStyles.hr} />
        <Text style={emailStyles.footer}>
          Best regards,
          <br />
          The {getCompanyName()} Team
        </Text>
        <Text style={emailStyles.footer}>
          This email was sent to {userEmail}. If you didn&apos;t expect this
          email, please{" "}
          <Link href={getAppUrl("/contact")} style={emailStyles.link}>
            contact our support team
          </Link>
          .
        </Text>
      </Container>
    </Body>
  </Html>
);

export default SubscriptionPurchasedEmail;
