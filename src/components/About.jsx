import React from "react";
import './assets/style/About.scss'
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { TypeAnimation } from 'react-type-animation';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function About() {
  return (
    <div className="items_wrapper">
      <h1>About Me</h1>
      <div className="about-page">
        <div className="align-items-center">
          <p>
            
I am a 2024 Graduate from at the Birla Institute of Technology and Science Pilani.I have gained practical experience as an intern in various companies as well as freelancing projects. Furthermore, I hold several certifications in the related field, showcasing my commitment to continuous learning and skill development.
          </p>
          <TypeAnimation
            sequence={[
    "If I am not coding, you can find me: listening to music",
    1000,
    "If I am not coding, you can find me: watching cinema",
    1000,
    "If I am not coding, you can find me: sketching",
    1000,
    "If I am not coding, you can find me: writing",
    1000,
    "If I am not coding, you can find me: playing football",
    1000,
            ]}
            wrapper="p"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
        <h2>Career Timeline</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2024 - present"
            iconStyle={{ background: 'rgb(249, 38, 114)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Mosdorfer</h3>
            <h4 className="vertical-timeline-element-subtitle">Nasik</h4>
            <p>
              Python Developer, Automation
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=" July 2023 - Dec 2023"
            iconStyle={{ background: 'rgb(249, 38, 114)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">CODSOFT</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
            Machine learning Intern
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2024 - Oct 2024"
            iconStyle={{ background: 'rgb(249, 38, 114)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Ultratech</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
            Analytics intern
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default About;