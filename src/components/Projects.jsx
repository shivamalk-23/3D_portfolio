/* eslint-disable no-unused-vars */

import { Box, Stack } from '@mui/material'
import { useState } from 'react'
const Projects = () => {
    const [proj, setproj] = useState('')
    return (
        <Stack
        direction="row"
        className="projects"
        sx={{

        }}
      >
        {[
          { id: 'proj1', title: 'Resume Builder', img: '/pic3.png',para:'Resume Builder is a React-based app built with React-PDF and MUI to create professional, ATS-friendly resumes. It offers a sleek interface for easy customization and allows users to download their resumes instantly. This project highlights my skills in building efficient, modern web applications with a seamless user experience.',code:'https://github.com/shivamalk-23/ResumeBuilder',live:'https://resume-builder-chi-jet.vercel.app/' },
          { id: 'proj2', title: 'YouTube Clone', img: '/pic2.png',para:'YouTube Clone is a React-based video streaming app built with MUI, React Router, and React Player. It offers a sleek, responsive UI, seamless navigation, and smooth video playback. This project showcases my ability to create modern, interactive web applications with dynamic content and an intuitive user experience.',code:'https://github.com/shivamalk-23/YoutubeClone',live:'https://youtube-clone-liard-phi.vercel.app/' },
          { id: 'proj3', title: 'Chill Time', img: '/pic1.png',para:'Movie Rating App is a React-based platform built with MUI and React Router for discovering and rating movies. It features a sleek UI, seamless navigation, and an interactive rating system. This project highlights my ability to build dynamic, user-friendly web applications with a smooth and engaging experience',code:'https://github.com/shivamalk-23/movieapp',live:'https://movieapp-jade-eight.vercel.app/' },
        ].map((project) => (
          <Box
            key={project.id}
            onClick={() => {
                if(project.id!==proj)
                {setproj(project.id)}
                else{
                    setproj('')
                }
            }}
           className='boxes'
          >
            <h2>{project.title}</h2>
            <a href="">
              <img 


                src={project.img}
                className="images"
                alt={project.title}
                style={{
                  width: '100%',
                
                  height: 'auto',
                  maxHeight:'80vh',
                  padding:'5px',
                  backgroundColor:'white',
                  borderRadius: '5px',
                }}
              />
            </a>
      
            <Box sx={{ display: proj === project.id ? 'block' : 'none', width:{xs:'40vw',md:'30vw',lg:'30vw'} }} >
              <p style={{ fontSize: '0.9rem', marginTop: '10px',}}>
               {}
               </p>
            </Box>
      
            <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: {xs:'0.3rem', lg:'1rem'} }}>
              <a href="" className="button" style={{ textDecoration: 'none', backgroundColor: 'black', color: 'white', padding: '0.5rem 2rem', borderRadius: '5px', fontSize: '0.9rem' }}>Code</a>
              <a href="" className="button" style={{ textDecoration: 'none', border: 'solid black 2px', color: 'black', padding: '0.5rem 1rem', borderRadius: '5px', fontSize: '0.9rem' }}>Live Link</a>
            </Box>
          </Box>
        ))}
      </Stack>
      
      
    )
}

export default Projects
