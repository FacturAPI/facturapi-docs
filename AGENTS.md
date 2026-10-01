# AGENTS.md

## Public documentation and confidentiality

- This is a public repository. Publish only the intended public API contract and
  information authorized for public documentation.
- Private sources may be consulted to verify API behavior. Never publish their
  source code, internal file paths, commit hashes, implementation details,
  private data, or internal plans in files, commit messages, pull requests,
  review comments, issues, or CI output.
- Keep evidence from private sources in private files or repositories. Explain
  public corrections in terms of observable API behavior without citing private
  implementation sources.
- Keep PR titles and descriptions focused on the documentation change. Omit
  unrelated internal plans and conversational context.
- Before committing or publishing, review the full diff, commit messages, and
  accompanying descriptions for confidential information.
- If confidential information was published, a later deletion commit is not
  sufficient. Clean affected branch history, verify remote references, and
  explicitly report any host-side references or cached copies that remain.

## API contract changes

- Verify changes to types, required fields, defaults, authentication, parameters,
  and status codes against authoritative sources. Do not treat an SDK declaration
  or a review comment alone as proof of API behavior.
- Keep the Spanish and English OpenAPI contracts structurally aligned.
- Run the relevant repository checks for specification changes.
