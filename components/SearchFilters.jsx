import React, { useState, useEffect } from 'react'
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MdCancel } from 'react-icons/md'
import Image from 'next/image'
import { filterData, getFilterValues } from '../utils/filterData'

const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData)
    const router = useRouter()

    const serachProperties = (filterValues) => {
        const path = router.pathname
        const { query } = router

        const values = getFilterValues(filterValues)
        console.log(values, path, query)

        values.forEach((item) => {
            if (item.value && filterValues?.[item.name])
            query[item.name] = item.value
        })
        router.push({ pathName: path, query })
    }
  return (
    <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
        {filters.map((filter, idx) => (
            <Box key={idx}>
                <Select 
                    placeholder={filter.placeholder}
                    w='fit-content'
                    p='2'
                    onChange={(e) => serachProperties({ [filter.queryName]: e.target.value })}
                >
                    {filter?.items?.map((item) => (
                        <option
                            value={item.value} key={item.value}
                        >
                            {item.name}
                        </option>
                    ))}
                </Select>
            </Box>
        ))}
    </Flex>
  )
}

export default SearchFilters