
import React from 'react'
import SiteLayout from '@/components/layouts/layout'
import Banner from '@/components/banners/banner'
import Categories from '@/components/categories/categories'
import ProductGridHome from '@/components/products/grids/home'
import { Element } from 'react-scroll'

const HomePage = () => {
  // Mock data for grocery theme
  const variables = {
    types: {
      type: 'grocery',
      banners: [
        {
          title: 'Fresh Plants & Flowers',
          description: 'Get your favorite plants delivered fast',
          image: { original: '/img/banner-grocery.jpg' }
        }
      ]
    },
    categories: {
      categories: [
        { id: 1, name: 'Indoor Plants', slug: 'indoor-plants', icon: 'indoor-plants' },
        { id: 2, name: 'Outdoor Plants', slug: 'outdoor-plants', icon: 'outdoor-plants' },
        { id: 3, name: 'Flowers', slug: 'flowers', icon: 'flowers' },
        { id: 4, name: 'Plant Care', slug: 'plant-care', icon: 'plant-care' }
      ]
    },
    products: {
      limit: 20,
      type: 'grocery'
    }
  }

  return (
    <SiteLayout>
      <Banner layout="grocery" variables={variables.types} />
      <Categories layout="grocery" variables={variables.categories} />
      <Element name="grid" className="px-4">
        <ProductGridHome
          className="pt-8 pb-20"
          variables={variables.products}
        />
      </Element>
    </SiteLayout>
  )
}

export default HomePage
