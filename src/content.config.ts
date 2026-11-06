import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Cada .md en src/content/cartas se vuelve una carta en /cartas/<nombre-del-archivo>
const cartas = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/cartas' }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.coerce.date(),
    resumen: z.string().default(''),
    destacada: z.boolean().default(false),
    borrador: z.boolean().default(false), // true = no se publica
  }),
});

// Cada .md en src/content/jardin se vuelve una flor en /jardin/<nombre-del-archivo>
const jardin = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/jardin' }),
  schema: ({ image }) => z.object({
    nombre: z.string(),
    // Foto opcional: guárdala en src/content/jardin/fotos y escribe foto: "./fotos/lavanda.jpg"
    foto: image().optional(),
    fotoAlt: z.string().optional(),
    fotoCredito: z.string().optional(),
    cientifico: z.string(),
    luz: z.enum(['sol', 'media-sombra', 'sombra']),
    riego: z.enum(['bajo', 'medio', 'alto']),
    origen: z.string(),
    floracion: z.string(),
    altura: z.string(),
    colores: z.array(z.string()),
    dificultad: z.enum(['fácil', 'media', 'exigente']),
    descripcion: z.string(),
    cuidados: z.array(z.string()),
    favorita: z.boolean().default(false),
  }),
});

export const collections = { cartas, jardin };
