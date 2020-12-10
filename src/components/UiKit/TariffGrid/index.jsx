import React from 'react';
import PropTypes from 'prop-types';
import TariffGridItem from './TariffGridItem';

function TariffGrid({ items }) {
  return (
    <>
      <div className="tariffGrid">
        {items.map((item, i) => (
          <TariffGridItem key={i} {...item} />
        ))}
      </div>
      <style jsx>{`
        .tariffGrid {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          width: 100%;
          border-bottom: 1px solid #eef4f8;
          margin-bottom: 24px;
        }
      `}</style>
    </>
  );
}

TariffGrid.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TariffGrid;
