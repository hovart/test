import React from 'react';
import PropTypes from 'prop-types';

function Button({
  children,
  onClick,
  variant,
  borderSize,
  borderColor,
  borderRadius,
  color,
  type,
  w,
  h,
  p,
  m,
  minWidth,
  bgcolor,
  fontSize,
  fontWeight,
  fontFamily,
}) {
  return (
    <>
      <div className="root">
        <button className={`button ${variant}`} onClick={onClick} type={type}>
          {children}
        </button>
      </div>
      <style jsx>{`
        .root :global(.button) {
          display: flex;
          position: relative;
          align-items: center;
          justify-content: center;
          border-radius: ${borderRadius}px;
          width: ${w};
          max-width: ${w};
          height: ${h};
          color: ${color};
          background: ${bgcolor};
          padding: ${p};
          margin: ${m};
          min-width: ${minWidth};
          font-weight: ${fontWeight};
          font-size: ${fontSize};
          font-family: ${fontFamily};
          cursor: pointer;
          border-width: ${borderSize};
          border-color: ${borderColor};
          box-sizing: border-box;
          outline: 0;
        }

        .root :global(.outlined) {
          border-width: ${borderSize};
          border-style: solid;
          border-color: ${borderColor};
          color: ${color};
          background-color: transparent;
          box-sizing: border-box;
          outline: 0;
        }
        .root :global(.outlined):hover {
          background-color: ${borderColor};
        }
      `}</style>
    </>
  );
}

Button.defaultProps = {
  variant: 'contained',
  borderSize: '1.5px',
  borderColor: '#1E88E5',
  borderRadius: 3,
  bgcolor: '#1E88E5',
  color: '#fff',
  type: 'button',
  w: '100%',
  h: 'unset',
  p: 0,
  m: 0,
  minWidth: 'unset',
  fontSize: '12px',
  fontWeight: 600,
  fontFamily: 'Montserrat',
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined']),
  borderSize: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.number,
  color: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
  h: PropTypes.string,
  w: PropTypes.string,
  p: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  m: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minWidth: PropTypes.string,
  bgcolor: PropTypes.string,
  fontSize: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
  fontWeight: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
  fontFamily: PropTypes.string,
};

export default Button;
