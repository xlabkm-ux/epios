# 🗺️ PROJECT MAP — epos
> Автоматически сгенерировано: `2026-05-11 22:33:33`
> Скрипт: `node dev_studio/refresh.js`

## 📊 Telemetry / Context Health
| Metric | Value | Note |
|---|---|---|
| **Total Files** | `27` | Только JS/TS/TSX исходники |
| **Total Lines** | `909` | Суммарно по проекту |
| **Project Weight** | `~10 671 tokens` | Оценка (4 символа/токен) |
| **Context Pressure** | `8.3%` | Нагрузка на окно 128k (Full Scan) |
| **Map Efficiency** | `~80%` | Экономия контекста через карту |

---

## Высокоуровневая архитектура
> Связи между основными пакетами и приложениями

```mermaid
flowchart LR

subgraph 0["apps"]
subgraph 1["demo-shell"]
subgraph 2["dist"]
subgraph 3["assets"]
4["index-DbI_g9lV.js"]
end
end
subgraph 5["src"]
6["App.tsx"]
D["main.tsx"]
end
end
end
subgraph 7["node_modules"]
subgraph 8[".pnpm"]
subgraph 9["react@18.3.1"]
subgraph A["node_modules"]
subgraph B["react"]
C["index.js"]
end
end
end
subgraph E["react-dom@18.3.1_react@18.3.1"]
subgraph F["node_modules"]
subgraph G["react-dom"]
H["client.js"]
end
end
end
subgraph N["fastify@4.29.1"]
subgraph O["node_modules"]
subgraph P["fastify"]
Q["fastify.js"]
end
end
end
subgraph 15["vitest@1.6.1_@types+node@25.6.2"]
subgraph 16["node_modules"]
subgraph 17["vitest"]
subgraph 18["dist"]
19["index.js"]
1C["config.cjs"]
end
end
end
end
subgraph 1M["drizzle-orm@0.30.10_@types+_e0e2009336beb99158b32f944ddf65e4"]
subgraph 1N["node_modules"]
subgraph 1O["drizzle-orm"]
1P["index.js"]
subgraph 1Q["postgres-js"]
1R["index.js"]
end
subgraph 1T["pg-core"]
1U["index.js"]
end
end
end
end
end
end
subgraph I["packages"]
subgraph J["api"]
subgraph K["src"]
L["index.ts"]
M["server.ts"]
end
end
subgraph R["application"]
subgraph S["src"]
T["index.ts"]
end
end
subgraph U["domain"]
subgraph V["coverage"]
W["block-navigation.js"]
X["prettify.js"]
Y["sorter.js"]
end
subgraph Z["src"]
10["index.ts"]
11["mission.ts"]
12["node.ts"]
end
subgraph 13["test"]
14["domain-smoke.test.ts"]
1A["node-invariants.test.ts"]
end
1B["vitest.config.ts"]
end
subgraph 1D["infrastructure-mcp"]
subgraph 1E["src"]
1F["index.ts"]
end
end
subgraph 1G["infrastructure-models"]
subgraph 1H["src"]
1I["index.ts"]
end
end
subgraph 1J["infrastructure-postgres"]
subgraph 1K["src"]
1L["graph.repository.ts"]
1S["schema.ts"]
20["index.ts"]
21["mission.repository.ts"]
end
end
subgraph 1V["ports"]
subgraph 1W["src"]
1X["index.ts"]
1Y["domain.repository.port.ts"]
1Z["graph.repository.port.ts"]
end
end
subgraph 22["infrastructure-runtime"]
subgraph 23["src"]
24["index.ts"]
end
end
subgraph 25["observability"]
subgraph 26["src"]
27["index.ts"]
end
end
subgraph 28["testing"]
subgraph 29["src"]
2A["fixtures.ts"]
2B["index.ts"]
end
end
end
6-->C
D-->6
D-->C
D-->H
L-->M
M-->Q
10-->11
10-->12
14-->10
14-->19
1A-->10
1A-->19
1B-->1C
1L-->1S
1L-->10
1L-->1X
1L-->1P
1L-->1R
1S-->1U
1X-->1Y
1X-->1Z
1Y-->10
1Z-->10
20-->1L
20-->21
20-->1S
21-->1S
21-->10
21-->1X
21-->1P
21-->1R
2A-->10
2B-->2A
```

