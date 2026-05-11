# 🗺️ PROJECT MAP — epos
> Автоматически сгенерировано: `2026-05-11 23:19:01`
> Скрипт: `node dev_studio/refresh.js`

## 📊 Telemetry / Context Health
| Metric | Value | Note |
|---|---|---|
| **Total Files** | `67` | Только JS/TS/TSX исходники |
| **Total Lines** | `3129` | Суммарно по проекту |
| **Project Weight** | `~25 724 tokens` | Оценка (4 символа/токен) |
| **Context Pressure** | `20.1%` | Нагрузка на окно 128k (Full Scan) |
| **Map Efficiency** | `~76%` | Экономия контекста через карту |

---

## Высокоуровневая архитектура
> Связи между основными пакетами и приложениями

```mermaid
flowchart LR

subgraph 0["apps"]
subgraph 1["demo-shell"]
subgraph 2["dist"]
subgraph 3["assets"]
4["index-ACe9i7tG.js"]
end
end
subgraph 7["src"]
8["App.tsx"]
subgraph F["components"]
G["CommandPalette.tsx"]
T["MissionRoom.tsx"]
W["GovernancePanel.tsx"]
X["GraphCanvas.tsx"]
17["Sidebar.tsx"]
end
subgraph U["context"]
V["MissionContext.tsx"]
end
subgraph 15["hooks"]
16["useApi.ts"]
end
18["main.tsx"]
19["index.css"]
end
end
end
subgraph 5["@emotion"]
6["is-prop-valid"]
end
subgraph 9["node_modules"]
subgraph A[".pnpm"]
subgraph B["react@18.3.1"]
subgraph C["node_modules"]
subgraph D["react"]
E["index.js"]
end
end
end
subgraph H["framer-motion@12.38.0_react_8b618d649db4043b646326868cdfb743"]
subgraph I["node_modules"]
subgraph J["framer-motion"]
subgraph K["dist"]
subgraph L["cjs"]
M["index.js"]
end
end
end
end
end
subgraph N["lucide-react@1.14.0_react@18.3.1"]
subgraph O["node_modules"]
subgraph P["lucide-react"]
subgraph Q["dist"]
subgraph R["cjs"]
S["lucide-react.js"]
end
end
end
end
end
subgraph Y["reactflow@11.11.4_@types+re_c2b98541cbcfabf22830798c75b6ca44"]
subgraph Z["node_modules"]
subgraph 10["reactflow"]
subgraph 11["dist"]
subgraph 12["esm"]
13["index.mjs"]
end
14["style.css"]
end
end
end
end
subgraph 1A["react-dom@18.3.1_react@18.3.1"]
subgraph 1B["node_modules"]
subgraph 1C["react-dom"]
1D["client.js"]
end
end
end
subgraph 1J["dotenv@16.6.1"]
subgraph 1K["node_modules"]
subgraph 1L["dotenv"]
subgraph 1M["lib"]
1N["main.js"]
end
end
end
end
subgraph 1O["drizzle-orm@0.30.10_@types+_e0e2009336beb99158b32f944ddf65e4"]
subgraph 1P["node_modules"]
subgraph 1Q["drizzle-orm"]
subgraph 1R["postgres-js"]
1S["index.js"]
end
3E["index.js"]
subgraph 3G["pg-core"]
3H["index.js"]
end
end
end
end
subgraph 1T["fastify@4.29.1"]
subgraph 1U["node_modules"]
subgraph 1V["fastify"]
1W["fastify.js"]
end
end
end
subgraph 1X["postgres@3.4.9"]
subgraph 1Y["node_modules"]
subgraph 1Z["postgres"]
subgraph 20["src"]
21["index.js"]
end
end
end
end
subgraph 3Q["vitest@1.6.1_@types+node@25.6.2"]
subgraph 3R["node_modules"]
subgraph 3S["vitest"]
subgraph 3T["dist"]
3U["index.js"]
4D["config.cjs"]
end
end
end
end
end
end
subgraph 1E["packages"]
subgraph 1F["api"]
subgraph 1G["src"]
1H["bin.ts"]
1I["server.ts"]
subgraph 22["routes"]
23["governance.routes.ts"]
30["mapping.routes.ts"]
33["mcp.routes.ts"]
34["mission.routes.ts"]
end
subgraph 31["dto"]
32["index.ts"]
end
3N["index.ts"]
end
subgraph 3O["test"]
3P["api.test.ts"]
end
end
subgraph 24["application"]
subgraph 25["src"]
26["index.ts"]
subgraph 27["use-cases"]
28["add-edge.ts"]
2S["add-node.ts"]
2T["cast-vote.ts"]
2U["create-mission.ts"]
2V["get-mission-graph.ts"]
2W["list-missions.ts"]
2X["patch-node.ts"]
2Y["submit-claim.ts"]
end
end
subgraph 3V["test"]
3W["use-cases.test.ts"]
end
end
subgraph 2A["domain"]
subgraph 2B["src"]
2C["index.js"]
2D["governance.js"]
2E["mission.js"]
2F["node.js"]
41["governance.d.ts"]
42["governance.ts"]
43["index.d.ts"]
44["index.ts"]
45["mission.d.ts"]
46["mission.ts"]
47["node.d.ts"]
48["node.ts"]
end
subgraph 3X["coverage"]
3Y["block-navigation.js"]
3Z["prettify.js"]
40["sorter.js"]
end
subgraph 49["test"]
4A["domain-smoke.test.ts"]
4B["node-invariants.test.ts"]
end
4C["vitest.config.ts"]
end
subgraph 2G["observability"]
subgraph 2H["src"]
2I["index.ts"]
2J["audit.ts"]
2K["tracer.ts"]
end
end
subgraph 2L["ports"]
subgraph 2M["src"]
2N["index.js"]
2O["domain.repository.port.js"]
2P["governance.port.js"]
2Q["graph.repository.port.js"]
2R["mcp.port.js"]
5I["domain.repository.port.d.ts"]
5J["domain.repository.port.ts"]
5K["governance.port.d.ts"]
5L["governance.port.ts"]
5M["graph.repository.port.d.ts"]
5N["graph.repository.port.ts"]
5O["index.d.ts"]
5P["index.ts"]
5Q["mcp.port.d.ts"]
5R["mcp.port.ts"]
end
end
subgraph 35["infrastructure-mcp"]
subgraph 36["src"]
37["index.ts"]
38["mcp-app.registry.ts"]
39["mcp-bridge.ts"]
end
subgraph 4E["dist"]
subgraph 4F["domain"]
subgraph 4G["src"]
4H["governance.d.ts"]
4I["node.js"]
4J["governance.js"]
4K["index.d.ts"]
4L["mission.js"]
4M["index.js"]
4N["mission.d.ts"]
4O["node.d.ts"]
end
end
4P["index.d.ts"]
4Q["mcp-app.registry.js"]
4R["mcp-bridge.js"]
4S["index.js"]
subgraph 4T["infrastructure-mcp"]
subgraph 4U["src"]
4V["index.d.ts"]
4W["mcp-app.registry.js"]
4X["mcp-bridge.js"]
4Y["index.js"]
4Z["mcp-app.registry.d.ts"]
50["mcp-bridge.d.ts"]
end
end
51["mcp-app.registry.d.ts"]
52["mcp-bridge.d.ts"]
subgraph 53["ports"]
subgraph 54["src"]
55["domain.repository.port.d.ts"]
56["domain.repository.port.js"]
57["governance.port.d.ts"]
58["governance.port.js"]
59["graph.repository.port.d.ts"]
5A["graph.repository.port.js"]
5B["index.d.ts"]
5C["mcp.port.js"]
5D["index.js"]
5E["mcp.port.d.ts"]
end
end
end
end
subgraph 3A["infrastructure-postgres"]
subgraph 3B["src"]
3C["index.ts"]
3D["graph.repository.ts"]
3F["schema.ts"]
3I["mission.repository.ts"]
end
end
subgraph 3J["infrastructure-runtime"]
subgraph 3K["src"]
3L["index.ts"]
3M["in-memory-governance.repository.ts"]
end
end
subgraph 5F["infrastructure-models"]
subgraph 5G["src"]
5H["index.ts"]
end
end
subgraph 5S["testing"]
subgraph 5T["src"]
5U["fixtures.ts"]
5V["index.ts"]
end
end
end
29["crypto"]
2Z["uuid"]
4-->6
8-->G
8-->T
8-->17
8-->E
G-->M
G-->S
G-->E
T-->V
T-->W
T-->X
T-->S
T-->E
V-->E
W-->E
X-->V
X-->16
X-->E
X-->13
X-->14
16-->E
17-->V
17-->16
17-->S
17-->E
18-->8
18-->V
18-->19
18-->E
18-->1D
18-->14
1H-->1I
1I-->23
1I-->30
1I-->33
1I-->34
1I-->26
1I-->37
1I-->3C
1I-->3L
1I-->1N
1I-->1S
1I-->1W
1I-->21
23-->26
23-->1W
26-->28
26-->2S
26-->2T
26-->2U
26-->2V
26-->2W
26-->2X
26-->2Y
28-->2C
28-->2I
28-->2N
28-->29
2C-->2D
2C-->2E
2C-->2F
2I-->2J
2I-->2K
2N-->2O
2N-->2P
2N-->2Q
2N-->2R
2S-->2C
2S-->2I
2S-->2N
2S-->29
2T-->2C
2T-->2I
2T-->2N
2U-->2C
2U-->2I
2U-->2N
2U-->29
2V-->2C
2V-->2N
2W-->2C
2W-->2N
2X-->2C
2X-->2N
2Y-->2C
2Y-->2N
2Y-->2Z
30-->32
30-->26
30-->1W
32-->2C
33-->2N
33-->1W
34-->32
34-->26
34-->1W
37-->38
37-->39
38-->2N
39-->2N
3C-->3D
3C-->3I
3C-->3F
3D-->3F
3D-->2C
3D-->2N
3D-->3E
3D-->1S
3F-->3H
3I-->3F
3I-->2C
3I-->2N
3I-->3E
3I-->1S
3L-->3M
3M-->2C
3M-->2N
3N-->1I
3P-->1I
3P-->2N
3P-->1W
3P-->3U
3W-->28
3W-->2S
3W-->2U
3W-->2X
3W-->2C
3W-->2N
3W-->3U
41-->2F
42-->2F
43-->2D
43-->2E
43-->2F
44-->2D
44-->2E
44-->2F
4A-->2C
4A-->3U
4B-->2C
4B-->3U
4C-->4D
4H-->4I
4K-->4J
4K-->4L
4K-->4I
4M-->4J
4M-->4L
4M-->4I
4P-->4Q
4P-->4R
4S-->4Q
4S-->4R
4V-->4W
4V-->4X
4Y-->4W
4Y-->4X
4Z-->2N
50-->2N
51-->2N
52-->2N
55-->2C
57-->2C
59-->2C
5B-->56
5B-->58
5B-->5A
5B-->5C
5D-->56
5D-->58
5D-->5A
5D-->5C
5I-->2C
5J-->2C
5K-->2C
5L-->2C
5M-->2C
5N-->2C
5O-->2O
5O-->2P
5O-->2Q
5O-->2R
5P-->2O
5P-->2P
5P-->2Q
5P-->2R
5U-->2C
5V-->5U
```

