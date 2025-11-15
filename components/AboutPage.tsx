
import React from 'react';

const TeamMemberCard: React.FC<{ imageUrl: string; name: string; title: string; }> = ({ imageUrl, name, title }) => (
    <div className="text-center">
        <img className="mx-auto h-40 w-40 rounded-full object-cover" src={imageUrl} alt={`Portrait of ${name}, ${title}`} />
        <h3 className="mt-6 text-xl font-semibold text-brand-black">{name}</h3>
        <p className="text-brand-blue">{title}</p>
    </div>
);

const AboutPage: React.FC = () => {
    return (
        <div className="py-16 bg-white animate-fadeIn">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Introduction Section */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-brand-black tracking-tight">About CloudAdept Systems</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        We are a team of certified ServiceNow professionals dedicated to helping businesses leverage the full potential of the Now Platform. Our journey began with a single mission: to deliver elegant, powerful, and scalable ServiceNow solutions.
                    </p>
                </div>

                {/* Mission and Vision */}
                <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <img src="https://picsum.photos/800/600?random=1" alt="A modern office environment with a team collaborating on a project." className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-brand-black">Our Mission</h2>
                        <p className="mt-4 text-gray-600">
                           To empower businesses by unlocking the full potential of the ServiceNow platform, driving efficiency, innovation, and digital transformation through expert implementation and strategic guidance.
                        </p>
                        <h2 className="mt-8 text-3xl font-bold text-brand-black">Our Vision</h2>
                        <p className="mt-4 text-gray-600">
                            To be the most trusted and sought-after ServiceNow partner, recognized for our deep technical expertise, unwavering commitment to client success, and leadership in the ServiceNow ecosystem.
                        </p>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mt-24">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-brand-black">Meet Our Leadership</h2>
                        <p className="mt-2 text-lg text-gray-600">The driving force behind our success.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                        <TeamMemberCard imageUrl="https://picsum.photos/200/200?random=2" name="Jane Doe" title="Chief Executive Officer" />
                        <TeamMemberCard imageUrl="https://picsum.photos/200/200?random=3" name="John Smith" title="Chief Technology Officer" />
                        <TeamMemberCard imageUrl="https://picsum.photos/200/200?random=4" name="Emily Jones" title="Head of ServiceNow Practice" />
                        <TeamMemberCard imageUrl="https://picsum.photos/200/200?random=5" name="Michael Brown" title="VP of Managed Services" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
