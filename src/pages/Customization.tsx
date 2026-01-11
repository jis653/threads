import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Scissors, Palette, Ruler } from 'lucide-react';

export default function Customization() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    {
      id: 'embroidery',
      title: 'Custom Embroidery',
      icon: <Scissors className="h-6 w-6" />,
      desc: 'Add initials, patterns, or artwork.',
      price: '+$15'
    },
    {
      id: 'dye',
      title: 'Natural Dyeing',
      icon: <Palette className="h-6 w-6" />,
      desc: 'Refresh color with organic indigo or sage.',
      price: '+$25'
    },
    {
      id: 'tailoring',
      title: 'Tailoring & Fit',
      icon: <Ruler className="h-6 w-6" />,
      desc: 'Adjust hem, waist, or sleeves for perfect fit.',
      price: '+$20'
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Customization Studio</h1>
          <p className="text-xl text-muted-foreground">Make it truly yours. Choose how you want to upcycle your item.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {options.map((option) => (
            <Card 
              key={option.id}
              className={`cursor-pointer transition-all duration-300 ${
                selectedOption === option.id 
                  ? 'ring-2 ring-primary shadow-xl scale-105 bg-primary/5' 
                  : 'hover:shadow-lg hover:scale-105'
              }`}
              onClick={() => setSelectedOption(option.id)}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 ${
                  selectedOption === option.id ? 'bg-primary/10 text-primary shadow-sm' : 'bg-muted text-muted-foreground'
                }`}>
                  {option.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{option.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{option.desc}</p>
                <span className="inline-block px-3 py-1 bg-muted rounded-full text-sm font-medium">
                  {option.price}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
          <h2 className="text-2xl font-bold mb-6">Preview Request</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Special Instructions
              </label>
              <textarea 
                className="w-full min-h-[120px] p-4 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                placeholder="Describe your customization request in detail..."
              ></textarea>
            </div>
            <Button size="lg" className="w-full bg-primary text-primary-foreground shadow-sm hover:bg-primary/90" disabled={!selectedOption}>
              {selectedOption ? 'Proceed to Checkout' : 'Select an Option Above'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}