import React, { useState } from 'react';
import './Tabs.css'

const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'League',
            title: 'Software Engineering intern',
            content: 'I improved a web app using React & TypeScript, with streamlined state management and new functional components resulting in better performance, user satisfaction, and fewer support requests. I also helped automate testing with Jest, reducing testing time and improving bug detection. Overall, user engagement increased by 25%.'
        },
        {
            id: 2,
            tabTitle: 'FarmLink',
            title: 'Software Developer',
            content: 'I developed a contract information extraction service that reduced data entry time by 70%, improved accuracy by 30%, and cut server costs by 40%. I integrated the service into a Vue app, boosting user adoption by 25% and reducing support requests by 15%. Modifying ML algorithms improved yearly revenue predictions by 10%, increasing net revenue by 5% and reducing forecasting errors by 15%.'
        },
        {
            id: 3,
            tabTitle: 'Seismic',
            title: 'Software Engineering Intern',
            content: 'I improved user engagement by 20% and reduced support requests by 15% by engineering new UI features with Angular, React, and TypeScript. By streamlining backend processes with Node.js/Express and MongoDB, I reduced data processing time by 30% and improved system responsiveness by 25%. I also resolved long-term bugs, decreasing reports by 40% and improving customer satisfaction by 50%.'
        },
        {
            id: 4,
            tabTitle: 'Communitech',
            title: 'Web Designer',
            content: 'I boosted web traffic by 30% and increased online sales by 25% for 6 small businesses by designing and implementing fresh web content and developing e-commerce stores.'
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