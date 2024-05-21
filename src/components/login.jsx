import { Box, Button, Card, Checkbox, FormControl, FormLabel, HStack,Text, Heading, Input, VStack, CardHeader } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (  
    <>
    <Heading fontSize='4rem' color='blue.600'>CourseConnect</Heading>
    <Box
        w={['full','md']}
        p={[8,10]}
        mt={[20,'10vh']}
        mx='auto'
        border={['1px','1px']}
        borderColor={['gray.300','gray.300']}
        borderRadius={10}
    >
        

        <VStack spacing={4} align='flex-start' w='full'>
            <VStack spacing={2} align={['flex-start','center']} w='full'>
                <Heading>
                    Login
                </Heading>
                
                <Text>Enter your Email and Password </Text>
            </VStack>

            <FormControl>
                <FormLabel>Email Address</FormLabel>
                <Input rounded='none' variant='filled' type='email'/>
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input rounded='none' variant='filled' type='password'/>
            </FormControl>
            <HStack w='full' justify='space-between'>
                <Checkbox>Remember Me</Checkbox>
                <Button variant='link' colorScheme='blue'>
                    Forgot Password?
                </Button>
            </HStack>
            <Button colorScheme='blue' w={['full','auto']} alignSelf='center'>Login</Button>
        </VStack>
    </Box>
    </>
    
  )
}

export default Login