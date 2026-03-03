import { useEffect } from 'react';

function Seo({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      const descriptionTag = document.querySelector('meta[name="description"]');
      if (descriptionTag) {
        descriptionTag.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
}

export default Seo;