## Детальная карта компонентов
> Полный граф зависимостей всех файлов проекта

```mermaid
flowchart LR

subgraph 0["apps"]
subgraph 1["demo-shell"]
subgraph 2["dist"]
subgraph 3["assets"]
4["index-ACe9i7tG.js"]
end
end
subgraph 7["src"]
8["App.tsx"]
subgraph F["components"]
G["CommandPalette.tsx"]
T["MissionRoom.tsx"]
W["GovernancePanel.tsx"]
X["GraphCanvas.tsx"]
17["Sidebar.tsx"]
end
subgraph U["context"]
V["MissionContext.tsx"]
end
subgraph 15["hooks"]
16["useApi.ts"]
end
18["main.tsx"]
19["index.css"]
end
end
end
subgraph 5["@emotion"]
6["is-prop-valid"]
end
subgraph 9["node_modules"]
subgraph A[".pnpm"]
subgraph B["react@18.3.1"]
subgraph C["node_modules"]
subgraph D["react"]
E["index.js"]
end
end
end
subgraph H["framer-motion@12.38.0_react_8b618d649db4043b646326868cdfb743"]
subgraph I["node_modules"]
subgraph J["framer-motion"]
subgraph K["dist"]
subgraph L["cjs"]
M["index.js"]
end
end
end
end
end
subgraph N["lucide-react@1.14.0_react@18.3.1"]
subgraph O["node_modules"]
subgraph P["lucide-react"]
subgraph Q["dist"]
subgraph R["cjs"]
S["lucide-react.js"]
end
end
end
end
end
subgraph Y["reactflow@11.11.4_@types+re_c2b98541cbcfabf22830798c75b6ca44"]
subgraph Z["node_modules"]
subgraph 10["reactflow"]
subgraph 11["dist"]
subgraph 12["esm"]
13["index.mjs"]
end
14["style.css"]
end
end
end
end
subgraph 1A["react-dom@18.3.1_react@18.3.1"]
subgraph 1B["node_modules"]
subgraph 1C["react-dom"]
1D["client.js"]
end
end
end
subgraph 1J["dotenv@16.6.1"]
subgraph 1K["node_modules"]
subgraph 1L["dotenv"]
subgraph 1M["lib"]
1N["main.js"]
end
end
end
end
subgraph 1O["drizzle-orm@0.30.10_@types+_e0e2009336beb99158b32f944ddf65e4"]
subgraph 1P["node_modules"]
subgraph 1Q["drizzle-orm"]
subgraph 1R["postgres-js"]
1S["index.js"]
end
3E["index.js"]
subgraph 3G["pg-core"]
3H["index.js"]
end
end
end
end
subgraph 1T["fastify@4.29.1"]
subgraph 1U["node_modules"]
subgraph 1V["fastify"]
1W["fastify.js"]
end
end
end
subgraph 1X["postgres@3.4.9"]
subgraph 1Y["node_modules"]
subgraph 1Z["postgres"]
subgraph 20["src"]
21["index.js"]
end
end
end
end
subgraph 3Q["vitest@1.6.1_@types+node@25.6.2"]
subgraph 3R["node_modules"]
subgraph 3S["vitest"]
subgraph 3T["dist"]
3U["index.js"]
4D["config.cjs"]
end
end
end
end
end
end
subgraph 1E["packages"]
subgraph 1F["api"]
subgraph 1G["src"]
1H["bin.ts"]
1I["server.ts"]
subgraph 22["routes"]
23["governance.routes.ts"]
30["mapping.routes.ts"]
33["mcp.routes.ts"]
34["mission.routes.ts"]
end
subgraph 31["dto"]
32["index.ts"]
end
3N["index.ts"]
end
subgraph 3O["test"]
3P["api.test.ts"]
end
end
subgraph 24["application"]
subgraph 25["src"]
26["index.ts"]
subgraph 27["use-cases"]
28["add-edge.ts"]
2S["add-node.ts"]
2T["cast-vote.ts"]
2U["create-mission.ts"]
2V["get-mission-graph.ts"]
2W["list-missions.ts"]
2X["patch-node.ts"]
2Y["submit-claim.ts"]
end
end
subgraph 3V["test"]
3W["use-cases.test.ts"]
end
end
subgraph 2A["domain"]
subgraph 2B["src"]
2C["index.js"]
2D["governance.js"]
2E["mission.js"]
2F["node.js"]
41["governance.d.ts"]
42["governance.ts"]
43["index.d.ts"]
44["index.ts"]
45["mission.d.ts"]
46["mission.ts"]
47["node.d.ts"]
48["node.ts"]
end
subgraph 3X["coverage"]
3Y["block-navigation.js"]
3Z["prettify.js"]
40["sorter.js"]
end
subgraph 49["test"]
4A["domain-smoke.test.ts"]
4B["node-invariants.test.ts"]
end
4C["vitest.config.ts"]
end
subgraph 2G["observability"]
subgraph 2H["src"]
2I["index.ts"]
2J["audit.ts"]
2K["tracer.ts"]
end
end
subgraph 2L["ports"]
subgraph 2M["src"]
2N["index.js"]
2O["domain.repository.port.js"]
2P["governance.port.js"]
2Q["graph.repository.port.js"]
2R["mcp.port.js"]
5I["domain.repository.port.d.ts"]
5J["domain.repository.port.ts"]
5K["governance.port.d.ts"]
5L["governance.port.ts"]
5M["graph.repository.port.d.ts"]
5N["graph.repository.port.ts"]
5O["index.d.ts"]
5P["index.ts"]
5Q["mcp.port.d.ts"]
5R["mcp.port.ts"]
end
end
subgraph 35["infrastructure-mcp"]
subgraph 36["src"]
37["index.ts"]
38["mcp-app.registry.ts"]
39["mcp-bridge.ts"]
end
subgraph 4E["dist"]
subgraph 4F["domain"]
subgraph 4G["src"]
4H["governance.d.ts"]
4I["node.js"]
4J["governance.js"]
4K["index.d.ts"]
4L["mission.js"]
4M["index.js"]
4N["mission.d.ts"]
4O["node.d.ts"]
end
end
4P["index.d.ts"]
4Q["mcp-app.registry.js"]
4R["mcp-bridge.js"]
4S["index.js"]
subgraph 4T["infrastructure-mcp"]
subgraph 4U["src"]
4V["index.d.ts"]
4W["mcp-app.registry.js"]
4X["mcp-bridge.js"]
4Y["index.js"]
4Z["mcp-app.registry.d.ts"]
50["mcp-bridge.d.ts"]
end
end
51["mcp-app.registry.d.ts"]
52["mcp-bridge.d.ts"]
subgraph 53["ports"]
subgraph 54["src"]
55["domain.repository.port.d.ts"]
56["domain.repository.port.js"]
57["governance.port.d.ts"]
58["governance.port.js"]
59["graph.repository.port.d.ts"]
5A["graph.repository.port.js"]
5B["index.d.ts"]
5C["mcp.port.js"]
5D["index.js"]
5E["mcp.port.d.ts"]
end
end
end
end
subgraph 3A["infrastructure-postgres"]
subgraph 3B["src"]
3C["index.ts"]
3D["graph.repository.ts"]
3F["schema.ts"]
3I["mission.repository.ts"]
end
end
subgraph 3J["infrastructure-runtime"]
subgraph 3K["src"]
3L["index.ts"]
3M["in-memory-governance.repository.ts"]
end
end
subgraph 5F["infrastructure-models"]
subgraph 5G["src"]
5H["index.ts"]
end
end
subgraph 5S["testing"]
subgraph 5T["src"]
5U["fixtures.ts"]
5V["index.ts"]
end
end
end
29["crypto"]
2Z["uuid"]
4-->6
8-->G
8-->T
8-->17
8-->E
G-->M
G-->S
G-->E
T-->V
T-->W
T-->X
T-->S
T-->E
V-->E
W-->E
X-->V
X-->16
X-->E
X-->13
X-->14
16-->E
17-->V
17-->16
17-->S
17-->E
18-->8
18-->V
18-->19
18-->E
18-->1D
18-->14
1H-->1I
1I-->23
1I-->30
1I-->33
1I-->34
1I-->26
1I-->37
1I-->3C
1I-->3L
1I-->1N
1I-->1S
1I-->1W
1I-->21
23-->26
23-->1W
26-->28
26-->2S
26-->2T
26-->2U
26-->2V
26-->2W
26-->2X
26-->2Y
28-->2C
28-->2I
28-->2N
28-->29
2C-->2D
2C-->2E
2C-->2F
2I-->2J
2I-->2K
2N-->2O
2N-->2P
2N-->2Q
2N-->2R
2S-->2C
2S-->2I
2S-->2N
2S-->29
2T-->2C
2T-->2I
2T-->2N
2U-->2C
2U-->2I
2U-->2N
2U-->29
2V-->2C
2V-->2N
2W-->2C
2W-->2N
2X-->2C
2X-->2N
2Y-->2C
2Y-->2N
2Y-->2Z
30-->32
30-->26
30-->1W
32-->2C
33-->2N
33-->1W
34-->32
34-->26
34-->1W
37-->38
37-->39
38-->2N
39-->2N
3C-->3D
3C-->3I
3C-->3F
3D-->3F
3D-->2C
3D-->2N
3D-->3E
3D-->1S
3F-->3H
3I-->3F
3I-->2C
3I-->2N
3I-->3E
3I-->1S
3L-->3M
3M-->2C
3M-->2N
3N-->1I
3P-->1I
3P-->2N
3P-->1W
3P-->3U
3W-->28
3W-->2S
3W-->2U
3W-->2X
3W-->2C
3W-->2N
3W-->3U
41-->2F
42-->2F
43-->2D
43-->2E
43-->2F
44-->2D
44-->2E
44-->2F
4A-->2C
4A-->3U
4B-->2C
4B-->3U
4C-->4D
4H-->4I
4K-->4J
4K-->4L
4K-->4I
4M-->4J
4M-->4L
4M-->4I
4P-->4Q
4P-->4R
4S-->4Q
4S-->4R
4V-->4W
4V-->4X
4Y-->4W
4Y-->4X
4Z-->2N
50-->2N
51-->2N
52-->2N
55-->2C
57-->2C
59-->2C
5B-->56
5B-->58
5B-->5A
5B-->5C
5D-->56
5D-->58
5D-->5A
5D-->5C
5I-->2C
5J-->2C
5K-->2C
5L-->2C
5M-->2C
5N-->2C
5O-->2O
5O-->2P
5O-->2Q
5O-->2R
5P-->2O
5P-->2P
5P-->2Q
5P-->2R
5U-->2C
5V-->5U
```

