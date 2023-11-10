import React from 'react';

const CopyLinkInputNpx = () => {
  const linkValue = 'npx apollomatic';

  const handleCopyClick = () => {
    const el = document.createElement('textarea');
    el.value = linkValue;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return (
    <div className="container mt-5">
      <div className="input-group">
        <div className="form-control" id="linkInput" readOnly>
          {linkValue}
        </div>
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleCopyClick}
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default CopyLinkInputNpx;