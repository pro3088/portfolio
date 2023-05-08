import React from 'react'
import './project.css'

import {Card, Title} from '../../components/index'
import {SmartGlasses,SmartPark, Manager} from './import'

const Project = () => {
  return (
    <div className='portf__project' id='Project'>
      <Title title='projects' />
      <div className='portf__project-container'>
          <Card title='smart car parking system' stack='Godot, C++, Arduino' img={SmartPark} sitelink='test' readlink='test' siteplaceholder='Github Link' />
          <Card title='smart glasses for blind people' stack='Python, Artificial Intelligence, Raspberry Pi' img={SmartGlasses} sitelink='test' readlink='test' siteplaceholder='Github Link' />
      </div>
    </div>
  )
}

export default Project
