import React from 'react';
import './styles.scss';
import { IoIosArrowDown } from "react-icons/io";
import { HStack, Icon, VStack } from '@chakra-ui/react';

interface Props {
    name: string;
    amount: string;
}

const StatCard: React.FunctionComponent<Props> = ({ name, amount }) => {

    return (
        <div className='stat-card'>
            <VStack alignItems="start" justifyContent={'space-between'} >
                <p className='name-text'>{name}</p>
                <p className='amount'>{amount}</p>
            </VStack>
        </div>
    )
}

export default StatCard;