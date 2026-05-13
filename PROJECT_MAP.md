# 🗺️ PROJECT MAP — epios
> Автоматически сгенерировано: `2026-05-13 11:12:19`
> Скрипт: `node dev_studio/refresh.js`

## 📊 Telemetry / Context Health
| Metric | Value | Note |
|---|---|---|
| **Total Files** | `73` | Только JS/TS/TSX исходники |
| **Total Lines** | `6069` | Суммарно по проекту |
| **Project Weight** | `~52 653 tokens` | Оценка (4 символа/токен) |
| **Context Pressure** | `41.1%` | Нагрузка на окно 128k (Full Scan) |
| **Map Efficiency** | `~87%` | Экономия контекста через карту |

---

## Высокоуровневая архитектура
> Связи между основными пакетами и приложениями

```mermaid
flowchart LR

subgraph 0["apps"]
subgraph 1["demo-shell"]
subgraph 2["dist"]
subgraph 3["assets"]
4["index-D4vUquLR.js"]
end
end
subgraph 7["src"]
8["App.tsx"]
subgraph F["components"]
G["CommandPalette.tsx"]
11["Sidebar.tsx"]
14["WorkspaceRoom.tsx"]
15["GovernancePanel.tsx"]
16["GraphCanvas.tsx"]
18["CustomNode.tsx"]
end
subgraph T["context"]
U["WorkspaceContext.tsx"]
end
subgraph 12["hooks"]
13["useApi.ts"]
end
19["main.tsx"]
1A["index.css"]
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
subgraph V["reactflow@11.11.4_@types+re_c2b98541cbcfabf22830798c75b6ca44"]
subgraph W["node_modules"]
subgraph X["reactflow"]
subgraph Y["dist"]
subgraph Z["esm"]
10["index.mjs"]
end
17["style.css"]
end
end
end
end
subgraph 1B["react-dom@18.3.1_react@18.3.1"]
subgraph 1C["node_modules"]
subgraph 1D["react-dom"]
1E["client.js"]
end
end
end
subgraph 1O["@fastify+cors@8.5.0"]
subgraph 1P["node_modules"]
subgraph 1Q["@fastify"]
subgraph 1R["cors"]
1S["index.js"]
end
end
end
end
subgraph 1T["dotenv@16.6.1"]
subgraph 1U["node_modules"]
subgraph 1V["dotenv"]
subgraph 1W["lib"]
1X["main.js"]
end
end
end
end
subgraph 1Y["drizzle-orm@0.30.10_@types+_e0e2009336beb99158b32f944ddf65e4"]
subgraph 1Z["node_modules"]
subgraph 20["drizzle-orm"]
subgraph 21["postgres-js"]
22["index.js"]
end
3N["index.js"]
subgraph 3P["pg-core"]
3Q["index.js"]
end
end
end
end
subgraph 23["fastify@4.29.1"]
subgraph 24["node_modules"]
subgraph 25["fastify"]
26["fastify.js"]
end
end
end
subgraph 27["postgres@3.4.9"]
subgraph 28["node_modules"]
subgraph 29["postgres"]
subgraph 2A["src"]
2B["index.js"]
end
end
end
end
subgraph 40["vitest@1.6.1_@types+node@25.7.0"]
subgraph 41["node_modules"]
subgraph 42["vitest"]
subgraph 43["dist"]
44["index.js"]
47["config.cjs"]
end
end
end
end
end
end
subgraph 1F["packages"]
subgraph 1G["api"]
subgraph 1H["coverage"]
1I["block-navigation.js"]
1J["prettify.js"]
1K["sorter.js"]
end
subgraph 1L["src"]
1M["bin.ts"]
1N["server.ts"]
subgraph 2C["routes"]
2D["governance.routes.ts"]
39["mapping.routes.ts"]
3C["mcp.routes.ts"]
3D["workspace.routes.ts"]
end
subgraph 3A["dto"]
3B["index.ts"]
end
3X["index.ts"]
end
subgraph 3Y["test"]
3Z["api.test.ts"]
end
45["vitest.config.ts"]
end
subgraph 2E["application"]
subgraph 2F["src"]
2G["index.ts"]
subgraph 2H["use-cases"]
2I["add-edge.ts"]
32["add-node.ts"]
33["cast-vote.ts"]
34["create-workspace.ts"]
35["get-workspace-graph.ts"]
36["list-workspaces.ts"]
37["patch-node.ts"]
38["submit-claim.ts"]
end
end
subgraph 48["test"]
49["create-workspace.test.ts"]
4A["use-cases.test.ts"]
end
4B["vitest.config.ts"]
end
subgraph 2K["domain"]
subgraph 2L["src"]
2M["index.ts"]
2N["governance.ts"]
2O["node.ts"]
2P["workspace.ts"]
end
subgraph 4C["coverage"]
4D["block-navigation.js"]
4E["prettify.js"]
4F["sorter.js"]
end
subgraph 4G["test"]
4H["domain-smoke.test.ts"]
4I["node-invariants.test.ts"]
4J["workspace.test.ts"]
end
4K["vitest.config.ts"]
end
subgraph 2Q["observability"]
subgraph 2R["src"]
2S["index.ts"]
2T["audit.ts"]
2U["tracer.ts"]
end
end
subgraph 2V["ports"]
subgraph 2W["src"]
2X["index.js"]
2Y["domain.repository.port.js"]
2Z["governance.port.js"]
30["graph.repository.port.js"]
31["mcp.port.js"]
5V["domain.repository.port.d.ts"]
5W["domain.repository.port.ts"]
5X["governance.port.d.ts"]
5Y["governance.port.ts"]
5Z["graph.repository.port.d.ts"]
60["graph.repository.port.ts"]
61["index.d.ts"]
62["index.ts"]
63["mcp.port.d.ts"]
64["mcp.port.ts"]
end
end
subgraph 3E["infrastructure-mcp"]
subgraph 3F["src"]
3G["index.ts"]
3H["mcp-app.registry.ts"]
3I["mcp-bridge.ts"]
end
subgraph 4L["dist"]
subgraph 4M["domain"]
subgraph 4N["src"]
4O["governance.d.ts"]
4P["node.js"]
4Q["governance.js"]
4R["index.d.ts"]
4S["workspace.js"]
4T["index.js"]
4U["mission.d.ts"]
4V["mission.js"]
4W["node.d.ts"]
4X["workspace.d.ts"]
end
end
4Y["index.d.ts"]
4Z["mcp-app.registry.js"]
50["mcp-bridge.js"]
51["index.js"]
subgraph 52["infrastructure-mcp"]
subgraph 53["src"]
54["index.d.ts"]
55["mcp-app.registry.js"]
56["mcp-bridge.js"]
57["index.js"]
58["mcp-app.registry.d.ts"]
59["mcp-bridge.d.ts"]
end
end
5A["mcp-app.registry.d.ts"]
5D["mcp-bridge.d.ts"]
subgraph 5E["ports"]
subgraph 5F["src"]
5G["domain.repository.port.d.ts"]
5H["domain.repository.port.js"]
5I["governance.port.d.ts"]
5J["governance.port.js"]
5K["graph.repository.port.d.ts"]
5L["graph.repository.port.js"]
5M["index.d.ts"]
5N["mcp.port.js"]
5O["index.js"]
5P["mcp.port.d.ts"]
end
end
end
subgraph 5Q["test"]
5R["smoke.test.ts"]
end
end
subgraph 3J["infrastructure-postgres"]
subgraph 3K["src"]
3L["index.ts"]
3M["graph.repository.ts"]
3O["schema.ts"]
3R["workspace.repository.ts"]
end
end
subgraph 3S["infrastructure-runtime"]
subgraph 3T["src"]
3U["index.ts"]
3V["in-memory-governance.repository.ts"]
3W["in-memory-repositories.ts"]
end
end
subgraph 5S["infrastructure-models"]
subgraph 5T["src"]
5U["index.ts"]
end
end
subgraph 65["testing"]
subgraph 66["src"]
67["fixtures.ts"]
68["index.ts"]
end
end
end
2J["crypto"]
46["path"]
subgraph 5B["@epos"]
5C["ports"]
end
4-->6
8-->G
8-->11
8-->14
8-->E
G-->U
G-->M
G-->S
G-->E
U-->E
U-->10
11-->U
11-->13
11-->M
11-->S
11-->E
13-->E
14-->U
14-->15
14-->16
14-->M
14-->S
14-->E
15-->M
15-->S
15-->E
16-->U
16-->13
16-->18
16-->S
16-->E
16-->10
16-->17
18-->S
18-->E
18-->10
19-->8
19-->U
19-->1A
19-->E
19-->1E
19-->17
1M-->1N
1N-->2D
1N-->39
1N-->3C
1N-->3D
1N-->2G
1N-->2M
1N-->3G
1N-->3L
1N-->3U
1N-->2X
1N-->1S
1N-->1X
1N-->22
1N-->26
1N-->2B
2D-->2G
2D-->26
2G-->2I
2G-->32
2G-->33
2G-->34
2G-->35
2G-->36
2G-->37
2G-->38
2I-->2M
2I-->2S
2I-->2X
2I-->2J
2M-->2N
2M-->2O
2M-->2P
2N-->2O
2S-->2T
2S-->2U
2X-->2Y
2X-->2Z
2X-->30
2X-->31
32-->2M
32-->2S
32-->2X
32-->2J
33-->2M
33-->2S
33-->2X
34-->2M
34-->2S
34-->2X
34-->2J
35-->2M
35-->2X
36-->2M
36-->2X
37-->2M
37-->2X
38-->2M
38-->2X
38-->2J
39-->3B
39-->2G
39-->26
3B-->2M
3C-->2X
3C-->26
3D-->3B
3D-->2G
3D-->26
3G-->3H
3G-->3I
3H-->2X
3I-->2X
3L-->3M
3L-->3O
3L-->3R
3M-->3O
3M-->2M
3M-->2X
3M-->3N
3M-->22
3O-->3Q
3R-->3O
3R-->2M
3R-->2X
3R-->3N
3R-->22
3U-->3V
3U-->3W
3V-->2M
3V-->2X
3W-->2M
3W-->2X
3X-->1N
3Z-->1N
3Z-->2X
3Z-->26
3Z-->44
45-->46
45-->47
49-->34
49-->2X
49-->44
4A-->2I
4A-->32
4A-->33
4A-->34
4A-->35
4A-->36
4A-->37
4A-->38
4A-->2M
4A-->2X
4A-->44
4B-->46
4B-->47
4H-->2M
4H-->44
4I-->2M
4I-->44
4J-->2P
4J-->44
4K-->47
4O-->4P
4R-->4Q
4R-->4P
4R-->4S
4T-->4Q
4T-->4P
4T-->4S
4Y-->4Z
4Y-->50
51-->4Z
51-->50
54-->55
54-->56
57-->55
57-->56
58-->2X
59-->2X
5A-->5C
5D-->5C
5G-->2M
5I-->2M
5K-->2M
5M-->5H
5M-->5J
5M-->5L
5M-->5N
5O-->5H
5O-->5J
5O-->5L
5O-->5N
5R-->44
5V-->2M
5W-->2M
5X-->2M
5Y-->2M
5Z-->2M
60-->2M
61-->2Y
61-->2Z
61-->30
61-->31
62-->2Y
62-->2Z
62-->30
62-->31
67-->2M
68-->67
```

