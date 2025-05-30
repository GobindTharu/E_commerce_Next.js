'use client'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'How do I track my order?',
    answer: 'You can track your order by logging into your account or using the tracking number provided in your order confirmation email. .',
  },
  {
    question: 'Can i change or Cancel my order?',
    answer: "No, you can't  it against our term and conditions we have our own Policy.",
  },
  {
    question: 'What payment methods do you accept ?',
    answer: 'We accept eSewa, Khalti, IME pay, FonePay, SmartQR any Digital pay platform in Nepal. ',
  },
  {
    question: 'What is your return/exchange policy?',
    answer: 'Our return/exchange policy is , 7-day returns for full refund. ',
  },
]


export default function FAQSection() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, idx) => (
          <AccordionItem value={`faq-${idx}`} key={idx} className="border rounded-2xl shadow-sm">
            <AccordionTrigger asChild>
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-between p-4 cursor-pointer"
              >
                <h3 className="text-lg font-medium text-left">{faq.question}</h3>
                <ChevronDown className="w-5 h-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </motion.button>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-sm text-gray-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
