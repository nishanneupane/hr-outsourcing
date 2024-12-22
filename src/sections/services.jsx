

export const services = () => {
  const services = [
    {
      title: 'Mortgage Broker Support Services',
      title1: 'RS45000 per Month',
      alt: 'Description of Service 1',
      url: '/images/serviceCard1.png',
      list: [
        'Loan Application Management',
        'Regulatory Compliance',
        'Document Handling',
        'Stakeholder Communication',
        'Credit Assessment and Analysis',
        'Market Research for Mortgage Trends',
        'Client Relationship Management',
        'Application Status Tracking'
      ],
      delay: 100,
    },
    {
      title: 'Accounting and Bookkeeping',
      title1: 'Rs13000 in 11 Days',
      alt: 'Basic OP plans details',
      url: '/images/serviceCard2.png',
      list: [
        'Financial Record Management',
        'Financial Reporting',
        'Account Reconciliation',
        'Audit Assistance',
        'Budget Preparation',
        'Payroll Processing',
        'Expense Tracking',
        'Tax Preparation and Filing'
      ],
      delay: 200,
    },
    {
      title: 'Administrative Support',
      title1: 'Rs130000 per month',
      alt: 'Description of Service 2',
      url: '/images/serviceCard3.png',
      list: [
        'Scheduling & Calendar Management',
        'Email Management',
        'Virtual Assistant Services',
        'Document Handling & Coordination',
        'Travel Arrangements',
        'Data Entry and Management',
        'Meeting and Event Planning',
        'CRM and Database Updates'
      ],
      delay: 300,
    },
    {
      title: 'Digital Marketing',
      title1: 'Rs1000000 per month',
      alt: 'Description of Service 2',
      url: '/images/serviceCard4.png',
      list: [
        'Social Media Management',
        'Content Creation',
        'SEO Optimization',
        'Email Marketing Campaigns',
        'Pay-Per-Click Advertising',
        'Analytics and Performance Tracking',
        'Influencer Collaboration',
        'Website Traffic Growth Strategies'
      ],
      delay: 0,
    },
    {
      title: 'Web Development and Maintenance',
      title1: 'Price Mention Below',
      alt: 'Description of Service 2',
      url: '/images/serviceCard5.png',
      list: [
        'Custom Web Development',
        'E-commerce Solutions',
        'Website Maintenance & Updates',
        'Performance Optimization',
        'Cross-Browser Testing',
        'Mobile Responsiveness Enhancements',
        'Website Security Implementation',
        'Content Management System Support'
      ],
      delay: 0,
    },
    {
      title: 'IT Support and Marketing Assistance',
      title1: 'Rs100000 per month',
      alt: 'Description of Service 2',
      url: '/images/serviceCard6.png',
      list: [
        'Technical Support & Software Maintenance',
        'Business Consultant',
        'Marketing Strategy Development',
        'Campaign Performance Analysis',
        'IT Infrastructure Troubleshooting',
        'Cloud Service Management',
        'Digital Asset Optimization',
        'Training and Onboarding for IT Tools'
      ],
      delay: 0,
    }
    
  ];

  return (
    <div className="mt-[60px] flex py-12 flex-col px-[5%] ">
      <h1 className="w-full pb-12 text-p3 text-center text-[48px] font-semibold leading-[56px] tracking-[-0.02em];">
        Our <span className="text-primary">Services</span>
      </h1>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 ">
        {services.map((service) => (
          <div
            data-aos-duration="700"
            data-aos="fade-up"
            data-aos-delay={service.delay}
            className="flex flex-col overflow-hidden shadow-xl rounded-3xl group "
            key={service.title}
          >
            <div className="w-full overflow-hidden group">
              <img
                src={service.url}
                alt={service.alt}
                className="flex w-full duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="flex justify-center w-full py-4 mt-4 text-xl font-semibold font-poppins text-yellow-700 px-[7.5%] text-center">
              {service.title}
            </h3>
            <ul className="text-base font-manrope px-[7.5%] text-center divide-y pb-8">
              {service.list.map((item) => (
                <li
                  className="py-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-yellow-200"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex justify-center pb-8">
              <button className="bg-blue-900 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-500 ease-in-out transform hover:bg-blue-600 hover:-translate-y-1 hover:scale-110 hover:shadow-xl">
              Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default services;
