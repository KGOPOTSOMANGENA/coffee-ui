import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import CategoryCard from './components/CategoryCard/CategoryCard'; // You'll create this
import MilkshakeCard from './components/MilkshakeCard/MilkshakeCard'; // You'll create this
import BlogPostCard from './components/BlogPostCard/BlogPostCard'; // You'll create this
import Footer from './components/Footer/Footer'; // You'll create this

// Import your category and milkshake images
import coffeeMocha from './assets/images/coffee-mocha.jpg';
import espressoAmericano from './assets/images/espresso-americano.jpg';
import cappuccino from './assets/images/cappuccino.jpg';
import mochaShake from './assets/images/mocha-shake.jpg';
import lavenderShake from './assets/images/lavender-shake.jpg';
import caramelShake from './assets/images/caramel-shake.jpg';
import blog1 from './assets/images/blog-post-1.jpg';
import blog2 from './assets/images/blog-post-2.jpg';
import blog3 from './assets/images/blog-post-3.jpg';

import './App.css'; // For general app layout/spacing, if needed

const App: React.FC = () => {
  return (
    <div>
      <div className="app-container">
      <Header />
      <HeroSection />

      <section className="top-categories-section">
        <h2>TOP CATEGORIES</h2>
        <p>Explore The Recent Most Bought Drinks This Week</p>
        <div className="category-cards-container">
          <CategoryCard imageSrc={coffeeMocha} title="Coffee Mocha" />
          <CategoryCard imageSrc={espressoAmericano} title="Espresso Americano" />
          <CategoryCard imageSrc={cappuccino} title="Cappuccino" />
        </div>
      </section>

      <section className="top-milkshakes-section">
        <h2>TOP MILK SHAKES</h2>
        <p>Explore The Recent Most Bought Shakes This Week</p>
        <div className="milkshake-cards-container">
          <MilkshakeCard imageSrc={mochaShake} title="Mocha Shake" price={20.00} likes={30} />
          <MilkshakeCard imageSrc={lavenderShake} title="Lavender Shake" price={20.00} likes={30} />
          <MilkshakeCard imageSrc={caramelShake} title="Caramel Shake" price={20.00} likes={30} />
        </div>
      </section>

      <section className="latest-blogs-section">
        <h2>LATEST BLOGS</h2>
        <p>Explore The Recent Most Bought Shakes This Week</p> {/* This description seems off for blogs, you might want to adjust it */}
        <div className="blog-posts-container">
          <BlogPostCard
            imageSrc={blog1}
            title="Coffee Connoisseur"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, et interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus."
          />
          <BlogPostCard
            imageSrc={blog2}
            title="Coffee Connoisseur"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, et interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus."
          />
          <BlogPostCard
            imageSrc={blog3}
            title="Coffee Connoisseur"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, et interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus."
          />
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
};

export default App;