export default function Divider({ className = '' }: { className?: string }) {
  return <span aria-hidden="true" className={`gold-rule ${className}`} />;
}
