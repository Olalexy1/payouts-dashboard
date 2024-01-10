import React from 'react';
import './styles.scss';
import { HStack, VStack } from '@chakra-ui/react';
import wallet from '../../assets/wallet.svg';

interface Props {
    credits: string;
}

const CreditCard: React.FunctionComponent<Props> = ({ credits }) => {

    return (
        <div className='credit-card'>
            <HStack>
                <div className="wallet-wrapper">
                    <img src={wallet} alt="Wallet" className='wallet' />
                </div>

                <VStack alignItems="start" marginLeft={2} spacing={0.85}>
                    <h1 className='available-credit'>Available credits</h1>
                    <p className='credits'>{credits}</p>
                </VStack>
            </HStack>

        </div>
    )
}

export default CreditCard;