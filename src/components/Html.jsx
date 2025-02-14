import { useScroll, Scroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Box, Button, Typography, } from '@mui/material'
import { useState, useImperativeHandle, forwardRef } from 'react'
import github from '/github.svg'
import gmail from '/gmail.svg'
import linkedin from '/linkedin.svg'
import Projects from './Projects'
import Form from './Form'





// eslint-disable-next-line react/display-name
const Html = forwardRef((props, ref) => {

    const scroll = useScroll()
    const [form, setform] = useState(false)
    const [submit, setsubmit] = useState(true)
    const [box, setBox] = useState({


        aboutOpacity: 0,
        projectOpacity: 0,

    })


    

    useImperativeHandle(ref, () => ({
        // eslint-disable-next-line no-unused-labels
        display: () => {
            setform(prev => !prev)
            console.log(form)
        }
    }))
    function handle(){
        scroll.offset+=0.1
    }


    useFrame(() => {

        setBox(prev => {
            return { ...prev, aboutOpacity: scroll.offset * 7, projectOpacity: scroll.offset * 1.9 }
        })
        console.log(scroll.offset)
      


    })
    return (
        <Scroll html onClick={handle}>
            <div  id='info' >
                <p>Sorry Not Available on Mobile Devices : ( </p>
            </div>
            <div id='screen'>

                <Box className='hero' sx={{ height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: { xs: '3rem', lg: '10rem' }, px: { xs: '2rem', lg: '10rem' } }}>
                    <Typography variant='h1' sx={{ fontSize: { xs: '100px', md: '140px' }, color: 'white', fontWeight: 800 }}>Hello,</Typography>
                    <Typography variant='h1' sx={{ fontSize: { xs: '40px', md: '80px' }, color: 'black', fontWeight: 800 }}>Iam Shivamalk.K</Typography>

                </Box>

                <Box sx={{ display: 'flex', py: { xs: '1rem', lg: '5rem' }, marginBottom: '50vh', opacity: box.aboutOpacity, flexDirection: 'column', backgroundColor: 'white', border: 'black solid 2px', px: { xs: '2rem', lg: '5rem' }, borderRadius: '5px', margin: { xs: '4rem', lg: '10rem' } }} >
                    <Typography variant='h1' sx={{ alignSelf: 'center', fontSize: { xs: '20px', md: '50px' }, fontWeight: 800 }}>About Me</Typography>
                    <Typography sx={{ fontSize: { xs: '12px', md: '20px' }, marginTop: { xs: '0.7rem', lg: '2rem' } }}>
                        I am a passionate and adaptable individual who thrives on challenging endeavors
                        and creative problem-solving. My primary goal is to become an exceptional web
                        developer, continuously improving my skills to stay at the forefront of the industry.
                        I enjoy tackling complex projects, learning new technologies, and refining my craft
                        to build innovative and efficient web solutions. With a strong focus on growth and
                        adaptability, I am always eager to take on new challenges that push my boundaries.
                        My ultimate mission is to master web development and create impactful digital
                        experiences that make a difference.
                    </Typography>


                </Box>

                <Box sx={{ padding: '4rem  0', opacity: box.projectOpacity, }}>
                    <Typography sx={{ textAlign: 'center', fontSize: { xs: '30px', lg: '50px' }, fontWeight: 800 }}>My Projects</Typography>
                    <Projects />

                </Box>

                <Box className='footer' sx={{ display:'flex',justifyContent:'start',marginTop:'60vh' }}>

                    <Box className='contacts' sx={{ display: form ? 'none' : 'block', m: 3 }} >
                        <Typography vartiant='h1' sx={{ fontSize: '30px', fontWeight: '800', textAlign: 'center' }}>My Contacts</Typography>
                        <div>
                            <ul style={{ textDecoration: 'none', listStyle: 'none' }}>
                                <li><img src={gmail} alt="" /><a href="">k.shivamalk.22@gmail.com</a></li>
                                <li><img src={linkedin} alt="" /><a href="https://www.linkedin.com/in/shiva-malk-912325290/">Shiva Malk</a></li>
                                <li><img src={github} alt="" /><a href="https://github.com/shivamalk-23">shivamalk-23</a></li>
                            </ul>

                        </div>

                        <p className='lasttext'>(click on the board to submit a feedback)</p>
                    </Box>

                    <Box className='contacts' sx={{ overflowY: 'auto', ml: 3, mb: 3, display: form ? 'flex' : 'none', justifyContent: 'start', alignItems: 'end', borderRadius: '5px', height: '80%', padding: { xs: '0.5rem 2rem', lg: '2rem 4rem' }, alignSelf: 'start', border: 'solid black 2px', backgroundColor: 'white', }}>

                        {submit ?
                            (
                                <Form submit={submit} setsubmit={setsubmit}/>
                            ) : (<Box sx={{ display:submit? 'none':'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',padding:'4rem 0' }}>

                                <h2 style={{ fontWeight: '400' }}>Thanks, I Will get in contack with you!</h2>
                                <Button sx={{ backgroundColor: 'black', color: 'white', m: 3 }} onClick={() => setsubmit(prev => !prev)} variant='contained'>Submit Another one</Button>
                            </Box>)}
                    </Box>


                </Box>



            </div>


        </Scroll>
    )
})

export default Html
