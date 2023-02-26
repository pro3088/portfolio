import React from 'react'
import './experience.css'

import {Title,Exp} from '../../components/index'

const Experience = () => {
  return (
    <div className='portf__experience' id='Experience'>
      <Title title='experience' />
      <div className='portf__experience-container'>
        <Exp date='Oct 2022 - Present' title='Junior Java Engineer' company='Hardcore Biometric System' description='Take part in the scheduled development meeting to recommend relevant system modifications and project improvements.Design and implement new services/features ready for large-scale deployment' />
        <Exp date='2022' title='IOT Engineer (Contract)' company='Student Client' description='Built an app that connects to the Node-MCU server and collects data on the amount of parking lots available, allowing easy access for users.' />
        <Exp date='Sep 2021 - Feb 2022' title='Junior Java Engineer' company='Cimspace Technology Services' description='Collaborated closely with Lead developer to design and implement backend application using Java, four micro-services were set up and connected with an edureka server to provide API’s for the frontend team' />
        <Exp date='Mar 2021 - Oct 2021' title='Java Intern' company='Hardcore Biometric System' description='Shadowed experienced software engineer’s for first 4 months to learn the workflow and development processes.Worked with team of fellow interns to produce smaller apps to further development expertise.' />
      </div>
    </div>
  )
}

export default Experience
