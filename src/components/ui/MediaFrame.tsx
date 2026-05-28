import { useState } from 'react';
import { resolveAsset } from '../../assets/media';

export default function MediaFrame({
  src,
  label,
  className = '',
  rounded = false,
}: {
  src?: string;
  label: string;
  className?: string;
  rounded?: boolean;
}) {
  const resolvedSrc = resolveAsset(src);
  const [failed, setFailed] = useState(!resolvedSrc);

  return (
    <div className={`visual-frame ${rounded ? 'visual-round' : ''} ${className}`}>
      {!failed && resolvedSrc ? (
        <img src={resolvedSrc} alt={label} loading="lazy" decoding="async" onError={() => setFailed(true)} />
      ) : null}
      {failed ? <span className="visual-label">{label}</span> : null}
    </div>
  );
}