## Детальная карта компонентов
> Полный граф зависимостей всех файлов проекта

```mermaid
flowchart LR

subgraph 0["apps"]
subgraph 1["demo-shell"]
subgraph 2["dist"]
subgraph 3["assets"]
4["index-D4vUquLR.js"]
end
end
subgraph 7["src"]
8["App.tsx"]
subgraph F["components"]
G["CommandPalette.tsx"]
11["Sidebar.tsx"]
14["WorkspaceRoom.tsx"]
15["GovernancePanel.tsx"]
16["GraphCanvas.tsx"]
18["CustomNode.tsx"]
end
subgraph T["context"]
U["WorkspaceContext.tsx"]
end
subgraph 12["hooks"]
13["useApi.ts"]
end
19["main.tsx"]
1A["index.css"]
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
subgraph V["reactflow@11.11.4_@types+re_c2b98541cbcfabf22830798c75b6ca44"]
subgraph W["node_modules"]
subgraph X["reactflow"]
subgraph Y["dist"]
subgraph Z["esm"]
10["index.mjs"]
end
17["style.css"]
end
end
end
end
subgraph 1B["react-dom@18.3.1_react@18.3.1"]
subgraph 1C["node_modules"]
subgraph 1D["react-dom"]
1E["client.js"]
end
end
end
subgraph 1O["@fastify+cors@8.5.0"]
subgraph 1P["node_modules"]
subgraph 1Q["@fastify"]
subgraph 1R["cors"]
1S["index.js"]
end
end
end
end
subgraph 1T["dotenv@16.6.1"]
subgraph 1U["node_modules"]
subgraph 1V["dotenv"]
subgraph 1W["lib"]
1X["main.js"]
end
end
end
end
subgraph 1Y["drizzle-orm@0.30.10_@types+_e0e2009336beb99158b32f944ddf65e4"]
subgraph 1Z["node_modules"]
subgraph 20["drizzle-orm"]
subgraph 21["postgres-js"]
22["index.js"]
end
3N["index.js"]
subgraph 3P["pg-core"]
3Q["index.js"]
end
end
end
end
subgraph 23["fastify@4.29.1"]
subgraph 24["node_modules"]
subgraph 25["fastify"]
26["fastify.js"]
end
end
end
subgraph 27["postgres@3.4.9"]
subgraph 28["node_modules"]
subgraph 29["postgres"]
subgraph 2A["src"]
2B["index.js"]
end
end
end
end
subgraph 40["vitest@1.6.1_@types+node@25.7.0"]
subgraph 41["node_modules"]
subgraph 42["vitest"]
subgraph 43["dist"]
44["index.js"]
47["config.cjs"]
end
end
end
end
end
end
subgraph 1F["packages"]
subgraph 1G["api"]
subgraph 1H["coverage"]
1I["block-navigation.js"]
1J["prettify.js"]
1K["sorter.js"]
end
subgraph 1L["src"]
1M["bin.ts"]
1N["server.ts"]
subgraph 2C["routes"]
2D["governance.routes.ts"]
39["mapping.routes.ts"]
3C["mcp.routes.ts"]
3D["workspace.routes.ts"]
end
subgraph 3A["dto"]
3B["index.ts"]
end
3X["index.ts"]
end
subgraph 3Y["test"]
3Z["api.test.ts"]
end
45["vitest.config.ts"]
end
subgraph 2E["application"]
subgraph 2F["src"]
2G["index.ts"]
subgraph 2H["use-cases"]
2I["add-edge.ts"]
32["add-node.ts"]
33["cast-vote.ts"]
34["create-workspace.ts"]
35["get-workspace-graph.ts"]
36["list-workspaces.ts"]
37["patch-node.ts"]
38["submit-claim.ts"]
end
end
subgraph 48["test"]
49["create-workspace.test.ts"]
4A["use-cases.test.ts"]
end
4B["vitest.config.ts"]
end
subgraph 2K["domain"]
subgraph 2L["src"]
2M["index.ts"]
2N["governance.ts"]
2O["node.ts"]
2P["workspace.ts"]
end
subgraph 4C["coverage"]
4D["block-navigation.js"]
4E["prettify.js"]
4F["sorter.js"]
end
subgraph 4G["test"]
4H["domain-smoke.test.ts"]
4I["node-invariants.test.ts"]
4J["workspace.test.ts"]
end
4K["vitest.config.ts"]
end
subgraph 2Q["observability"]
subgraph 2R["src"]
2S["index.ts"]
2T["audit.ts"]
2U["tracer.ts"]
end
end
subgraph 2V["ports"]
subgraph 2W["src"]
2X["index.js"]
2Y["domain.repository.port.js"]
2Z["governance.port.js"]
30["graph.repository.port.js"]
31["mcp.port.js"]
5V["domain.repository.port.d.ts"]
5W["domain.repository.port.ts"]
5X["governance.port.d.ts"]
5Y["governance.port.ts"]
5Z["graph.repository.port.d.ts"]
60["graph.repository.port.ts"]
61["index.d.ts"]
62["index.ts"]
63["mcp.port.d.ts"]
64["mcp.port.ts"]
end
end
subgraph 3E["infrastructure-mcp"]
subgraph 3F["src"]
3G["index.ts"]
3H["mcp-app.registry.ts"]
3I["mcp-bridge.ts"]
end
subgraph 4L["dist"]
subgraph 4M["domain"]
subgraph 4N["src"]
4O["governance.d.ts"]
4P["node.js"]
4Q["governance.js"]
4R["index.d.ts"]
4S["workspace.js"]
4T["index.js"]
4U["mission.d.ts"]
4V["mission.js"]
4W["node.d.ts"]
4X["workspace.d.ts"]
end
end
4Y["index.d.ts"]
4Z["mcp-app.registry.js"]
50["mcp-bridge.js"]
51["index.js"]
subgraph 52["infrastructure-mcp"]
subgraph 53["src"]
54["index.d.ts"]
55["mcp-app.registry.js"]
56["mcp-bridge.js"]
57["index.js"]
58["mcp-app.registry.d.ts"]
59["mcp-bridge.d.ts"]
end
end
5A["mcp-app.registry.d.ts"]
5D["mcp-bridge.d.ts"]
subgraph 5E["ports"]
subgraph 5F["src"]
5G["domain.repository.port.d.ts"]
5H["domain.repository.port.js"]
5I["governance.port.d.ts"]
5J["governance.port.js"]
5K["graph.repository.port.d.ts"]
5L["graph.repository.port.js"]
5M["index.d.ts"]
5N["mcp.port.js"]
5O["index.js"]
5P["mcp.port.d.ts"]
end
end
end
subgraph 5Q["test"]
5R["smoke.test.ts"]
end
end
subgraph 3J["infrastructure-postgres"]
subgraph 3K["src"]
3L["index.ts"]
3M["graph.repository.ts"]
3O["schema.ts"]
3R["workspace.repository.ts"]
end
end
subgraph 3S["infrastructure-runtime"]
subgraph 3T["src"]
3U["index.ts"]
3V["in-memory-governance.repository.ts"]
3W["in-memory-repositories.ts"]
end
end
subgraph 5S["infrastructure-models"]
subgraph 5T["src"]
5U["index.ts"]
end
end
subgraph 65["testing"]
subgraph 66["src"]
67["fixtures.ts"]
68["index.ts"]
end
end
end
2J["crypto"]
46["path"]
subgraph 5B["@epos"]
5C["ports"]
end
4-->6
8-->G
8-->11
8-->14
8-->E
G-->U
G-->M
G-->S
G-->E
U-->E
U-->10
11-->U
11-->13
11-->M
11-->S
11-->E
13-->E
14-->U
14-->15
14-->16
14-->M
14-->S
14-->E
15-->M
15-->S
15-->E
16-->U
16-->13
16-->18
16-->S
16-->E
16-->10
16-->17
18-->S
18-->E
18-->10
19-->8
19-->U
19-->1A
19-->E
19-->1E
19-->17
1M-->1N
1N-->2D
1N-->39
1N-->3C
1N-->3D
1N-->2G
1N-->2M
1N-->3G
1N-->3L
1N-->3U
1N-->2X
1N-->1S
1N-->1X
1N-->22
1N-->26
1N-->2B
2D-->2G
2D-->26
2G-->2I
2G-->32
2G-->33
2G-->34
2G-->35
2G-->36
2G-->37
2G-->38
2I-->2M
2I-->2S
2I-->2X
2I-->2J
2M-->2N
2M-->2O
2M-->2P
2N-->2O
2S-->2T
2S-->2U
2X-->2Y
2X-->2Z
2X-->30
2X-->31
32-->2M
32-->2S
32-->2X
32-->2J
33-->2M
33-->2S
33-->2X
34-->2M
34-->2S
34-->2X
34-->2J
35-->2M
35-->2X
36-->2M
36-->2X
37-->2M
37-->2X
38-->2M
38-->2X
38-->2J
39-->3B
39-->2G
39-->26
3B-->2M
3C-->2X
3C-->26
3D-->3B
3D-->2G
3D-->26
3G-->3H
3G-->3I
3H-->2X
3I-->2X
3L-->3M
3L-->3O
3L-->3R
3M-->3O
3M-->2M
3M-->2X
3M-->3N
3M-->22
3O-->3Q
3R-->3O
3R-->2M
3R-->2X
3R-->3N
3R-->22
3U-->3V
3U-->3W
3V-->2M
3V-->2X
3W-->2M
3W-->2X
3X-->1N
3Z-->1N
3Z-->2X
3Z-->26
3Z-->44
45-->46
45-->47
49-->34
49-->2X
49-->44
4A-->2I
4A-->32
4A-->33
4A-->34
4A-->35
4A-->36
4A-->37
4A-->38
4A-->2M
4A-->2X
4A-->44
4B-->46
4B-->47
4H-->2M
4H-->44
4I-->2M
4I-->44
4J-->2P
4J-->44
4K-->47
4O-->4P
4R-->4Q
4R-->4P
4R-->4S
4T-->4Q
4T-->4P
4T-->4S
4Y-->4Z
4Y-->50
51-->4Z
51-->50
54-->55
54-->56
57-->55
57-->56
58-->2X
59-->2X
5A-->5C
5D-->5C
5G-->2M
5I-->2M
5K-->2M
5M-->5H
5M-->5J
5M-->5L
5M-->5N
5O-->5H
5O-->5J
5O-->5L
5O-->5N
5R-->44
5V-->2M
5W-->2M
5X-->2M
5Y-->2M
5Z-->2M
60-->2M
61-->2Y
61-->2Z
61-->30
61-->31
62-->2Y
62-->2Z
62-->30
62-->31
67-->2M
68-->67
```

