# Cartas eternas

Sitio hecho con Astro. Dos secciones que crecen solas: **Cartas** y **Jardín**.

## Empezar
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist (sitio estático)
```

## Agregar una carta
Crea `src/content/cartas/nombre-de-la-carta.md` (el nombre del archivo es la URL):
```md
---
titulo: "Título"
fecha: 2026-04-01
resumen: "Una línea que aparece en la lista."
---
Tu carta aquí. El último párrafo se muestra con letra manuscrita: úsalo para la despedida.
```

## Agregar una flor
Crea `src/content/jardin/nombre-flor.md`:
```md
---
nombre: "Tulipán"
cientifico: "Tulipa gesneriana"
luz: "sol"              # sol | media-sombra | sombra
riego: "medio"          # bajo | medio | alto
origen: "Asia central"
floracion: "Primavera"
altura: "30 a 60 cm"
colores: ["rojo", "rosa"]
dificultad: "media"     # fácil | media | exigente
descripcion: "Frase corta para la tarjeta."
cuidados:
  - "Un cuidado por línea."
favorita: false         # true para mostrarla en la portada
foto: "./fotos/tulipan.jpg"   # opcional, ver abajo
fotoAlt: "Tulipanes rojos"     # opcional
fotoCredito: "Foto: Autor / Unsplash"  # opcional
---
Notas libres en markdown.
```
Si falta o está mal algún campo, Astro te avisa con el error exacto al compilar.

## Fotos de las flores
1. Descarga la foto (por ejemplo de Unsplash o Pexels, o una tuya) y ponla en `src/content/jardin/fotos/`.
2. En el `.md` de la flor agrega `foto: "./fotos/nombre.jpg"`.
Astro la optimiza y la recorta sola (formato 4:3 en tarjetas, 3:2 en la página de la flor). Sin foto, se muestra la inicial de la flor.

## Escribir cartas
- **Texto rosa manuscrito:** cualquier línea que empiece con `>` (firmas, dedicatorias, frases especiales).
- **Matemáticas:** `$E = mc^2$` en línea, o en bloque:
  ```
  $$\int_0^1 x^2\,dx = \frac{1}{3}$$
  ```
  Si necesitas escribir un signo de pesos, usa `\$`.
- **Imágenes:** guárdalas en `src/content/cartas/fotos/` (nombres sin acentos ni espacios) y usa `![descripción](./fotos/nombre.jpg)`. Deja una línea en blanco antes y después de la imagen.
- **Borrador:** agrega `borrador: true` al encabezado para que la carta no se publique.
- Los archivos que empiezan con `_` se ignoran.
