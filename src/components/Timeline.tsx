import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Manager, Analytics & Insights</h3>
            <h4 className="vertical-timeline-element-subtitle">TD Bank, Toronto, ON</h4>
            <p>
              Leading enterprise reporting and analytics initiatives, building KPI frameworks,
              modernizing self-serve BI solutions, and enabling
              technology teams with decision-ready dashboards and governance insights.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Manager, AI & Data</h3>
            <h4 className="vertical-timeline-element-subtitle">EY, Toronto, ON</h4>
            <p>
              Led large-scale analytics, BI modernization, and data migration programs,
              partnering with business and technical stakeholders to deliver dashboard ecosystems,
              cloud data solutions, and strategic data products.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Consultant & BI Lead, AI & Data</h3>
            <h4 className="vertical-timeline-element-subtitle">EY, Toronto, ON</h4>
            <p>
              Delivered BI, dashboarding, and enterprise data solutions across multiple client
              engagements, including KPI design, stakeholder reporting, data modeling, and
              analytics automation using Power BI, SQL, Snowflake, and cloud platforms.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;