import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, Shield, Zap } from "lucide-react";

const features = [
  {
    title: "Lightning Fast",
    description: "Experience blazing fast performance with our optimized platform.",
    icon: Zap,
  },
  {
    title: "Secure by Design",
    description: "Enterprise-grade security built into every feature.",
    icon: Shield,
  },
  {
    title: "AI-Powered",
    description: "Smart automation and insights powered by cutting-edge AI.",
    icon: Sparkles,
  },
];

export default function FeatureSection() {
  return (
    <section className="py-24 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Platform
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="pt-6">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
