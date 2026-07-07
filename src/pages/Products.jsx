import React from 'react'
import { ComingSoon } from '../components/ui.jsx'

export default function Products() {
  return (
    <ComingSoon
      eyebrow="Products"
      title="The tools we're building for the classroom, and beyond it."
      description="Arjunova's product line will extend teaching into software — AI-powered study tools, apps and materials built by the same team that teaches your classes."
      items={[
        'AI Tools',
        'Educational Software',
        'Mobile Apps',
        'Digital Products',
        'Books',
        'Courses Marketplace',
        'Learning Kits',
        'Merchandise',
        'Subscription Plans',
      ]}
    />
  )
}
