// StudentProfile.js
import React from 'react'
import { Card, Image, Stack, CardBody, CardFooter, Heading, Text, Button, HStack } from '@chakra-ui/react'

const Profile = ({ student }) => {
  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        width='60rem'
        border={['1px','1px']}
        borderColor={['gray.300','gray.300']}
        borderRadius={10}
        padding={3}
      >
        {/* <HStack w={['full','md']}> */}
        <Stack>
        <Heading size='lg'>Student Information</Heading>
        <HStack>
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '30%' }}
          src={student.profilePicture}
          alt={`${student.name}'s profile picture`}
          borderRadius={10}
          padding={1}
        />  
        
        <Stack>
          <CardBody >
            <Text py='2'>Name : {student.name}</Text>
            <Text py='2'>Roll Number : {student.roll}</Text>
            <Text py='2'>Degree: {student.degree}</Text>
            <Text py='2'>Class : {student.class}</Text>
            <Text py='2'>Major: {student.major}</Text>
          </CardBody>

          <CardFooter>
            <Button variant='solid' colorScheme='blue'>
              Edit Profile
            </Button>
          </CardFooter>
        </Stack>
        </HStack>
        </Stack>
      </Card>
    </>
  )
}

export default Profile
