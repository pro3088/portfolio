import React from 'react'
import './project.css'

import {Card, Title} from '../../components/index'
// import {SmartGlasses,SmartPark, Manager} from './import'

const Project = () => {
  return (
    <div className='portf__project' id='Project'>
      <Title title='projects' />
      <div className='portf__project-container'>
        <Card title='cooperative thrift association application' stack='Java, Maven, JavaFx, JDBC' link="https://github.com/pro3088/Cooperative-Thrift-Association-Application-using-JavaFx" description="The Cooperative Thrift Association Application project developed a mobile app for financial transactions. Users could deposit money, send funds to others, and purchase and upgrade their membership for additional benefits. The project aimed to provide a convenient platform for cooperative thrift associations, streamlining transactions and membership management." />
        <Card title='Monolithic Youtube Backend Study' stack='Java, REST API, Monolithic, Maven' link="https://github.com/pro3088/Youtube-clone-backend" description="The Monolithic YouTube Backend Study project involved creating REST APIs using Java and Maven. The focus was on configuring video upload and download functionalities on a local server. The project aimed to gain practical experience in building backend systems and understanding the workflow of REST APIs." />
        <Card title='multithreaded java-to-java and java-python TCP connection' stack='Java, Python, TCP/UDP Connection' link="https://github.com/pro3088/Multithreaded-Java_and_python-TCP-Connection" description="The Java to Java and Java to Python TCP project focuses on establishing a server-client communication system. It involves a Java server that handles connections from both Java and Python clients as separate threads. TCP ensures reliable data transmission, allowing seamless interaction between different platforms and programming languages." />
        <Card title='smart glasses for blind people' stack='Python, Artificial Intelligence, Raspberry Pi' link="https://github.com/pro3088/Smart-glass-for-blind-people-using-raspberry-pi" description="The Smart Glasses for Blind People project is an AI-based senior design thesis that aids visually impaired individuals in navigating their environment. It combines a custom-trained object detection model with depth estimation using triangulation. The smart glasses recognize objects and provide depth cues in real-time, enhancing independence and safety for the visually impaired." />
        <Card title='smart car parking system' stack='Godot, C++, Arduino' link="https://github.com/pro3088/Smart-car-park-system-using-Arduino-and-Godot" description="The Smart Car Parking System is a project that involved building an app and a prototype smart car park. The app tracks available parking spots in real-time, while the smart car park utilizes sensors to detect vehicle occupancy. It improves parking efficiency and provides convenience to drivers and parking lot operators." />
      </div>
    </div>
  )
}

export default Project
