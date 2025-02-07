import { CheckCircle, Layout, Zap, Users } from "lucide-react";
import { Card } from 'antd';

const features = [
  {
    title: "Drag & Drop Builder",
    description: "Create forms with our intuitive drag and drop interface",
    icon: Layout,
  },
  {
    title: "Instant Deployment",
    description: "Publish your forms instantly and share with anyone",
    icon: Zap,
  },
  {
    title: "Team Collaboration",
    description: "Work together with your team in real-time",
    icon: Users,
  },
  {
    title: "Advanced Analytics",
    description: "Get detailed insights about your form responses",
    icon: CheckCircle,
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-gray-600">
            Powerful features to help you build any type of form
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <feature.icon className="h-12 w-12 text-violet-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