## Детальная карта компонентов
> Полный граф зависимостей всех файлов проекта

```mermaid
flowchart LR

subgraph 0["apps"]
subgraph 1["demo-shell"]
subgraph 2["dist"]
subgraph 3["assets"]
4["index-DbI_g9lV.js"]
end
end
subgraph 5["src"]
6["App.tsx"]
D["main.tsx"]
end
end
end
subgraph 7["node_modules"]
subgraph 8[".pnpm"]
subgraph 9["react@18.3.1"]
subgraph A["node_modules"]
subgraph B["react"]
C["index.js"]
end
end
end
subgraph E["react-dom@18.3.1_react@18.3.1"]
subgraph F["node_modules"]
subgraph G["react-dom"]
H["client.js"]
end
end
end
subgraph N["fastify@4.29.1"]
subgraph O["node_modules"]
subgraph P["fastify"]
Q["fastify.js"]
end
end
end
subgraph 15["vitest@1.6.1_@types+node@25.6.2"]
subgraph 16["node_modules"]
subgraph 17["vitest"]
subgraph 18["dist"]
19["index.js"]
1C["config.cjs"]
end
end
end
end
subgraph 1M["drizzle-orm@0.30.10_@types+_e0e2009336beb99158b32f944ddf65e4"]
subgraph 1N["node_modules"]
subgraph 1O["drizzle-orm"]
1P["index.js"]
subgraph 1Q["postgres-js"]
1R["index.js"]
end
subgraph 1T["pg-core"]
1U["index.js"]
end
end
end
end
end
end
subgraph I["packages"]
subgraph J["api"]
subgraph K["src"]
L["index.ts"]
M["server.ts"]
end
end
subgraph R["application"]
subgraph S["src"]
T["index.ts"]
end
end
subgraph U["domain"]
subgraph V["coverage"]
W["block-navigation.js"]
X["prettify.js"]
Y["sorter.js"]
end
subgraph Z["src"]
10["index.ts"]
11["mission.ts"]
12["node.ts"]
end
subgraph 13["test"]
14["domain-smoke.test.ts"]
1A["node-invariants.test.ts"]
end
1B["vitest.config.ts"]
end
subgraph 1D["infrastructure-mcp"]
subgraph 1E["src"]
1F["index.ts"]
end
end
subgraph 1G["infrastructure-models"]
subgraph 1H["src"]
1I["index.ts"]
end
end
subgraph 1J["infrastructure-postgres"]
subgraph 1K["src"]
1L["graph.repository.ts"]
1S["schema.ts"]
20["index.ts"]
21["mission.repository.ts"]
end
end
subgraph 1V["ports"]
subgraph 1W["src"]
1X["index.ts"]
1Y["domain.repository.port.ts"]
1Z["graph.repository.port.ts"]
end
end
subgraph 22["infrastructure-runtime"]
subgraph 23["src"]
24["index.ts"]
end
end
subgraph 25["observability"]
subgraph 26["src"]
27["index.ts"]
end
end
subgraph 28["testing"]
subgraph 29["src"]
2A["fixtures.ts"]
2B["index.ts"]
end
end
end
6-->C
D-->6
D-->C
D-->H
L-->M
M-->Q
10-->11
10-->12
14-->10
14-->19
1A-->10
1A-->19
1B-->1C
1L-->1S
1L-->10
1L-->1X
1L-->1P
1L-->1R
1S-->1U
1X-->1Y
1X-->1Z
1Y-->10
1Z-->10
20-->1L
20-->21
20-->1S
21-->1S
21-->10
21-->1X
21-->1P
21-->1R
2A-->10
2B-->2A
```

## Компонент: `apps`

| Файл | Строк | Размер | Описание |
|---|---|---|---|
| `demo-shell/src/App.tsx` | 32 | 0.8 KB | — |
| `demo-shell/src/main.tsx` | 10 | 0.2 KB | — |

## Компонент: `packages`

