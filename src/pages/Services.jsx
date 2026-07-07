import React from 'react'
import { ComingSoon } from '../components/ui.jsx'

export default function Services() {
  return (
    <ComingSoon
      eyebrow="Services"
      title="Beyond the classroom — guidance for the decisions around it."
      description="From academic counselling to software consulting for other institutes, Arjunova's services arm is built to extend our teaching expertise into every decision a student or a business needs help with."
      items={[
        'Academic Counselling',
        'Career Guidance',
        'College Admissions',
        'Study Abroad',
        'Corporate Training',
        'Teacher Training',
        'AI Consulting',
        'Website Development',
        'Software Development',
        'Educational Consulting',
      ]}
    />
  )
}
