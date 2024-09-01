import { ReviewCard } from '@/pages/sunnyside/components/ui';
import emilyReviewProfileImage from '@/assets/sunnyside/images/image-emily.jpg';
import jennieReviewProfileImage from '@/assets/sunnyside/images/image-jennie.jpg';
import thomasReviewProfileImage from '@/assets/sunnyside/images/image-thomas.jpg';

export function ReviewsSection() {
    return (
        <section
            id="reviews"
            className="flex flex-col items-center gap-32 p-40 text-center
            desktop-md:gap-24
            desktop-sm:px-24
            tablet-lg:px-16
            tablet-md:px-8
            tablet-sm:gap-16 tablet-sm:py-20"
        >
            <h3
                className="font-fraunces text-2xl font-[900] uppercase tracking-[0.4rem] text-sunnyside-grayish-blue
                desktop-md:text-xl
                mobile-lg:text-lg
                mobile-md:tracking-[0.2rem]"
            >
                Client Testimonials
            </h3>

            <div
                className="grid grid-cols-[repeat(3,1fr)] grid-rows-[repeat(3,auto)] gap-x-40
                desktop-lg:gap-x-20
                desktop-md:gap-x-10
                tablet-sm:grid-cols-1 tablet-sm:gap-x-0 tablet-sm:gap-y-16 tablet-sm:px-8
                mobile-lg:px-0"
            >
                <ReviewCard
                    profileSrc={emilyReviewProfileImage}
                    content="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
                    authorName="Emily R."
                    authorTitle="Marketing Director"
                />
                <ReviewCard
                    profileSrc={thomasReviewProfileImage}
                    content="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
                    authorName="Thomas S."
                    authorTitle="Chief Operating Officer"
                />
                <ReviewCard
                    profileSrc={jennieReviewProfileImage}
                    content="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
                    authorName="Jennie F."
                    authorTitle="Business Owner"
                />
            </div>
        </section>
    );
}
