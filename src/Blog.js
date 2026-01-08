import React from 'react';

function Blog() {
  React.useEffect(() => {
    window.location.replace('https://lit-blog-6d649.web.app/')
  }, [])

  return null;
}

export default Blog;