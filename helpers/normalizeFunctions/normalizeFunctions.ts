export function normalizeLanguages(languages: string[]): string {
  const res = languages
    .map(language => {
      return language.toUpperCase().slice(0, 2);
    })
    .join('/');
  return res;
}

export function normalizeNameForAvatar(name: string): string {
  if (!name) return '';

  const parts = name.trim().split(/\s+/);

  const first = parts[0]?.[0]?.toUpperCase() ?? '';
  const last = parts[1]?.[0]?.toUpperCase() ?? '';

  if (!first && !last) return '';

  if (!last) return `${first}.`;

  return `${first}.${last}.`;
}