## Компонент: `apps`

| Файл | Строк | Размер | Описание |
|---|---|---|---|
| `demo-shell/src/App.tsx` | 56 | 1.3 KB | — |
| `demo-shell/src/components/CommandPalette.tsx` | 341 | 9.1 KB | — |
| `demo-shell/src/components/CustomNode.tsx` | 159 | 3.9 KB | — |
| `demo-shell/src/components/GovernancePanel.tsx` | 279 | 8.1 KB | — |
| `demo-shell/src/components/GraphCanvas.tsx` | 550 | 15.5 KB | — |
| `demo-shell/src/components/Sidebar.tsx` | 348 | 9.3 KB | — |
| `demo-shell/src/components/WorkspaceRoom.tsx` | 821 | 27.4 KB | — |
| `demo-shell/src/context/WorkspaceContext.tsx` | 129 | 3.2 KB | — |
| `demo-shell/src/hooks/useApi.ts` | 32 | 0.9 KB | — |
| `demo-shell/src/main.tsx` | 16 | 0.4 KB | — |

### `demo-shell/src/components/GovernancePanel.tsx`
- **Экспорт**: `GovernancePanel`
- **Зависимости**:

### `demo-shell/src/context/WorkspaceContext.tsx`
- **Экспорт**: `WorkspaceProvider`, `useWorkspace`
- **Зависимости**:

