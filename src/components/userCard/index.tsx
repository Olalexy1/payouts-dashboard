import React from 'react';
import './styles.scss';
import { IoIosArrowDown } from "react-icons/io";
import { HStack, Icon, VStack } from '@chakra-ui/react';

interface Props {
    name: string;
    img: string;
    storeLink?: string;
}

const UserCard: React.FunctionComponent<Props> = ({ name, img }) => {

    return (
        <div className='user-card'>
            <HStack>
                <img src={img} alt="User Card" className='user-img' />
                <VStack alignItems="start" justifyContent={'space-between'} marginLeft={0.5} >
                    <h1 className='user-name'>{name}</h1>
                    <p className='store-link'>Visit store</p>
                </VStack>
            </HStack>

            <Icon as={IoIosArrowDown} boxSize='20px' color={'#fff'} cursor='pointer' />

        </div>
    )
}

export default UserCard;