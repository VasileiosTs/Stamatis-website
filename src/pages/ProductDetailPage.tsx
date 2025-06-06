
import React from 'react'
import { useParams } from 'react-router-dom'
import SiteLayout from '@/components/layouts/layout'

const ProductDetailPage = () => {
  const { slug } = useParams()

  return (
    <SiteLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Product Detail: {slug}</h1>
        <p>Product detail page will be implemented here</p>
      </div>
    </SiteLayout>
  )
}

export default ProductDetailPage
