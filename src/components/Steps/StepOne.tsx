/**
 * Implement your solution here and also feel free to create new files as needed within this folder. Although, this is the entry component that will be tested
 */

import { StepProps } from "../../utils/types";

const StepOne = ({ formik, setStep, validateFormStep }: StepProps) => {
  return (
    <section className="flex flex-col mb-8">
      <div className="flex flex-col">
        <label className="mb-1">
          <strong>Name</strong>
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Name"
          data-test-id="name-input"
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 mt-2 fs-12" data-test-id="name-error">
            {formik.errors.name}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col">
        <label className="mb-1">
          <strong>Email</strong>
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          name="email"
          placeholder="Email"
          data-test-id="email-input"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 mt-2 fs-12" data-test-id="email-error">
            {formik.errors.email}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col">
        <label className="mb-1">
          <strong>Passowrd</strong>
        </label>
        <input
          type="password"
          className="form-control"
          id="passowrd"
          name="password"
          placeholder="password"
          data-test-id="password-input"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <div
            className="text-red-500 mt-2 fs-12"
            data-test-id="password-error"
          >
            {formik.errors.password}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col">
        <label className="mb-1">
          <strong>Confrirm Password</strong>
        </label>
        <input
          type="text"
          className="form-control"
          id="confirm_password"
          name="confirm_password"
          placeholder="confirm_password"
          {...formik.getFieldProps("confirm_password")}
        />
        {formik.touched.confirm_password && formik.errors.confirm_password ? (
          <div className="text-red-500 mt-2 fs-12">
            {formik.errors.confirm_password}
          </div>
        ) : null}
      </div>

      {/* Reafctor this to parent component */}
      <div className="flex items-center justify-end mt-4">
        <button
          type="button"
          className="p-4 bg-green-500 text-white font-medium transition-all"
          data-test-id="next-button`"
          onClick={() => {
            const level_one = ["name", "email", "password"];
            const L1_ERROR = validateFormStep(level_one);
            if (!L1_ERROR) {
              setStep(2);
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

export default StepOne;
