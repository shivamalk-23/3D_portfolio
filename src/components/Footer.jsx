import github from '/github.svg'
import gmail from '/gmail.svg'
import linkedin from '/linkedin.svg'
import { useState } from 'react'
import { Box,TextField,Typography,Button } from '@mui/material'
const Footer = () => {
    const [submit, setsubmit] = useState(true)
  return (
    <Box sx={{ display: 'flex', marginTop: '10vh', height: '100vh', justifyContent: 'space-around' }} className='contactme'>



            <Box sx={{ height: { xs: '50vh', lg: '100%' }, border: 'solid black 2px', alignSelf: 'flex-end', borderRadius: '5px', padding: '2rem 2rem', margin: '0rem 2rem', backgroundColor: 'white', }}>
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


            <Box sx={{ width: "30vw", paddingRight: 4 }}>
              <Box sx={{ display: form ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center', borderRadius: '5px', overflowY: 'auto', width: '30vw', height: '50vh', padding: '2rem 4rem', alignSelf: 'start', border: 'solid black 2px', backgroundColor: 'white', }}>

                {submit ?
                  (<Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <h2 style={{ fontWeight: '400', textAlign: 'center', marginBottom: '5px' }}>Get in touch with me</h2>
                    <form style={{ display: 'flex', flexDirection: 'column' }}>
                      <TextField sx={{ mb: 1, marginTop: 0.2, mx: 2 }} id="filled-basic" label="Name" variant="filled" />
                      <TextField sx={{ m: 2 }} id="filled-basic" label="Email" variant="filled" />
                      <TextField sx={{ height: '3rem', margin: 1, color: 'black' }} id="standard-multiline-flexible"
                        label="Message"
                        multiline
                        maxRows={14}
                        variant="standard" />
                    </form>
                    <Button sx={{ m: 2, backgroundColor: 'black', color: 'white', alignSelf: 'end' }} onClick={() => setsubmit(prev => !prev)} variant='contained'>Submit</Button>
                  </Box>) : (<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                    <h2 style={{ fontWeight: '400' }}>Thanks, I Will get in contack with you!</h2>
                    <Button sx={{ backgroundColor: 'black', color: 'white', m: 3 }} onClick={() => setsubmit(prev => !prev)} variant='contained'>Submit Another one</Button>
                  </Box>)}
              </Box>
            </Box>
          </Box>
  )
}

export default Footer
