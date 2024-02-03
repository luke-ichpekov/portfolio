import React, { useState } from 'react';
import './Tabs.css'

const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Siemens',
            title: 'Software Engineering Associate',
            content: 'Designed and implemented a robust distributed architecture using Docker, Kubernetes, and Kafka to efficiently process and manage billions of daily data points, critical for detecting battery defect formations in EV manufacturing. Engineered a RESTful API in Golang to enable clients to seamlessly utilize data from Apache Druid. Implemented and configured a high-performance Apache Druid database for effective data storage and management. Played a pivotal role in optimizing core functionalities of the project with Golang, including the implementation of critical features such as real-time data processing and seamless handling of large data volumes.'
        },
        {
            id: 2,
            tabTitle: 'League',
            title: 'Software Engineering intern',
            content: 'I improved a web app using React & TypeScript, with streamlined state management and new functional components resulting in better performance, user satisfaction, and fewer support requests. I also helped automate testing with Jest, reducing testing time and improving bug detection.'
        },
        {
            id: 3,
            tabTitle: 'FarmLink',
            title: 'Software Developer',
            content: 'Developed a contract information extraction service, completely eliminating the need for manual data entry and enhancing accuracy. Integrated the service into a Vue app, leading to increased user adoption and a notable decrease in support requests. Modified ML algorithms to improve yearly revenue predictions, resulting in increased net revenue and reduced forecasting errors.'
        },
        {
            id: 4,
            tabTitle: 'Seismic',
            title: 'Software Engineering Intern',
            content: 'Enhanced user engagement and decreased support requests by engineering new UI features with Angular, React, and TypeScript. Streamlined backend processes with Node.js/Express and MongoDB, resulting in improved data processing time and system responsiveness. Resolved long-term bugs, leading to a reduction in support requests and enhanced customer satisfaction.'
        },
        {
            id: 5,
            tabTitle: 'Communitech',
            title: 'Web Designer',
            content: 'Increased web traffic and boosted online sales for six small businesses through the design and implementation of fresh web content and the development of e-commerce stores.'
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
    <section id='Experience' className='section Experience'>
         <h2 className='section__title'>My Work Experience</h2>

        <div className='container'>
            <div className='tabs'>
                {tabs.map((tab) =>
                    <button type='button' key={Math.random()} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                    )}
            </div>
            <div className='content'>
                {tabs.map((tab) =>
                    <div key={Math.random()}>
                        {currentTab === `${tab.id}` && <div><p className='title'>{tab.title}</p><p>{tab.content}</p></div>}
                    </div>
                )}
            </div>
        </div>
    </section>
    );
}

export default Tabs;
