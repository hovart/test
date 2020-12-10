import React from 'react';
import PropTypes from 'prop-types';

function TariffGridItem({ days, price, km }) {
  return (
    <>
      <div className="tariff-item">
        <span className="tariff-item__title">
          {days} day
          {days > 1 && 's'}
        </span>
        <div className="tariff-item__content">
          <div className="tariff-item__price">{price.toFixed(1)} €</div>
          <div className="tariff-item__km">{km ? km.toFixed(1) : '∞'} km</div>
        </div>
      </div>
      <style jsx>{`
        .tariff-item {
          width: calc(100% / 10);
        }
        .tariff-item:first-child,
        .tariff-item:nth-child(11),
        .tariff-item:nth-child(21),
        .tariff-item:nth-child(31) {
          border-radius: 6px 0 0 6px;
        }
        .tariff-item:nth-child(10),
        .tariff-item:nth-child(20),
        .tariff-item:nth-child(30) {
          border-radius: 0 6px 6px 0;
          border-right: 1px solid #eef4f8;
        }

        .tariff-item {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          text-align: center;
          border: 1px solid #eef4f8;
          margin-bottom: 20px;
          overflow: hidden;
          border-right: 0;
        }
        .tariff-item__title {
          font-weight: 500;
          font-size: 10px;
          line-height: 12px;
          color: #99abb4;
          padding: 10px 0;
          background: #fbfcfd;
          border-bottom: 1px solid #eef4f8;
        }
        .tariff-item__content {
          padding: 0 7px;
        }
        .tariff-item__price {
          font-weight: 500;
          font-size: 12px;
          line-height: 15px;
          color: #455a64;
          padding: 12px 0;
          border-bottom: 1px solid #eef4f8;
        }
        .tariff-item__km {
          font-weight: 500;
          font-size: 10px;
          line-height: 12px;
          color: #455a64;
          padding: 8px 0;
        }
      `}</style>
    </>
  );
}

TariffGridItem.defaultProps = {
  km: '∞',
};

TariffGridItem.propTypes = {
  days: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  km: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default TariffGridItem;