## Компонент: `apps`

| Файл | Строк | Размер | Описание |
|---|---|---|---|
| `demo-shell/src/App.tsx` | 52 | 1.2 KB | — |
| `demo-shell/src/components/CommandPalette.tsx` | 219 | 6.0 KB | — |
| `demo-shell/src/components/GovernancePanel.tsx` | 95 | 3.1 KB | — |
| `demo-shell/src/components/GraphCanvas.tsx` | 124 | 2.9 KB | — |
| `demo-shell/src/components/MissionRoom.tsx` | 282 | 7.7 KB | — |
| `demo-shell/src/components/Sidebar.tsx` | 223 | 5.3 KB | — |
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
| `domain/src/governance.js` | 2 | 0.0 KB | — |
| `domain/src/governance.ts` | 28 | 0.6 KB | A Claim in EPOS is a node that undergoes a formal governance process. |
| `domain/src/index.js` | 4 | 0.1 KB | — |
| `domain/src/index.ts` | 4 | 0.1 KB | — |
| `domain/src/mission.js` | 6 | 0.2 KB | — |
| `domain/src/mission.ts` | 50 | 0.9 KB | — |
| `domain/src/node.js` | 2 | 0.0 KB | — |
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
| `ports/src/domain.repository.port.js` | 2 | 0.1 KB | — |
| `ports/src/domain.repository.port.ts` | 8 | 0.2 KB | — |
| `ports/src/governance.port.js` | 2 | 0.1 KB | — |
| `ports/src/governance.port.ts` | 9 | 0.4 KB | — |
| `ports/src/graph.repository.port.js` | 2 | 0.1 KB | — |
| `ports/src/graph.repository.port.ts` | 11 | 0.4 KB | — |
| `ports/src/index.js` | 6 | 0.2 KB | — |
| `ports/src/index.ts` | 6 | 0.2 KB | — |
| `ports/src/mcp.port.js` | 2 | 0.0 KB | — |
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

### `domain/src/mission.js`
- **Экспорт**: `assertMissionCanRun`

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
