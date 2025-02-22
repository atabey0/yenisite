import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { Link } from "wouter";

// Particle animation component
function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.offsetWidth) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.offsetHeight) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(147, 51, 234, 0.5)';
        ctx.fill();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle(
        Math.random() * canvas.offsetWidth,
        Math.random() * canvas.offsetHeight
      ));
    }

    // Animation loop
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();

        // Draw connections
        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(147, 51, 234, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}

const courses = [
  {
    title: "İleri Seviye Teknik Analiz",
    image: "https://i.imgur.com/T0gOu3b.png",
    slug: "teknik-analiz"
  },
  {
    title: "Temel Seviye Siber Güvenlik",
    image: "https://i.imgur.com/1JD1dNT.png",
    slug: "siber-guvenlik"
  },
  {
    title: "Kurumsal Web Sitesi Geliştirme",
    image: "https://i.imgur.com/w8oFEqF.png",
    slug: "web-sitesi"
  },
  {
    title: "Webview Mobil Uygulama Geliştirme",
    image: "https://i.imgur.com/mCI46NB.png",
    slug: "mobil-uygulama"
  }
];

export default function HeroSection() {
  const [currentCourse, setCurrentCourse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCourse((prev) => (prev + 1) % courses.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen pt-16 flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center font-sans">
              <div className="flex justify-center gap-4">
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Geleceğe
                </span>
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Bir
                </span>
              </div>
              <div className="mt-2">
                <span>Adım</span>
              </div>
            </h1>
            <div className="flex gap-4">
              <Button size="lg" className="group" onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}>
                Eğitimleri İncele
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                İletişime Geç
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-600/20 rounded-lg blur-3xl" />
              <div className="relative bg-background/80 backdrop-blur-sm border rounded-lg p-8">
                <AnimatePresence mode="wait">
                  <Link href={`/egitim/${courses[currentCourse].slug}`} onClick={() => window.scrollTo(0, 0)}>
                    <motion.div
                      key={currentCourse}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                        <span className="text-white text-lg font-medium">Detaylı Bilgi</span>
                      </div>
                      <img
                        src={courses[currentCourse].image}
                        alt={courses[currentCourse].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                        <h3 className="text-lg font-medium">{courses[currentCourse].title}</h3>
                      </div>
                    </motion.div>
                  </Link>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}