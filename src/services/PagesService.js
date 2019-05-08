import React from 'react';
// import fetch from 'node-fetch';

import placeholderImg from './placeholder-img.svg';
import dotImg from './dot.gif';

function fetchHomePage() {
  // We would call out to CMS to fetch page layout etc.
  const slides = [{
    id: 1,
    img: dotImg,
    imgAlt: "First slide",

    header: <>Example headline.</>,
    description: <>
      Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
      elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies
      vehicula ut id elit.
    </>,

    actionLabel: "Sign up today",
    actionLink: "#",
    textAlign: 'left',
  }, {
    id: 2,
    img: dotImg,
    imgAlt: "Second slide",

    header: <>Another example headline.</>,
    description: <>
      Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at
      eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
    </>,

    actionLabel: "Learn more",
    actionLink: "#",
  }, {
    id: 3,
    img: dotImg,
    imgAlt: "Third slide",

    header: <>One more for good measure.</>,
    description: <>
      Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at
      eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
    </>,

    actionLabel: "Browse gallery",
    actionLink: "#",
    textAlign: 'right'
  }];

  const features = [{
    id: 1,
    header: <>First featurette heading. <span className="text-muted">It'll blow your mind.</span></>,
    description: <>
      Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis
      euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
      ac cursus commodo.
    </>,

    img: placeholderImg,
    imgAlt: 'Generic placeholder image',
    imgAlign: 'right',
  }, {
    id: 2,
    header: <>Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></>,
    description: <>
      Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis
      euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
      ac cursus commodo.
    </>,

    img: placeholderImg,
    imgAlt: 'Generic placeholder image',
    imgAlign: 'left',
  }, {
    id: 3,
    header: <>And lastly, this one. <span className="text-muted">Checkmate.</span></>,
    description: <>
      Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta
      felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus,
      tellus ac cursus commodo.
    </>,

    img: placeholderImg,
    imgAlt: 'Generic placeholder image',
    imgAlign: 'right',
  }];

  const tiles = [{
    id: 1,
    img: dotImg,
    imgAlt: "Generic placeholder image",
    header: "Heading",
    description: <>
      Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
      vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
      cursus magna.
    </>,
    link: '#',
  }, {
    id: 2,
    img: dotImg,
    imgAlt: "Generic placeholder image",
    header: "Heading",
    description: <>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras
      mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris
      condimentum nibh.
    </>,
    link: '#',
  }, {
    id: 3,
    img: dotImg,
    imgAlt: "Generic placeholder image",
    header: "Heading",
    description: <>
      Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula
      porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
      fermentum massa justo sit amet risus.
    </>,
    link: '#',
  }];

  return {
    slides,
    features,
    tiles,
  }
}

const PagesService = {
  fetchHomePage,
};

export default PagesService;
