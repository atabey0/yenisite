import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactSection() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    const mailtoLink = `mailto:atabey0010@gmail.com?subject=${encodeURIComponent(`[Website Contact] ${data.subject}`)}&body=${encodeURIComponent(`Ad Soyad: ${data.name}\nE-posta: ${data.email}\n\nMesaj:\n${data.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">İletişime Geçin</h2>
          <p className="text-xl text-muted-foreground">
            Sorularınız için bana ulaşın
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ad Soyad</label>
                      <Input 
                        {...register("name", { required: true })}
                        placeholder="Adınız Soyadınız"
                        className={errors.name ? "border-red-500" : ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">E-posta</label>
                      <Input 
                        {...register("email", { 
                          required: true,
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        })}
                        type="email"
                        placeholder="ornek@email.com"
                        className={errors.email ? "border-red-500" : ""}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Konu</label>
                    <Input 
                      {...register("subject", { required: true })}
                      placeholder="Mesajınızın konusu"
                      className={errors.subject ? "border-red-500" : ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Mesaj</label>
                    <Textarea
                      {...register("message", { required: true })}
                      placeholder="Mesajınızı buraya yazın..."
                      rows={5}
                      className={errors.message ? "border-red-500" : ""}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Mesaj Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1">E-posta</h3>
                <p className="text-muted-foreground">atabey0010@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}