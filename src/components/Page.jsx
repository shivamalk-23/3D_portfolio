import { useScroll, Scroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Page = () => {

  const scroll = useScroll()
  console.log(scroll.curve)
  useFrame(() => {

  })
  return (
    <Scroll html>
      <div id='screen'>
   
       <section className='hero'>
          <h1 className='title'>Hello,</h1>
          <h1>Iam Shivamalk.K</h1>
       </section>

       <section>
           
       </section>
      
       </div>
    </Scroll>

  )
}

export default Page
