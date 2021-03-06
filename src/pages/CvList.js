import React, { useState,useEffect } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import CvService from '../services/cvService'


export default function CvList(){
    const [cvs,setCvs]=useState([])
    useEffect(()=>{
        let cvService=new CvService()
        cvService.getCvs().then(result=>setCvs(result.data.data))

    },[])
    return(
        <div>
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Cv Id</Table.HeaderCell>
                    <Table.HeaderCell>Cv Sahibi</Table.HeaderCell>
                    <Table.HeaderCell>Eklenme Tarihi</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    cvs.map(cv => (
                        <Table.Row key={cv.id}>
                            <Table.Cell>{cv.id}</Table.Cell>
                            <Table.Cell>{cv.jobseeker.firstName}</Table.Cell>
                            <Table.Cell>{cv.createdAt}</Table.Cell>
                        </Table.Row>
                    ))
                }

            </Table.Body>

            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='3'>
                        <Menu floated='right' pagination>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron left' />
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a'>4</Menu.Item>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron right' />
                            </Menu.Item>
                        </Menu>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    </div>
    )
}