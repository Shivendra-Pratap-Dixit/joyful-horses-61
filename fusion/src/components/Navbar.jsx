import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Heading} from '@chakra-ui/react'
//import { ArrowRightIcon } from '@chakra-ui/icons'
const Navbar = () => {
    const links=[
        
        {
            path:"/",
            title:"Home"
        },
        {
            path:"/about",
            title:"About"
        },
        {
            path:"/contact",
            title:"Contact"
        },
        {
            path:"/pricing",
            title:"Pricing"
        },
        

    ]
  return (
    <Box display="flex" h="70px" alignItems="center" justifyContent="space-around" bg="transparent" color="White" >
        
        
  <Heading as="h2">fusion</Heading>
  <Link to="/course">Course</Link>
        {links.map((link)=>
        <Link key={link.path} to={link.path} >{link.title}</Link>
        )}
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
        {/* <ArrowRightIcon /> */}
    </Box>
    
  )
}

export default Navbar