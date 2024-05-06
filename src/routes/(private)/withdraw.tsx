import { ActionData } from "@/types";
import { Form, useActionData } from "react-router-dom";

export function Component() {
  const actionData = useActionData() as ActionData | null;

  return (
    <section className="border bg-white rounded-2xl p-6 shadow-lg max-w-[600px] mx-auto">
      <h1 className="text-lg font-bold pb-2 border-b">Withdraw funds</h1>

      <Form
        method="POST"
        encType="multipart/form-data"
        className="px-2 p-6 flex flex-col gap-4"
      >
        {actionData && (
          <div
            className={`border rounded-md p-2 ${
              actionData.success
                ? "border-green-100 bg-green-50 text-sm text-green-600"
                : "border-red-100 bg-red-50 text-sm text-red-600"
            } font-medium`}
          >
            {actionData.message}
          </div>
        )}

        <div className="flex flex-col justify-stretch sm:flex-row gap-4">
          <div className="sm:w-1/2">
            <label htmlFor="amount" className="font-medium text-sm">
              Amount ($)
            </label>
            <input
              type="number"
              inputMode="numeric"
              name="amount"
              className="input"
              min={100}
              required
            />
            <div className="text-xs">minimum amount: $100</div>
          </div>
          <div className="sm:w-1/2">
            <label htmlFor="account-number" className="font-medium text-sm">
              Account Number
            </label>
            <input name="account-number" className="input" required />
          </div>
        </div>

        <div>
          <label htmlFor="bank-name" className="font-medium text-sm">
            Bank Name
          </label>
          <input name="bank-name" className="input" required />
        </div>
        <div>
          <label htmlFor="bank-location" className="font-medium text-sm">
            Bank Location
          </label>
          <input name="bank-location" className="input" required />
        </div>

        <div>
          <button className="btn">Confirm withdraw</button>
        </div>
      </Form>
    </section>
  );
}

export async function action() {
  return {
    success: true,
    message:
      "Withdraw request successfull. Your request will be processed within 24 hours.",
  } as ActionData;
}
