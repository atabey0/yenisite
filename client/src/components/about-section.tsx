import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hakkımda</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              İleri seviye finansal analiz ve piyasa stratejileri konusunda uzmanlaşmış, risk yönetimi ve portföy optimizasyonu alanlarında deneyimli bir finansal okuryazar.
            </p>
            <p>
              Siber güvenlik alanında temel ve orta düzey uzmanlık ile sistem güvenliği, ağ protokolleri ve güvenlik açığı tespiti konularında aktif çalışmalar yürüten bir siber güvenlik uzmanı.
            </p>
            <p>
              Modern ve kullanıcı dostu arayüzler tasarlayan, responsive ve SEO uyumlu web siteleri geliştiren tecrübeli bir web tasarımcısı.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}