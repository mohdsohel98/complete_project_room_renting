import React from 'react'
import { Search, Home, Users, Clock } from 'lucide-react';
function HowItWork() {
   const Steps = [
     {
    icon: <Search className="h-8 w-8" />,
    title: 'Search',
    description: 'Browse thousands of listings to find your perfect match based on your preferences and budget.',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Connect',
    description: 'Contact potential roommates or property owners directly through our platform.',
  },
  {
    icon: <Home className="h-8 w-8" />,
    title: 'Move In',
    description: 'Visit your favorite places, finalize details, and start your new chapter in the perfect space.',
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Save Time',
    description: 'Our streamlined process helps you find accommodations faster than traditional methods.',
  },
   ]
  return (
    <section className="py-16 bg-stone-100 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-neutral-800 mb-3">How It Works</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Finding your ideal living situation is easy with our simple, step-by-step process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">{step.title}</h3>
              <p className="text-neutral-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  )
}

export default HowItWork