### `demo-shell/src/hooks/useApi.ts`
- **Экспорт**: `useApi`
- **Зависимости**:

## Компонент: `packages`

| Файл | Строк | Размер | Описание |
|---|---|---|---|
| `api/coverage/block-navigation.js` | 88 | 2.6 KB | — |
| `api/coverage/prettify.js` | 3 | 17.2 KB | — |
| `api/coverage/sorter.js` | 211 | 6.6 KB | — |
| `api/src/bin.ts` | 13 | 0.3 KB | — |
| `api/src/dto/index.ts` | 40 | 0.8 KB | — |
| `api/src/index.ts` | 3 | 0.0 KB | — |
| `api/src/routes/governance.routes.ts` | 34 | 0.9 KB | — |
| `api/src/routes/mapping.routes.ts` | 61 | 1.7 KB | — |
| `api/src/routes/mcp.routes.ts` | 38 | 1.0 KB | — |
| `api/src/routes/workspace.routes.ts` | 37 | 1.0 KB | — |
| `api/src/server.ts` | 470 | 13.7 KB | — |
| `api/test/api.test.ts` | 210 | 5.6 KB | — |
| `api/vitest.config.ts` | 42 | 1.1 KB | — |
| `application/src/index.ts` | 9 | 0.4 KB | — |
| `application/src/use-cases/add-edge.ts` | 47 | 1.3 KB | — |
| `application/src/use-cases/add-node.ts` | 55 | 1.4 KB | — |
| `application/src/use-cases/cast-vote.ts` | 76 | 2.0 KB | — |
| `application/src/use-cases/create-workspace.ts` | 49 | 1.2 KB | — |
| `application/src/use-cases/get-workspace-graph.ts` | 21 | 0.6 KB | — |
| `application/src/use-cases/list-workspaces.ts` | 11 | 0.3 KB | — |
| `application/src/use-cases/patch-node.ts` | 37 | 1.0 KB | — |
| `application/src/use-cases/submit-claim.ts` | 49 | 1.2 KB | — |
| `application/test/create-workspace.test.ts` | 63 | 1.6 KB | — |
| `application/test/use-cases.test.ts` | 337 | 10.3 KB | — |
| `application/vitest.config.ts` | 28 | 0.6 KB | — |
| `domain/coverage/block-navigation.js` | 88 | 2.6 KB | — |
| `domain/coverage/prettify.js` | 3 | 17.2 KB | — |
| `domain/coverage/sorter.js` | 211 | 6.6 KB | — |
| `domain/src/governance.ts` | 28 | 0.6 KB | A Claim in EPIOS is a node that undergoes a formal governance process. |
| `domain/src/index.ts` | 4 | 0.1 KB | — |
| `domain/src/node.ts` | 52 | 0.9 KB | — |
| `domain/src/workspace.ts` | 50 | 1.0 KB | — |
| `domain/test/domain-smoke.test.ts` | 51 | 1.3 KB | — |
| `domain/test/node-invariants.test.ts` | 51 | 1.2 KB | — |
| `domain/test/workspace.test.ts` | 51 | 1.3 KB | — |
| `domain/vitest.config.ts` | 21 | 0.4 KB | — |
| `infrastructure-mcp/src/index.ts` | 4 | 0.1 KB | — |
| `infrastructure-mcp/src/mcp-app.registry.ts` | 35 | 0.8 KB | — |
| `infrastructure-mcp/src/mcp-bridge.ts` | 64 | 1.6 KB | — |
| `infrastructure-mcp/test/smoke.test.ts` | 8 | 0.2 KB | — |
| `infrastructure-models/src/index.ts` | 3 | 0.1 KB | — |
| `infrastructure-postgres/src/graph.repository.ts` | 142 | 4.0 KB | — |
| `infrastructure-postgres/src/index.ts` | 8 | 0.2 KB | — |
| `infrastructure-postgres/src/schema.ts` | 69 | 2.2 KB | — |
| `infrastructure-postgres/src/workspace.repository.ts` | 96 | 3.0 KB | — |
| `infrastructure-runtime/src/in-memory-governance.repository.ts` | 29 | 0.9 KB | — |
| `infrastructure-runtime/src/in-memory-repositories.ts` | 66 | 1.9 KB | — |
| `infrastructure-runtime/src/index.ts` | 6 | 0.2 KB | — |
| `observability/src/audit.ts` | 25 | 0.6 KB | — |
| `observability/src/index.ts` | 3 | 0.1 KB | — |
| `observability/src/tracer.ts` | 24 | 0.5 KB | — |
| `ports/src/domain.repository.port.js` | 3 | 0.1 KB | — |
| `ports/src/domain.repository.port.ts` | 8 | 0.2 KB | — |
| `ports/src/governance.port.js` | 3 | 0.1 KB | — |
| `ports/src/governance.port.ts` | 9 | 0.4 KB | — |
| `ports/src/graph.repository.port.js` | 3 | 0.1 KB | — |
| `ports/src/graph.repository.port.ts` | 11 | 0.5 KB | — |
| `ports/src/index.js` | 7 | 0.2 KB | — |
| `ports/src/index.ts` | 6 | 0.2 KB | — |
| `ports/src/mcp.port.js` | 3 | 0.0 KB | — |
| `ports/src/mcp.port.ts` | 35 | 1.0 KB | Port for MCP Application Registry. |
| `testing/src/fixtures.ts` | 23 | 0.5 KB | — |
| `testing/src/index.ts` | 3 | 0.1 KB | — |

