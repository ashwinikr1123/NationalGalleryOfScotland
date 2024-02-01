'use strict ';

// create False API;

const gallery = [
  {
    id: 1,
    picture:
      'https://images.unsplash.com/photo-1676387207846-f34d4bb75631?q=80&w=769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
    category: 'png',
  },
  {
    id: 2,
    picture:
      'https://images.unsplash.com/photo-1676045172073-76f962b89e36?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
    category: 'png',
  },
  {
    id: 3,
    picture:
      'https://images.unsplash.com/photo-1676045126308-7c10f6f6e8ed?q=80&w=863&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
    category: 'jpg',
  },
  {
    id: 4,
    picture:
      'https://images.unsplash.com/photo-1676040176112-a2d11e462a95?q=80&w=919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
    category: 'jpg',
  },
  {
    id: 5,
    picture:
      'https://images.unsplash.com/photo-1676045533543-274fe48953f8?q=80&w=1005&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
    category: 'jpeg',
  },
  {
    id: 6,
    picture:
      'https://images.unsplash.com/photo-1683480678765-933101b12ce1?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
    category: 'jpeg',
  },
  {
    id: 7,
    picture:
      'https://images.unsplash.com/photo-1683480677041-5db1d23266f4?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
    category: 'jpg',
  },
  {
    id: 8,
    picture:
      'https://images.unsplash.com/photo-1683480676241-1ce8aac40dfc?q=80&w=799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
    category: 'png',
  },
  {
    id: 9,
    picture:
      'https://images.unsplash.com/photo-1683480678692-5b6bdfb53147?q=80&w=767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet.',
    category: 'jpeg',
  },
];

const gridGallery = document.querySelector('.grid-gallery');
function displayGallery(galleryImageNum) {
  let displayImage = galleryImageNum.map((items) => {
    return ` <div class="frame">
        <img
          src=${items.picture}
          alt="img"
          class="image"
        />
      
      </div>`;
  });
  displayImage = displayImage.join('');
  //   console.log(displayImage);
  gridGallery.innerHTML = displayImage;
  //   frame.innerHTML = displayImage;
}
window.addEventListener('DOMContentLoaded', function () {
  displayGallery(gallery);
});
