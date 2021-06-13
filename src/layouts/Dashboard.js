import React from 'react'
// import JobPositionList from '../pages/JobPositionList'
import Categories from './Categories'
import { Grid } from 'semantic-ui-react'
// import CityList from '../pages/CityList'
import CvList from '../pages/CvList'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories></Categories>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        {/* <JobPositionList></JobPositionList> */}
                        {/* <CityList></CityList> */}
                        <CvList></CvList>
                    </Grid.Column>
                </Grid.Row>
            </Grid>



        </div>
    )
}
