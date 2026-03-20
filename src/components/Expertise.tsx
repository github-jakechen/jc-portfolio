import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faDatabase, faHexagonNodes } from '@fortawesome/free-solid-svg-icons';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';

import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "SQL",
    "Python",
    "Spark",
    "Power BI",
    "Tableau",
    "Looker",
    "Dashboard Design",
    "Data Modeling",
    "KPI Development",
    "Data Visualization"
];

const labelsSecond = [
    "Snowflake",
    "Databricks",
    "Microsoft Fabric",
    "BigQuery",
    "ETL / ELT",
    "Data Pipelines",
    "Dimensional Modelling",
    "Data Warehousing",
    "Data Lake",
];

const labelsThird = [
    "ChatGPT",
    "Copilot",
    "A/B Testing",
    "Conversion Analysis",
    "Funnel Analytics",
    "Statistical Analysis",
    "Experiment Design",
    "Marketing Attribution"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faChartSimple} size="3x"/>
                    <h3>BI & Data Product Development</h3>
                    <p>I design and build decision-ready dashboards and analytics products that translate complex data into actionable business insights. My work focuses on KPI design, data modeling, and scalable BI solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Data Engineering & Automation</h3>
                    <p>I build and optimize data pipelines and data models to ensure reliable, scalable, and efficient data workflows. I work with modern data stacks to transform raw data into structured, analysis-ready datasets.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faHexagonNodes} size="3x"/>
                    <h3>AI & Decision Science</h3>
                    <p>I apply statistical thinking and experimentation frameworks such as A/B testing and funnel analysis to measure performance, identify growth opportunities, and support data-driven business decisions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;