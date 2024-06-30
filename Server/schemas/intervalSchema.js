import * as Yup from 'yup'

const intervalSchema = Yup.object().shape({
    startDate : Yup.string().required('Start Date is Required'),
    endDate : Yup.string().required('End Date is required'),
})
export default intervalSchema