### `api/src/dto/index.ts`
- **Экспорт**: `CreateWorkspaceDto`, `AddNodeDto`, `AddEdgeDto`, `PatchNodeDto`

### `api/src/server.ts`
- **Экспорт**: `ServerDependencies`, `buildServer`
- **Роуты**:
  - `GET /health`
- **Зависимости**:
  - `./routes/workspace.routes.js` → workspaceRoutes
  - `./routes/mapping.routes.js` → mappingRoutes
  - `./routes/governance.routes.js` → governanceRoutes
  - `./routes/mcp.routes.js` → mcpRoutes

### `application/src/use-cases/add-edge.ts`
- **Экспорт**: `AddEdgeRequest`, `AddEdgeUseCase`
- **Зависимости**:
  - `@epios/domain` → EpistemicEdge, EpistemicEdgeType
  - `@epios/ports` → GraphRepositoryPort, WorkspaceRepositoryPort
  - `@epios/observability` → tracer

### `application/src/use-cases/add-node.ts`
- **Экспорт**: `AddNodeRequest`, `AddNodeUseCase`
- **Зависимости**:
  - `@epios/ports` → GraphRepositoryPort, WorkspaceRepositoryPort
  - `@epios/observability` → tracer

### `application/src/use-cases/cast-vote.ts`
- **Экспорт**: `CastVoteRequest`, `CastVoteUseCase`
- **Зависимости**:
  - `@epios/ports` → GovernanceRepositoryPort, GraphRepositoryPort
  - `@epios/domain` → Vote
  - `@epios/observability` → auditLogger

