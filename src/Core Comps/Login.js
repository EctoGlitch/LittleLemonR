import Wrapper from "./Wrapper"
import { Link } from "react-router-dom"

import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import Text_Input from "../Form Comps/Text_Input"
import Button_full from "../Form Comps/Button_full"

const Login = () => {
    const initialValues = { email: '' }
        const validationSchema = Yup.object({
                email: Yup.string().email('Invalid email format').required('Required'),
                password: Yup.string().required('Required'),
            })
            const onSubmit = (values) => {
                console.log('Form Data:', values)
            }
    return (
        <>
        <div className="bg-dark_green">
            <Wrapper>
                <h1 className="text-gold font-display text-display_size max-sm:text-6xl text-7xl -mt-7">Login</h1>
            </Wrapper>
        </div>
        <div className="bg-white">
            <Wrapper>
                <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({ errors, touched, isValid }) => (
                            <Form>
                                <Text_Input
                                    label={'Email'}
                                    type={'text'}
                                    name={'email'}
                                    touched={touched.email}
                                    error={errors.email}
                                />
                                <Text_Input
                                    label={'Password'}
                                    type={'password'}
                                    name={'password'}
                                    touched={touched.password}
                                    error={errors.password}
                                />
                                <Link to='/register'>
                                    <p  className=' py-4 font-p text-right text-black font-bold'>Need an account? Signup now!</p>
                                </Link>
                                <Button_full type={'submit'} label='Submit' disabled={!isValid} />
                        </Form>

                        )}
                    </Formik>
            </Wrapper>
        </div>
        </>
    )
}
export default Login
