import { object, string } from "yup";

const uservalidationSchema = object({
    name: string().min(4, 'Too Short!').max(25).required("Please Enter Name"),
    email: string().email('Invalid email').required('Please Enter Email'),
    destination: string().required('Please Select Destination'),
    budgetOfPerson: string().required('Please Enter Budget Per Person '),
    currency: string().required('Please Select Currency'),
});

export { uservalidationSchema }