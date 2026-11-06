export const fmtFecha = (d: Date) =>
  d.toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export const luzTexto = {
  'sol': 'Pleno sol',
  'media-sombra': 'Media sombra',
  'sombra': 'Sombra',
} as const;

export const riegoGotas = { bajo: 1, medio: 2, alto: 3 } as const;
