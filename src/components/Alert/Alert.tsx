import React from 'react';

interface Props extends React.PropsWithChildren {
  type: 'success' | 'primary' | 'warning' | 'danger';
  onDismiss?: React.MouseEventHandler<HTMLElement>;
}

const Alert: React.FC<Props> = ({ type, onDismiss, children }) => {
  return (
    <>
      {type !== 'success' &&
      type !== 'primary' &&
      type !== 'warning' &&
      type !== 'danger' ? null : (
        <div
          className={`w-100 m-3 alert alert-${type} d-flex justify-content-between align-items-center`}
          role="alert"
        >
          {children}
          {onDismiss === undefined ? null : (
            <button
              type="button"
              className={`btn btn-outline-${type} text-dark-emphasis`}
              onClick={onDismiss}
            >
              X
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Alert;
