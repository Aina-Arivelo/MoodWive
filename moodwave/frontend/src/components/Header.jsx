export default function Header() {
  return (
    <header className="mb-8 md:mb-12">
      <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[var(--text)]">
        Quelle humeur aujourd’hui ?
      </h1>
      <p className="mt-2 text-[var(--text-muted)] text-sm md:text-base max-w-xl">
        Choisis ton état d’esprit. On te génère une playlist libre de droits en un clic.
      </p>
    </header>
  );
}