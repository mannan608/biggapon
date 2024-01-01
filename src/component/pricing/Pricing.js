import "../pricing/Pricing.css";
import SectionHeader from "../sectionheader/SectionHeader";
import PriceCard from "./PriceCard";
import PricingData from "../../data/PricingData";

const Pricing = () => {
  return (
    <div class="pricing-wrapper">
      <div class="container-fluid">
        <div className="pricing">
          <SectionHeader
            title="Priceing"
            short_desc="Choose Your Plan"
            description=" Simply running ads or any marketing initiative without proper planning and experimentation can be a costly mistake in business, so take the time to strategize and test different approaches."
          />
          <div className="row">
            {PricingData.map((item) => (
              <PriceCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
