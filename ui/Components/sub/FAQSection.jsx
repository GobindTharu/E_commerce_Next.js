'use client'

import { Accordion, AccordionItem } from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'



const faqs = [
  {
    question: 'What technologies do you use?',
    answer: 'I work with the MERN stack, including MongoDB, Express.js, React, and Node.js. I also use Tailwind CSS, Next.js, and other frontend tools.',
  },
  {
    question: 'Are you open to internship opportunities?',
    answer: 'Yes! I’m actively seeking frontend development internships to grow my skills and contribute to a team.',
  },
  {
    question: 'Where are you currently studying?',
    answer: 'I’m pursuing a B.Sc. CSIT at Bhairahawa Multiple Campus, Tribhuvan University.',
  },
]

export default function FAQSection() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, idx) => (
          <AccordionItem value={`faq-${idx}`} key={idx} className="border rounded-2xl p-4 shadow-sm">
            <motion.div whileTap={{ scale: 0.98 }} className="flex items-center justify-between cursor-pointer">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
            <div className="mt-2 text-sm text-gray-600">{faq.answer}</div>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
