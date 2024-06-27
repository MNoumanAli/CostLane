import * as Yup from 'yup'

const expenseSchema = Yup.object().shape({
    cost : Yup.number().required("Cost is required"),
    item : Yup.string().required("Item name is required"),
})
export default expenseSchema;