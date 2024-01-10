import React from 'react';
import './styles.scss'
import { HStack, Icon, Input, InputGroup, InputLeftElement, VStack, useMediaQuery } from '@chakra-ui/react';
import { IoCaretDownOutline } from "react-icons/io5";
import notifications from "../../assets/Group.svg";
import { FiSearch } from "react-icons/fi";
import { GoQuestion } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import StatCard from '../../components/statCard';
import DataTable from '../../components/table';

const Payments = () => {
    const [isMobile] = useMediaQuery("(max-width: 900px)");

    return (
        <div className='payment-page' style={isMobile ? { paddingTop: '70px' } : { paddingTop: '0px' }}>
            <div className='header'>
                <HStack alignItems={'center'}>
                    <h2 className='payment-text'>Payments</h2>
                    <HStack alignItems={'center'} marginLeft={'16px'} spacing={1}>
                        <Icon as={GoQuestion} boxSize='14px' color={'#4D4D4D'} cursor='pointer' />
                        <p className='how-text'>
                            How it works
                        </p>
                    </HStack>
                </HStack>

                {!isMobile && (
                    <HStack>
                        <InputGroup className='form-wrapper'>
                            <Input
                                className="form-input"
                                type={'text'}
                                name="search"
                                placeholder='Search features, tutorials, etc.'
                            />
                            <InputLeftElement cursor={'pointer'}>
                                <Icon as={FiSearch} boxSize='16px' color={'#808080'} />
                            </InputLeftElement>
                        </InputGroup>
                    </HStack>
                )}

                <HStack alignItems={'center'}>
                    <div className='header-icon-wrapper'>
                        <img src={notifications} alt="Notification" className='notification' />
                    </div>

                    <div className='header-icon-wrapper'>
                        <Icon as={IoCaretDownOutline} boxSize='20px' color={'#4d4d4d'} />
                    </div>
                </HStack>
            </div>

            <div className='payment-container'>
                <HStack justifyContent={'space-between'} width={"100%"} mb={"24px"}>
                    <h2 className='overview'>Overview</h2>

                    <HStack className='month-button' alignItems={'center'}>
                        <p>Last Month</p>
                        <Icon as={IoIosArrowDown} boxSize='20px' color={'#4D4D4D'} cursor='pointer' marginLeft={'7px'} />
                    </HStack>
                </HStack>

                <HStack className='stat-card-container'>
                    <StatCard name={'online'} amount={'231'} />
                    <StatCard name={'Amount received'} amount={'₹23,92,312.19'} />
                </HStack>

                <h2 className='overview' style={{ paddingBottom: '20px' }}>Transactions | This Month</h2>

                <VStack className='table-container'>
                    <DataTable />
                </VStack>

            </div>



        </div>
    )
}

export default Payments;