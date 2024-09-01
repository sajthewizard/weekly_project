import Options from "./Options";

const PriceOptions = () => {
    const gymPlans = [
        { id: 1, name: "Basic Plan", features: ["Access to gym equipment", "Locker room access"], price: "$20/month" },
        { id: 2, name: "Standard Plan", features: ["Access to gym equipment", "Locker room access", "Group classes"], price: "$35/month" },
        { id: 3, name: "Premium Plan", features: ["Access to gym equipment", "Locker room access", "Group classes", "Personal trainer"], price: "$50/month" },
        { id: 4, name: "VIP Plan", features: ["Access to gym equipment", "Locker room access", "Group classes", "Personal trainer", "Spa access"], price: "$75/month" }
    ];

    return (
        <div>
            <h2 className="text-6xl text-center">Best Prices In Town</h2>
            <div className="md:flex align-center justify-center mt-5 ">
                {
                    gymPlans.map(options => <Options key={options.id} options={options}></Options>)

                }

            </div>

        </div>
    );
};

export default PriceOptions;