### `application/src/use-cases/create-workspace.ts`
- **Экспорт**: `CreateWorkspaceRequest`, `CreateWorkspaceUseCase`
- **Зависимости**:
  - `@epios/ports` → WorkspaceRepositoryPort
  - `@epios/observability` → tracer

### `application/src/use-cases/get-workspace-graph.ts`
- **Экспорт**: `WorkspaceGraph`, `GetWorkspaceGraphUseCase`
- **Зависимости**:
  - `@epios/domain` → EpistemicNode, EpistemicEdge
  - `@epios/ports` → GraphRepositoryPort

### `application/src/use-cases/list-workspaces.ts`
- **Экспорт**: `ListWorkspacesUseCase`
- **Зависимости**:
  - `@epios/domain` → Workspace
  - `@epios/ports` → WorkspaceRepositoryPort

### `application/src/use-cases/patch-node.ts`
- **Экспорт**: `PatchNodeRequest`, `PatchNodeUseCase`
- **Зависимости**:
  - `@epios/domain` → EpistemicNode, NodeStrength, EvidenceRef
  - `@epios/ports` → GraphRepositoryPort

### `application/src/use-cases/submit-claim.ts`
- **Экспорт**: `SubmitClaimRequest`, `SubmitClaimUseCase`
- **Зависимости**:
  - `@epios/domain` → Claim, GovernanceProcess
  - `@epios/ports` → GraphRepositoryPort, GovernanceRepositoryPort

