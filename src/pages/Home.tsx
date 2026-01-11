import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Recycle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 pt-16 pb-32 md:pt-24 md:pb-48">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary-foreground uppercase bg-primary/10 rounded-full">
                  Sustainable Fashion Marketplace
                </span>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-foreground mb-6">
                  Wear the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Change.
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                  Discover unique, upcycled, and sustainable fashion. Join the movement to redefine style with a conscience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/marketplace">
                    <Button size="lg" className="text-lg px-8 bg-primary text-primary-foreground shadow-lg hover:shadow-xl transform-gpu active:scale-95">
                      Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/customization">
                    <Button variant="outline" size="lg" className="text-lg px-8">
                      Customize
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative z-10"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-20 blur-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=800"
                  alt="Sustainable Fashion"
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5] transform transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-xl border border-border flex items-center gap-3"
                >
                  <div className="bg-green-100 p-2 rounded-full shadow-sm">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">100% Eco-Friendly</p>
                    <p className="text-xs text-muted-foreground">Verified Materials</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Recycle className="h-8 w-8 text-emerald-500" />,
                title: "Circular Economy",
                desc: "Give clothes a second life. Buy, sell, and trade pre-loved items to reduce waste."
              },
              {
                icon: <Sparkles className="h-8 w-8 text-primary" />,
                title: "Custom Upcycling",
                desc: "Transform your old pieces into something new with our network of expert tailors."
              },
              {
                icon: <Leaf className="h-8 w-8 text-green-500" />,
                title: "Sustainable Materials",
                desc: "Curated collection of items made from organic, recycled, and eco-friendly fabrics."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-8 rounded-2xl bg-muted hover:bg-card hover:shadow-lg transition-all duration-300 border border-transparent hover:border-border"
              >
                <div className="mb-4 bg-white w-16 h-16 rounded-xl shadow-sm flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}