export const landingConfig = {
	// Brand Information
	brand: {
		name: "Brand Name",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		logo: "🏢", // Can be replaced with actual logo component
	},

	// Navigation
	navigation: [
		{ name: "Features", href: "#features" },
		{ name: "How It Works", href: "#how-it-works" },
		{ name: "Pricing", href: "#pricing" },
		{ name: "FAQ", href: "#faq" },
	],

	// UI Text
	ui: {
		signIn: "Sign In",
		openMenu: "Open menu",
		navigationMenu: "Navigation Menu",
		lastUpdated: "Last updated:",
		backToHome: "Back to Home",
		limitations: "Limitations:",
		learnMoreFeatures: "Learn more about our features",
		learnMore: "Learn more",
		getStarted: "Get started",
	},

	// Hero Section
	hero: {
		id: "hero",
		badge: "🚀 Trusted by 10,000+ professionals worldwide",
		title: {
			primary: "Transform",
			secondary: "your business",
			tertiary: "with our platform",
		},
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		cta: {
			primary: "Get Started Free",
			secondary: "Learn More",
		},
		trustIndicators: {
			text: "Trusted by 10,000+ professionals worldwide",
			rating: "4.9/5 from 2,000+ reviews",
		},
		dashboard: {
			title: "Dashboard",
			metrics: [
				{ value: "99.9%", label: "Uptime" },
				{ value: "10K+", label: "Users" },
			],
			chart: {
				label: "Performance Overview",
			},
			status: {
				title: "All Systems Operational",
				subtitle: "Last updated: Just now",
			},
		},
	},

	// How It Works Section
	howItWorks: {
		id: "how-it-works",
		badge: "Simple 3-Step Process",
		title: "How it works",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		steps: [
			{
				number: "01",
				title: "Connect & Setup",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
				details: [
					"Quick integration",
					"Automatic configuration",
					"Secure connection",
				],
				icon: "connect",
			},
			{
				number: "02",
				title: "Customize & Configure",
				description:
					"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
				details: [
					"Personalized settings",
					"Advanced options",
					"Real-time preview",
				],
				icon: "settings",
			},
			{
				number: "03",
				title: "Launch & Scale",
				description:
					"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
				details: [
					"One-click deployment",
					"Performance monitoring",
					"Automatic scaling",
				],
				icon: "rocket",
			},
		],
		cta: {
			title: "Ready to get started?",
			description:
				"Join thousands of users who have already transformed their workflow",
		},
	},

	// Benefits Section
	benefits: {
		id: "features",
		badge: "Why Choose Our Platform",
		title: "Features that drive results",
		description:
			"Discover the powerful features that help thousands of users streamline their workflow, boost productivity, and achieve their goals faster than ever before.",
		items: [
			{
				title: "Smart Automation",
				description:
					"Automate repetitive tasks and workflows to save time and reduce errors. Our intelligent automation adapts to your processes and learns from your preferences.",
				features: [
					"Workflow automation",
					"Smart triggers and actions",
					"Custom rule builder",
				],
				icon: "⚡",
			},
			{
				title: "Real-time Collaboration",
				description:
					"Work seamlessly with your team in real-time. Share projects, communicate instantly, and keep everyone aligned with powerful collaboration tools.",
				features: [
					"Live collaboration",
					"Team workspaces",
					"Instant messaging",
				],
				icon: "👥",
			},
			{
				title: "Advanced Analytics",
				description:
					"Get deep insights into your performance with comprehensive analytics and reporting. Make data-driven decisions with beautiful, actionable dashboards.",
				features: [
					"Performance metrics",
					"Custom dashboards",
					"Exportable reports",
				],
				icon: "📊",
			},
		],
		stats: [
			{ value: "99.9%", label: "Uptime" },
			{ value: "10K+", label: "Active Users" },
			{ value: "50M+", label: "Tasks Completed" },
			{ value: "24/7", label: "Support" },
		],
	},

	// Social Proof Section
	socialProof: {
		id: "social-proof",
		badge: "Trusted by industry leaders",
		title: "Leading companies worldwide",
		description: "Trusted by developers at",
		companies: [
			"Company A",
			"Company B",
			"Company C",
			"Company D",
			"Company E",
			"Company F",
		],
		stats: [
			{ value: "50,000+", label: "active users" },
			{ value: "1M+", label: "lines of code generated" },
			{ value: "99.9%", label: "uptime" },
		],
	},

	// FAQ Section
	faq: {
		id: "faq",
		badge: "Got Questions?",
		title: "Frequently Asked Questions",
		description:
			"Everything you need to know about our platform and how it can help you achieve your goals.",
		items: [
			{
				question: "How does the platform work?",
				answer:
					"Our platform provides a comprehensive solution that integrates seamlessly with your existing workflow. Simply sign up, configure your preferences, and start leveraging our powerful features to streamline your processes and boost productivity.",
			},
			{
				question: "Is my data secure and private?",
				answer:
					"Absolutely. We use enterprise-grade encryption and follow industry best practices for data security. Your information is protected with end-to-end encryption, and we never share your data with third parties without your explicit consent.",
			},
			{
				question: "Can I cancel my subscription anytime?",
				answer:
					"Yes, you can cancel your subscription at any time with no questions asked. Your subscription will remain active until the end of the current billing period, and you'll retain access to all your data.",
			},
			{
				question: "Do you offer team and enterprise plans?",
				answer:
					"Yes! We offer flexible team plans and enterprise solutions with advanced features like team collaboration tools, admin controls, custom integrations, dedicated support, and on-premise deployment options. Contact our sales team for custom pricing.",
			},
			{
				question: "What's included in the free trial?",
				answer:
					"Our free trial gives you full access to all premium features for 14 days with no limitations or credit card required. You can explore all functionality, test integrations, and see how our platform fits your needs.",
			},
			{
				question: "How do I get started?",
				answer:
					"Getting started is simple! Click the 'Get Started' button, create your account, and follow our guided onboarding process. You'll be up and running in minutes, and our support team is always available to help.",
			},
			{
				question: "What kind of support do you offer?",
				answer:
					"We provide comprehensive support including detailed documentation, video tutorials, email support, and live chat. Premium users also get priority support and dedicated account management for enterprise clients.",
			},
		],
		cta: {
			title: "Still have questions?",
			description:
				"Can't find the answer you're looking for? Our support team is here to help.",
			buttons: {
				primary: "Contact Support",
				secondary: "Schedule Demo",
			},
		},
	},

	// Pricing Section
	pricing: {
		id: "pricing",
		badge: "Simple, Transparent Pricing",
		title: "Choose your plan",
		description:
			"Start free and scale as you grow. Our flexible pricing plans are designed to fit teams of all sizes, from solo entrepreneurs to large enterprises.",
		tiers: [
			{
				name: "Starter",
				price: "$0",
				period: "forever",
				description:
					"Perfect for individuals and small projects getting started",
				features: [
					"Up to 3 projects",
					"Basic features",
					"Community support",
					"5GB storage",
					"Standard templates",
				],
				limitations: ["Limited projects", "Community support only"],
				isFeatured: false,
				ctaText: "Get Started Free",
			},
			{
				name: "Professional",
				price: "$29",
				period: "per month",
				description: "Everything you need to scale your business and team",
				features: [
					"Unlimited projects",
					"Advanced features",
					"Priority support",
					"100GB storage",
					"Premium templates",
					"Team collaboration",
					"Advanced analytics",
					"API access",
				],
				limitations: [],
				isFeatured: true,
				ctaText: "Start Free Trial",
			},
		],
		footer:
			"All plans include 14-day free trial, no setup fees, and cancel anytime.",
	},

	// Comparison Section
	comparison: {
		id: "comparison",
		badge: "Before vs. After",
		title: "Transform your workflow",
		description:
			"See how our platform transforms the way you work, helping you move from chaos to clarity and from manual to automated.",
		oldWay: {
			title: "Without Our Platform",
			subtitle: "The old way of working",
			items: [
				"Manual, time-consuming processes",
				"Scattered tools and information",
				"Inconsistent results and quality",
				"Limited visibility into progress",
				"Difficult team coordination",
			],
		},
		newWay: {
			title: "With Our Platform",
			subtitle: "The modern, efficient approach",
			items: [
				"Automated workflows and processes",
				"Centralized workspace and data",
				"Consistent, high-quality outcomes",
				"Real-time insights and tracking",
				"Seamless team collaboration",
			],
		},
		cta: {
			title: "Ready to transform your workflow?",
			description:
				"Join thousands of users who've already made the switch and are seeing incredible results.",
		},
	},

	// CTA Section
	cta: {
		id: "cta",
		badge: "🚀 Join 50,000+ users already using our platform",
		title: "Ready to transform your workflow?",
		description:
			"Start your free trial today. No credit card required. Experience the future of productivity with our platform.",
		stats: [
			{ value: "99.9%", label: "Uptime" },
			{ value: "50K+", label: "Users" },
			{ value: "10M+", label: "Tasks completed" },
			{ value: "4.9★", label: "User rating" },
		],
		buttons: {
			primary: "Start Free Trial",
			secondary: "Schedule Demo",
		},
		trustIndicators: [
			"No credit card required",
			"14-day free trial",
			"Cancel anytime",
		],
	},

	// Legal Pages
	legal: {
		// Privacy Policy
		privacy: {
			title: "Privacy Policy",
			sections: [
				{
					title: "Information We Collect",
					content:
						"We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.",
					items: [
						"Account information (name, email, password)",
						"Usage data and analytics",
						"Device and browser information",
					],
				},
				{
					title: "How We Use Your Information",
					content:
						"We use the information we collect to provide, maintain, and improve our services.",
					items: [
						"Provide and operate our services",
						"Send important notifications and updates",
						"Improve our platform and user experience",
					],
				},
				{
					title: "Data Security",
					content:
						"We implement industry-standard security measures to protect your personal information. All data is encrypted in transit and at rest, and we regularly audit our security practices.",
				},
				{
					title: "Your Rights",
					content:
						"You have the right to access, update, or delete your personal information at any time.",
					items: [
						"Access your personal data",
						"Correct inaccurate information",
						"Request deletion of your data",
					],
				},
				{
					title: "Contact Us",
					content:
						"If you have any questions about this Privacy Policy, please contact us at privacy@company.com",
				},
			],
		},

		// Terms of Service
		terms: {
			title: "Terms of Service",
			sections: [
				{
					title: "Acceptance of Terms",
					content:
						"By accessing and using our platform, you accept and agree to be bound by the terms and provision of this agreement. These terms apply to all visitors, users, and others who access or use our service.",
				},
				{
					title: "Use License",
					content:
						"Permission is granted to temporarily use our platform for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.",
					restrictions: [
						"Modify or copy the materials",
						"Use for commercial purposes",
						"Attempt to reverse engineer any software",
					],
				},
				{
					title: "User Accounts",
					content:
						"When you create an account with us, you must provide accurate and complete information. You are responsible for safeguarding your account credentials.",
					items: [
						"Maintain the security of your account",
						"Notify us of any unauthorized access",
						"Accept responsibility for all activities under your account",
					],
				},
				{
					title: "Service Availability",
					content:
						"We strive to provide uninterrupted service, but we cannot guarantee 100% uptime. We reserve the right to modify, suspend, or discontinue any part of our service at any time with reasonable notice.",
				},
				{
					title: "Limitation of Liability",
					content:
						"In no event shall our company be liable for any damages arising out of the use or inability to use our platform. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses.",
				},
				{
					title: "Changes to Terms",
					content:
						"We reserve the right to update these terms at any time. When we do, we will revise the updated date at the top of this page and notify users of significant changes.",
				},
				{
					title: "Contact Information",
					content:
						"If you have any questions about these Terms of Service, please contact us at legal@company.com",
				},
			],
		},

		// Cookie Policy
		cookies: {
			title: "Cookie Policy",
			intro:
				"Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and improving our platform's functionality.",
			whatAreCookies: "What Are Cookies",
			typesTitle: "Types of Cookies We Use",
			types: [
				{
					title: "Essential Cookies",
					description:
						"These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.",
					items: [
						"Authentication and login sessions",
						"Security and fraud prevention",
					],
				},
				{
					title: "Analytics Cookies",
					description:
						"These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
					items: ["Page views and user behavior", "Performance monitoring"],
				},
				{
					title: "Functional Cookies",
					description:
						"These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.",
					items: [
						"Language and region preferences",
						"Theme and display settings",
					],
				},
			],
			sections: [
				{
					title: "Managing Your Cookie Preferences",
					content:
						"You can control and manage cookies in various ways. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer.",
					items: [
						"Browser settings to block or delete cookies",
						"Opt-out of analytics tracking",
						"Contact us for assistance",
					],
				},
				{
					title: "Third-Party Cookies",
					content:
						"We may use third-party services that place cookies on your device. These services include analytics providers and advertising networks. We do not control these cookies and recommend reviewing the privacy policies of these third parties.",
				},
				{
					title: "Updates to This Policy",
					content:
						"We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please check this page periodically for updates.",
				},
				{
					title: "Contact Us",
					content:
						"If you have any questions about our use of cookies, please contact us at cookies@company.com",
				},
			],
		},
	},

	// Footer
	footer: {
		id: "footer",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		sections: [
			{
				title: "Product",
				links: [
					{ name: "Features", href: "/features" },
					{ name: "Pricing", href: "/pricing" },
					{ name: "Integrations", href: "/integrations" },
					{ name: "API Documentation", href: "/docs" },
					{ name: "Changelog", href: "/changelog" },
				],
			},
			{
				title: "Company",
				links: [
					{ name: "About Us", href: "/about" },
					{ name: "Careers", href: "/careers" },
					{ name: "Blog", href: "/blog" },
					{ name: "Press Kit", href: "/press" },
					{ name: "Contact", href: "/contact" },
				],
			},
			{
				title: "Resources",
				links: [
					{ name: "Documentation", href: "/docs" },
					{ name: "Help Center", href: "/help" },
					{ name: "Community", href: "/community" },
					{ name: "Tutorials", href: "/tutorials" },
					{ name: "Status Page", href: "/status" },
				],
			},
			{
				title: "Legal",
				links: [
					{ name: "Privacy Policy", href: "/privacy" },
					{ name: "Terms of Service", href: "/terms" },
					{ name: "Cookie Policy", href: "/cookies" },
					{ name: "Security", href: "/security" },
					{ name: "GDPR", href: "/gdpr" },
				],
			},
		],
		newsletter: {
			title: "Stay up to date",
			description:
				"Get the latest updates, tips, and insights delivered to your inbox.",
			placeholder: "Enter your email",
			button: "Subscribe",
			disclaimer: "No spam, unsubscribe at any time. We respect your privacy.",
		},
		social: [
			{ name: "Twitter", href: "https://twitter.com/company" },
			{ name: "LinkedIn", href: "https://linkedin.com/company/company" },
			{ name: "GitHub", href: "https://github.com/company" },
			{ name: "Discord", href: "https://discord.gg/company" },
		],
		legal: [
			{ name: "Privacy", href: "/privacy" },
			{ name: "Terms", href: "/terms" },
			{ name: "Cookies", href: "/cookies" },
		],
		copyright: "Company Name. All rights reserved.",
		status: "All systems operational",
	},
};
