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

const ItsmPage: React.FC = () => {
  return (
    <ServicePageLayout
      title="ServiceNow IT Service Management (ITSM)"
      description="Streamline and automate IT service delivery to enhance productivity, reduce costs, and improve user satisfaction with our expert ITSM solutions."
      imageUrl="https://picsum.photos/1600/800?random=itsm"
    >
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8 text-gray-700">
          <h2 className="text-3xl font-bold text-brand-black">Modernize Your IT Service Delivery</h2>
          <p>In today's fast-paced digital landscape, a reactive IT service model is no longer sufficient. CloudAdept Systems helps you transition to a proactive, service-oriented approach using the full power of ServiceNow ITSM. We align IT with business objectives, automate manual tasks, and provide a self-service experience that empowers your employees.</p>
          <p>Our certified consultants work with you to implement and optimize core ITSM processes, ensuring they are tailored to your unique organizational needs. From Incident and Problem Management to a robust Service Catalog, we build a foundation for operational excellence.</p>
        
          <h3 className="text-2xl font-semibold text-brand-black pt-4">Key Benefits of Our ITSM Solutions</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Increased Efficiency:</strong> Automate workflows to resolve issues faster and reduce the burden on your IT staff.</li>
            <li><strong>Improved User Experience:</strong> Provide a modern, intuitive self-service portal for requests and issue reporting.</li>
            <li><strong>Enhanced Visibility:</strong> Gain a single, consolidated view of your IT services, assets, and configurations with a powerful CMDB.</li>
            <li><strong>Proactive Problem Solving:</strong> Shift from firefighting to identifying and resolving the root causes of recurring incidents.</li>
            <li><strong>Data-Driven Decisions:</strong> Leverage powerful analytics and dashboards to monitor performance and drive continuous service improvement.</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-brand-black">Core Capabilities</h3>
            <ul className="mt-4 space-y-3">
                {['Incident Management', 'Problem Management', 'Change Management', 'Request Management', 'Service Catalog', 'CMDB', 'Asset Management', 'Knowledge Management', 'Performance Analytics'].map(item => (
                    <li key={item} className="flex items-start">
                         <svg className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span className="text-gray-600">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
      <CaseStudy
        title="Global Financial Firm Overhauls IT Support"
        industry="Financial Services"
        challenge="A fragmented IT support system led to slow response times, poor visibility into recurring issues, and frustrated employees."
        solution="We implemented a full ServiceNow ITSM suite, consolidating requests into a single portal, automating incident routing, and building a comprehensive CMDB."
        result="Achieved a 40% reduction in ticket resolution time, a 60% increase in self-service adoption, and a 95% employee satisfaction rate with IT support."
       />
    </ServicePageLayout>
  );
};

export default ItsmPage;
