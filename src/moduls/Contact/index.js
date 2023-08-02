import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Section } from "../../components";

function Contact() {
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, "*Masukan Nama Ponsel Dengan Benar")
            .max(35, "*Masukan Nama Ponsel Dengan Benar")
            .required("*Nama wajib di isi"),
        address: Yup.string()
            .min(10, "*Masukan Alamat Dengan Benar")
            .required("*Alamat wajib di isi"),
        job: Yup.string().required("*Pekerjaan wajib di pilih"),
        topic: Yup.string().required("*Topik wajib di pilih"),
        instansiName: Yup.string()
            .min(5, "*Masukan Nama Instansi Dengan Benar")
            .max(25, "*Masukan Nama Instansi Dengan Benar")
            .required("*Nama instansi wajib di isi"),
        email: Yup.string()
            .email("*Masukan Email Dengan Benar")
            .required("*Email wajib di isi"),
        phone: Yup.string()
            .min(11, "*Masukan Nomor Ponsel Dengan Benar")
            .max("13", "*Masukan Nomor Ponsel Dengan Benar")
            .required("*Nomor Ponsel wajib di isi"),
        message: Yup.string().required("*Pesan wajib di isi"),
    });

    const classNameAlert = "text-xs font-medium text-red-600 mt-1 ";

    const sendData = (value) => {};

    return (
        <Section title="Contact" description="" id="contact">
            <div className="w-full mb-96 flex ">
                <div className="h-60 bg-gray-500 w-[40%] ">text</div>
                <div className=" w-[60%] ml-10">
                    <Formik
                        initialValues={{
                            name: "",
                            job: "",
                            instansiName: "",
                            address: "",
                            email: "",
                            phone: "",
                            topic: "",
                            message: "",
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={(values) => {
                            sendData(values);
                            console.log("values", values);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="name"
                                        className="text-s mb-1"
                                    >
                                        Nama*
                                    </label>
                                    <Field
                                        id="name"
                                        name="name"
                                        placeholder="Masukan Nama.."
                                        className="w-full h-10 pl-4 rounded-md shadow-sm text-black border-2 text-black"
                                    />
                                    {errors.name && touched.name ? (
                                        <div className={classNameAlert}>
                                            {errors.name}
                                        </div>
                                    ) : null}
                                </div>

                                <button
                                    type="submit"
                                    className="bg-secoundary rounded-md text-primary font-semibold text-x mt-6"
                                    style={{ width: 208, height: 56 }}
                                >
                                    Kirim Pesan
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </Section>
    );
}

export default Contact;
