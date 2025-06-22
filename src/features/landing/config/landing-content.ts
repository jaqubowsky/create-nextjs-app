export const landingConfig = {
	// Brand Information
	brand: {
		name: "Brand Name",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		logo: "🏢", // Can be replaced with actual logo component
	},

	// Hero Section
	hero: {
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
	},

	// Navigation
	navigation: [
		{ name: "Features", href: "#features" },
		{ name: "Pricing", href: "#pricing" },
		{ name: "About", href: "#about" },
		{ name: "Contact", href: "#contact" },
	],

	// How It Works Section
	howItWorks: {
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
		badge: "Why Choose Our Platform",
		title: "Features that drive results",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
		items: [
			{
				title: "Advanced Analytics",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				features: [
					"Real-time insights",
					"Custom dashboards",
					"Data visualization",
				],
				icon: "📊",
			},
			{
				title: "Seamless Integration",
				description:
					"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.",
				features: [
					"API connectivity",
					"Third-party tools",
					"Workflow automation",
				],
				icon: "🔗",
			},
			{
				title: "Enterprise Security",
				description:
					"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa.",
				features: [
					"End-to-end encryption",
					"Compliance ready",
					"Access controls",
				],
				icon: "🔒",
			},
		],
		stats: [
			{ value: "99.9%", label: "Uptime" },
			{ value: "10K+", label: "Active Users" },
			{ value: "50M+", label: "Transactions" },
			{ value: "24/7", label: "Support" },
		],
	},

	// Social Proof Section
	socialProof: {
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
		badge: "Got Questions?",
		title: "Frequently Asked Questions",
		description:
			"Everything you need to know about our platform and how it can transform your workflow.",
		items: [
			{
				question: "How does the platform work?",
				answer:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
			},
			{
				question: "Is my data secure and private?",
				answer:
					"Absolutely. We use enterprise-grade encryption and never store your data permanently. All processing happens in secure, isolated environments, and we're SOC 2 Type II compliant.",
			},
			{
				question: "Which platforms and tools are supported?",
				answer:
					"We support all major platforms and integrate with 50+ tools including popular development environments, project management tools, and collaboration platforms.",
			},
			{
				question: "Can I cancel my subscription anytime?",
				answer:
					"Yes, you can cancel your subscription at any time with no questions asked. Your subscription will remain active until the end of the current billing period.",
			},
			{
				question: "Do you offer team and enterprise plans?",
				answer:
					"Yes! Our Enterprise plan includes team collaboration tools, advanced analytics, custom integrations, dedicated support, and on-premise deployment options. Contact our sales team for custom pricing.",
			},
			{
				question: "What's included in the free trial?",
				answer:
					"The 14-day free trial includes full access to all Professional plan features with no limitations. No credit card required to get started.",
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
		badge: "Simple, Transparent Pricing",
		title: "Choose your plan",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		tiers: [
			{
				name: "Free",
				price: "$0",
				period: "forever",
				description: "Perfect for getting started with our platform",
				features: [
					"Up to 1,000 requests/month",
					"Basic analytics",
					"Community support",
					"Standard integrations",
					"Basic templates",
				],
				limitations: ["Limited features", "Community support only"],
				isFeatured: false,
				ctaText: "Get Started Free",
			},
			{
				name: "Pro",
				price: "$29",
				period: "per month",
				description: "Everything you need to scale your business",
				features: [
					"Unlimited requests",
					"Advanced analytics",
					"Priority support",
					"All integrations",
					"Custom templates",
					"Advanced security",
					"Team collaboration",
					"API access",
				],
				limitations: [],
				isFeatured: true,
				ctaText: "Start Free Trial",
			},
		],
		footer:
			"All plans include 30-day money-back guarantee and free migration assistance.",
	},

	// Comparison Section
	comparison: {
		badge: "Before vs. After",
		title: "Comparision",
		description:
			"See how our platform transforms your workflow and improves efficiency",
		oldWay: {
			title: "Without Our Platform",
			subtitle: "Traditional approach",
			items: [
				"Manual processes and workflows",
				"Inconsistent results across team",
				"Time-consuming repetitive tasks",
				"Limited visibility and insights",
				"Difficult collaboration and communication",
			],
		},
		newWay: {
			title: "With Our Platform",
			subtitle: "Modern, streamlined approach",
			items: [
				"Automated workflows and processes",
				"Consistent, high-quality outcomes",
				"Focus on strategic work, not busy work",
				"Real-time insights and analytics",
				"Seamless team collaboration",
			],
		},
		cta: {
			title: "Ready to make the switch?",
			description:
				"Join thousands of users who've already transformed their workflow",
		},
	},

	// CTA Section
	cta: {
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

	// Footer
	footer: {
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
