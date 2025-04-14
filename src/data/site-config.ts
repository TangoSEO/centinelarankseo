export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://centinelarank.com',
    title: 'SEO Services in Tandil, Argentina',
    subtitle: 'Rank better on Google and sell more',
    description: 'Jessica Schmukler, founder CEO and SEO Strategist',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Centinela Rank: is best SEO Agency in Tandil, Argentina'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Services',
            href: '/services'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'www.linkedin.com/in/seojedi'
        },
    ],
    hero: {
        title: "Turn Google into your best salesperson.",
        text:
            "I'm **Jessica Schmukler**, SEO & CRO specialist in Tandil, Argentina. I fix what's blocking your rankings, flood you with qualified traffic, and turn clicks into paying clients. <a href='mailto:hola@centinelarank.com'>Book a free 30‑min consult →</a>",
    }      
        image: {
        src: '/hero.jpeg',
        alt: 'A person sitting at a desk in front of a computer'
    },
    actions: [
        {
            text: 'Get in Touch',
            href: '/contact'
        }
    ]
},
    subscribe: {
        title: 'Subscribe to my SEO Newsletter',
        text: 'One update per month. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
