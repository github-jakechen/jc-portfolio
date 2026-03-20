import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';
import Chip from '@mui/material/Chip';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Marketplace / Product Analytics</h2></a>
                <div className="flex-chips">
                    <Chip label="A/B Testing" className="chip" />
                    <Chip label="Product Analytics" className="chip" />
                    <Chip label="GenAI" className="chip" />
                    <Chip label="Python" className="chip" />
                </div>
                <p>Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.</p>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>Self-Serve Analytics Dashboard</h2></a>
                <div className="flex-chips">
                    <Chip label="Power BI" className="chip" />
                    <Chip label="SQL" className="chip" />
                    <Chip label="Python" className="chip" />
                    <Chip label="Data Modelling" className="chip" />
                </div>
                <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>End-to-End Analytics Thinking: From Problem to Insight</h2></a>
                <div className="flex-chips">
                    <Chip label="Power BI" className="chip" />
                    <Chip label="SQL" className="chip" />
                    <Chip label="Python" className="chip" />
                    <Chip label="Data Modelling" className="chip" />
                </div>
                <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>How I Approach A/B Testing & Experimentation</h2></a>
                <div className="flex-chips">
                    <Chip label="Power BI" className="chip" />
                    <Chip label="SQL" className="chip" />
                    <Chip label="Python" className="chip" />
                    <Chip label="Data Modelling" className="chip" />
                </div>
                <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>AI Use Case</h2></a>
                <div className="flex-chips">
                    <Chip label="GenAI" className="chip" />
                    <Chip label="Gemini" className="chip" />
                    <Chip label="Claude" className="chip" />
                </div>
                <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
        </div>
    </div>
    );
}

export default Project;