import React from 'react'
import { Form, Formik,Field,ErrorMessage, yupToFormErrorsn} from 'formik'
import * as Yup from "yup"
import { FormField,Button,Label,Icon } from 'semantic-ui-react'
import KtTextInput from '../utilities/KtTextInput'

export default function JobseekerAdd() {


    const initialValues = {
        firstName: "",
        lastName: "",
        password: "",
        verifyPassword: "",
        nationalityId: "",
        dateOfBirth: ""
    };

    const schema = Yup.object({
        firstName: Yup.string().required("İsim girilmesi zorunlu"),
        lastName: Yup.string().required("Soyisim girilmesi zorunludur"),
        password: Yup.string().required("Şifre girilmesi zorunludur"),
        verifyPassword: Yup.string().required("Şifre tekrarını lütfen giriniz"),
        nationalityId: Yup.string().required("Tc Kimlik No girilmek zorunludur"),
        dateOfBirth: Yup.date().required("Doğum tarihi girilmesi zorunludur")
    });
    return (
        
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values)=>{
                    console.log(values)
                }}
            >
                <Form className="ui form">
                    <KtTextInput name="firstName" placeholder="İsim"/>
                    <KtTextInput name="lastName" placeholder="Soyisim"/>
                    <Button className="btnAdd" color="blue" type="submit" basic style={{ marginTop: 20, width: 800 }}> YAYINLA<Icon style={{ paddingLeft: 10 }} name="paper plane"></Icon></Button>
                </Form>
            </Formik>

        
    );
}
