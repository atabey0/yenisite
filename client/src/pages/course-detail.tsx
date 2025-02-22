import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = {
  "teknik-analiz": {
    title: "İleri Seviye Teknik Analiz",
    image: "https://i.imgur.com/T0gOu3b.png",
    description: "Finansal piyasalarda profesyonel teknik analiz teknikleri ve stratejileri öğrenin.",
    reasons: [
      "Piyasa trendlerini önceden tespit etme yeteneği kazanın",
      "Risk yönetimi ile sermayenizi korumayı öğrenin",
      "Profesyonel trader'ların kullandığı gelişmiş analiz tekniklerini keşfedin",
      "Sistematik trading stratejileri geliştirme becerisi edinin"
    ],
    benefits: [
      "Trend analizi ve momentum göstergelerinde uzmanlaşma",
      "Risk/ödül oranı hesaplama ve pozisyon boyutlandırma",
      "Fibonacci, Elliot Dalgaları ve harmonik formasyonlar",
      "Volatilite analizi ve opsiyon stratejileri"
    ]
  },
  "siber-guvenlik": {
    title: "Temel Seviye Siber Güvenlik",
    image: "https://i.imgur.com/1JD1dNT.png",
    description: "Modern siber tehditlere karşı kendinizi ve işletmenizi korumayı öğrenin.",
    reasons: [
      "Siber saldırılara karşı savunma tekniklerini öğrenin",
      "Güvenlik açıklarını tespit etme ve kapatma becerisi kazanın",
      "Veri güvenliği ve gizlilik protokollerini uygulayın",
      "Güvenli sistem mimarisi tasarlama yetkinliği edinin"
    ],
    benefits: [
      "Ağ güvenliği ve firewall yönetimi",
      "Şifreleme ve güvenli iletişim protokolleri",
      "Güvenlik duvarı ve IDS/IPS sistemleri",
      "Zararlı yazılım analizi ve önleme"
    ]
  },
  "web-sitesi": {
    title: "Kurumsal Web Sitesi Geliştirme",
    image: "https://i.imgur.com/w8oFEqF.png",
    description: "Modern ve profesyonel kurumsal web siteleri tasarlama ve geliştirme.",
    businessValue: [
      "7/24 çalışan profesyonel bir dijital vitrin",
      "Mobil uyumlu ve hızlı yüklenen tasarım",
      "SEO optimizasyonu ile arama motorlarında üst sıralarda yer alma",
      "Kullanıcı dostu arayüz ve kolay yönetim paneli",
      "Güvenli altyapı ve düzenli yedekleme sistemi"
    ]
  },
  "mobil-uygulama": {
    title: "Webview Mobil Uygulama Geliştirme",
    image: "https://i.imgur.com/mCI46NB.png",
    description: "İşletmeniz için özel mobil uygulamalar geliştirme.",
    businessValue: [
      "Tek kod tabanı ile hem iOS hem Android platformları",
      "Hızlı geliştirme ve kolay güncelleme",
      "Push bildirimler ile müşterilerle anlık iletişim",
      "Offline çalışabilme ve veri senkronizasyonu",
      "Düşük maliyet ve hızlı market onayı"
    ]
  }
};

export default function CourseDetail() {
  const { slug } = useParams();
  const [_, navigate] = useLocation();
  const course = courses[slug as keyof typeof courses];

  if (!course) {
    return <div>Eğitim bulunamadı</div>;
  }

  const isService = slug === "web-sitesi" || slug === "mobil-uygulama";

  return (
    <div className="min-h-screen bg-background">
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-50"
        onClick={() => {
          const scrollPosition = sessionStorage.getItem('scrollPosition');
          navigate("/");
          setTimeout(() => window.scrollTo(0, parseInt(scrollPosition || '0')), 100);
        }}
      >
        <X className="h-6 w-6" />
      </Button>

      <div className="relative">
        <div className="w-full h-[50vh]">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground">{course.description}</p>
            </div>

            <div className="space-y-8">
              {!isService && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <h2 className="text-2xl font-bold">Neden Bu Eğitimi Almalısınız?</h2>
                  <ul className="space-y-2">
                    {course.reasons?.map((reason) => (
                      <li key={reason} className="flex items-center gap-2">
                        <ChevronRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {isService && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <h2 className="text-2xl font-bold">Neden Bu Hizmeti Almalısınız?</h2>
                  <ul className="space-y-2">
                    {course.businessValue?.map((value) => (
                      <li key={value} className="flex items-center gap-2">
                        <ChevronRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            <div className="flex flex-col items-center text-center">
              <p className="text-lg text-muted-foreground mb-4">
                Size özel güncel fiyatı öğrenmek için iletişime geçin
              </p>
              <Button 
                size="lg" 
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Hemen Başvur
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}