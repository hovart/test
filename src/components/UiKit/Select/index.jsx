import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Select({
  value,
  onChange,
  options,
  placeholder,
  withPlaceholderOption,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <>
        <div
          className="select select--large-width"
          onClick={() => setOpen(!open)}
        >
          <span className="select__placeholder">
            {value !== null ? value.label : placeholder}
          </span>
        </div>
        {open && (
          <ul className="select__dropdown">
            {!!placeholder && !!withPlaceholderOption && (
              <li
                onClick={() => {
                  setOpen(false);
                  onChange(null);
                }}
              >
                <span>{placeholder}</span>
              </li>
            )}
            {options.map(item => (
              <li
                key={item.id}
                onClick={() => {
                  setOpen(false);
                  onChange(item);
                }}
              >
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        )}
      </>
      <style jsx>{`
        .select {
          position: relative;
          width: 100%;
        }
        .select label {
          position: absolute;
          left: 12px;
          top: -6px;
          background: #fff;
          font-weight: 500;
          font-size: 10px;
          color: #99abb4;
          padding: 0 4px;
          display: block;
          line-height: 13px;
          z-index: 9;
        }
        .select--margin {
          margin-bottom: 24px;
        }
        .select--green-placeholder .select__placeholder {
          color: #30be71 !important;
        }
        .select--large-width {
          width: 225px;
        }
        .select--small-width {
          width: 150px;
        }
        .select--blue-border .select__placeholder {
          border: 2px solid #a3d2fc;
        }
        .select--disabled {
          opacity: 0.5;
          pointer-events: none;
        }
        .select__placeholder {
          font-weight: 500;
          font-size: 12px;
          color: #455a64;
          height: 38px;
          border: 1px solid #ced4da;
          padding: 0 44px 0 16px;
          border-radius: 4px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          position: relative;
          width: 100%;
          cursor: pointer;
        }
        .select__placeholder:before {
          content: '';
          width: 24px;
          height: 24px;
          background: url(/images/select-arrow-lg.svg) 0 0 no-repeat;
          position: absolute;
          right: 8px;
          top: calc(50% - 12px);
        }
        .select__dropdown {
          //display: none;
          padding: 0px;
          position: absolute;
          top: calc(100% + 5px);
          width: 100%;
          background: #fff;
          border: 1px solid #ced4da;
          -webkit-box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
          border-radius: 4px;
          z-index: 1000;
        }
        .select__dropdown li {
          list-style: none;
          cursor: pointer;
        }
        .select__dropdown li span {
          display: block;
          border-bottom: 1px solid #eef4f8;
          font-weight: 500;
          font-size: 12px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          color: #455a64;
          padding: 12px 16px;
          -webkit-transition: 0.5s;
          -o-transition: 0.5s;
          transition: 0.5s;
        }
        .select__dropdown li span:hover {
          background: #eef4f8;
        }
        .select--lg .select__placeholder {
          height: 48px;
          font-size: 14px;
        }
      `}</style>
    </>
  );
}

Select.defaultProps = {
  withPlaceholderOption: false,
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  withPlaceholderOption: PropTypes.bool,
};

export default Select;
