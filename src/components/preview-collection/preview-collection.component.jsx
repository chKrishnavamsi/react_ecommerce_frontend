import React from 'react';
import './preview-collection.styles.scss';
import PreviewItem from '../preview-item/preview-item.component'

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...itemProps }) => (
          <PreviewItem key={id} {...itemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;