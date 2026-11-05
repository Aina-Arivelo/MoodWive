export default function StatusMessage({ status, message }) {
  if (!status) return null;

  const styles = {
    loading: 'bg-blue-500/20 border-blue-400/40 text-blue-200',
    demo: 'bg-amber-500/20 border-amber-400/40 text-amber-200',
    error: 'bg-red-500/20 border-red-400/40 text-red-200',
  };

  return (
    <div className={`mb-6 px-4 py-3 rounded-xl border text-sm ${styles[status] || styles.demo}`}>
      {message}
    </div>
  );
}