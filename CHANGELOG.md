# Changelog

## Unreleased

### Paginación por cursores (`pagination=cursor`)

- Nuevo modo de paginación opt-in `pagination=cursor`, **recomendado** para
  listas grandes: recorre todos los resultados sin el tope de 30 páginas del
  modo `page`, con páginas estables aunque cambien los datos.
- Nuevos parámetros `after` y `before` para navegar entre páginas de forma
  secuencial. Cada búsqueda regresa `previous_cursor` y `next_cursor`.
- Nuevo campo `totals_are_capped` en las respuestas de búsqueda de ambos modos:
  cuando hay más de 3,000 resultados, `total_results` regresa `3000` y
  `totals_are_capped` es `true` ("más de 3,000").
- La paginación por páginas (`pagination=page`, el modo por defecto) queda
  limitada a 30 páginas.
