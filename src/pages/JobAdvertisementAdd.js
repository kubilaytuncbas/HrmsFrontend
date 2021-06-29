import React, { useState, useEffect } from 'react'
import WorkingTimeService from '../services/workingTimeService'
import WorkingTypeService from '../services/workingTypeService'
import * as Yup from "yup";
import JobAdvertisementService from '../services/jobAdvertisementService';
import CityService from '../services/cityService';
import JobPositionService from '../services/jobPositionService';
import { Button, Input, TextArea, Card, Form, Grid, Dropdown,label } from "semantic-ui-react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";




export default function JobAdvertisementAdd() {

    const [workingTimes, setWorkingTimes] = useState([])
    const [workingTypes, setWorkingTypes] = useState([])
    const [cities, setCities] = useState([])
    const [jobPositions, setJobPositions] = useState([])

    let jobAdvertisementService = new JobAdvertisementService()
    useEffect(() => {
        let workingTimeService = new WorkingTimeService()
        let workingTypeService = new WorkingTypeService()

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

    }, []);

    const schema = Yup.object({
        description: Yup.string().required("Bilgi girilmesi zorunlu"),
        salaryMin: Yup.string().required("Minimum ücret girilmesi zorunludur"),
        salaryMax: Yup.string().required("Maksimum ücret girilmesi zorunludur"),
        deadline: Yup.date().required("Son başvuru tarihini lütfen giriniz"),
        publishedAt: Yup.date().required("Tc Kimlik No girilmek zorunludur"),
        openPositionCount: Yup.string().required("Doğum tarihi girilmesi zorunludur"),
        workingTimeId: Yup.string().required(""),
        workingTypeId: Yup.string().required(""),
        cityId: Yup.string().required(""),
        jobPositionId: Yup.string().required("")
    });

    const workingTimeOption = workingTimes.map((workingTime, index) => ({
        key: index,
        text: workingTime.workingTime,
        value: workingTime.id,
        name: workingTime.id
    }));

    const workingTypeOption = workingTypes.map((workingType, index) => ({
        key: index,
        text: workingType.workingType,
        value: workingType.id,
        name: workingType.id
    }));

    const cityOption = cities.map((city, index) => ({
        key: index,
        text: city.name,
        value: city.id,
        name: city.id
    }));
    const jobPositionOption = jobPositions.map((jobPosition, index) => ({
        key: index,
        text: jobPosition.jobTitle,
        value: jobPosition.id,
        name: jobPosition.id
    }));
    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    };

    const history = useHistory();

    const formik = useFormik({
        initialValues: {
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
        },
        validationSchema: schema,
        onSubmit: (values) => {
            values.employerId = 25;
            jobAdvertisementService
                .add(values)
                .then((result) => console.log(result.data.data));
            alert("İş ilanı eklendi, personelin onayı ardından listelenecektir");
            history.push("/job-advertisements");
        },
    });


    return (
        <div>
            <Card fluid>
                <Card.Content header="İş ilanı Ekle" />
                <Card.Content>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Field style={{ marginBottom: "1rem" }}>
                            <label>İş Pozisyonu</label>
                            <Dropdown
                                clearable
                                item
                                placeholder="İş pozisyonu"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "jobPositionId")
                                }
                                onBlur={formik.onBlur}
                                id="jobPositionId"
                                value={formik.values.jobPositionId}
                                options={jobPositionOption}
                            />
                            {formik.errors.jobPositionId && formik.touched.jobPositionId && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.jobPositionId}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <label>Şehir</label>
                            <Dropdown
                                clearable
                                item
                                placeholder="Şehir"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "cityId")
                                }
                                onBlur={formik.onBlur}
                                id="cityId"
                                value={formik.values.cityId}
                                options={cityOption}
                            />
                            {formik.errors.cityId && formik.touched.cityId && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.cityId}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <label>Çalışma yeri</label>
                            <Dropdown
                                clearable
                                item
                                placeholder="Çalışma yeri"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "workingTypeId")
                                }
                                onBlur={formik.onBlur}
                                id="workingTypeId"
                                value={formik.values.workingTypeId}
                                options={workingTypeOption}
                            />
                            {formik.errors.workingTypeId && formik.touched.workingTypeId && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.workingTypeId}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <label>Çalışma Süresi</label>
                            <Dropdown
                                clearable
                                item
                                placeholder="Çalışma Süresi"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "workingTimeId")
                                }
                                onBlur={formik.onBlur}
                                id="workingTimeId"
                                value={formik.values.workingTimeId}
                                options={workingTimeOption}
                            />
                            {formik.errors.workingTimeId && formik.touched.workingTimeId && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.workingTimeId}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <Grid stackable>
                                <Grid.Column width={8}>
                                    <label style={{ fontWeight: "bold" }}>
                                        Maaş aralığı MİNİMUM
                                    </label>
                                    <Input
                                        style={{ width: "100%" }}
                                        type="number"
                                        placeholder="Maaş aralığı MİNİMUM"
                                        value={formik.values.salaryMin}
                                        name="salaryMin"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    ></Input>
                                    {formik.errors.salaryMin && formik.touched.salaryMin && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.salaryMin}
                                        </div>
                                    )}
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <label style={{ fontWeight: "bold" }}>
                                        Maaş aralığı MAKSİMUM
                                    </label>
                                    <Input
                                        style={{ width: "100%" }}
                                        type="number"
                                        placeholder="Maaş aralığı MAKSİMUM"
                                        value={formik.values.salaryMax}
                                        name="salaryMax"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    ></Input>
                                    {formik.errors.salaryMax && formik.touched.salaryMax && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.salaryMax}
                                        </div>
                                    )}
                                </Grid.Column>
                            </Grid>
                        </Form.Field>

                        <Form.Field>
                            <Grid stackable>
                                <Grid.Column width={8}>
                                    <label style={{ fontWeight: "bold" }}>
                                        Açık Pozisyon sayısı
                                    </label>
                                    <Input
                                        style={{ width: "100%" }}
                                        id="openPositionCount"
                                        name="openPositionCount"
                                        error={Boolean(formik.errors.openPositionCount)}
                                        onChange={formik.handleChange}
                                        value={formik.values.openPositionCount}
                                        onBlur={formik.handleBlur}
                                        type="number"
                                        placeholder="Açık Pozisyon sayısı"
                                    />
                                    {formik.errors.openPositionCount &&
                                        formik.touched.openPositionCount && (
                                            <div className={"ui pointing red basic label"}>
                                                {formik.errors.openPositionCount}
                                            </div>
                                        )}
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <label style={{ fontWeight: "bold" }}>
                                        Son başvuru tarihi
                                    </label>
                                    <Input
                                        style={{ width: "100%" }}
                                        type="date"
                                        error={Boolean(formik.errors.deadline)}
                                        onChange={(event, data) =>
                                            handleChangeSemantic(data.value, "deadline")
                                        }
                                        value={formik.values.deadline}
                                        onBlur={formik.handleBlur}
                                        name="deadline"
                                        placeholder="Son başvuru tarihi"
                                    />
                                    {formik.errors.deadline && formik.touched.deadline && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.deadline}
                                        </div>
                                    )}
                                </Grid.Column>
                            </Grid>
                        </Form.Field>

                        <Form.Field>
                            <label>Açıklama</label>
                            <TextArea
                                placeholder="Açıklama"
                                style={{ minHeight: 100 }}
                                error={Boolean(formik.errors.description).toString()}
                                value={formik.values.description}
                                name="description"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.description && formik.touched.description && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.description}
                                </div>
                            )}
                        </Form.Field>
                        <Button
                            content="Ekle"
                            labelPosition="right"
                            icon="add"
                            positive
                            type="submit"
                            style={{ marginLeft: "20px" }}
                        />
                    </Form>
                </Card.Content>
            </Card>
        </div>
    )
}
