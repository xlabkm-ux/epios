# 🗺️ PROJECT MAP — epos
> Автоматически сгенерировано: `2026-05-11 22:40:15`
> Скрипт: `node dev_studio/refresh.js`

## 📊 Telemetry / Context Health
| Metric | Value | Note |
|---|---|---|
| **Total Files** | `37` | Только JS/TS/TSX исходники |
| **Total Lines** | `1531` | Суммарно по проекту |
| **Project Weight** | `~14 859 tokens` | Оценка (4 символа/токен) |
| **Context Pressure** | `11.6%` | Нагрузка на окно 128k (Full Scan) |
| **Map Efficiency** | `~77%` | Экономия контекста через карту |

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
subgraph U["dotenv@16.6.1"]
subgraph V["node_modules"]
subgraph W["dotenv"]
subgraph X["lib"]
Y["main.js"]
end
end
end
end
subgraph Z["drizzle-orm@0.30.10_@types+_e0e2009336beb99158b32f944ddf65e4"]
subgraph 10["node_modules"]
subgraph 11["drizzle-orm"]
subgraph 12["postgres-js"]
13["index.js"]
end
22["index.js"]
subgraph 24["pg-core"]
25["index.js"]
end
end
end
end
subgraph 14["fastify@4.29.1"]
subgraph 15["node_modules"]
subgraph 16["fastify"]
17["fastify.js"]
end
end
end
subgraph 18["postgres@3.4.9"]
subgraph 19["node_modules"]
subgraph 1A["postgres"]
subgraph 1B["src"]
1C["index.js"]
end
end
end
end
subgraph 29["vitest@1.6.1_@types+node@25.6.2"]
subgraph 2A["node_modules"]
subgraph 2B["vitest"]
subgraph 2C["dist"]
2D["index.js"]
2O["config.cjs"]
end
end
end
end
end
end
subgraph I["packages"]
subgraph J["api"]
subgraph K["src"]
subgraph L["dto"]
M["index.ts"]
end
S["index.ts"]
T["server.ts"]
subgraph 1D["routes"]
1E["mapping.routes.ts"]
1X["mission.routes.ts"]
end
end
subgraph 27["test"]
28["api.test.ts"]
end
end
subgraph N["domain"]
subgraph O["src"]
P["index.ts"]
Q["mission.ts"]
R["node.ts"]
end
subgraph 2G["coverage"]
2H["block-navigation.js"]
2I["prettify.js"]
2J["sorter.js"]
end
subgraph 2K["test"]
2L["domain-smoke.test.ts"]
2M["node-invariants.test.ts"]
end
2N["vitest.config.ts"]
end
subgraph 1F["application"]
subgraph 1G["src"]
1H["index.ts"]
subgraph 1I["use-cases"]
1J["add-edge.ts"]
1U["add-node.ts"]
1V["create-mission.ts"]
1W["patch-node.ts"]
end
end
subgraph 2E["test"]
2F["use-cases.test.ts"]
end
end
subgraph 1L["observability"]
subgraph 1M["src"]
1N["index.ts"]
1O["tracer.ts"]
end
end
subgraph 1P["ports"]
subgraph 1Q["src"]
1R["index.ts"]
1S["domain.repository.port.ts"]
1T["graph.repository.port.ts"]
end
end
subgraph 1Y["infrastructure-postgres"]
subgraph 1Z["src"]
20["index.ts"]
21["graph.repository.ts"]
23["schema.ts"]
26["mission.repository.ts"]
end
end
subgraph 2P["infrastructure-mcp"]
subgraph 2Q["src"]
2R["index.ts"]
end
end
subgraph 2S["infrastructure-models"]
subgraph 2T["src"]
2U["index.ts"]
end
end
subgraph 2V["infrastructure-runtime"]
subgraph 2W["src"]
2X["index.ts"]
end
end
subgraph 2Y["testing"]
subgraph 2Z["src"]
30["fixtures.ts"]
31["index.ts"]
end
end
end
1K["crypto"]
6-->C
D-->6
D-->C
D-->H
M-->P
P-->Q
P-->R
S-->T
T-->1E
T-->1X
T-->1H
T-->20
T-->Y
T-->13
T-->17
T-->1C
1E-->M
1E-->1H
1E-->17
1H-->1J
1H-->1U
1H-->1V
1H-->1W
1J-->P
1J-->1N
1J-->1R
1J-->1K
1N-->1O
1R-->1S
1R-->1T
1S-->P
1T-->P
1U-->P
1U-->1N
1U-->1R
1U-->1K
1V-->P
1V-->1N
1V-->1R
1V-->1K
1W-->P
1W-->1R
1X-->M
1X-->1H
1X-->17
20-->21
20-->26
20-->23
21-->23
21-->P
21-->1R
21-->22
21-->13
23-->25
26-->23
26-->P
26-->1R
26-->22
26-->13
28-->T
28-->1R
28-->17
28-->2D
2F-->1J
2F-->1U
2F-->1V
2F-->1W
2F-->P
2F-->1R
2F-->2D
2L-->P
2L-->2D
2M-->P
2M-->2D
2N-->2O
30-->P
31-->30
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
subgraph U["dotenv@16.6.1"]
subgraph V["node_modules"]
subgraph W["dotenv"]
subgraph X["lib"]
Y["main.js"]
end
end
end
end
subgraph Z["drizzle-orm@0.30.10_@types+_e0e2009336beb99158b32f944ddf65e4"]
subgraph 10["node_modules"]
subgraph 11["drizzle-orm"]
subgraph 12["postgres-js"]
13["index.js"]
end
22["index.js"]
subgraph 24["pg-core"]
25["index.js"]
end
end
end
end
subgraph 14["fastify@4.29.1"]
subgraph 15["node_modules"]
subgraph 16["fastify"]
17["fastify.js"]
end
end
end
subgraph 18["postgres@3.4.9"]
subgraph 19["node_modules"]
subgraph 1A["postgres"]
subgraph 1B["src"]
1C["index.js"]
end
end
end
end
subgraph 29["vitest@1.6.1_@types+node@25.6.2"]
subgraph 2A["node_modules"]
subgraph 2B["vitest"]
subgraph 2C["dist"]
2D["index.js"]
2O["config.cjs"]
end
end
end
end
end
end
subgraph I["packages"]
subgraph J["api"]
subgraph K["src"]
subgraph L["dto"]
M["index.ts"]
end
S["index.ts"]
T["server.ts"]
subgraph 1D["routes"]
1E["mapping.routes.ts"]
1X["mission.routes.ts"]
end
end
subgraph 27["test"]
28["api.test.ts"]
end
end
subgraph N["domain"]
subgraph O["src"]
P["index.ts"]
Q["mission.ts"]
R["node.ts"]
end
subgraph 2G["coverage"]
2H["block-navigation.js"]
2I["prettify.js"]
2J["sorter.js"]
end
subgraph 2K["test"]
2L["domain-smoke.test.ts"]
2M["node-invariants.test.ts"]
end
2N["vitest.config.ts"]
end
subgraph 1F["application"]
subgraph 1G["src"]
1H["index.ts"]
subgraph 1I["use-cases"]
1J["add-edge.ts"]
1U["add-node.ts"]
1V["create-mission.ts"]
1W["patch-node.ts"]
end
end
subgraph 2E["test"]
2F["use-cases.test.ts"]
end
end
subgraph 1L["observability"]
subgraph 1M["src"]
1N["index.ts"]
1O["tracer.ts"]
end
end
subgraph 1P["ports"]
subgraph 1Q["src"]
1R["index.ts"]
1S["domain.repository.port.ts"]
1T["graph.repository.port.ts"]
end
end
subgraph 1Y["infrastructure-postgres"]
subgraph 1Z["src"]
20["index.ts"]
21["graph.repository.ts"]
23["schema.ts"]
26["mission.repository.ts"]
end
end
subgraph 2P["infrastructure-mcp"]
subgraph 2Q["src"]
2R["index.ts"]
end
end
subgraph 2S["infrastructure-models"]
subgraph 2T["src"]
2U["index.ts"]
end
end
subgraph 2V["infrastructure-runtime"]
subgraph 2W["src"]
2X["index.ts"]
end
end
subgraph 2Y["testing"]
subgraph 2Z["src"]
30["fixtures.ts"]
31["index.ts"]
end
end
end
1K["crypto"]
6-->C
D-->6
D-->C
D-->H
M-->P
P-->Q
P-->R
S-->T
T-->1E
T-->1X
T-->1H
T-->20
T-->Y
T-->13
T-->17
T-->1C
1E-->M
1E-->1H
1E-->17
1H-->1J
1H-->1U
1H-->1V
1H-->1W
1J-->P
1J-->1N
1J-->1R
1J-->1K
1N-->1O
1R-->1S
1R-->1T
1S-->P
1T-->P
1U-->P
1U-->1N
1U-->1R
1U-->1K
1V-->P
1V-->1N
1V-->1R
1V-->1K
1W-->P
1W-->1R
1X-->M
1X-->1H
1X-->17
20-->21
20-->26
20-->23
21-->23
21-->P
21-->1R
21-->22
21-->13
23-->25
26-->23
26-->P
26-->1R
26-->22
26-->13
28-->T
28-->1R
28-->17
28-->2D
2F-->1J
2F-->1U
2F-->1V
2F-->1W
2F-->P
2F-->1R
2F-->2D
2L-->P
2L-->2D
2M-->P
2M-->2D
2N-->2O
30-->P
31-->30
```

## Компонент: `apps`

| Файл | Строк | Размер | Описание |
|---|---|---|---|
| `demo-shell/src/App.tsx` | 32 | 0.8 KB | — |
| `demo-shell/src/main.tsx` | 10 | 0.2 KB | — |

## Компонент: `packages`

| Файл | Строк | Размер | Описание |
|---|---|---|---|
| `api/src/dto/index.ts` | 40 | 0.8 KB | — |
| `api/src/index.ts` | 3 | 0.0 KB | — |
| `api/src/routes/mapping.routes.ts` | 50 | 1.4 KB | — |
| `api/src/routes/mission.routes.ts` | 17 | 0.5 KB | — |
| `api/src/server.ts` | 66 | 1.8 KB | — |
| `api/test/api.test.ts` | 97 | 2.4 KB | — |
| `application/src/index.ts` | 5 | 0.2 KB | — |
| `application/src/use-cases/add-edge.ts` | 47 | 1.2 KB | — |
| `application/src/use-cases/add-node.ts` | 55 | 1.3 KB | — |
| `application/src/use-cases/create-mission.ts` | 49 | 1.1 KB | — |
| `application/src/use-cases/patch-node.ts` | 37 | 1.0 KB | — |
| `application/test/use-cases.test.ts` | 112 | 3.3 KB | — |
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
| `infrastructure-postgres/src/graph.repository.ts` | 142 | 4.0 KB | — |
| `infrastructure-postgres/src/index.ts` | 8 | 0.2 KB | — |
| `infrastructure-postgres/src/mission.repository.ts` | 87 | 2.6 KB | — |
| `infrastructure-postgres/src/schema.ts` | 69 | 2.3 KB | — |
| `infrastructure-runtime/src/index.ts` | 4 | 0.1 KB | — |
| `observability/src/index.ts` | 2 | 0.0 KB | — |
| `observability/src/tracer.ts` | 24 | 0.5 KB | — |
| `ports/src/domain.repository.port.ts` | 7 | 0.2 KB | — |
| `ports/src/graph.repository.port.ts` | 11 | 0.4 KB | — |
| `ports/src/index.ts` | 4 | 0.1 KB | — |
| `testing/src/fixtures.ts` | 16 | 0.3 KB | — |
| `testing/src/index.ts` | 3 | 0.1 KB | — |

### `api/src/dto/index.ts`
- **Экспорт**: `CreateMissionDto`, `AddNodeDto`, `AddEdgeDto`, `PatchNodeDto`

### `api/src/server.ts`
- **Экспорт**: `ServerDependencies`, `buildServer`
- **Роуты**:
  - `GET /health`
- **Зависимости**:
  - `./routes/mission.routes.js` → missionRoutes
  - `./routes/mapping.routes.js` → mappingRoutes

### `application/src/use-cases/add-edge.ts`
- **Экспорт**: `AddEdgeRequest`, `AddEdgeUseCase`
- **Зависимости**:
  - `@epos/domain` → EpistemicEdge, EpistemicEdgeType
  - `@epos/ports` → GraphRepositoryPort, MissionRepositoryPort
  - `@epos/observability` → tracer

### `application/src/use-cases/add-node.ts`
- **Экспорт**: `AddNodeRequest`, `AddNodeUseCase`
- **Зависимости**:
  - `@epos/ports` → GraphRepositoryPort, MissionRepositoryPort
  - `@epos/observability` → tracer

### `application/src/use-cases/create-mission.ts`
- **Экспорт**: `CreateMissionRequest`, `CreateMissionUseCase`
- **Зависимости**:
  - `@epos/ports` → MissionRepositoryPort
  - `@epos/observability` → tracer

### `application/src/use-cases/patch-node.ts`
- **Экспорт**: `PatchNodeRequest`, `PatchNodeUseCase`
- **Зависимости**:
  - `@epos/domain` → EpistemicNode, NodeStrength, EvidenceRef
  - `@epos/ports` → GraphRepositoryPort

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

### `observability/src/tracer.ts`
- **Экспорт**: `TraceEvent`, `Tracer`, `ConsoleTracer`, `tracer`

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
| `DATABASE_URL` | packages/server.ts |

## API Реестр

| Метод | Путь | Файл |
|---|---|---|
| `GET` | `/health` | `packages/api/src/server.ts` |
