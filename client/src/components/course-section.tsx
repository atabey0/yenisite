import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Shield, Globe, Smartphone } from "lucide-react";
import { Link, useLocation } from "wouter";
import ParticleNetwork from "./particle-network";

const courses = [
  {
    title: "İleri Seviye Teknik Analiz",
    description: "Finansal piyasalarda profesyonel teknik analiz teknikleri ve stratejileri öğrenin.",
    icon: LineChart,
    image: "https://i.imgur.com/T0gOu3b.png",
    slug: "teknik-analiz"
  },
  {
    title: "Temel Seviye Siber Güvenlik",
    description: "Modern siber tehditlere karşı kendinizi ve işletmenizi korumayı öğrenin.",
    icon: Shield,
    image: "https://i.imgur.com/1JD1dNT.png",
    slug: "siber-guvenlik"
  },
  {
    title: "Kurumsal Web Sitesi Geliştirme",
    description: "Modern ve profesyonel kurumsal web siteleri tasarlama ve geliştirme.",
    icon: Globe,
    image: "https://i.imgur.com/w8oFEqF.png",
    slug: "web-sitesi"
  },
  {
    title: "Webview Mobil Uygulama Geliştirme",
    description: "İşletmeniz için özel mobil uygulamalar geliştirme.",
    icon: Smartphone,
    image: "https://i.imgur.com/mCI46NB.png",
    slug: "mobil-uygulama"
  }
];

export default function CourseSection() {
  const [_, navigate] = useLocation();
  return (
    <section id="courses" className="py-24 relative overflow-hidden">
      <ParticleNetwork />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Eğitim Programları
          </h2>
          <p className="text-xl text-muted-foreground">
            Kariyerinizi bir adım öteye taşıyacak profesyonel eğitimler
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video rounded-lg overflow-hidden mb-6">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <course.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {course.description}
                  </p>
                  <Link href={`/egitim/${course.slug}`} onClick={() => {
                    navigate(`/egitim/${course.slug}`);
                    window.scrollTo(0, 0);
                  }}>
                    <Button className="w-full">Detaylı Bilgi</Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}