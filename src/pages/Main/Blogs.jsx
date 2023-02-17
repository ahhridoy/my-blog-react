import React from 'react';
import BlogCard from '../../components/BlogCard';

const Blogs = () => {
   return (
      <div className='grid grid-cols-3  gap-8'>
         <BlogCard />
         <BlogCard />
         <BlogCard />
         <BlogCard />
         <BlogCard />
         <BlogCard />
      </div>
   );
};

export default Blogs;