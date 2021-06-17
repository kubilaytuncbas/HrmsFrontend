import React, { useState, useEffect } from 'react'
import JobseekerService from '../services/jobseekerService'
import { Table} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function JobseekerList() {
    const [jobSeekers, setJobseekers] = useState([])
    useEffect(() => {
        let jobseekerService = new JobseekerService()
        jobseekerService
            .getJobseekers()
            .then((result) => setJobseekers(result.data.data))
    }, [])

    return (
        <div>

            <Table color="blue" key="blue">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Detail</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {jobSeekers.map((jobseeker) => (
                        <Table.Row key={jobseeker.id}>
                            <Table.Cell><Link to={`/jobseekers/${jobseeker.id}`}> {jobseeker.firstName}</Link></Table.Cell>
                            <Table.Cell>{jobseeker.lastName}</Table.Cell>
                            <Table.Cell>{jobseeker.email}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}