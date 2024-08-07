import { ActionData } from "@/types";
import { Form, useActionData } from "react-router-dom";

const btcAddress = "bc1qauuxu3fucrppwjc42hxsmanahqayt5nrwkzx8y";

export function Component() {
  const actionData = useActionData() as ActionData | null;

  return (
    <section className="border bg-white rounded-2xl p-6 shadow-lg max-w-[600px] mx-auto">
      <h1 className="text-lg font-bold pb-2 border-b">Fund your account</h1>

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

        <div>
          <label htmlFor="amount" className="font-medium text-sm">
            Amount ($)
          </label>
          <input
            type="number"
            inputMode="numeric"
            name="amount"
            className="input max-w-[200px]"
            required
          />
        </div>

        <div>
          <div className="text-sm font-medium">BTC Address</div>
          <div className="relative">
            <input className="input" value={btcAddress} disabled hidden />
            <button
            type="button"
              onClick={() => copyToClipboard(btcAddress)}
              className="absolute top-0 bg-white border rounded-md right-0 h-full text-xs grid place-items-center px-2 font-medium hover:bg-slate-600 hover:text-white"
            >
              Copy
            </button>
          </div>
          <div className="text-xs">Make deposit to this btc address</div>
        </div>

        <div>
          <label htmlFor="proof" className="text-sm font-medium">
            Payment Proof
          </label>
          <input
            type="file"
            name="proof"
            className="input"
            accept="image/*"
            required
          />
        </div>

        <div>
          <button className="btn">Confirm deposit</button>
        </div>

        <p className="text-sm font-medium text-yellow-600">
          Make deposit to this btc address before verifying.
        </p>
      </Form>
    </section>
  );
}

export async function action() {
  return {
    success: true,
    message:
      "Deposit request successfull. Your request will be processed within 24 hours.",
  } as ActionData;
}

function copyToClipboard(text: string) {
  const clipboard = new Clipboard();
  clipboard.writeText(text);
}
