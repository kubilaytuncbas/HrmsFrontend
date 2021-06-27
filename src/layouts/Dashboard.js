import React from 'react'
// import JobPositionList from '../pages/JobPositionList'
import Categories from './Categories'
import { Grid } from 'semantic-ui-react'
import CityList from '../pages/CityList'
import {Route} from 'react-router'
import JobseekerDetail from '../pages/JobseekerDetail'
import JobseekerList from '../pages/JobseekerList'
import JobseekerAdd from '../pages/JobseekerAdd'
import JobAdvertisementAdd from '../pages/JobAdvertisementAdd'

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
                        {/* <CvList></CvList> */}
                        <Route exact path="/" component={CityList}></Route>
                        <Route exact path="/cities" component={CityList}></Route>
                        <Route exact path="/jobseekers" component={JobseekerList}></Route>
                        <Route path="/jobseekers/:id" component={JobseekerDetail}></Route>
                        <Route path="/jobseekers/add" component={JobseekerAdd}></Route>
                        <Route path="/jobAdvertisements/add" component={JobAdvertisementAdd}></Route>
                    </Grid.Column>
                </Grid.Row>
            </Grid>



        </div>
    )
}
