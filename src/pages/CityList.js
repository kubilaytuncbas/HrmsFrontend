import React, { useState, useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import CityService from '../services/cityService'

export default function CityList() {
    const [cities, setCities] = useState([])
    useEffect(() => {
        let cityService = new CityService()
        cityService.getCities().then(result => setCities(result.data.data))
    }, [])
    return (

        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şehir Id</Table.HeaderCell>
                        <Table.HeaderCell>Şehir İsmi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        cities.map(cities => (
                            <Table.Row key={cities.id}>
                                <Table.Cell>{cities.id}</Table.Cell>
                                <Table.Cell>{cities.name}</Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>


            </Table>
        </div>
    )
}