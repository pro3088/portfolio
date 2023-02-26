import React from 'react'
import './project.css'

import {Card, Title} from '../../components/index'
import {SmartGlasses,SmartPark, Manager} from './import'

const Project = () => {
  return (
    <div className='portf__project' id='Project'>
      <Title title='project' />
      <div className='portf__project-container'>
        <div className='portf__project-container_lastest'>
          <h2>my lastest project that lives in the net</h2>
          <Card title='Football Manager game' type='Mobile game' img={Manager} progress='Active' />
        </div>
        <div className='portf__project-container_others'>
          <div className='portf__project-container_others-cards'>
            <Card title='smart car parking system' type='Map.Mobile App' img={SmartPark} progress='Completed'/>
            <Card title='smart glasses for blind people' type='Artificial Intelligence' img={SmartGlasses}  progress='Completed'/>
          </div>
          <button type='button'>View More</button>
        </div>
      </div>
    </div>
  )
}

export default Project
