import { motion } from "framer-motion";

const BondHome = () => {
  const cards = [
    {
      title: "Rental Guarantee Bond",
      description: "Tenant buys the Rental Guarantee bond for the owner",
      img: "/images/Agrrement.png",
    },
    {
      title: "Liability Payment",
      description: "The liabilities need to be paid by the tenant as per the agreement",
      img: "/images/Agrrement.png",
    },
    {
      title: "Owner Claim",
      description: "In case of disputes, owner claims the amount from Eqarro",
      img: "/images/Agrrement.png",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white">
      {/* Left Text Section */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:w-1/2 mb-10 md:mb-0"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Don't want to pay <br /> security deposit?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Now, with rental bond, your peace of mind is guaranteed!
        </p>
        <button className="bg-[#15b36a] text-white rounded-full py-3 px-6 text-lg hover:opacity-90 transition-all">
          Apply Now &gt;
        </button>
      </motion.div>

      {/* Right Cards Section */}
      <div className="md:w-1/2 flex flex-col gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex items-center bg-white rounded-xl shadow-lg p-4 relative overflow-hidden"
          >
            {/* Green Circle Background + Image */}
            <div className="relative w-28 h-28 flex-shrink-0 mr-4">
              <div className="absolute inset-0 bg-[#c6f1de] rounded-full scale-125 z-0" />
              <img
                src={card.img}
                alt={card.title}
                className="relative z-10 w-full h-full object-contain"
              />
            </div>

            {/* Text Content */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900">{card.title}</h4>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BondHome;
