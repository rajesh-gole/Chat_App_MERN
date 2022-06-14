import {
    Text,
    Box,
    Container,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    Tabs
} from '@chakra-ui/react';
import React from 'react';
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';

const Homepage = () => {
    return <Container maxW='xl' centerContent="centerContent">
        <Box
            d='flex'
            justifyContent='center'
            p={3}
            bg={'white'}
            w='100%'
            m='40px 0 15px 0'
            borderRadius='lg'
            borderWidth='1px solid red'>
            <Text fontSize='4xl' fontFamily='Work sans' color='black'>My-G-Chat</Text>
        </Box>
        <Box bg='white' width='100%' p={4} borderRadius='lg' borderWidth='1px'>
            <Tabs variant='soft-rounded'>
                <TabList mb='1em'>
                    <Tab width='50%'
                        _selected={{
                            color: 'white',
                            bg: 'blue.500'
                        }}>Login</Tab>
                    <Tab width='50%'
                        _selected={{
                            color: 'white',
                            bg: 'green.400'
                        }}>Sign Up</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Login/>
                    </TabPanel>
                    <TabPanel>
                        <Signup/>
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </Box>
    </Container>
}

export default Homepage
