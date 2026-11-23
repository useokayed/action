# Okayed GitHub Action

Checks your iOS, macOS or Android app against App Store and Google Play rules on every pull request.

- One PR comment per app with a **Ship Score**, updated on each push (no comment spam)
- Inline annotations on the exact lines that need fixing
- Findings in GitHub code scanning (SARIF)
- Fails the check when blockers are found (you choose the level)
- Your code never leaves the GitHub runner

## Quick start

`.github/workflows/okayed.yml`:

```yaml
name: Okayed
on: [pull_request]

permissions:
  contents: read
  pull-requests: write     # PR comment
  security-events: write   # code scanning upload

jobs:
  okayed:
    runs-on: ubuntu-latest   # no Mac runner needed
    steps:
      - uses: actions/checkout@v6
      - uses: useokayed/action@v1
```

### iOS and Android in one repo (Flutter / React Native)

One job scans both `ios/` and `android/`. To get a comment per platform, use a matrix:

```yaml
    strategy:
      matrix:
        platform: [ios, android]
    steps:
      - uses: actions/checkout@v6
      - uses: useokayed/action@v1
        with:
          platform: ${{ matrix.platform }}
```

### A Mac app sold outside the Mac App Store

```yaml
      - uses: useokayed/action@v1
        with:
          platform: macos
          distribution: direct   # checks Hardened Runtime, Developer ID signing and notarization readiness
```

### Scan a built binary

```yaml
      - run: ./gradlew assembleRelease
      - uses: useokayed/action@v1
        with:
          path: app/build/outputs/apk/release/app-release.apk
```

## Inputs

| Input | Default | Description |
|---|---|---|
| `path` | `.` | Project folder, `.ipa`, `.apk`, `.aab`, a macOS `.app` (or `.zip` of one) or `.pkg`, relative to the repo root |
| `platform` | | `ios`, `macos` or `android` to scan one platform only |
| `distribution` | | macOS: `app-store` (Mac App Store rules) or `direct` (Developer ID, Hardened Runtime, notarization). Default: `.okayed/config.json`, else the signing certificate, else `app-store` |
| `fail-on` | `blocker` | `blocker`, `warning` or `never` |
| `comment` | `true` | Post/update a PR comment |
| `annotations` | `true` | Inline annotations on changed files |
| `upload-sarif` | `true` | Upload to code scanning. Set `false` on private repos without code scanning |
| `disable` | | Comma-separated rule IDs to skip |
| `token` | `github.token` | Token used for the PR comment |
| `upload` | `false` | Upload results (never source code) to your Okayed dashboard |
| `api-token` | | Organization API token from the dashboard. Pass it as a secret: `${{ secrets.OKAYED_TOKEN }}` |
| `api-url` | | Your dashboard URL (`https://…`) |

A failed upload adds a warning but never fails the check. With `upload: true`, the PR comment links to the scan in the dashboard.

## Outputs

`verdict` (GREEN/YELLOW/RED), `score` (0–100), `blockers`, `warnings`, `sarif-file`.

## Notes

- Pull requests from forks get a read-only token, so the comment is skipped with a warning; annotations and the job summary still work.
- The Action is a composite action that runs a single bundled Node 24 script (`dist/index.js`), so it works on Linux, macOS and Windows runners.

Okayed reduces rejection risk; it can't guarantee approval.
