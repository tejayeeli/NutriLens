import "./FeaturesSection.css";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "📷",
    title: "AI Detection",
    description: "Analyze your meals using advanced AI technology.",
  },
  {
    icon: "⚡",
    title: "Instant Analysis",
    description: "Get nutrition information in seconds.",
  },
  {
    icon: "🥗",
    title: "Healthy Suggestions",
    description: "Receive personalized recommendations.",
  },
];

function FeaturesSection(){
  return (
    <section className="features">
      <h2>Why Plateora?</h2>

      <div className="features-container">
        {features.map((feature) => (
          <FeatureCard
          key ={feature.title}
          icon ={feature.icon}
          title ={feature.title}
          description ={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;