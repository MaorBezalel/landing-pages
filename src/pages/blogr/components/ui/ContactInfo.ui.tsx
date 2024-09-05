import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';

export function ContactInfo() {
    const contactInfoItems = [
        {
            label: 'Product',
            subItemsLabels: ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'],
        },
        {
            label: 'Company',
            subItemsLabels: ['About', 'Team', 'Blog', 'Careers'],
        },
        {
            label: 'Connect',
            subItemsLabels: ['Contact', 'Newsletter', 'LinkedIn'],
        },
    ];

    return contactInfoItems.map((contactInfo, index) => (
        <section
            key={index}
            className="flex flex-col gap-6
            tablet-md:gap-4"
        >
            <h4
                className="text-base font-[700] text-blogr-white
                tablet-lg:text-sm
                tablet-md:text-lg"
            >
                {contactInfo.label}
            </h4>

            <ul
                className="flex flex-col gap-2
                tablet-md:gap-1"
            >
                {contactInfo.subItemsLabels.map((label, index) => (
                    <li key={index}>
                        <Link
                            to={ROUTES.BLOGR}
                            className="text-base text-blogr-grayish-blue decoration-2 underline-offset-2 hover:underline
                            tablet-lg:text-sm
                            tablet-md:text-lg"
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    ));
}
