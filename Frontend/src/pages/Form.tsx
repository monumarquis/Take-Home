import { Button, Flex, Input, FormControl, FormLabel, Container, Text, useToast, Divider, Select } from '@chakra-ui/react'
import axios from 'axios';
import { useFormik } from 'formik';
import { FormikHelpers, FormikProps } from 'formik/dist/types';
import { FC, useState, useCallback, FormEvent } from 'react'
import { UserTravelInitState } from '../types/userDetail';
import { uservalidationSchema } from '../controller/FormValdation';
import { AiFillExclamationCircle } from "react-icons/ai"
const initState: UserTravelInitState = {
    name: "",
    email: "",
    currency: "",
    destination: "",
    budgetOfPerson: "",
};

const Form: FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [travellers, setTravellers] = useState<string | number>(0);
    const toast = useToast()
    const handlePostTravellers = async (values: UserTravelInitState, { resetForm }: FormikHelpers<UserTravelInitState>): Promise<any> => {
        setLoading(true)
        try {
            console.log({ ...values, travellers })
            // let { data } = await axios.post("https://real-lime-cockroach-tutu.cyclic.app/user", { ...values })
            toast({
                // title: data.message,
                description: "We've Added your Details for you.",
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
            setLoading(false)
            formik.setValues(initState);
            resetForm();
        } catch {
            toast({
                title: 'Something went wrong',
                description: "Something went wrong",
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
            setLoading(false);
        }
    }

    const formik: FormikProps<UserTravelInitState> = useFormik<UserTravelInitState>({
        initialValues: initState,
        validationSchema: uservalidationSchema,
        onSubmit: handlePostTravellers
    });

    const handletravellers = (e: FormEvent<HTMLInputElement>) => {
        setTravellers((e.target as HTMLInputElement).value)
    }


    return (
        <section>
            <Flex flexDirection="column" w="80%" m="auto" justifyContent={"right"} mt="80px"  >
                <Text as='em' textAlign={"center"} fontSize="25" mt="5" mb="2" >Add Travellers</Text>
                <Divider orientation='horizontal' borderColor={'#000'} borderWidth="1px" w="95%" m="auto" mb="5" />
                <Flex flexDirection="row" alignItems={"center"} p="2" bg="#f4f5d7" border="1px solid #ecf229 " w="90%" m="auto" >
                    <AiFillExclamationCircle color='#b1b52d' fontSize={"25"} />
                    <Text fontSize="18" ml="5" >All Input Feilds are Mandotary</Text>
                </Flex>
                <form onSubmit={formik.handleSubmit} style={{ width: "90%", margin: "auto" }} >
                    <Container
                        maxW="100%"
                        mb="10"
                        borderRadius="20"
                        background={"#fff"}
                        centerContent
                    >
                        <FormControl py="10" >
                            <Flex flexDirection="row" justifyContent={"space-between"} w="100%"  >
                                <Flex flexDirection="column" w="48%" >
                                    <FormLabel fontWeight="700" mb="1" mt="5">
                                        Name
                                    </FormLabel>
                                    <Input
                                        name='name'
                                        type='text'
                                        onChange={formik.handleChange}
                                        value={formik.values?.name.toString()}
                                        placeholder="Enter Your Name"
                                        variant="outline"
                                        isInvalid={formik.touched.name && Boolean(formik.errors.name)}
                                        onBlur={formik.handleBlur}
                                        pl="3"

                                    />
                                    {formik.touched.name && formik.errors.name && <Text color="red.400" fontSize={12} >{formik.errors.name}</Text>}
                                </Flex>
                                <Flex flexDirection="column" w="48%" >
                                    <FormLabel fontWeight="700" mb="1" mt="5">
                                        Email Address
                                    </FormLabel>
                                    <Input
                                        name='email'
                                        type='email'
                                        onChange={formik.handleChange}
                                        value={formik.values?.email.toString()}
                                        placeholder="Enter Your Email address"
                                        variant="outline"
                                        isInvalid={formik.touched.email && Boolean(formik.errors.email)}
                                        onBlur={formik.handleBlur}
                                        pl="3"

                                    />
                                    {formik.touched.email && formik.errors.email && <Text color="red.400" fontSize={12} >{formik.errors.email}.</Text>}
                                </Flex>
                            </Flex>
                            <Flex flexDirection="column" mt="5px" w="100%">
                                <FormLabel fontWeight="700" mb="1" mt="5">
                                    Where do you want to go?
                                </FormLabel>
                                <Select name="destination" variant="outline" placeholder='Select Destination' value={formik.values?.destination.toString()} onBlur={formik.handleBlur} onChange={formik.handleChange} >
                                    <option value="India" >India</option>
                                    <option value="Africa" >Africa</option>
                                    <option value="Europe" >Europe</option>
                                </Select>
                                {formik.touched.destination && formik.errors.destination && <Text color="red.400" fontSize={12} >{formik.errors.destination}.</Text>}
                            </Flex>
                            <Flex flexDirection="column" mt="5px" w="100%">
                                <FormLabel fontWeight="700" mb="1" mt="5">
                                    Number of Travellers  <span>: {travellers}</span>
                                </FormLabel>
                                <input
                                    type='range'
                                    onChange={handletravellers}
                                    value={travellers} />
                                {travellers === 0 && <Text color="red.400" fontSize={12} >Atleast One Travellers is required.</Text>}
                            </Flex>

                            <Flex flexDirection="row" w="100%" mt="5px" justifyContent={"space-between"}>
                                <Flex flexDirection="column" w="48%">
                                    <FormLabel fontWeight="700" mb="1" mt="5">
                                        Budget per Person
                                    </FormLabel>
                                    <Input
                                        name='budgetOfPerson'
                                        type='number'
                                        onChange={formik.handleChange}
                                        value={formik.values?.budgetOfPerson.toString()}
                                        placeholder="Enter Your budget per Person "
                                        variant="outline"
                                        isInvalid={formik.touched.budgetOfPerson && Boolean(formik.errors.budgetOfPerson)}
                                        onBlur={formik.handleBlur}
                                        pl="3"

                                    />
                                    {formik.touched.budgetOfPerson && formik.errors.budgetOfPerson && <Text color="red.400" fontSize={12} >{formik.errors.budgetOfPerson}.</Text>}
                                </Flex>
                                <Flex flexDirection="column" w="48%">
                                    <FormLabel fontWeight="700" mb="1" mt="5">
                                        Currency
                                    </FormLabel>
                                    <Select name="currency" variant="outline" placeholder='Select Currency' value={formik.values?.currency.toString()} onBlur={formik.handleBlur} onChange={formik.handleChange} >
                                        <option value="USD" >$ USD</option>
                                        <option value="EUR" >€ EUR</option>
                                        <option value="IND" >₹ IND</option>
                                    </Select>
                                    {formik.touched.currency && formik.errors.currency && <Text color="red.400" fontSize={12} >{formik.errors.currency}.</Text>}
                                </Flex>
                            </Flex>
                            <Button bg="#ffe01b" color="#000" border="1px solid #000" borderRadius="99px" boxShadow={"transparent"} _hover={{ bg: "#e2e8f0", transform: "translateY(-15px)", boxShadow: "0px 8px 0px #000", }} mt="40px" mb="2" w="25%" type="submit" isLoading={loading} loadingText="Submitting details" >
                                Submit
                            </Button>

                        </FormControl>
                    </Container>
                </form>
            </Flex>
        </section>

    )
}

export default Form