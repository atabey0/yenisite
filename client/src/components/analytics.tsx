import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function Analytics() {
  const { data } = useQuery({
    queryKey: ["/api/waitlist/count"],
    refetchInterval: 5000,
  });

  return (
    <section className="py-12 px-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 text-primary">
          <Users className="w-6 h-6" />
          <span className="text-2xl font-bold">{data?.count || 0}</span>
          <span className="text-muted-foreground">people on waitlist</span>
        </div>
      </motion.div>
    </section>
  );
}
