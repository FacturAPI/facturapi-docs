# Changelog

## Unreleased

### Paginación por cursores (`pagination=cursor`)

- Nuevo modo de paginación opt-in `pagination=cursor`, **recomendado** para
  listas grandes: no ejecuta conteos exactos sobre la colección, por lo que es
  más rápido que la paginación por páginas.
- Nuevos parámetros `after` y `before` para navegar entre páginas de forma
  secuencial. Cada búsqueda regresa `previous_cursor` y `next_cursor`.
- Nuevo campo `totals_are_capped` en las respuestas de búsqueda de ambos modos:
  cuando hay más de 3,000 resultados, `total_results` regresa `3000` y
  `totals_are_capped` es `true` ("más de 3,000").
- La paginación por páginas (`pagination=page`, el modo por defecto) queda
  limitada a 30 páginas.