### `domain/src/governance.ts`
- **Экспорт**: `ApprovalStatus`, `Vote`, `GovernanceProcess`, `Claim`
- **Зависимости**:
  - `./node.js` → EpistemicNode

### `domain/src/node.ts`
- **Экспорт**: `NodeType`, `NodeStrength`, `EvidenceRef`, `EpistemicNode`, `EpistemicEdgeType`, `EpistemicEdge`

### `domain/src/workspace.ts`
- **Экспорт**: `WorkspaceStatus`, `WorkspaceMode`, `WorkspaceSensitivity`, `WorkspaceBrief`, `WorkspaceActor`, `Workspace`, `assertWorkspaceCanRun`

### `infrastructure-mcp/src/index.ts`
- **Экспорт**: `MCP_VERSION`

### `infrastructure-mcp/src/mcp-app.registry.ts`
- **Экспорт**: `InMemoryMCPAppRegistry`
- **Зависимости**:
  - `@epios/ports` → MCPApp, MCPAppRegistryPort

### `infrastructure-mcp/src/mcp-bridge.ts`
- **Экспорт**: `MockMCPBridge`
- **Зависимости**:
  - `@epios/ports` → MCPBridgePort, MCPAppRegistryPort

### `infrastructure-models/src/index.ts`
- **Экспорт**: `DEFAULT_PROVIDER`

