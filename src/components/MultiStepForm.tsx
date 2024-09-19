import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import { Review } from "./Review";
// import Review from "./Review";

export const MultiStepForm = () => {
  const [step, setStep] = useState<number>(1);

  const handleSubmit = async (values: any) => {};

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",

      address: "",
      city: "",
      zipCode: "",

      phoneNumber: "",
      emergencyContact: "",
    },
    validationSchema: FormSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  const validateFormStep = (level: any) => {
    let errorExist = false;
    Object.keys(formik?.errors).forEach((key) => {
      if (level.includes(key)) {
        errorExist = true;
      }
    });
    return errorExist;
  };

  return (
    <section>
      <h2 className="text-red-700">User Fomr</h2>
      <form className="mt-4" onSubmit={formik.handleSubmit}>
        {step === 1 && (
          <StepOne
            formik={formik}
            validateFormStep={validateFormStep}
            setStep={setStep}
          />
        )}
        {step === 2 && (
          <StepTwo
            formik={formik}
            validateFormStep={validateFormStep}
            setStep={setStep}
          />
        )}
        {step === 3 && (
          <StepThree
            formik={formik}
            validateFormStep={validateFormStep}
            setStep={setStep}
          />
        )}
        {step === 4 && <Review  />}
        <div>
          <button>Submit</button>
        </div>
      </form>
    </section>
  );
};

const FormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Password must match")
    .required("Confirm Password is required"),

  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  zipCode: Yup.string().required("Zipcode is required"),

  phoneNumber: Yup.string().required("Phone Number is required"),
  emergencyContact: Yup.string().required("Emergency Contact is required"),
});
