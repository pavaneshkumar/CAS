import React from 'react';
import ServicePageLayout from './ServicePageLayout';

const CaseStudy: React.FC<{ title: string; industry: string; challenge: string; solution: string; result: string; }> = ({ title, industry, challenge, solution, result }) => (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mt-12">
        <h3 className="text-2xl font-semibold text-brand-black">Case Study: {title}</h3>
        <p className="text-sm font-medium text-brand-blue mt-1">{industry}</p>
        <div className="mt-4 grid md:grid-cols-3 gap-8">
            <div>
                <h4 className="font-semibold text-gray-800">The Challenge</h4>
                <p className="text-gray-600 mt-1">{challenge}</p>
            </div>
            <div>
                <h4 className="font-semibold text-gray-800">Our Solution</h4>
                <p className="text-gray-600 mt-1">{solution}</p>
            </div>
            <div>
                <h4 className="font-semibold text-gray-800">The Result</h4>
                <p className="text-gray-600 mt-1">{result}</p>
            </div>
        </div>
    </div>
);

const CsmPage: React.FC = () => {
  return (
    <ServicePageLayout
      title="ServiceNow Customer Service Management (CSM)"
      description="Deliver effortless, connected, and proactive customer service. We connect your teams, workflows, and systems to resolve customer issues end-to-end."
      imageUrl="https://picsum.photos/1600/800?random=csm"
    >
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8 text-gray-700">
          <h2 className="text-3xl font-bold text-brand-black">Unify Your Customer Service Operations</h2>
          <p>Go beyond traditional CRM. ServiceNow CSM connects customer service with other departments like engineering, operations, and finance to resolve the root cause of issues, not just the symptoms. This cross-functional approach ensures a seamless customer experience and improves operational efficiency.</p>
          <p>CloudAdept Systems helps you implement an omni-channel service strategy, empowering your customers to engage on their preferred channels while providing your agents with a single, unified workspace with all the context they need to resolve issues quickly and effectively.</p>
        
          <h3 className="text-2xl font-semibold text-brand-black pt-4">Key Benefits of Our CSM Solutions</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Boost Customer Satisfaction:</strong> Resolve issues faster and more proactively, leading to higher CSAT and NPS scores.</li>
            <li><strong>Increase Agent Productivity:</strong> Arm agents with AI-powered tools, knowledge bases, and a complete customer view.</li>
            <li><strong>Reduce Operational Costs:</strong> Deflect cases with intelligent self-service portals and automate repetitive service tasks.</li>
            <li><strong>Proactive Service:</strong> Identify and address potential issues by monitoring service health, preventing customer calls before they happen.</li>
            <li><strong>Connected Digital Workflows:</strong> Seamlessly orchestrate work across the front, middle, and back offices for end-to-end issue resolution.</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-brand-black">Core Capabilities</h3>
            <ul className="mt-4 space-y-3">
                {['Case and Major Issue Management', 'Omni-Channel Engagement', 'AI-Powered Self-Service', 'Predictive Intelligence', 'Field Service Management', 'Connected Digital Workflows'].map(item => (
                    <li key={item} className="flex items-start">
                         <svg className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span className="text-gray-600">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
      <CaseStudy
        title="Telecommunications Provider Reduces Customer Churn"
        industry="Telecommunications"
        challenge="High call volumes, long wait times, and a disconnect between customer service and network operations led to significant customer churn."
        solution="We implemented ServiceNow CSM with Proactive Customer Service Operations. This connected CSM with ITOM, enabling agents to see network outages affecting customers and proactively notify them."
        result="Reduced inbound call volume by 30%, improved first-call resolution by 45%, and decreased customer churn by 15% in the first year."
       />
    </ServicePageLayout>
  );
};

export default CsmPage;