### `infrastructure-postgres/src/graph.repository.ts`
- **Экспорт**: `PostgresGraphRepository`
- **Зависимости**:
  - `@epios/ports` → GraphRepositoryPort
  - `./schema.js` → epistemicNodes, epistemicEdges

### `infrastructure-postgres/src/index.ts`
- **Экспорт**: `DB_ENGINE`, `DB_VERSION`

### `infrastructure-postgres/src/schema.ts`
- **Экспорт**: `workspaces`, `epistemicNodes`, `epistemicEdges`

### `infrastructure-postgres/src/workspace.repository.ts`
- **Экспорт**: `PostgresWorkspaceRepository`
- **Зависимости**:
  - `@epios/ports` → WorkspaceRepositoryPort
  - `./schema.js` → workspaces

### `infrastructure-runtime/src/in-memory-governance.repository.ts`
- **Экспорт**: `InMemoryGovernanceRepository`
- **Зависимости**:
  - `@epios/domain` → GovernanceProcess
  - `@epios/ports` → GovernanceRepositoryPort

### `infrastructure-runtime/src/in-memory-repositories.ts`
- **Экспорт**: `InMemoryWorkspaceRepository`, `InMemoryGraphRepository`
- **Зависимости**:
  - `@epios/domain` → Workspace, EpistemicNode, EpistemicEdge
  - `@epios/ports` → WorkspaceRepositoryPort, GraphRepositoryPort

### `infrastructure-runtime/src/index.ts`
- **Экспорт**: `RUNTIME_MODE`, `DURABILITY_ENABLED`

### `observability/src/audit.ts`
- **Экспорт**: `AuditEntry`, `AuditLogger`, `auditLogger`

### `observability/src/tracer.ts`
- **Экспорт**: `TraceEvent`, `Tracer`, `ConsoleTracer`, `tracer`

### `ports/src/domain.repository.port.ts`
- **Экспорт**: `WorkspaceRepositoryPort`
- **Зависимости**:
  - `@epios/domain` → Workspace

### `ports/src/governance.port.ts`
- **Экспорт**: `GovernanceRepositoryPort`
- **Зависимости**:
  - `@epios/domain` → GovernanceProcess

### `ports/src/graph.repository.port.ts`
- **Экспорт**: `GraphRepositoryPort`
- **Зависимости**:
  - `@epios/domain` → EpistemicNode, EpistemicEdge

### `ports/src/mcp.port.ts`
- **Экспорт**: `MCPApp`, `MCPAppRegistryPort`, `MCPBridgePort`

### `testing/src/fixtures.ts`
- **Экспорт**: `createTestWorkspace`
- **Зависимости**:
  - `@epios/domain` → Workspace

## Переменные окружения

| Переменная | Используется в |
|---|---|
| `DATABASE_URL` | packages/server.ts |
| `EPIOS_DATABASE_MODE` | packages/server.ts |
| `PORT` | packages/bin.ts |

## API Реестр

| Метод | Путь | Файл |
|---|---|---|
| `GET` | `/health` | `packages/api/src/server.ts` |
