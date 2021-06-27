import React, { useState, useEffect } from 'react'
import WorkingTimeService from '../services/workingTimeService'
import WorkingTypeService from '../services/workingTypeService'
import * as Yup from "yup";
import JobAdvertisementService from '../services/jobAdvertisementService';
import CityService from '../services/cityService';
import JobPositionService from '../services/jobPositionService';
import { FormField, Button, Label, Dropdown } from 'semantic-ui-react'
import KtTextInput from '../utilities/KtTextInput'
import { Form, Formik, Field, ErrorMessage, yupToFormErrors } from 'formik'




export default function JobAdvertisementAdd() {

    const [workingTimes, setWorkingTimes] = useState([])
    const [workingTypes, setWorkingTypes] = useState([])
    const [cities, setCities] = useState([])
    const [jobPositions, setJobPositions] = useState([])

    useEffect(() => {
        let workingTimeService = new WorkingTimeService()
        let workingTypeService = new WorkingTypeService()
        let jobAdvertisementService = new JobAdvertisementService()
        let jobPositionService = new JobPositionService()
        let cityService = new CityService()
        cityService.getCities().then((result) => {
            setCities(result.data.data)
        });

        jobPositionService.getJobPositions().then((result) => {
            setJobPositions(result.data.data)
        });

        workingTimeService.getAll().then((result) => {
            setWorkingTimes(result.data.data)
        });

        workingTypeService.getAll().then((result) => {
            setWorkingTypes(result.data.data)
        });

    }, [])
    const workingTimeOption = workingTimes.map((workingTime, index) => ({
        key: index,
        text: workingTime.name,
        value: workingTime.id,
        name: workingTime.id
    }));

    const workingTypeOption = workingTypes.map((workingType, index) => ({
        key: index,
        text: workingType.id,
        value: workingType.id,
        name: workingType.id
    }));

    const cityOption = cities.map((city, index) => ({
        key: index,
        text: city.name,
        value: city.id,
        name: city.id
    }));

    const initialValues = {
        description: "",
        salaryMin: "",
        salaryMax: "",
        deadline: "",
        publishedAt: "",
        openPositionCount: 1,
        workingTimeId: "",
        workingTypeId: "",
        cityId: "",
        jobPositionId: "",
    };
    const schema = Yup.object({
        description: Yup.string().required("Bilgi girilmesi zorunlu"),
        salaryMin: Yup.string().required("Soyisim girilmesi zorunludur"),
        salaryMax: Yup.string().required("Şifre girilmesi zorunludur"),
        deadline: Yup.date().required("Şifre tekrarını lütfen giriniz"),
        publishedAt: Yup.date().required("Tc Kimlik No girilmek zorunludur"),
        openPositionCount: Yup.string().required("Doğum tarihi girilmesi zorunludur"),
        workingTimeId: Yup.string().required(""),
        workingTypeId: Yup.string().required(""),
        cityId: Yup.string().required(""),
        jobPositionId: Yup.string().required("")
    });
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            <Form className="ui form">
                <KtTextInput name="description" placeholder="Bilgi" />
                <KtTextInput name="salaryMin" placeholder="En düşük ücret" />
                <KtTextInput name="salaryMax" placeholder="En yüksek ücret" />
                <KtTextInput name="deadline" placeholder="İlan bitiş tarihi" />
                <KtTextInput name="publishedAt" placeholder="İlan yayınlanma tarihi" />
                <KtTextInput name="openPositionCount" placeholder="Alınacak Eleman Sayısı" />
                <KtTextInput name="openPositionCount" placeholder="Alınacak Eleman Sayısı" />
                <Label as='div' color='blue' basic pointing='left'>Şehir</Label>
                <Dropdown style={{ width: '200px' } }
                    placeholder='Şehir'
                    fluid selection search
                    options={cityOption}
                />
                <Button color="green" type="submit">Ekle</Button>
            </Form>
        </Formik>


    )
}
