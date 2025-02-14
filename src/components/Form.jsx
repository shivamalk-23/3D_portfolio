
import { Box,TextField,Button } from '@mui/material'
const Form = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <h2 style={{ fontWeight: '600', textAlign: 'center', marginBottom: '5px' }}>Get in touch with me</h2>
                    <form style={{ display: 'flex', flexDirection: 'column' }}>
                      <TextField sx={{ mb: 1, marginTop: 0.2, mx: 2, }} id="filled-basic" label="Name" variant="filled" />
                      <TextField sx={{ m: 2 }} id="filled-basic" label="Email" variant="filled" />
                      <TextField sx={{ height: '3rem', margin: 1, color: 'black' }} id="standard-multiline-flexible"
                        label="Message"
                        multiline
                        maxRows={14}
                        variant="standard" />
                    </form>
                    <Button sx={{ m: 2, backgroundColor: 'black', color: 'white', alignSelf: 'end' }} onClick={() => setsubmit(prev => !prev)} variant='contained'>Submit</Button>
                  </Box>
  )
}

export default Form
