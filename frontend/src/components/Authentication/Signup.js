import {Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Show, VStack} from '@chakra-ui/react'
import React, {useState} from 'react'

const Signup = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();

    const handleClick = () => setShow(!show);

    return (
        <VStack spacing='5px' color='black'>
            <FormControl id='first-name' isRequired="isRequired">
                <FormLabel>Name</FormLabel>
                <Input placeholder='Enter your Name' onChange={(e) => setName(e.target.value)}/>
            </FormControl>

            <FormControl id='email' isRequired="isRequired">
                <FormLabel>Email</FormLabel>
                <Input placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)}/>
            </FormControl>

            <FormControl id='password' isRequired="isRequired">
                <FormLabel>Password</FormLabel>
                <InputGroup>
                <Input
                    type={show?'text':'password'}
                    placeholder='Enter your Password'
                    onChange={(e) => setPassword(e.target.value)} 
                    
                    />
                    <InputRightElement width="4.5rem">
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>

                    </InputGroup>
            </FormControl>

            <FormControl id='password' isRequired="isRequired">
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                <Input
                    type={show?'text':'password'}
                    placeholder='Confirm Password'
                    onChange={(e) => setPassword(e.target.value)} 
                    
                    />
                    <InputRightElement width="4.5rem">
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>

                    </InputGroup>
            </FormControl>

        </VStack>
    )
}

export default Signup
