import React, { useRef, useState } from 'react';
import type { InputRef, PaginationProps } from 'antd';
import { Input, Pagination, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import './styles.scss';
import { HStack, Icon, InputGroup, InputLeftElement, VStack } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FiSearch, FiDownload } from 'react-icons/fi';
import { BiSortAlt2 } from "react-icons/bi";
import { CiCircleInfo } from "react-icons/ci";
import { IoCaretDownOutline } from "react-icons/io5";


interface DataType {
    key: React.Key;
    orderId: string;
    orderDate: string;
    orderAmount: string;
    transactionFees: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [];
for (let i = 0; i < 180; i++) {
    data.push({
        key: i,
        orderId: '281209',
        orderDate: '7 July, 2023',
        orderAmount: '₹1,278.23',
        transactionFees: '₹22'
    });
}

const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    if (type === 'prev') {
        return (
            <HStack className='pagination-buttons-custom'>
                <Icon as={FaChevronLeft} boxSize='16px' color={'#4D4D4D'} />
                <p>Previous</p>
            </HStack>
        );
    }
    if (type === 'next') {
        return (
            <HStack className='pagination-buttons-custom'>
                <p>Next</p>
                <Icon as={FaChevronRight} boxSize='16px' color={'#4D4D4D'} />
            </HStack>
        );
    }
    return originalElement;
};

const DataTable: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const tableData = data?.slice(startIndex, endIndex);

    const handlePageChange = (
        page: React.SetStateAction<number>,
        pageSize: React.SetStateAction<number>
    ) => {
        setCurrentPage(page);
        setPageSize(pageSize);
    };

    const columns: ColumnsType<DataType> = [
        {
            title: (
                <p style={{ fontWeight: '600', fontSize: '14px', color: '#4d4d4d', fontFamily: 'Inter' }}>
                    Order ID
                </p>
            ),
            dataIndex: 'orderId',
            key: 'orderId',
            width: '25%',
            render: (text) => (
                <p style={{ fontWeight: '500', fontSize: '14px', color: '#146EB4', fontFamily: 'Inter', textAlign: 'left' }} >
                    {text}
                </p>
            ),
        },
        {
            title: (
                <HStack spacing={1}>
                    <p style={{ fontWeight: '600', fontSize: '14px', color: '#4d4d4d', fontFamily: 'Inter' }}>
                        Order Date
                    </p>
                    <Icon as={IoCaretDownOutline} boxSize='10px' color={'#4d4d4d'} />
                </HStack>

            ),
            dataIndex: 'orderDate',
            key: 'orderDate',
            width: '25%',
            render: (text) => (
                <p style={{ fontWeight: '500', fontSize: '14px', color: '#1a181e', fontFamily: 'Inter', textAlign: 'left' }} >
                    {text}
                </p>
            ),
        },
        {
            title: (
                <p style={{ fontWeight: '600', fontSize: '14px', color: '#4d4d4d', fontFamily: 'Inter', textAlign: 'right' }}>
                    Order Amount
                </p>
            ),
            dataIndex: 'orderAmount',
            key: 'orderAmount',
            width: '25%',
            render: (text) => (
                <p style={{ fontWeight: '500', fontSize: '14px', color: '#1a181e', fontFamily: 'Inter', textAlign: 'right' }} >
                    {text}
                </p>
            ),
        },
        {
            title: (
                <HStack justifyContent={'flex-end'}>
                    <p style={{ fontWeight: '600', fontSize: '14px', color: '#4d4d4d', fontFamily: 'Inter' }}>
                        Transaction fees
                    </p>
                    <Icon as={CiCircleInfo} boxSize='14px' ml={'4px'} color={'#4D4D4D'} />
                </HStack>
            ),
            dataIndex: 'transactionFees',
            key: 'transactionFees',
            width: '25%',
            render: (text) => (
                <p style={{ fontWeight: '500', fontSize: '14px', color: '#1a181e', fontFamily: 'Inter', textAlign: 'right' }} >
                    {text}
                </p>
            ),
        },
    ];

    return (
        <VStack className='table-container'>
            <HStack justifyContent={'space-between'} alignItems={'center'} mb={'10px'} w={'full'}>

                <HStack>
                    <InputGroup className='form-wrapper'>
                        <Input
                            className="form-input"
                            type={'text'}
                            name="search"
                            placeholder='Search by order ID....'
                        />
                        <InputLeftElement cursor={'pointer'} style={{ height: '100%' }}>
                            <Icon as={FiSearch} boxSize='16px' color={'#808080'} />
                        </InputLeftElement>
                    </InputGroup>
                </HStack>



                <HStack spacing={'12px'} style={{ display: 'flex' }}>
                    <HStack className='table-btn' justifyContent={'center'} alignItems={'center'}>
                        <p className='table-btn-text'>Sort</p>
                        <Icon as={BiSortAlt2} boxSize='18px' color={'#808080'} />
                    </HStack>

                    <HStack className='table-btn' justifyContent={'center'} alignItems={'center'}>
                        <Icon as={FiDownload} boxSize='20px' color={'#808080'} />
                    </HStack>
                </HStack>
            </HStack>

            <Table
                columns={columns}
                dataSource={tableData}
                pagination={false}
                style={{ width: '100%' }}
            />

            <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={data.length}
                onChange={handlePageChange}
                className='pagination'
                itemRender={itemRender}
                showSizeChanger={false}
            />

        </VStack>

    );
};

export default DataTable;