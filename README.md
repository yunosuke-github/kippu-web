# kippu-web

Kippu のフロントエンド（React）と BFF（GraphQL）の pnpm モノレポ。

| パッケージ | 内容 | ポート |
|---|---|---|
| `apps/web` | Vite + React + TypeScript の SPA | 5173 |
| `apps/bff` | GraphQL Yoga の BFF | 4000 |

## 必要なもの

| ツール | バージョン |
|---|---|
| Node.js | 26（LTS。`.nvmrc` 参照 → `nvm use`） |
| pnpm | 12（`package.json` の `packageManager` 参照） |

## よく使うコマンド

```bash
nvm use          # Node 26 に切り替え
pnpm install
pnpm dev         # web と bff を同時に起動
pnpm lint        # Biome（lint + format チェック）
pnpm format      # Biome で自動整形
pnpm typecheck   # 全パッケージの型チェック
pnpm build
```

Web の `/graphql` へのリクエストは Vite のプロキシで BFF（`localhost:4000`）に中継されます。

```bash
curl -s -X POST localhost:5173/graphql -H 'content-type: application/json' -d '{"query":"{ health }"}'
# => {"data":{"health":"ok"}}
```
