import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="pizza-block">
    <circle cx="134" cy="135" r="125" />
    <rect x="0" y="280" rx="10" ry="10" width="280" height="21" />
    <rect x="0" y="321" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="426" rx="10" ry="10" width="95" height="32" />
    <rect x="127" y="420" rx="25" ry="25" width="150" height="42" />
  </ContentLoader>
);

export default Skeleton;
