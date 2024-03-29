'use strict ';

// create False API;

const gallery = [
  {
    id: 1,
    picture:
      'https://images.unsplash.com/photo-1676387207846-f34d4bb75631?q=80&w=769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
    category: 'War',
  },
  {
    id: 2,
    picture:
      'https://images.unsplash.com/photo-1676045172073-76f962b89e36?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
    category: 'Liberation',
  },
  {
    id: 3,
    picture:
      'https://images.unsplash.com/photo-1676045126308-7c10f6f6e8ed?q=80&w=863&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
    category: 'Liberation',
  },
  {
    id: 4,
    picture:
      'https://images.unsplash.com/photo-1676040176112-a2d11e462a95?q=80&w=919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
    category: 'Pact',
  },
  {
    id: 5,
    picture:
      'https://images.unsplash.com/photo-1676045533543-274fe48953f8?q=80&w=1005&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
    category: 'Pact',
  },
  {
    id: 6,
    picture:
      'https://images.unsplash.com/photo-1683480678765-933101b12ce1?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
    category: 'Pact',
  },
  {
    id: 7,
    picture:
      'https://images.unsplash.com/photo-1683480677041-5db1d23266f4?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
    category: 'War',
  },
  {
    id: 8,
    picture:
      'https://images.unsplash.com/photo-1683480676241-1ce8aac40dfc?q=80&w=799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
    category: 'War',
  },
  {
    id: 9,
    picture:
      'https://images.unsplash.com/photo-1683480678692-5b6bdfb53147?q=80&w=767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
    category: 'Independence',
  },
  {
    id: 10,
    picture:
      'https://images.unsplash.com/photo-1676393336630-8ca0f45b6049?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
    category: 'War',
  },
  {
    id: 11,
    picture:
      'https://images.unsplash.com/photo-1676387297621-98b7c8c897f9?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
    category: 'Independence',
  },
  {
    id: 12,
    picture:
      'https://images.unsplash.com/photo-1676387297810-8dec2d60f7da?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
    category: 'Independence',
  },
];

// selectors
const gridGallery = document.querySelector('.grid-gallery');
const frame = document.querySelector('.frame');

const btnsSection = document.querySelector('.btns');

//on windows loading

window.addEventListener('DOMContentLoaded', function () {
  displayGalleryImages(gallery);
  displayGalleryBtns();
});

// DRY for getting images dynamically from the
// dummy API
function displayGalleryImages(indexOfImage) {
  let displayGallery = indexOfImage.map((items) => {
    return `<div class="frame">
    <img src="${items.picture}" alt="img" class="image" />
  </div>`;
  });
  displayGallery = displayGallery.join('');
  gridGallery.innerHTML = displayGallery;
}
// DRY for adding buttons and filter functionality

function displayGalleryBtns() {
  // adding btns dynamically and applying filter
  // functionality

  // add all in the button section using reduce
  const categoryContainer = gallery.reduce(
    (acc, curr) => {
      if (!acc.includes(curr.category)) {
        acc.push(curr.category);
      }
      return acc;
    },
    ['All']
  );
  // console.log(categoryContainer);

  // add html structure using map functions
  const showBtns = categoryContainer
    .map((items) => {
      return `<a class="btn" data-category=${items}>${items}</a>`;
    })
    .join('');
  btnsSection.innerHTML = showBtns;
  // after loading btn we have to select it
  const btn = document.querySelectorAll('.btn');

  // click event and filter functionality in btn

  btn.forEach((items) => {
    items.addEventListener('click', function (e) {
      const categoryId = e.currentTarget.dataset.category;
      // console.log(categoryId);
      let newGallery = gallery;
      const filteredCategory = newGallery.filter((el) => {
        // console.log(el);
        if (categoryId === el.category) {
          return el;
        }
      });
      if (categoryId === 'All') {
        displayGalleryImages(newGallery);
      } else {
        displayGalleryImages(filteredCategory);
      }
    });
  });
}
