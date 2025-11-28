// src/data/faqData.js
export const faqData = {
  account: [
    {
      question: "How do I create an account?",
      answer:
        "Click on the 'Sign Up' button at the top right corner, fill in your details, and verify your email address.",
    },
    {
      question: "I forgot my password. What should I do?",
      answer:
        "Go to the login page and click 'Forgot Password'. Follow the instructions sent to your registered email address.",
    },
    {
      question: "How can I delete my account?",
      answer:
        "Go to 'Profile Settings' > 'Account' > 'Delete Account', follow the confirmation steps. Note: this action is irreversible.",
    },
    {
      question: "How do I change my email address?",
      answer:
        "Go to 'Profile Settings' > 'Account' and update your email address. Verify the new email when prompted.",
    },
    {
      question: "How do I change my username?",
      answer:
        "Currently usernames cannot be changed. You may create a new account if you need a different username.",
    },
    // …continue until ~15–20 entries in this category
  ],
  writing: [
    {
      question: "How can I write a new blog post?",
      answer:
        "After logging in, go to your dashboard, click 'New Post', add title/content/tags, then click 'Publish'.",
    },
    {
      question: "Can I save a draft and publish later?",
      answer:
        "Yes — when writing a post, click 'Save Draft' and later return to 'My Posts' to publish when you're ready.",
    },
    {
      question: "How can I schedule a post for a future date/time?",
      answer:
        "In the post editor, choose 'Schedule' instead of 'Publish now', select your date/time, then click 'Schedule'.",
    },
    {
      question: "Can I edit a blog post after publishing?",
      answer:
        "Yes — go to 'My Posts', open the published post, click 'Edit', make changes and click 'Update'.",
    },
    {
      question: "Can I add images or videos to my blog post?",
      answer:
        "Yes — use the media upload button in the editor to add images or embed videos from supported platforms.",
    },
    // …continue until ~15–20 entries
  ],
  comments: [
    {
      question: "How do I comment on a post?",
      answer:
        "Scroll to the bottom of any post, type your comment in the box, and click 'Post Comment'. Make sure you’re logged in.",
    },
    {
      question: "Can I edit or delete my comment?",
      answer:
        "Yes — find your comment, click the three dots menu, and select 'Edit' or 'Delete'.",
    },
    {
      question: "How can I reply to a comment?",
      answer:
        "Click 'Reply' under any comment to respond directly to it. Replies appear nested under the original comment.",
    },
    {
      question: "How do I report inappropriate comments?",
      answer:
        "Click the 'Report' icon beside the comment, select a reason, and submit for review.",
    },
    {
      question: "Why is my comment not showing up?",
      answer:
        "Your comment may be awaiting moderation. If it’s been more than a few minutes, reload the page or contact support.",
    },
    // …continue until ~15–20 entries
  ],
  seo: [
    {
      question: "How do I optimize my blog post for SEO?",
      answer:
        "Use a descriptive title, include relevant keywords, add alt text to images, use tags/categories and publish high-quality content.",
    },
    {
      question: "Can I change the URL (slug) of my blog post?",
      answer:
        "Yes — in the post editor find the 'URL slug' field and update it before publishing. Changing after publishing may affect links.",
    },
    {
      question: "How do I add meta description and meta keywords?",
      answer:
        "In the post editor settings, scroll to 'SEO Settings' and fill in the meta description and keywords fields.",
    },
    {
      question: "How long should my blog post be for SEO?",
      answer:
        "A good blog post length is 800-1500 words or more depending on topic depth — focus on value rather than a specific word count.",
    },
    {
      question: "How can I check post performance in search engines?",
      answer:
        "Use tools like Google Search Console or analytics to monitor impressions, clicks and ranking for your published post.",
    },
    // …continue until ~15–20 entries
  ],
  monetization: [
    {
      question: "How can I earn money from my blog posts?",
      answer:
        "You can monetize via ads, affiliate links, sponsored content or by enabling premium memberships—check your account for eligibility.",
    },
    {
      question: "How do I enable ads on my blog?",
      answer:
        "Go to 'Dashboard' > 'Monetization' > 'Ads', follow the setup instructions and ensure you meet the minimum traffic requirements.",
    },
    {
      question: "What are the payment options and payout schedule?",
      answer:
        "Payouts occur monthly if your balance is above the minimum threshold. Payment methods include bank transfer or PayPal (region permitted).",
    },
    {
      question: "Can I publish sponsored posts?",
      answer:
        "Yes — follow our sponsored content guidelines in the 'Monetization' section, disclose sponsorship, and ensure content aligns with our policy.",
    },
    {
      question: "Are there any fees or commissions we take from revenue?",
      answer:
        "We charge a platform service fee (for example 10%) on ad/affiliate revenue; details are in 'Monetization → Terms'.",
    },
    // …continue until ~15–20 entries
  ],
  notifications: [
    {
      question: "How do I turn on email notifications for new posts?",
      answer:
        "Go to 'Profile Settings' > 'Notifications', toggle 'Email – New Post from Authors I Follow'.",
    },
    {
      question: "How can I unsubscribe from push notifications?",
      answer:
        "In your browser or mobile device settings, under site notifications, turn off updates from our domain.",
    },
    {
      question: "How do I receive comment reply notifications?",
      answer:
        "In 'Settings' > 'Notifications', enable 'Replies to My Comments'.",
    },
    {
      question: "I am receiving too many notifications — what can I do?",
      answer:
        "Go to 'Notifications' settings and disable or reduce the types of notifications you receive (e.g. uncheck 'Daily summary').",
    },
    {
      question: "Why am I not getting notifications when I follow an author?",
      answer:
        "Check your email/spam folder, ensure notifications are enabled in settings and your account is verified.",
    },
    // …continue until ~15–20 entries
  ],
  privacy: [
    {
      question: "What data do you collect about me?",
      answer:
        "We collect basic account info (name, email), activity data (posts/comments) and usage metrics. See our Privacy Policy for full details.",
    },
    {
      question: "How can I delete my data?",
      answer:
        "Go to 'Profile Settings' > 'Privacy' > 'Delete My Data'. Follow the confirmation steps and allow some time for processing.",
    },
    {
      question: "Is my profile visible publicly?",
      answer:
        "By default your username and bio are public. You can switch to 'Private Profile' in 'Privacy Settings'.",
    },
    {
      question: "Can I opt out of analytics tracking?",
      answer:
        "Yes — in 'Privacy Settings' you can disable optional analytics tracking and targeted content personalization.",
    },
    {
      question: "How is my payment information stored and secured?",
      answer:
        "Payment details are stored using encrypted services with PCI-compliance. We do not store full card numbers ourselves.",
    },
    // …continue until ~15–20 entries
  ],
  technical: [
    {
      question: "The site is running slow — what can I do?",
      answer:
        "Try clearing your browser cache, disabling browser extensions or switching to a different network. If problem persists, contact support.",
    },
    {
      question: "I’m seeing a 404 error on a post I created — why?",
      answer:
        "The post may have been deleted or the URL slug changed. Check your 'My Posts' list or publish again with correct slug.",
    },
    {
      question: "How do I update my profile picture if it’s not loading?",
      answer:
        "Try uploading a smaller image (<2MB) and wait a few minutes. If problem persists, clear cache or try another browser.",
    },
    {
      question: "Which browsers and devices are supported?",
      answer:
        "Our site supports latest versions of Chrome, Firefox, Safari and Edge. Mobile web is supported; we recommend keeping your browser updated.",
    },
    {
      question: "Why are my posts not saving as draft?",
      answer:
        "Ensure you are logged in, your session hasn’t timed out. If still not saving, log out and back in, then retry or contact support.",
    },
    // …continue until ~15–20 entries
  ],
  customization: [
    {
      question: "Can I change the theme of my blog page?",
      answer:
        "Yes — go to 'Dashboard' > 'Appearance' and choose from available themes or upload your own if your plan allows.",
    },
    {
      question: "How do I add a custom logo or favicon?",
      answer:
        "In 'Appearance' settings upload your logo and favicon images. Recommended sizes are shown next to each upload field.",
    },
    {
      question:
        "Can I adjust the layout of my blog homepage (e.g., grid vs list)?",
      answer:
        "Yes — under 'Appearance' select layout style (List, Grid, Masonry) and hit 'Save Changes'.",
    },
    {
      question: "How can I add custom CSS or styling?",
      answer:
        "If your plan permits, go to 'Appearance' > 'Custom CSS' and enter your CSS code. Save changes and refresh your site.",
    },
    {
      question: "How do I enable dark mode for my blog visitors?",
      answer:
        "In 'Appearance' > 'Site Settings' enable 'Dark Mode Toggle'. Visitors will then see a switch on site header.",
    },
    // …continue until ~15–20 entries
  ],
  community: [
    {
      question: "How can I follow other authors?",
      answer:
        "Visit an author's profile and click the 'Follow' button. You’ll get notified when they publish new posts.",
    },
    {
      question: "How do I join groups or communities on the blog?",
      answer:
        "Go to 'Communities' tab, browse available groups, click 'Join'. Some groups may require approval.",
    },
    {
      question: "Can I organize offline meetups or events with other bloggers?",
      answer:
        "Yes — visit 'Events' section, create your event listing, set date/time/location and invite members to RSVP.",
    },
    {
      question: "How do I moderate or report behavior in community groups?",
      answer:
        "In each group there’s a 'Report' button next to posts/comments. Moderators will review and take action.",
    },
    {
      question: "How can I earn community badges or reputation points?",
      answer:
        "Participate by posting quality content, replying to others, getting positive feedback — the system assigns badges automatically.",
    },
    // …continue until ~15–20 entries
  ],
  security: [
    {
      question: "How can I secure my account from hackers?",
      answer:
        "Enable two-factor authentication, use a strong password, and avoid logging in from shared devices.",
    },
    {
      question: "What should I do if I suspect my account is hacked?",
      answer:
        "Immediately change your password, log out from all sessions, and contact support to review account activity.",
    },
    {
      question: "Does the platform support two-factor authentication?",
      answer:
        "Yes — go to 'Security Settings' and enable 2FA using an authenticator app or SMS.",
    },
    {
      question: "How do I review active login sessions?",
      answer:
        "Go to 'Account' > 'Security' > 'Active Sessions' to view and revoke device access.",
    },
    {
      question: "Can I get alerts for unauthorized logins?",
      answer:
        "Yes — enable login alerts in 'Security Settings' to receive notifications about new logins.",
    },
    {
      question: "Are my private drafts encrypted?",
      answer:
        "Yes — private drafts are stored securely with encryption and accessible only by your account.",
    },
    {
      question: "How is password data stored?",
      answer:
        "Passwords are hashed using strong cryptographic algorithms (e.g., bcrypt) and never stored in plain text.",
    },
    {
      question: "What happens if I lose access to my 2FA device?",
      answer:
        "Use your backup codes or contact support with identity verification to recover access.",
    },
    {
      question: "Can I disable 2FA after enabling it?",
      answer:
        "Yes, but it’s not recommended. You can disable it anytime from 'Security Settings'.",
    },
    {
      question: "Is my content protected from plagiarism?",
      answer:
        "We use digital fingerprinting and DMCA processes to protect your original content.",
    },
  ],
  support: [
    {
      question: "How can I contact customer support?",
      answer:
        "Go to 'Help' > 'Contact Support', fill out the form, and you’ll receive a response within 24–48 hours.",
    },
    {
      question: "Is there live chat support?",
      answer:
        "Currently, live chat is available to premium users. Others can reach us through email support.",
    },
    {
      question: "Where can I track my support tickets?",
      answer: "Log into your dashboard and go to 'Support' > 'My Tickets'.",
    },
    {
      question: "How long does it take for a support reply?",
      answer:
        "Most requests receive a response within 24–48 business hours depending on the issue.",
    },
    {
      question: "Can I attach screenshots when submitting a ticket?",
      answer: "Yes — attachments up to 5MB are allowed in the support form.",
    },
    {
      question: "How do I give feedback about support?",
      answer:
        "After your ticket is closed, you’ll get a feedback link to rate the support experience.",
    },
    {
      question: "What if my issue isn’t resolved?",
      answer:
        "You can reopen a closed ticket or escalate it to a senior support representative.",
    },
    {
      question: "Do you offer support in multiple languages?",
      answer:
        "Yes — we currently offer support in English, Hindi, and Spanish.",
    },
    {
      question: "Can I contact support through social media?",
      answer:
        "Yes, but for account-related issues, always use the official support form for privacy and verification.",
    },
    {
      question: "Do you offer phone support?",
      answer:
        "Currently, we provide chat and email support only to maintain efficient tracking of requests.",
    },
  ],
  mobile: [
    {
      question: "Is there a mobile app for this platform?",
      answer:
        "Yes — the app is available for both Android and iOS devices in their respective app stores.",
    },
    {
      question: "How do I enable dark mode on the app?",
      answer:
        "Go to 'Settings' > 'Display' > 'Dark Mode' to toggle dark or light themes.",
    },
    {
      question: "Can I publish posts from the mobile app?",
      answer:
        "Yes — log in to the app, tap '+' and start creating posts just like on desktop.",
    },
    {
      question: "Why can’t I upload media from mobile?",
      answer:
        "Ensure app permissions for storage and camera are enabled under device settings.",
    },
    {
      question: "How can I get push notifications?",
      answer:
        "Allow notifications in your app settings and enable them under 'Account' > 'Notifications'.",
    },
    {
      question: "Can I use the app offline?",
      answer:
        "Some features like reading saved posts are available offline; publishing requires internet access.",
    },
    {
      question: "How do I clear cache in the mobile app?",
      answer:
        "Go to 'Settings' > 'Storage' > 'Clear Cache'. This helps free space and improve performance.",
    },
    {
      question: "Is the mobile app secure?",
      answer:
        "Yes — all data transmission is encrypted via HTTPS and sensitive data is securely stored.",
    },
    {
      question: "Why am I logged out automatically?",
      answer:
        "For security, sessions expire after prolonged inactivity or version updates.",
    },
    {
      question: "How can I report app bugs?",
      answer:
        "Go to 'Help' > 'Report a Bug', describe the issue, and include screenshots if possible.",
    },
  ],
  contentGuidelines: [
    {
      question: "What type of content is prohibited?",
      answer:
        "Hate speech, spam, explicit content, plagiarism, and misinformation are not allowed.",
    },
    {
      question: "Can I repost someone else’s article?",
      answer:
        "Only if you have permission from the author or if it’s licensed for republication.",
    },
    {
      question: "What happens if I violate content policy?",
      answer:
        "Your post may be removed, and repeated violations can lead to suspension or account termination.",
    },
    {
      question: "How do I report copyrighted material?",
      answer:
        "Use the 'Report' button or contact our DMCA team with relevant details.",
    },
    {
      question: "Can I include affiliate links in my posts?",
      answer:
        "Yes — disclose clearly if your content contains affiliate links or sponsorships.",
    },
    {
      question: "Do you review posts before publishing?",
      answer:
        "No — posts are auto-published but may be reviewed if reported for policy violations.",
    },
    {
      question: "Can I translate my content into multiple languages?",
      answer:
        "Yes — multilingual publishing is allowed as long as content remains original and relevant.",
    },
    {
      question: "Is AI-generated content allowed?",
      answer:
        "Yes, if you clearly disclose AI assistance and ensure accuracy and originality.",
    },
    {
      question: "Can I embed external widgets or scripts?",
      answer:
        "Only verified and safe embeds (YouTube, X, Spotify, etc.) are allowed for security reasons.",
    },
    {
      question: "How do I appeal content removal?",
      answer:
        "Submit an appeal through 'Help' > 'Appeals' with details about your removed post.",
    },
  ],
  integrations: [
    {
      question: "Can I connect Google Analytics to my blog?",
      answer: "Yes — go to 'Integrations' and add your GA Tracking ID.",
    },
    {
      question: "Do you support newsletter tools like Mailchimp?",
      answer:
        "Yes — connect your Mailchimp or ConvertKit account under 'Integrations'.",
    },
    {
      question: "How can I add a contact form to my blog?",
      answer:
        "Go to 'Widgets' > 'Forms' and select 'Contact Form'. Customize fields as needed.",
    },
    {
      question: "Can I embed social media feeds?",
      answer:
        "Yes — use 'Widgets' > 'Social Feed' to embed Twitter, Instagram, or YouTube feeds.",
    },
    {
      question: "Do you support Google AdSense integration?",
      answer:
        "Yes — go to 'Monetization' > 'AdSense' and paste your publisher ID.",
    },
    {
      question: "Can I connect my custom domain?",
      answer:
        "Yes — visit 'Domain Settings' to link your domain by updating DNS records.",
    },
    {
      question: "Is API access available?",
      answer:
        "API access is available to developers on the Pro plan. You can generate keys under 'Developer Settings'.",
    },
    {
      question: "How do I add social share buttons?",
      answer:
        "Go to 'Appearance' > 'Widgets' > 'Social Share' to enable sharing icons on your posts.",
    },
    {
      question: "Can I embed a newsletter signup form?",
      answer:
        "Yes — add a signup form under 'Widgets' or embed code from your email provider.",
    },
    {
      question: "Do you support Zapier or similar automation tools?",
      answer:
        "Yes — integrations with Zapier and IFTTT are supported for automating workflows.",
    },
  ],
};
