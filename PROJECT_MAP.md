# 🗺️ PROJECT MAP — epos
> Автоматически сгенерировано: `2026-05-11 23:08:27`
> Скрипт: `node dev_studio/refresh.js`

## 📊 Telemetry / Context Health
| Metric | Value | Note |
|---|---|---|
| **Total Files** | `58` | Только JS/TS/TSX исходники |
| **Total Lines** | `3086` | Суммарно по проекту |
| **Project Weight** | `~25 370 tokens` | Оценка (4 символа/токен) |
| **Context Pressure** | `19.8%` | Нагрузка на окно 128k (Full Scan) |
| **Map Efficiency** | `~78%` | Экономия контекста через карту |

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
U["GovernancePanel.tsx"]
V["GraphCanvas.tsx"]
15["Sidebar.tsx"]
end
subgraph S["context"]
T["MissionContext.tsx"]
end
subgraph 13["hooks"]
14["useApi.ts"]
end
16["main.tsx"]
17["index.css"]
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
subgraph W["reactflow@11.11.4_@types+re_c2b98541cbcfabf22830798c75b6ca44"]
subgraph X["node_modules"]
subgraph Y["reactflow"]
subgraph Z["dist"]
subgraph 10["esm"]
11["index.mjs"]
end
12["style.css"]
end
end
end
end
subgraph 18["react-dom@18.3.1_react@18.3.1"]
subgraph 19["node_modules"]
subgraph 1A["react-dom"]
1B["client.js"]
end
end
end
subgraph 1H["dotenv@16.6.1"]
subgraph 1I["node_modules"]
subgraph 1J["dotenv"]
subgraph 1K["lib"]
1L["main.js"]
end
end
end
end
subgraph 1M["drizzle-orm@0.30.10_@types+_e0e2009336beb99158b32f944ddf65e4"]
subgraph 1N["node_modules"]
subgraph 1O["drizzle-orm"]
subgraph 1P["postgres-js"]
1Q["index.js"]
end
3C["index.js"]
subgraph 3E["pg-core"]
3F["index.js"]
end
end
end
end
subgraph 1R["fastify@4.29.1"]
subgraph 1S["node_modules"]
subgraph 1T["fastify"]
1U["fastify.js"]
end
end
end
subgraph 1V["postgres@3.4.9"]
subgraph 1W["node_modules"]
subgraph 1X["postgres"]
subgraph 1Y["src"]
1Z["index.js"]
end
end
end
end
subgraph 3O["vitest@1.6.1_@types+node@25.6.2"]
subgraph 3P["node_modules"]
subgraph 3Q["vitest"]
subgraph 3R["dist"]
3S["index.js"]
43["config.cjs"]
end
end
end
end
end
end
subgraph 1C["packages"]
subgraph 1D["api"]
subgraph 1E["src"]
1F["bin.ts"]
1G["server.ts"]
subgraph 20["routes"]
21["governance.routes.ts"]
2Y["mapping.routes.ts"]
31["mcp.routes.ts"]
32["mission.routes.ts"]
end
subgraph 2Z["dto"]
30["index.ts"]
end
3L["index.ts"]
end
subgraph 3M["test"]
3N["api.test.ts"]
end
end
subgraph 22["application"]
subgraph 23["src"]
24["index.ts"]
subgraph 25["use-cases"]
26["add-edge.ts"]
2Q["add-node.ts"]
2R["cast-vote.ts"]
2S["create-mission.ts"]
2T["get-mission-graph.ts"]
2U["list-missions.ts"]
2V["patch-node.ts"]
2W["submit-claim.ts"]
end
end
subgraph 3T["test"]
3U["use-cases.test.ts"]
end
end
subgraph 28["domain"]
subgraph 29["src"]
2A["index.ts"]
2B["governance.ts"]
2C["node.ts"]
2D["mission.ts"]
end
subgraph 3V["coverage"]
3W["block-navigation.js"]
3X["prettify.js"]
3Y["sorter.js"]
end
subgraph 3Z["test"]
40["domain-smoke.test.ts"]
41["node-invariants.test.ts"]
end
42["vitest.config.ts"]
end
subgraph 2E["observability"]
subgraph 2F["src"]
2G["index.ts"]
2H["audit.ts"]
2I["tracer.ts"]
end
end
subgraph 2J["ports"]
subgraph 2K["src"]
2L["index.ts"]
2M["domain.repository.port.ts"]
2N["governance.port.ts"]
2O["graph.repository.port.ts"]
2P["mcp.port.ts"]
end
end
subgraph 33["infrastructure-mcp"]
subgraph 34["src"]
35["index.ts"]
36["mcp-app.registry.ts"]
37["mcp-bridge.ts"]
end
end
subgraph 38["infrastructure-postgres"]
subgraph 39["src"]
3A["index.ts"]
3B["graph.repository.ts"]
3D["schema.ts"]
3G["mission.repository.ts"]
end
end
subgraph 3H["infrastructure-runtime"]
subgraph 3I["src"]
3J["index.ts"]
3K["in-memory-governance.repository.ts"]
end
end
subgraph 44["infrastructure-models"]
subgraph 45["src"]
46["index.ts"]
end
end
subgraph 47["testing"]
subgraph 48["src"]
49["fixtures.ts"]
4A["index.ts"]
end
end
end
27["crypto"]
2X["uuid"]
6-->E
6-->R
6-->15
6-->C
E-->K
E-->Q
E-->C
R-->T
R-->U
R-->V
R-->Q
R-->C
T-->C
U-->C
V-->T
V-->14
V-->C
V-->11
V-->12
14-->C
15-->T
15-->14
15-->Q
15-->C
16-->6
16-->T
16-->17
16-->C
16-->1B
16-->12
1F-->1G
1G-->21
1G-->2Y
1G-->31
1G-->32
1G-->24
1G-->35
1G-->3A
1G-->3J
1G-->1L
1G-->1Q
1G-->1U
1G-->1Z
21-->24
21-->1U
24-->26
24-->2Q
24-->2R
24-->2S
24-->2T
24-->2U
24-->2V
24-->2W
26-->2A
26-->2G
26-->2L
26-->27
2A-->2B
2A-->2D
2A-->2C
2B-->2C
2G-->2H
2G-->2I
2L-->2M
2L-->2N
2L-->2O
2L-->2P
2M-->2A
2N-->2A
2O-->2A
2Q-->2A
2Q-->2G
2Q-->2L
2Q-->27
2R-->2A
2R-->2G
2R-->2L
2S-->2A
2S-->2G
2S-->2L
2S-->27
2T-->2A
2T-->2L
2U-->2A
2U-->2L
2V-->2A
2V-->2L
2W-->2A
2W-->2L
2W-->2X
2Y-->30
2Y-->24
2Y-->1U
30-->2A
31-->2L
31-->1U
32-->30
32-->24
32-->1U
35-->36
35-->37
36-->2L
37-->2L
3A-->3B
3A-->3G
3A-->3D
3B-->3D
3B-->2A
3B-->2L
3B-->3C
3B-->1Q
3D-->3F
3G-->3D
3G-->2A
3G-->2L
3G-->3C
3G-->1Q
3J-->3K
3K-->2A
3K-->2L
3L-->1G
3N-->1G
3N-->2L
3N-->1U
3N-->3S
3U-->26
3U-->2Q
3U-->2S
3U-->2V
3U-->2A
3U-->2L
3U-->3S
40-->2A
40-->3S
41-->2A
41-->3S
42-->43
49-->2A
4A-->49
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
U["GovernancePanel.tsx"]
V["GraphCanvas.tsx"]
15["Sidebar.tsx"]
end
subgraph S["context"]
T["MissionContext.tsx"]
end
subgraph 13["hooks"]
14["useApi.ts"]
end
16["main.tsx"]
17["index.css"]
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
subgraph W["reactflow@11.11.4_@types+re_c2b98541cbcfabf22830798c75b6ca44"]
subgraph X["node_modules"]
subgraph Y["reactflow"]
subgraph Z["dist"]
subgraph 10["esm"]
11["index.mjs"]
end
12["style.css"]
end
end
end
end
subgraph 18["react-dom@18.3.1_react@18.3.1"]
subgraph 19["node_modules"]
subgraph 1A["react-dom"]
1B["client.js"]
end
end
end
subgraph 1H["dotenv@16.6.1"]
subgraph 1I["node_modules"]
subgraph 1J["dotenv"]
subgraph 1K["lib"]
1L["main.js"]
end
end
end
end
subgraph 1M["drizzle-orm@0.30.10_@types+_e0e2009336beb99158b32f944ddf65e4"]
subgraph 1N["node_modules"]
subgraph 1O["drizzle-orm"]
subgraph 1P["postgres-js"]
1Q["index.js"]
end
3C["index.js"]
subgraph 3E["pg-core"]
3F["index.js"]
end
end
end
end
subgraph 1R["fastify@4.29.1"]
subgraph 1S["node_modules"]
subgraph 1T["fastify"]
1U["fastify.js"]
end
end
end
subgraph 1V["postgres@3.4.9"]
subgraph 1W["node_modules"]
subgraph 1X["postgres"]
subgraph 1Y["src"]
1Z["index.js"]
end
end
end
end
subgraph 3O["vitest@1.6.1_@types+node@25.6.2"]
subgraph 3P["node_modules"]
subgraph 3Q["vitest"]
subgraph 3R["dist"]
3S["index.js"]
43["config.cjs"]
end
end
end
end
end
end
subgraph 1C["packages"]
subgraph 1D["api"]
subgraph 1E["src"]
1F["bin.ts"]
1G["server.ts"]
subgraph 20["routes"]
21["governance.routes.ts"]
2Y["mapping.routes.ts"]
31["mcp.routes.ts"]
32["mission.routes.ts"]
end
subgraph 2Z["dto"]
30["index.ts"]
end
3L["index.ts"]
end
subgraph 3M["test"]
3N["api.test.ts"]
end
end
subgraph 22["application"]
subgraph 23["src"]
24["index.ts"]
subgraph 25["use-cases"]
26["add-edge.ts"]
2Q["add-node.ts"]
2R["cast-vote.ts"]
2S["create-mission.ts"]
2T["get-mission-graph.ts"]
2U["list-missions.ts"]
2V["patch-node.ts"]
2W["submit-claim.ts"]
end
end
subgraph 3T["test"]
3U["use-cases.test.ts"]
end
end
subgraph 28["domain"]
subgraph 29["src"]
2A["index.ts"]
2B["governance.ts"]
2C["node.ts"]
2D["mission.ts"]
end
subgraph 3V["coverage"]
3W["block-navigation.js"]
3X["prettify.js"]
3Y["sorter.js"]
end
subgraph 3Z["test"]
40["domain-smoke.test.ts"]
41["node-invariants.test.ts"]
end
42["vitest.config.ts"]
end
subgraph 2E["observability"]
subgraph 2F["src"]
2G["index.ts"]
2H["audit.ts"]
2I["tracer.ts"]
end
end
subgraph 2J["ports"]
subgraph 2K["src"]
2L["index.ts"]
2M["domain.repository.port.ts"]
2N["governance.port.ts"]
2O["graph.repository.port.ts"]
2P["mcp.port.ts"]
end
end
subgraph 33["infrastructure-mcp"]
subgraph 34["src"]
35["index.ts"]
36["mcp-app.registry.ts"]
37["mcp-bridge.ts"]
end
end
subgraph 38["infrastructure-postgres"]
subgraph 39["src"]
3A["index.ts"]
3B["graph.repository.ts"]
3D["schema.ts"]
3G["mission.repository.ts"]
end
end
subgraph 3H["infrastructure-runtime"]
subgraph 3I["src"]
3J["index.ts"]
3K["in-memory-governance.repository.ts"]
end
end
subgraph 44["infrastructure-models"]
subgraph 45["src"]
46["index.ts"]
end
end
subgraph 47["testing"]
subgraph 48["src"]
49["fixtures.ts"]
4A["index.ts"]
end
end
end
27["crypto"]
2X["uuid"]
6-->E
6-->R
6-->15
6-->C
E-->K
E-->Q
E-->C
R-->T
R-->U
R-->V
R-->Q
R-->C
T-->C
U-->C
V-->T
V-->14
V-->C
V-->11
V-->12
14-->C
15-->T
15-->14
15-->Q
15-->C
16-->6
16-->T
16-->17
16-->C
16-->1B
16-->12
1F-->1G
1G-->21
1G-->2Y
1G-->31
1G-->32
1G-->24
1G-->35
1G-->3A
1G-->3J
1G-->1L
1G-->1Q
1G-->1U
1G-->1Z
21-->24
21-->1U
24-->26
24-->2Q
24-->2R
24-->2S
24-->2T
24-->2U
24-->2V
24-->2W
26-->2A
26-->2G
26-->2L
26-->27
2A-->2B
2A-->2D
2A-->2C
2B-->2C
2G-->2H
2G-->2I
2L-->2M
2L-->2N
2L-->2O
2L-->2P
2M-->2A
2N-->2A
2O-->2A
2Q-->2A
2Q-->2G
2Q-->2L
2Q-->27
2R-->2A
2R-->2G
2R-->2L
2S-->2A
2S-->2G
2S-->2L
2S-->27
2T-->2A
2T-->2L
2U-->2A
2U-->2L
2V-->2A
2V-->2L
2W-->2A
2W-->2L
2W-->2X
2Y-->30
2Y-->24
2Y-->1U
30-->2A
31-->2L
31-->1U
32-->30
32-->24
32-->1U
35-->36
35-->37
36-->2L
37-->2L
3A-->3B
3A-->3G
3A-->3D
3B-->3D
3B-->2A
3B-->2L
3B-->3C
3B-->1Q
3D-->3F
3G-->3D
3G-->2A
3G-->2L
3G-->3C
3G-->1Q
3J-->3K
3K-->2A
3K-->2L
3L-->1G
3N-->1G
3N-->2L
3N-->1U
3N-->3S
3U-->26
3U-->2Q
3U-->2S
3U-->2V
3U-->2A
3U-->2L
3U-->3S
40-->2A
40-->3S
41-->2A
41-->3S
42-->43
49-->2A
4A-->49
```

## Компонент: `apps`

| Файл | Строк | Размер | Описание |
|---|---|---|---|
| `demo-shell/src/App.tsx` | 52 | 1.2 KB | — |
| `demo-shell/src/components/CommandPalette.tsx` | 210 | 5.7 KB | — |
| `demo-shell/src/components/GovernancePanel.tsx` | 95 | 3.1 KB | — |
| `demo-shell/src/components/GraphCanvas.tsx` | 124 | 2.9 KB | — |
| `demo-shell/src/components/MissionRoom.tsx` | 277 | 7.6 KB | — |
| `demo-shell/src/components/Sidebar.tsx` | 222 | 5.2 KB | — |
| `demo-shell/src/context/MissionContext.tsx` | 42 | 1.0 KB | — |
| `demo-shell/src/hooks/useApi.ts` | 32 | 0.9 KB | — |
| `demo-shell/src/main.tsx` | 16 | 0.4 KB | — |

### `demo-shell/src/components/GovernancePanel.tsx`
- **Экспорт**: `GovernancePanel`
- **Зависимости**:

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
| `api/src/routes/governance.routes.ts` | 34 | 0.9 KB | — |
| `api/src/routes/mapping.routes.ts` | 59 | 1.6 KB | — |
| `api/src/routes/mcp.routes.ts` | 38 | 1.0 KB | — |
| `api/src/routes/mission.routes.ts` | 24 | 0.7 KB | — |
| `api/src/server.ts` | 90 | 2.8 KB | — |
| `api/test/api.test.ts` | 97 | 2.4 KB | — |
| `application/src/index.ts` | 9 | 0.3 KB | — |
| `application/src/use-cases/add-edge.ts` | 47 | 1.2 KB | — |
| `application/src/use-cases/add-node.ts` | 55 | 1.3 KB | — |
| `application/src/use-cases/cast-vote.ts` | 76 | 2.0 KB | — |
| `application/src/use-cases/create-mission.ts` | 49 | 1.1 KB | — |
| `application/src/use-cases/get-mission-graph.ts` | 21 | 0.6 KB | — |
| `application/src/use-cases/list-missions.ts` | 11 | 0.3 KB | — |
| `application/src/use-cases/patch-node.ts` | 37 | 1.0 KB | — |
| `application/src/use-cases/submit-claim.ts` | 49 | 1.1 KB | — |
| `application/test/use-cases.test.ts` | 112 | 3.3 KB | — |
| `domain/coverage/block-navigation.js` | 88 | 2.6 KB | — |
| `domain/coverage/prettify.js` | 3 | 17.2 KB | — |
| `domain/coverage/sorter.js` | 211 | 6.6 KB | — |
| `domain/src/governance.ts` | 28 | 0.6 KB | A Claim in EPOS is a node that undergoes a formal governance process. |
| `domain/src/index.ts` | 4 | 0.1 KB | — |
| `domain/src/mission.ts` | 50 | 0.9 KB | — |
| `domain/src/node.ts` | 52 | 0.9 KB | — |
| `domain/test/domain-smoke.test.ts` | 49 | 1.2 KB | — |
| `domain/test/node-invariants.test.ts` | 51 | 1.2 KB | — |
| `domain/vitest.config.ts` | 21 | 0.4 KB | — |
| `infrastructure-mcp/src/index.ts` | 4 | 0.1 KB | — |
| `infrastructure-mcp/src/mcp-app.registry.ts` | 35 | 0.8 KB | — |
| `infrastructure-mcp/src/mcp-bridge.ts` | 64 | 1.6 KB | — |
| `infrastructure-models/src/index.ts` | 3 | 0.1 KB | — |
| `infrastructure-postgres/src/graph.repository.ts` | 142 | 4.0 KB | — |
| `infrastructure-postgres/src/index.ts` | 8 | 0.2 KB | — |
| `infrastructure-postgres/src/mission.repository.ts` | 96 | 2.9 KB | — |
| `infrastructure-postgres/src/schema.ts` | 69 | 2.3 KB | — |
| `infrastructure-runtime/src/in-memory-governance.repository.ts` | 29 | 0.9 KB | — |
| `infrastructure-runtime/src/index.ts` | 5 | 0.2 KB | — |
| `observability/src/audit.ts` | 25 | 0.6 KB | — |
| `observability/src/index.ts` | 3 | 0.1 KB | — |
| `observability/src/tracer.ts` | 24 | 0.5 KB | — |
| `ports/src/domain.repository.port.ts` | 8 | 0.2 KB | — |
| `ports/src/governance.port.ts` | 9 | 0.4 KB | — |
| `ports/src/graph.repository.port.ts` | 11 | 0.4 KB | — |
| `ports/src/index.ts` | 6 | 0.2 KB | — |
| `ports/src/mcp.port.ts` | 35 | 1.0 KB | Port for MCP Application Registry. |
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
  - `./routes/governance.routes.js` → governanceRoutes
  - `./routes/mcp.routes.js` → mcpRoutes
  - `@epos/infrastructure-runtime` → InMemoryGovernanceRepository

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

### `application/src/use-cases/cast-vote.ts`
- **Экспорт**: `CastVoteRequest`, `CastVoteUseCase`
- **Зависимости**:
  - `@epos/ports` → GovernanceRepositoryPort, GraphRepositoryPort
  - `@epos/domain` → Vote
  - `@epos/observability` → auditLogger

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

### `application/src/use-cases/submit-claim.ts`
- **Экспорт**: `SubmitClaimRequest`, `SubmitClaimUseCase`
- **Зависимости**:
  - `@epos/domain` → Claim, GovernanceProcess
  - `@epos/ports` → GraphRepositoryPort, GovernanceRepositoryPort

### `domain/src/governance.ts`
- **Экспорт**: `ApprovalStatus`, `Vote`, `GovernanceProcess`, `Claim`
- **Зависимости**:
  - `./node.js` → EpistemicNode

### `domain/src/mission.ts`
- **Экспорт**: `MissionStatus`, `MissionMode`, `MissionSensitivity`, `MissionBrief`, `MissionActor`, `Mission`, `assertMissionCanRun`

### `domain/src/node.ts`
- **Экспорт**: `NodeType`, `NodeStrength`, `EvidenceRef`, `EpistemicNode`, `EpistemicEdgeType`, `EpistemicEdge`

### `infrastructure-mcp/src/index.ts`
- **Экспорт**: `MCP_VERSION`

### `infrastructure-mcp/src/mcp-app.registry.ts`
- **Экспорт**: `InMemoryMCPAppRegistry`
- **Зависимости**:
  - `@epos/ports` → MCPApp, MCPAppRegistryPort

### `infrastructure-mcp/src/mcp-bridge.ts`
- **Экспорт**: `MockMCPBridge`
- **Зависимости**:
  - `@epos/ports` → MCPBridgePort, MCPAppRegistryPort

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

### `infrastructure-runtime/src/in-memory-governance.repository.ts`
- **Экспорт**: `InMemoryGovernanceRepository`
- **Зависимости**:
  - `@epos/domain` → GovernanceProcess
  - `@epos/ports` → GovernanceRepositoryPort

### `infrastructure-runtime/src/index.ts`
- **Экспорт**: `RUNTIME_MODE`, `DURABILITY_ENABLED`

### `observability/src/audit.ts`
- **Экспорт**: `AuditEntry`, `AuditLogger`, `auditLogger`

### `observability/src/tracer.ts`
- **Экспорт**: `TraceEvent`, `Tracer`, `ConsoleTracer`, `tracer`

### `ports/src/domain.repository.port.ts`
- **Экспорт**: `MissionRepositoryPort`
- **Зависимости**:
  - `@epos/domain` → Mission

### `ports/src/governance.port.ts`
- **Экспорт**: `GovernanceRepositoryPort`
- **Зависимости**:
  - `@epos/domain` → GovernanceProcess

### `ports/src/graph.repository.port.ts`
- **Экспорт**: `GraphRepositoryPort`
- **Зависимости**:
  - `@epos/domain` → EpistemicNode, EpistemicEdge

### `ports/src/mcp.port.ts`
- **Экспорт**: `MCPApp`, `MCPAppRegistryPort`, `MCPBridgePort`

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
