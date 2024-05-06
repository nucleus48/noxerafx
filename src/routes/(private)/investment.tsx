import packages from "@/lib/packages.json";

export function Component() {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {packages.map((plan) => (
        <div key={plan.name} className="max-w-[400px] w-full justify-self-center p-8 bg-white shadow-lg rounded-2xl">
          <div className="text-2xl font-bold capitalize text-center pb-8">
            {plan.name}
          </div>

          <table className="w-full max-w-[300px] mx-auto gap-4 font-medium text-gray-700">
            <tr>
              <td>Minimum amount</td>
              <td className="text-end">${plan["min-amount"]}</td>
            </tr>
            <tr>
              <td>Maximum amount</td>
              <td className="text-end">${plan["max-amount"]}</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td className="text-end">{plan.duration} day(s)</td>
            </tr>
            <tr>
              <td>Daily Return</td>
              <td className="text-end">{plan.dailyReturn}%</td>
            </tr>
          </table>

          <div className="text-center pt-8">
            <button className="btn">Invest now</button>
          </div>
        </div>
      ))}
    </section>
  );
}
