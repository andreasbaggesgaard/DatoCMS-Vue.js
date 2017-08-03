import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import lazyScroll from 'scroll-lazy';
import textToDomElement from './textToDomElement';

const selector = '.showcase';
const itemSelector = '.showcase__item';

export default function test() {
  const showcase = document.querySelector(selector);
  if (!showcase) return;

  imagesLoaded(showcase).on('always', () => {
    showcase.classList.remove('is-loading');
    const masonry = new Masonry(showcase, { itemSelector });

    lazyScroll.on(next => {
      console.log('lazy');
      //const nextUrl = showcase.dataset.nextUrl;
      //const newShowcase = textToDomElement(body, selector);
      //const newItems = [...newShowcase.querySelectorAll(itemSelector)];
      //if (!nextUrl) return;

      //fetch(nextUrl)
      //.then(res => res.text())
      //.then(body => { 
        const newShowcase = textToDomElement(body, selector);
        //const newNextUrl = newShowcase.dataset.nextUrl;
        //const newItems = [...newShowcase.querySelectorAll(itemSelector)];
  

        imagesLoaded(newShowcase).on('always', () => {
          //showcase.dataset.nextUrl = newNextUrl;
          newItems.forEach(el => showcase.appendChild(el));
          masonry.appended(newItems);
          masonry.layout();
     })
          next();
        //});
      
    })
    .watch({ threshold: 300 });
  });
}

