import { useState } from "react";

const OurServices = ({ styles }: { styles: Record<string, string> }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const tabs = [
    {
      heading: "Custom Injection Molding",
      content:
        "From prototype to production, we offer custom plastic injection molding services tailored to your specific needs. Our advanced machinery and skilled technicians ensure precision and consistency in every part we produce.",
    },
    {
      heading: "Material Selection",
      content:
        "With a wide range of materials available, including engineering-grade resins and various thermoplastics , we can help you choose the right material for your application, ensuring durability, performance, and cost-effectiveness.",
    },
    {
      heading: "Tooling and Design",
      content:
        "Our experienced engineers can assist you in optimizing your product designs for injection molding, helping to minimize costs and maximize efficiency. We also offer tooling services to create molds that meet your exact specifications.",
    },
    {
      heading: "Quality Assurance",
      content:
        "Quality is paramount at GM Modules. We employ rigorous quality control measures throughout the manufacturing process to ensure that every part meets the highest standards of accuracy, consistency, and durability.",
    },
    {
      heading: "Secondary Operations",
      content:
        "In addition to injection molding, we offer a variety of secondary operations such as assembly, machining, and finishing services to provide you with fully customized, ready-to-use parts",
    },
  ];

  return (
    <section className="py-5 mb-5">
      <div className="container">
        <div className="row">
          <h2 className={styles.headingFancy1}>
            <span className="pb-2">Our Services</span>
          </h2>
        </div>

        <div className="mt-5 bg-white shadow-dark rounded-4 overflow-hidden">
          <div className="row gap-2 bg-white">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`${
                  selectedTabIndex === index ? "" : "opacity-50"
                } border-0 col align-content-center w-fit fw-medium font-22 text-white text-center py-3 background-main cursor-pointer`}
                onClick={() => setSelectedTabIndex(index)}
              >
                {tab.heading}
              </button>
            ))}
          </div>
          <div className="px-5 py-5 font-24 text-center">
            {tabs[selectedTabIndex].content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