| Файл | Строк | Размер | Описание |
|---|---|---|---|
| `api/src/index.ts` | 3 | 0.0 KB | — |
| `api/src/server.ts` | 16 | 0.3 KB | — |
| `application/src/index.ts` | 3 | 0.1 KB | — |
| `domain/coverage/block-navigation.js` | 88 | 2.6 KB | — |
| `domain/coverage/prettify.js` | 3 | 17.2 KB | — |
| `domain/coverage/sorter.js` | 211 | 6.6 KB | — |
| `domain/src/index.ts` | 3 | 0.1 KB | — |
| `domain/src/mission.ts` | 50 | 0.9 KB | — |
| `domain/src/node.ts` | 52 | 0.9 KB | — |
| `domain/test/domain-smoke.test.ts` | 49 | 1.2 KB | — |
| `domain/test/node-invariants.test.ts` | 51 | 1.2 KB | — |
| `domain/vitest.config.ts` | 21 | 0.4 KB | — |
| `infrastructure-mcp/src/index.ts` | 3 | 0.1 KB | — |
| `infrastructure-models/src/index.ts` | 3 | 0.1 KB | — |
| `infrastructure-postgres/src/graph.repository.ts` | 101 | 2.8 KB | — |
| `infrastructure-postgres/src/index.ts` | 8 | 0.2 KB | — |
| `infrastructure-postgres/src/mission.repository.ts` | 87 | 2.6 KB | — |
| `infrastructure-postgres/src/schema.ts` | 69 | 2.3 KB | — |
| `infrastructure-runtime/src/index.ts` | 4 | 0.1 KB | — |
| `observability/src/index.ts` | 3 | 0.1 KB | — |
| `ports/src/domain.repository.port.ts` | 7 | 0.2 KB | — |
| `ports/src/graph.repository.port.ts` | 9 | 0.3 KB | — |
| `ports/src/index.ts` | 4 | 0.1 KB | — |
| `testing/src/fixtures.ts` | 16 | 0.3 KB | — |
| `testing/src/index.ts` | 3 | 0.1 KB | — |

### `api/src/server.ts`
- **Экспорт**: `buildServer`
- **Роуты**:
  - `GET /health`
- **Зависимости**:

### `application/src/index.ts`
- **Экспорт**: `APPLICATION_VERSION`

### `domain/src/mission.ts`
- **Экспорт**: `MissionStatus`, `MissionMode`, `MissionSensitivity`, `MissionBrief`, `MissionActor`, `Mission`, `assertMissionCanRun`

### `domain/src/node.ts`
- **Экспорт**: `NodeType`, `NodeStrength`, `EvidenceRef`, `EpistemicNode`, `EpistemicEdgeType`, `EpistemicEdge`

### `infrastructure-mcp/src/index.ts`
- **Экспорт**: `MCP_VERSION`

### `infrastructure-models/src/index.ts`
- **Экспорт**: `DEFAULT_PROVIDER`

### `infrastructure-postgres/src/graph.repository.ts`
- **Экспорт**: `PostgresGraphRepository`
- **Зависимости**:
  - `@epos/ports` → GraphRepositoryPort
  - `./schema.js` → epistemicNodes, epistemicEdges

### `infrastructure-postgres/src/index.ts`
- **Экспорт**: `DB_ENGINE`, `DB_VERSION`

### `infrastructure-postgres/src/mission.repository.ts`
- **Экспорт**: `PostgresMissionRepository`
- **Зависимости**:
  - `@epos/ports` → MissionRepositoryPort
  - `./schema.js` → missions

### `infrastructure-postgres/src/schema.ts`
- **Экспорт**: `missions`, `epistemicNodes`, `epistemicEdges`

### `infrastructure-runtime/src/index.ts`
- **Экспорт**: `RUNTIME_MODE`, `DURABILITY_ENABLED`

### `observability/src/index.ts`
- **Экспорт**: `LOG_LEVEL`

### `ports/src/domain.repository.port.ts`
- **Экспорт**: `MissionRepositoryPort`
- **Зависимости**:
  - `@epos/domain` → Mission

### `ports/src/graph.repository.port.ts`
- **Экспорт**: `GraphRepositoryPort`
- **Зависимости**:
  - `@epos/domain` → EpistemicNode, EpistemicEdge

### `testing/src/fixtures.ts`
- **Экспорт**: `createTestMission`
- **Зависимости**:
  - `@epos/domain` → Mission

## Переменные окружения

| Переменная | Используется в |
|---|---|

## API Реестр

| Метод | Путь | Файл |
|---|---|---|
| `GET` | `/health` | `packages/api/src/server.ts` |
