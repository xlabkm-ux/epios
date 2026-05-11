# 🗺️ PROJECT MAP — epos
> Автоматически сгенерировано: `2026-05-11 23:01:38`
> Скрипт: `node dev_studio/refresh.js`

## 📊 Telemetry / Context Health
| Metric | Value | Note |
|---|---|---|
| **Total Files** | `46` | Только JS/TS/TSX исходники |
| **Total Lines** | `2528` | Суммарно по проекту |
| **Project Weight** | `~21 437 tokens` | Оценка (4 символа/токен) |
| **Context Pressure** | `16.7%` | Нагрузка на окно 128k (Full Scan) |
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
subgraph D["components"]
E["CommandPalette.tsx"]
R["MissionRoom.tsx"]
U["GraphCanvas.tsx"]
14["Sidebar.tsx"]
end
subgraph S["context"]
T["MissionContext.tsx"]
end
subgraph 12["hooks"]
13["useApi.ts"]
end
15["main.tsx"]
16["index.css"]
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
subgraph F["framer-motion@12.38.0_react_8b618d649db4043b646326868cdfb743"]
subgraph G["node_modules"]
subgraph H["framer-motion"]
subgraph I["dist"]
subgraph J["cjs"]
K["index.js"]
end
end
end
end
end
subgraph L["lucide-react@1.14.0_react@18.3.1"]
subgraph M["node_modules"]
subgraph N["lucide-react"]
subgraph O["dist"]
subgraph P["cjs"]
Q["lucide-react.js"]
end
end
end
end
end
subgraph V["reactflow@11.11.4_@types+re_c2b98541cbcfabf22830798c75b6ca44"]
subgraph W["node_modules"]
subgraph X["reactflow"]
subgraph Y["dist"]
subgraph Z["esm"]
10["index.mjs"]
end
11["style.css"]
end
end
end
end
subgraph 17["react-dom@18.3.1_react@18.3.1"]
subgraph 18["node_modules"]
subgraph 19["react-dom"]
1A["client.js"]
end
end
end
subgraph 1G["dotenv@16.6.1"]
subgraph 1H["node_modules"]
subgraph 1I["dotenv"]
subgraph 1J["lib"]
1K["main.js"]
end
end
end
end
subgraph 1L["drizzle-orm@0.30.10_@types+_e0e2009336beb99158b32f944ddf65e4"]
subgraph 1M["node_modules"]
subgraph 1N["drizzle-orm"]
subgraph 1O["postgres-js"]
1P["index.js"]
end
2X["index.js"]
subgraph 2Z["pg-core"]
30["index.js"]
end
end
end
end
subgraph 1Q["fastify@4.29.1"]
subgraph 1R["node_modules"]
subgraph 1S["fastify"]
1T["fastify.js"]
end
end
end
subgraph 1U["postgres@3.4.9"]
subgraph 1V["node_modules"]
subgraph 1W["postgres"]
subgraph 1X["src"]
1Y["index.js"]
end
end
end
end
subgraph 35["vitest@1.6.1_@types+node@25.6.2"]
subgraph 36["node_modules"]
subgraph 37["vitest"]
subgraph 38["dist"]
39["index.js"]
3K["config.cjs"]
end
end
end
end
end
end
subgraph 1B["packages"]
subgraph 1C["api"]
subgraph 1D["src"]
1E["bin.ts"]
1F["server.ts"]
subgraph 1Z["routes"]
20["mapping.routes.ts"]
2S["mission.routes.ts"]
end
subgraph 21["dto"]
22["index.ts"]
end
32["index.ts"]
end
subgraph 33["test"]
34["api.test.ts"]
end
end
subgraph 23["domain"]
subgraph 24["src"]
25["index.ts"]
26["mission.ts"]
27["node.ts"]
end
subgraph 3C["coverage"]
3D["block-navigation.js"]
3E["prettify.js"]
3F["sorter.js"]
end
subgraph 3G["test"]
3H["domain-smoke.test.ts"]
3I["node-invariants.test.ts"]
end
3J["vitest.config.ts"]
end
subgraph 28["application"]
subgraph 29["src"]
2A["index.ts"]
subgraph 2B["use-cases"]
2C["add-edge.ts"]
2N["add-node.ts"]
2O["create-mission.ts"]
2P["get-mission-graph.ts"]
2Q["list-missions.ts"]
2R["patch-node.ts"]
end
end
subgraph 3A["test"]
3B["use-cases.test.ts"]
end
end
subgraph 2E["observability"]
subgraph 2F["src"]
2G["index.ts"]
2H["tracer.ts"]
end
end
subgraph 2I["ports"]
subgraph 2J["src"]
2K["index.ts"]
2L["domain.repository.port.ts"]
2M["graph.repository.port.ts"]
end
end
subgraph 2T["infrastructure-postgres"]
subgraph 2U["src"]
2V["index.ts"]
2W["graph.repository.ts"]
2Y["schema.ts"]
31["mission.repository.ts"]
end
end
subgraph 3L["infrastructure-mcp"]
subgraph 3M["src"]
3N["index.ts"]
end
end
subgraph 3O["infrastructure-models"]
subgraph 3P["src"]
3Q["index.ts"]
end
end
subgraph 3R["infrastructure-runtime"]
subgraph 3S["src"]
3T["index.ts"]
end
end
subgraph 3U["testing"]
subgraph 3V["src"]
3W["fixtures.ts"]
3X["index.ts"]
end
end
end
2D["crypto"]
6-->E
6-->R
6-->14
6-->C
E-->K
E-->Q
E-->C
R-->T
R-->U
R-->Q
R-->C
T-->C
U-->T
U-->13
U-->C
U-->10
U-->11
13-->C
14-->T
14-->13
14-->Q
14-->C
15-->6
15-->T
15-->16
15-->C
15-->1A
15-->11
1E-->1F
1F-->20
1F-->2S
1F-->2A
1F-->2V
1F-->1K
1F-->1P
1F-->1T
1F-->1Y
20-->22
20-->2A
20-->1T
22-->25
25-->26
25-->27
2A-->2C
2A-->2N
2A-->2O
2A-->2P
2A-->2Q
2A-->2R
2C-->25
2C-->2G
2C-->2K
2C-->2D
2G-->2H
2K-->2L
2K-->2M
2L-->25
2M-->25
2N-->25
2N-->2G
2N-->2K
2N-->2D
2O-->25
2O-->2G
2O-->2K
2O-->2D
2P-->25
2P-->2K
2Q-->25
2Q-->2K
2R-->25
2R-->2K
2S-->22
2S-->2A
2S-->1T
2V-->2W
2V-->31
2V-->2Y
2W-->2Y
2W-->25
2W-->2K
2W-->2X
2W-->1P
2Y-->30
31-->2Y
31-->25
31-->2K
31-->2X
31-->1P
32-->1F
34-->1F
34-->2K
34-->1T
34-->39
3B-->2C
3B-->2N
3B-->2O
3B-->2R
3B-->25
3B-->2K
3B-->39
3H-->25
3H-->39
3I-->25
3I-->39
3J-->3K
3W-->25
3X-->3W
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
subgraph D["components"]
E["CommandPalette.tsx"]
R["MissionRoom.tsx"]
U["GraphCanvas.tsx"]
14["Sidebar.tsx"]
end
subgraph S["context"]
T["MissionContext.tsx"]
end
subgraph 12["hooks"]
13["useApi.ts"]
end
15["main.tsx"]
16["index.css"]
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
subgraph F["framer-motion@12.38.0_react_8b618d649db4043b646326868cdfb743"]
subgraph G["node_modules"]
subgraph H["framer-motion"]
subgraph I["dist"]
subgraph J["cjs"]
K["index.js"]
end
end
end
end
end
subgraph L["lucide-react@1.14.0_react@18.3.1"]
subgraph M["node_modules"]
subgraph N["lucide-react"]
subgraph O["dist"]
subgraph P["cjs"]
Q["lucide-react.js"]
end
end
end
end
end
subgraph V["reactflow@11.11.4_@types+re_c2b98541cbcfabf22830798c75b6ca44"]
subgraph W["node_modules"]
subgraph X["reactflow"]
subgraph Y["dist"]
subgraph Z["esm"]
10["index.mjs"]
end
11["style.css"]
end
end
end
end
subgraph 17["react-dom@18.3.1_react@18.3.1"]
subgraph 18["node_modules"]
subgraph 19["react-dom"]
1A["client.js"]
end
end
end
subgraph 1G["dotenv@16.6.1"]
subgraph 1H["node_modules"]
subgraph 1I["dotenv"]
subgraph 1J["lib"]
1K["main.js"]
end
end
end
end
subgraph 1L["drizzle-orm@0.30.10_@types+_e0e2009336beb99158b32f944ddf65e4"]
subgraph 1M["node_modules"]
subgraph 1N["drizzle-orm"]
subgraph 1O["postgres-js"]
1P["index.js"]
end
2X["index.js"]
subgraph 2Z["pg-core"]
30["index.js"]
end
end
end
end
subgraph 1Q["fastify@4.29.1"]
subgraph 1R["node_modules"]
subgraph 1S["fastify"]
1T["fastify.js"]
end
end
end
subgraph 1U["postgres@3.4.9"]
subgraph 1V["node_modules"]
subgraph 1W["postgres"]
subgraph 1X["src"]
1Y["index.js"]
end
end
end
end
subgraph 35["vitest@1.6.1_@types+node@25.6.2"]
subgraph 36["node_modules"]
subgraph 37["vitest"]
subgraph 38["dist"]
39["index.js"]
3K["config.cjs"]
end
end
end
end
end
end
subgraph 1B["packages"]
subgraph 1C["api"]
subgraph 1D["src"]
1E["bin.ts"]
1F["server.ts"]
subgraph 1Z["routes"]
20["mapping.routes.ts"]
2S["mission.routes.ts"]
end
subgraph 21["dto"]
22["index.ts"]
end
32["index.ts"]
end
subgraph 33["test"]
34["api.test.ts"]
end
end
subgraph 23["domain"]
subgraph 24["src"]
25["index.ts"]
26["mission.ts"]
27["node.ts"]
end
subgraph 3C["coverage"]
3D["block-navigation.js"]
3E["prettify.js"]
3F["sorter.js"]
end
subgraph 3G["test"]
3H["domain-smoke.test.ts"]
3I["node-invariants.test.ts"]
end
3J["vitest.config.ts"]
end
subgraph 28["application"]
subgraph 29["src"]
2A["index.ts"]
subgraph 2B["use-cases"]
2C["add-edge.ts"]
2N["add-node.ts"]
2O["create-mission.ts"]
2P["get-mission-graph.ts"]
2Q["list-missions.ts"]
2R["patch-node.ts"]
end
end
subgraph 3A["test"]
3B["use-cases.test.ts"]
end
end
subgraph 2E["observability"]
subgraph 2F["src"]
2G["index.ts"]
2H["tracer.ts"]
end
end
subgraph 2I["ports"]
subgraph 2J["src"]
2K["index.ts"]
2L["domain.repository.port.ts"]
2M["graph.repository.port.ts"]
end
end
subgraph 2T["infrastructure-postgres"]
subgraph 2U["src"]
2V["index.ts"]
2W["graph.repository.ts"]
2Y["schema.ts"]
31["mission.repository.ts"]
end
end
subgraph 3L["infrastructure-mcp"]
subgraph 3M["src"]
3N["index.ts"]
end
end
subgraph 3O["infrastructure-models"]
subgraph 3P["src"]
3Q["index.ts"]
end
end
subgraph 3R["infrastructure-runtime"]
subgraph 3S["src"]
3T["index.ts"]
end
end
subgraph 3U["testing"]
subgraph 3V["src"]
3W["fixtures.ts"]
3X["index.ts"]
end
end
end
2D["crypto"]
6-->E
6-->R
6-->14
6-->C
E-->K
E-->Q
E-->C
R-->T
R-->U
R-->Q
R-->C
T-->C
U-->T
U-->13
U-->C
U-->10
U-->11
13-->C
14-->T
14-->13
14-->Q
14-->C
15-->6
15-->T
15-->16
15-->C
15-->1A
15-->11
1E-->1F
1F-->20
1F-->2S
1F-->2A
1F-->2V
1F-->1K
1F-->1P
1F-->1T
1F-->1Y
20-->22
20-->2A
20-->1T
22-->25
25-->26
25-->27
2A-->2C
2A-->2N
2A-->2O
2A-->2P
2A-->2Q
2A-->2R
2C-->25
2C-->2G
2C-->2K
2C-->2D
2G-->2H
2K-->2L
2K-->2M
2L-->25
2M-->25
2N-->25
2N-->2G
2N-->2K
2N-->2D
2O-->25
2O-->2G
2O-->2K
2O-->2D
2P-->25
2P-->2K
2Q-->25
2Q-->2K
2R-->25
2R-->2K
2S-->22
2S-->2A
2S-->1T
2V-->2W
2V-->31
2V-->2Y
2W-->2Y
2W-->25
2W-->2K
2W-->2X
2W-->1P
2Y-->30
31-->2Y
31-->25
31-->2K
31-->2X
31-->1P
32-->1F
34-->1F
34-->2K
34-->1T
34-->39
3B-->2C
3B-->2N
3B-->2O
3B-->2R
3B-->25
3B-->2K
3B-->39
3H-->25
3H-->39
3I-->25
3I-->39
3J-->3K
3W-->25
3X-->3W
```

## Компонент: `apps`

| Файл | Строк | Размер | Описание |
|---|---|---|---|
| `demo-shell/src/App.tsx` | 52 | 1.2 KB | — |
| `demo-shell/src/components/CommandPalette.tsx` | 210 | 5.7 KB | — |
| `demo-shell/src/components/GraphCanvas.tsx` | 124 | 2.9 KB | — |
| `demo-shell/src/components/MissionRoom.tsx` | 263 | 7.2 KB | — |
| `demo-shell/src/components/Sidebar.tsx` | 222 | 5.2 KB | — |
| `demo-shell/src/context/MissionContext.tsx` | 42 | 1.0 KB | — |
| `demo-shell/src/hooks/useApi.ts` | 32 | 0.9 KB | — |
| `demo-shell/src/main.tsx` | 16 | 0.4 KB | — |

### `demo-shell/src/context/MissionContext.tsx`
- **Экспорт**: `MissionProvider`, `useMission`
- **Зависимости**:

### `demo-shell/src/hooks/useApi.ts`
- **Экспорт**: `useApi`
- **Зависимости**:

## Компонент: `packages`

| Файл | Строк | Размер | Описание |
|---|---|---|---|
| `api/src/bin.ts` | 13 | 0.3 KB | — |
| `api/src/dto/index.ts` | 40 | 0.8 KB | — |
| `api/src/index.ts` | 3 | 0.0 KB | — |
| `api/src/routes/mapping.routes.ts` | 59 | 1.6 KB | — |
| `api/src/routes/mission.routes.ts` | 24 | 0.7 KB | — |
| `api/src/server.ts` | 71 | 2.0 KB | — |
| `api/test/api.test.ts` | 97 | 2.4 KB | — |
| `application/src/index.ts` | 7 | 0.3 KB | — |
| `application/src/use-cases/add-edge.ts` | 47 | 1.2 KB | — |
| `application/src/use-cases/add-node.ts` | 55 | 1.3 KB | — |
| `application/src/use-cases/create-mission.ts` | 49 | 1.1 KB | — |
| `application/src/use-cases/get-mission-graph.ts` | 21 | 0.6 KB | — |
| `application/src/use-cases/list-missions.ts` | 11 | 0.3 KB | — |
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
| `infrastructure-postgres/src/mission.repository.ts` | 96 | 2.9 KB | — |
| `infrastructure-postgres/src/schema.ts` | 69 | 2.3 KB | — |
| `infrastructure-runtime/src/index.ts` | 4 | 0.1 KB | — |
| `observability/src/index.ts` | 2 | 0.0 KB | — |
| `observability/src/tracer.ts` | 24 | 0.5 KB | — |
| `ports/src/domain.repository.port.ts` | 8 | 0.2 KB | — |
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

### `application/src/use-cases/get-mission-graph.ts`
- **Экспорт**: `MissionGraph`, `GetMissionGraphUseCase`
- **Зависимости**:
  - `@epos/domain` → EpistemicNode, EpistemicEdge
  - `@epos/ports` → GraphRepositoryPort

### `application/src/use-cases/list-missions.ts`
- **Экспорт**: `ListMissionsUseCase`
- **Зависимости**:
  - `@epos/domain` → Mission
  - `@epos/ports` → MissionRepositoryPort

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
| `PORT` | packages/bin.ts |

## API Реестр

| Метод | Путь | Файл |
|---|---|---|
| `GET` | `/health` | `packages/api/src/server.ts` |
