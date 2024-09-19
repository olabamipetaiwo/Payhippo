/**
 * Implement your solution here and also feel free to create new files as needed within this folder. Although, this is the entry component that will be tested
 */
import { StepProps } from "../../utils/types";

const StepTwo = ({ formik, setStep, validateFormStep }: StepProps) => {
  return (
    <section className="flex flex-col mb-8">
      <div className="flex flex-col">
        <label className="mb-1">
          <strong>Address</strong>
        </label>
        <input
          type="text"
          className="form-control"
          id="address"
          name="address"
          placeholder="address"
          data-test-id="address-input"
          {...formik.getFieldProps("address")}
        />
        {formik.touched.address && formik.errors.address ? (
          <div className="text-red-500 mt-2 fs-12" data-test-id="address-error">
            {formik.errors.address}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col">
        <label className="mb-1">
          <strong>City</strong>
        </label>
        <input
          type="text"
          className="form-control"
          id="city"
          name="city"
          placeholder="city"
          data-test-id="city-input"
          {...formik.getFieldProps("city")}
        />
        {formik.touched.city && formik.errors.city ? (
          <div className="text-red-500 mt-2 fs-12" data-test-id="city-error">
            {formik.errors.city}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col">
        <label className="mb-1">
          <strong>ZipCode</strong>
        </label>
        <input
          type="text"
          className="form-control"
          id="zipCode "
          name="zipCode "
          placeholder="zipCode "
          data-test-id="zipCode -input"
          {...formik.getFieldProps("zipCode")}
        />
        {formik.touched.zipCode && formik.errors.zipCode ? (
          <div className="text-red-500 mt-2 fs-12" data-test-id="zipCode-error">
            {formik.errors.zipCode}
          </div>
        ) : null}
      </div>

      {/* Reafctor this to parent component */}
      <div className="flex items-center justify-end mt-4">
        <button
          type="button"
          className="p-4 bg-green-500 text-white font-medium transition-all"
          data-test-id="previous-button`"
          onClick={() => {
            setStep(1);
          }}
        >
          Previous
        </button>

        <button
          type="button"
          className="p-4 bg-green-500 text-white font-medium transition-all"
          data-test-id="next-button`"
          onClick={() => {
            const level_two = ["addrss", "city", "zipCode"];
            const L2_ERROR = validateFormStep(level_two);
            if (!L2_ERROR) {
              setStep(3);
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

export default StepTwo;
