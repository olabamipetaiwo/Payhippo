/**
 * Implement your solution here and also feel free to create new files as needed within this folder. Although, this is the entry component that will be tested
 */
import { StepProps } from "../../utils/types";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const StepThree = ({ formik, setStep, validateFormStep }: StepProps) => {
  return (
    <section className="flex flex-col mb-8">
      <div className="flex flex-col">
        <label className="mb-1">
          <strong>Address</strong>
        </label>
        <input
          type="text"
          className="form-control"
          id="emergencyContact"
          name=" emergencyContact"
          placeholder=" emergencyContact"
          data-test-id=" emergencyContact-input"
          {...formik.getFieldProps(" emergencyContact")}
        />
        {formik.touched.emergencyContact && formik.errors.emergencyContact ? (
          <div
            className="text-red-500 mt-2 fs-12"
            data-test-id="emergencyContact-error"
          >
            {formik.errors.emergencyContact}
          </div>
        ) : null}
      </div>

      <div className=" auth-form-group basis-[48%]">
        <div className="flex flex-col w-full">
          <label className="form-label">Phone Number</label>

          <PhoneInput
            countryCodeEditable={false}
            country="ng"
            preferredCountries={["ng"]}
            onChange={(phone) => {
              formik.setFieldValue("phoneNumber", phone);
            }}
          />

          {formik.errors.phoneNumber ? (
            <div
              className="text-danger mt-2 fs-12"
              data-test-id="phoneNumber-error"
            >
              {formik.errors.phoneNumber}
            </div>
          ) : null}
        </div>
      </div>

      {/* Reafctor this to parent component */}
      <div className="flex items-center justify-end mt-4">
        <button
          type="button"
          className="p-4 bg-green-500 text-white font-medium transition-all"
          data-test-id="previous-button`"
          onClick={() => {
            setStep(2);
          }}
        >
          Previous
        </button>

        <button
          type="button"
          className="p-4 bg-green-500 text-white font-medium transition-all"
          data-test-id="next-button`"
          onClick={() => {
            const level_two = ["phoneNumber", " emergencyContact"];
            const L2_ERROR = validateFormStep(level_two);
            if (!L2_ERROR) {
              setStep(4);
            }
          }}
        >
          Next
        </button>
      </div>
      {/* Reafctor this to parent component */}
    </section>
  );
};

export default StepThree;
