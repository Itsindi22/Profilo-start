import { VerticalTimeline, VerticalTimelineElement }  from 
'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import { skills, experiences } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Inderpreet
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Full stack developer based in Indiana, specializing in technical
          education through hands-on learning and building applications.
        </p>
      </div>

      {/* Skills Section */}
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown.
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              icon={<div>
                <img 
              src={experience.icon}
              alt={experience.company_name}
              className= "[60%] h- [60%] object-contain"
                />
                </div>
                }
              >
                
                <div>
                  <h3 className="text-black text-x1 font-poopins
                  font-semibold">
                    {experience.title}
                    </h3>
                    <p className="text-black-500 font-medium font-base " style= {{margin:0}}>
                      {experience.company_name}
                    </p>
                </div>
                <ul className="my-5 list-disc space-y-2"> 
                  {experience.points.map((point,index) => (
                    <li key = {`experience- ${index}`} 
                    className= "text-black-500/50 font-normal pl -1 text-sm">
                      {point}
                    </li>
                  ))}
                   </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default About;
