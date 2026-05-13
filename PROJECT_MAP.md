# 🗺️ PROJECT MAP — epios
> Автоматически сгенерировано: `2026-05-13 20:34:44`
> Скрипт: `node dev_studio/refresh.js`

## 📊 Telemetry / Context Health
| Metric | Value | Note |
|---|---|---|
| **Total Files** | `103` | Только JS/TS/TSX исходники |
| **Total Lines** | `8972` | Суммарно по проекту |
| **Project Weight** | `~73 324 tokens` | Оценка (4 символа/токен) |
| **Context Pressure** | `57.3%` | Нагрузка на окно 128k (Full Scan) |
| **Map Efficiency** | `~86%` | Экономия контекста через карту |

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
G["ADRReviewWorkspace.tsx"]
V["CommandPalette.tsx"]
1F["Sidebar.tsx"]
1G["WorkspaceRoom.tsx"]
1H["GraphCanvas.tsx"]
1J["CustomNode.tsx"]
1K["MissionPanel.tsx"]
1L["GovernancePanel.tsx"]
1M["MappingPanel.tsx"]
1N["SourcePanel.tsx"]
1O["RatingPanel.tsx"]
end
subgraph T["hooks"]
U["useApi.ts"]
end
subgraph W["context"]
X["WorkspaceContext.tsx"]
end
1P["main.tsx"]
1Q["index.css"]
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
1I["style.css"]
end
end
end
end
subgraph 1R["react-dom@18.3.1_react@18.3.1"]
subgraph 1S["node_modules"]
subgraph 1T["react-dom"]
1U["client.js"]
end
end
end
subgraph 23["@fastify+cors@8.5.0"]
subgraph 24["node_modules"]
subgraph 25["@fastify"]
subgraph 26["cors"]
27["index.js"]
end
end
end
end
subgraph 28["dotenv@16.6.1"]
subgraph 29["node_modules"]
subgraph 2A["dotenv"]
subgraph 2B["lib"]
2C["main.js"]
end
end
end
end
subgraph 2D["drizzle-orm@0.45.2_postgres@3.4.9"]
subgraph 2E["node_modules"]
subgraph 2F["drizzle-orm"]
subgraph 2G["postgres-js"]
2H["index.js"]
end
48["index.js"]
subgraph 4A["pg-core"]
4B["index.js"]
end
end
end
end
subgraph 2I["fastify@4.29.1"]
subgraph 2J["node_modules"]
subgraph 2K["fastify"]
2L["fastify.js"]
end
end
end
subgraph 2M["postgres@3.4.9"]
subgraph 2N["node_modules"]
subgraph 2O["postgres"]
subgraph 2P["src"]
2Q["index.js"]
end
end
end
end
subgraph 4N["vitest@1.6.1_@types+node@25.7.0"]
subgraph 4O["node_modules"]
subgraph 4P["vitest"]
subgraph 4Q["dist"]
4R["index.js"]
4V["config.cjs"]
end
end
end
end
subgraph 6Z["dotenv-expand@11.0.7"]
subgraph 70["node_modules"]
subgraph 71["dotenv-expand"]
subgraph 72["lib"]
73["main.js"]
end
end
end
end
subgraph 74["drizzle-kit@0.31.10"]
subgraph 75["node_modules"]
subgraph 76["drizzle-kit"]
77["index.mjs"]
end
end
end
end
end
subgraph 14["packages"]
subgraph 15["domain"]
subgraph 16["src"]
17["index.ts"]
18["adr.ts"]
19["governance.ts"]
1A["node.ts"]
1B["mapping.ts"]
1C["rating.ts"]
1D["source.ts"]
1E["workspace.ts"]
end
subgraph 52["coverage"]
53["block-navigation.js"]
54["prettify.js"]
55["sorter.js"]
end
subgraph 56["test"]
57["domain-smoke.test.ts"]
58["node-invariants.test.ts"]
59["source-rating.test.ts"]
5A["workspace.test.ts"]
end
5B["vitest.config.ts"]
end
subgraph 1V["api"]
subgraph 1W["coverage"]
1X["block-navigation.js"]
1Y["prettify.js"]
1Z["sorter.js"]
end
subgraph 20["src"]
21["bin.ts"]
22["server.ts"]
subgraph 2R["routes"]
2S["adr.routes.ts"]
3R["governance.routes.ts"]
3S["mapping.routes.ts"]
3V["mcp.routes.ts"]
3W["mission.routes.ts"]
3X["rating.routes.ts"]
3Y["workspace.routes.ts"]
end
subgraph 3T["dto"]
3U["index.ts"]
end
4K["index.ts"]
end
subgraph 4L["test"]
4M["adr.test.ts"]
4S["api.test.ts"]
end
4T["vitest.config.ts"]
end
subgraph 2T["application"]
subgraph 2U["src"]
2V["index.ts"]
2W["mapping-processor.ts"]
subgraph 34["use-cases"]
35["add-edge.ts"]
3C["add-node.ts"]
3D["add-source.ts"]
3E["adr-use-cases.ts"]
3F["cast-vote.ts"]
3G["create-workspace.ts"]
3H["get-mapping-run.ts"]
3I["get-node-ratings.ts"]
3J["get-workspace-graph.ts"]
3K["list-mapping-runs.ts"]
3L["list-sources.ts"]
3M["list-workspaces.ts"]
3N["patch-node.ts"]
3O["rate-node.ts"]
3P["start-mapping-run.ts"]
3Q["submit-claim.ts"]
4W["list-patches.ts"]
4X["propose-patch.ts"]
end
end
subgraph 4Y["test"]
4Z["create-workspace.test.ts"]
50["use-cases.test.ts"]
end
51["vitest.config.ts"]
end
subgraph 2X["ports"]
subgraph 2Y["src"]
2Z["index.js"]
30["domain.repository.port.js"]
31["governance.port.js"]
32["graph.repository.port.js"]
33["mcp.port.js"]
78["domain.repository.port.d.ts"]
79["domain.repository.port.ts"]
7A["governance.port.d.ts"]
7B["governance.port.ts"]
7C["graph.repository.port.d.ts"]
7D["graph.repository.port.ts"]
7E["index.d.ts"]
7F["index.ts"]
7G["mapping.repository.port.ts"]
7H["outbox.repository.port.ts"]
7I["mcp.port.d.ts"]
7J["mcp.port.ts"]
end
end
subgraph 37["observability"]
subgraph 38["src"]
39["index.ts"]
3A["audit.ts"]
3B["tracer.ts"]
end
end
subgraph 3Z["infrastructure-mcp"]
subgraph 40["src"]
41["index.ts"]
42["mcp-app.registry.ts"]
43["mcp-bridge.ts"]
end
subgraph 5C["dist"]
subgraph 5D["domain"]
subgraph 5E["src"]
5F["adr.d.ts"]
5G["adr.js"]
5H["governance.d.ts"]
5I["node.js"]
5J["governance.js"]
5K["index.d.ts"]
5L["rating.js"]
5M["source.js"]
5N["workspace.js"]
5O["index.js"]
5P["mapping.d.ts"]
5Q["mapping.js"]
5R["mission.d.ts"]
5S["mission.js"]
5T["node.d.ts"]
5U["rating.d.ts"]
5V["source.d.ts"]
5W["workspace.d.ts"]
end
end
5X["index.d.ts"]
5Y["mcp-app.registry.js"]
5Z["mcp-bridge.js"]
60["index.js"]
subgraph 61["infrastructure-mcp"]
subgraph 62["src"]
63["index.d.ts"]
64["mcp-app.registry.js"]
65["mcp-bridge.js"]
66["index.js"]
67["mcp-app.registry.d.ts"]
68["mcp-bridge.d.ts"]
end
end
69["mcp-app.registry.d.ts"]
6C["mcp-bridge.d.ts"]
subgraph 6D["ports"]
subgraph 6E["src"]
6F["domain.repository.port.d.ts"]
6G["domain.repository.port.js"]
6H["governance.port.d.ts"]
6I["governance.port.js"]
6J["graph.repository.port.d.ts"]
6K["graph.repository.port.js"]
6L["index.d.ts"]
6M["mcp.port.js"]
6N["index.js"]
6O["mapping.repository.port.d.ts"]
6P["mapping.repository.port.js"]
6Q["mcp.port.d.ts"]
6R["outbox.repository.port.d.ts"]
6S["outbox.repository.port.js"]
end
end
end
subgraph 6T["test"]
6U["smoke.test.ts"]
end
end
subgraph 44["infrastructure-postgres"]
subgraph 45["src"]
46["index.ts"]
47["graph.repository.ts"]
49["schema.ts"]
4C["rating.repository.ts"]
4D["source.repository.ts"]
4E["workspace.repository.ts"]
end
6Y["drizzle.config.ts"]
end
subgraph 4F["infrastructure-runtime"]
subgraph 4G["src"]
4H["index.ts"]
4I["in-memory-governance.repository.ts"]
4J["in-memory-repositories.ts"]
end
end
subgraph 6V["infrastructure-models"]
subgraph 6W["src"]
6X["index.ts"]
end
end
subgraph 7K["testing"]
subgraph 7L["src"]
7M["fixtures.ts"]
7N["index.ts"]
end
end
end
36["crypto"]
4U["path"]
subgraph 6A["@epos"]
6B["ports"]
end
4-->6
8-->G
8-->V
8-->1F
8-->1G
8-->X
8-->E
G-->U
G-->M
G-->S
G-->E
U-->E
V-->X
V-->M
V-->S
V-->E
X-->17
X-->E
X-->13
17-->18
17-->19
17-->1B
17-->1A
17-->1C
17-->1D
17-->1E
19-->1A
1F-->X
1F-->U
1F-->17
1F-->M
1F-->S
1F-->E
1G-->X
1G-->1H
1G-->1K
1G-->1O
1G-->17
1G-->M
1G-->S
1G-->E
1H-->X
1H-->U
1H-->1J
1H-->S
1H-->E
1H-->13
1H-->1I
1J-->S
1J-->E
1J-->13
1K-->1L
1K-->1M
1K-->1N
1K-->17
1K-->M
1K-->S
1K-->E
1L-->M
1L-->S
1L-->E
1M-->17
1M-->M
1M-->S
1M-->E
1N-->M
1N-->S
1N-->E
1O-->S
1O-->E
1P-->8
1P-->X
1P-->1Q
1P-->E
1P-->1U
1P-->1I
21-->22
22-->2S
22-->3R
22-->3S
22-->3V
22-->3W
22-->3X
22-->3Y
22-->2V
22-->17
22-->41
22-->46
22-->4H
22-->2Z
22-->27
22-->2C
22-->2H
22-->2L
22-->2Q
2S-->2V
2S-->2L
2V-->2W
2V-->35
2V-->3C
2V-->3D
2V-->3E
2V-->3F
2V-->3G
2V-->3H
2V-->3I
2V-->3J
2V-->3K
2V-->3L
2V-->3M
2V-->3N
2V-->3O
2V-->3P
2V-->3Q
2W-->2Z
2Z-->30
2Z-->31
2Z-->32
2Z-->33
35-->17
35-->39
35-->2Z
35-->36
39-->3A
39-->3B
3C-->17
3C-->39
3C-->2Z
3C-->36
3D-->17
3D-->2Z
3D-->36
3E-->17
3F-->17
3F-->39
3F-->2Z
3G-->17
3G-->39
3G-->2Z
3G-->36
3H-->17
3H-->2Z
3I-->17
3I-->2Z
3J-->17
3J-->2Z
3K-->17
3K-->2Z
3L-->17
3L-->2Z
3M-->17
3M-->2Z
3N-->17
3N-->2Z
3O-->17
3O-->2Z
3O-->36
3P-->17
3P-->2Z
3P-->36
3Q-->17
3Q-->2Z
3Q-->36
3R-->2V
3R-->2L
3S-->3U
3S-->2V
3S-->2L
3U-->17
3V-->2Z
3V-->2L
3W-->2V
3W-->17
3W-->2L
3X-->2V
3X-->17
3X-->2L
3Y-->3U
3Y-->2V
3Y-->2L
41-->42
41-->43
42-->2Z
43-->2Z
46-->47
46-->4C
46-->49
46-->4D
46-->4E
47-->49
47-->17
47-->2Z
47-->48
47-->2H
49-->4B
4C-->49
4C-->17
4C-->2Z
4C-->48
4C-->2H
4D-->49
4D-->17
4D-->2Z
4D-->48
4D-->2H
4E-->49
4E-->17
4E-->2Z
4E-->48
4E-->2H
4H-->4I
4H-->4J
4I-->17
4I-->2Z
4J-->17
4J-->2Z
4K-->22
4M-->22
4M-->2L
4M-->4R
4S-->22
4S-->2Z
4S-->2L
4S-->4R
4T-->4U
4T-->4V
4W-->17
4W-->2Z
4X-->17
4X-->2Z
4X-->36
4Z-->3G
4Z-->2Z
4Z-->4R
50-->35
50-->3C
50-->3F
50-->3G
50-->3J
50-->3M
50-->3N
50-->3Q
50-->17
50-->2Z
50-->4R
51-->4U
51-->4V
57-->17
57-->4R
58-->17
58-->4R
59-->17
59-->4R
5A-->1E
5A-->4R
5B-->4V
5H-->5I
5K-->5G
5K-->5J
5K-->5I
5K-->5L
5K-->5M
5K-->5N
5O-->5G
5O-->5J
5O-->5I
5O-->5L
5O-->5M
5O-->5N
5X-->5Y
5X-->5Z
60-->5Y
60-->5Z
63-->64
63-->65
66-->64
66-->65
67-->2Z
68-->2Z
69-->6B
6C-->6B
6F-->17
6H-->17
6J-->17
6L-->6G
6L-->6I
6L-->6K
6L-->6M
6N-->6G
6N-->6I
6N-->6K
6N-->6M
6O-->17
6R-->17
6U-->4R
6Y-->2C
6Y-->73
6Y-->77
78-->17
79-->17
7A-->17
7B-->17
7C-->17
7D-->17
7E-->30
7E-->31
7E-->32
7E-->33
7F-->30
7F-->31
7F-->32
7F-->7G
7F-->33
7F-->7H
7G-->17
7M-->17
7N-->7M
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
G["ADRReviewWorkspace.tsx"]
V["CommandPalette.tsx"]
1F["Sidebar.tsx"]
1G["WorkspaceRoom.tsx"]
1H["GraphCanvas.tsx"]
1J["CustomNode.tsx"]
1K["MissionPanel.tsx"]
1L["GovernancePanel.tsx"]
1M["MappingPanel.tsx"]
1N["SourcePanel.tsx"]
1O["RatingPanel.tsx"]
end
subgraph T["hooks"]
U["useApi.ts"]
end
subgraph W["context"]
X["WorkspaceContext.tsx"]
end
1P["main.tsx"]
1Q["index.css"]
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
1I["style.css"]
end
end
end
end
subgraph 1R["react-dom@18.3.1_react@18.3.1"]
subgraph 1S["node_modules"]
subgraph 1T["react-dom"]
1U["client.js"]
end
end
end
subgraph 23["@fastify+cors@8.5.0"]
subgraph 24["node_modules"]
subgraph 25["@fastify"]
subgraph 26["cors"]
27["index.js"]
end
end
end
end
subgraph 28["dotenv@16.6.1"]
subgraph 29["node_modules"]
subgraph 2A["dotenv"]
subgraph 2B["lib"]
2C["main.js"]
end
end
end
end
subgraph 2D["drizzle-orm@0.45.2_postgres@3.4.9"]
subgraph 2E["node_modules"]
subgraph 2F["drizzle-orm"]
subgraph 2G["postgres-js"]
2H["index.js"]
end
48["index.js"]
subgraph 4A["pg-core"]
4B["index.js"]
end
end
end
end
subgraph 2I["fastify@4.29.1"]
subgraph 2J["node_modules"]
subgraph 2K["fastify"]
2L["fastify.js"]
end
end
end
subgraph 2M["postgres@3.4.9"]
subgraph 2N["node_modules"]
subgraph 2O["postgres"]
subgraph 2P["src"]
2Q["index.js"]
end
end
end
end
subgraph 4N["vitest@1.6.1_@types+node@25.7.0"]
subgraph 4O["node_modules"]
subgraph 4P["vitest"]
subgraph 4Q["dist"]
4R["index.js"]
4V["config.cjs"]
end
end
end
end
subgraph 6Z["dotenv-expand@11.0.7"]
subgraph 70["node_modules"]
subgraph 71["dotenv-expand"]
subgraph 72["lib"]
73["main.js"]
end
end
end
end
subgraph 74["drizzle-kit@0.31.10"]
subgraph 75["node_modules"]
subgraph 76["drizzle-kit"]
77["index.mjs"]
end
end
end
end
end
subgraph 14["packages"]
subgraph 15["domain"]
subgraph 16["src"]
17["index.ts"]
18["adr.ts"]
19["governance.ts"]
1A["node.ts"]
1B["mapping.ts"]
1C["rating.ts"]
1D["source.ts"]
1E["workspace.ts"]
end
subgraph 52["coverage"]
53["block-navigation.js"]
54["prettify.js"]
55["sorter.js"]
end
subgraph 56["test"]
57["domain-smoke.test.ts"]
58["node-invariants.test.ts"]
59["source-rating.test.ts"]
5A["workspace.test.ts"]
end
5B["vitest.config.ts"]
end
subgraph 1V["api"]
subgraph 1W["coverage"]
1X["block-navigation.js"]
1Y["prettify.js"]
1Z["sorter.js"]
end
subgraph 20["src"]
21["bin.ts"]
22["server.ts"]
subgraph 2R["routes"]
2S["adr.routes.ts"]
3R["governance.routes.ts"]
3S["mapping.routes.ts"]
3V["mcp.routes.ts"]
3W["mission.routes.ts"]
3X["rating.routes.ts"]
3Y["workspace.routes.ts"]
end
subgraph 3T["dto"]
3U["index.ts"]
end
4K["index.ts"]
end
subgraph 4L["test"]
4M["adr.test.ts"]
4S["api.test.ts"]
end
4T["vitest.config.ts"]
end
subgraph 2T["application"]
subgraph 2U["src"]
2V["index.ts"]
2W["mapping-processor.ts"]
subgraph 34["use-cases"]
35["add-edge.ts"]
3C["add-node.ts"]
3D["add-source.ts"]
3E["adr-use-cases.ts"]
3F["cast-vote.ts"]
3G["create-workspace.ts"]
3H["get-mapping-run.ts"]
3I["get-node-ratings.ts"]
3J["get-workspace-graph.ts"]
3K["list-mapping-runs.ts"]
3L["list-sources.ts"]
3M["list-workspaces.ts"]
3N["patch-node.ts"]
3O["rate-node.ts"]
3P["start-mapping-run.ts"]
3Q["submit-claim.ts"]
4W["list-patches.ts"]
4X["propose-patch.ts"]
end
end
subgraph 4Y["test"]
4Z["create-workspace.test.ts"]
50["use-cases.test.ts"]
end
51["vitest.config.ts"]
end
subgraph 2X["ports"]
subgraph 2Y["src"]
2Z["index.js"]
30["domain.repository.port.js"]
31["governance.port.js"]
32["graph.repository.port.js"]
33["mcp.port.js"]
78["domain.repository.port.d.ts"]
79["domain.repository.port.ts"]
7A["governance.port.d.ts"]
7B["governance.port.ts"]
7C["graph.repository.port.d.ts"]
7D["graph.repository.port.ts"]
7E["index.d.ts"]
7F["index.ts"]
7G["mapping.repository.port.ts"]
7H["outbox.repository.port.ts"]
7I["mcp.port.d.ts"]
7J["mcp.port.ts"]
end
end
subgraph 37["observability"]
subgraph 38["src"]
39["index.ts"]
3A["audit.ts"]
3B["tracer.ts"]
end
end
subgraph 3Z["infrastructure-mcp"]
subgraph 40["src"]
41["index.ts"]
42["mcp-app.registry.ts"]
43["mcp-bridge.ts"]
end
subgraph 5C["dist"]
subgraph 5D["domain"]
subgraph 5E["src"]
5F["adr.d.ts"]
5G["adr.js"]
5H["governance.d.ts"]
5I["node.js"]
5J["governance.js"]
5K["index.d.ts"]
5L["rating.js"]
5M["source.js"]
5N["workspace.js"]
5O["index.js"]
5P["mapping.d.ts"]
5Q["mapping.js"]
5R["mission.d.ts"]
5S["mission.js"]
5T["node.d.ts"]
5U["rating.d.ts"]
5V["source.d.ts"]
5W["workspace.d.ts"]
end
end
5X["index.d.ts"]
5Y["mcp-app.registry.js"]
5Z["mcp-bridge.js"]
60["index.js"]
subgraph 61["infrastructure-mcp"]
subgraph 62["src"]
63["index.d.ts"]
64["mcp-app.registry.js"]
65["mcp-bridge.js"]
66["index.js"]
67["mcp-app.registry.d.ts"]
68["mcp-bridge.d.ts"]
end
end
69["mcp-app.registry.d.ts"]
6C["mcp-bridge.d.ts"]
subgraph 6D["ports"]
subgraph 6E["src"]
6F["domain.repository.port.d.ts"]
6G["domain.repository.port.js"]
6H["governance.port.d.ts"]
6I["governance.port.js"]
6J["graph.repository.port.d.ts"]
6K["graph.repository.port.js"]
6L["index.d.ts"]
6M["mcp.port.js"]
6N["index.js"]
6O["mapping.repository.port.d.ts"]
6P["mapping.repository.port.js"]
6Q["mcp.port.d.ts"]
6R["outbox.repository.port.d.ts"]
6S["outbox.repository.port.js"]
end
end
end
subgraph 6T["test"]
6U["smoke.test.ts"]
end
end
subgraph 44["infrastructure-postgres"]
subgraph 45["src"]
46["index.ts"]
47["graph.repository.ts"]
49["schema.ts"]
4C["rating.repository.ts"]
4D["source.repository.ts"]
4E["workspace.repository.ts"]
end
6Y["drizzle.config.ts"]
end
subgraph 4F["infrastructure-runtime"]
subgraph 4G["src"]
4H["index.ts"]
4I["in-memory-governance.repository.ts"]
4J["in-memory-repositories.ts"]
end
end
subgraph 6V["infrastructure-models"]
subgraph 6W["src"]
6X["index.ts"]
end
end
subgraph 7K["testing"]
subgraph 7L["src"]
7M["fixtures.ts"]
7N["index.ts"]
end
end
end
36["crypto"]
4U["path"]
subgraph 6A["@epos"]
6B["ports"]
end
4-->6
8-->G
8-->V
8-->1F
8-->1G
8-->X
8-->E
G-->U
G-->M
G-->S
G-->E
U-->E
V-->X
V-->M
V-->S
V-->E
X-->17
X-->E
X-->13
17-->18
17-->19
17-->1B
17-->1A
17-->1C
17-->1D
17-->1E
19-->1A
1F-->X
1F-->U
1F-->17
1F-->M
1F-->S
1F-->E
1G-->X
1G-->1H
1G-->1K
1G-->1O
1G-->17
1G-->M
1G-->S
1G-->E
1H-->X
1H-->U
1H-->1J
1H-->S
1H-->E
1H-->13
1H-->1I
1J-->S
1J-->E
1J-->13
1K-->1L
1K-->1M
1K-->1N
1K-->17
1K-->M
1K-->S
1K-->E
1L-->M
1L-->S
1L-->E
1M-->17
1M-->M
1M-->S
1M-->E
1N-->M
1N-->S
1N-->E
1O-->S
1O-->E
1P-->8
1P-->X
1P-->1Q
1P-->E
1P-->1U
1P-->1I
21-->22
22-->2S
22-->3R
22-->3S
22-->3V
22-->3W
22-->3X
22-->3Y
22-->2V
22-->17
22-->41
22-->46
22-->4H
22-->2Z
22-->27
22-->2C
22-->2H
22-->2L
22-->2Q
2S-->2V
2S-->2L
2V-->2W
2V-->35
2V-->3C
2V-->3D
2V-->3E
2V-->3F
2V-->3G
2V-->3H
2V-->3I
2V-->3J
2V-->3K
2V-->3L
2V-->3M
2V-->3N
2V-->3O
2V-->3P
2V-->3Q
2W-->2Z
2Z-->30
2Z-->31
2Z-->32
2Z-->33
35-->17
35-->39
35-->2Z
35-->36
39-->3A
39-->3B
3C-->17
3C-->39
3C-->2Z
3C-->36
3D-->17
3D-->2Z
3D-->36
3E-->17
3F-->17
3F-->39
3F-->2Z
3G-->17
3G-->39
3G-->2Z
3G-->36
3H-->17
3H-->2Z
3I-->17
3I-->2Z
3J-->17
3J-->2Z
3K-->17
3K-->2Z
3L-->17
3L-->2Z
3M-->17
3M-->2Z
3N-->17
3N-->2Z
3O-->17
3O-->2Z
3O-->36
3P-->17
3P-->2Z
3P-->36
3Q-->17
3Q-->2Z
3Q-->36
3R-->2V
3R-->2L
3S-->3U
3S-->2V
3S-->2L
3U-->17
3V-->2Z
3V-->2L
3W-->2V
3W-->17
3W-->2L
3X-->2V
3X-->17
3X-->2L
3Y-->3U
3Y-->2V
3Y-->2L
41-->42
41-->43
42-->2Z
43-->2Z
46-->47
46-->4C
46-->49
46-->4D
46-->4E
47-->49
47-->17
47-->2Z
47-->48
47-->2H
49-->4B
4C-->49
4C-->17
4C-->2Z
4C-->48
4C-->2H
4D-->49
4D-->17
4D-->2Z
4D-->48
4D-->2H
4E-->49
4E-->17
4E-->2Z
4E-->48
4E-->2H
4H-->4I
4H-->4J
4I-->17
4I-->2Z
4J-->17
4J-->2Z
4K-->22
4M-->22
4M-->2L
4M-->4R
4S-->22
4S-->2Z
4S-->2L
4S-->4R
4T-->4U
4T-->4V
4W-->17
4W-->2Z
4X-->17
4X-->2Z
4X-->36
4Z-->3G
4Z-->2Z
4Z-->4R
50-->35
50-->3C
50-->3F
50-->3G
50-->3J
50-->3M
50-->3N
50-->3Q
50-->17
50-->2Z
50-->4R
51-->4U
51-->4V
57-->17
57-->4R
58-->17
58-->4R
59-->17
59-->4R
5A-->1E
5A-->4R
5B-->4V
5H-->5I
5K-->5G
5K-->5J
5K-->5I
5K-->5L
5K-->5M
5K-->5N
5O-->5G
5O-->5J
5O-->5I
5O-->5L
5O-->5M
5O-->5N
5X-->5Y
5X-->5Z
60-->5Y
60-->5Z
63-->64
63-->65
66-->64
66-->65
67-->2Z
68-->2Z
69-->6B
6C-->6B
6F-->17
6H-->17
6J-->17
6L-->6G
6L-->6I
6L-->6K
6L-->6M
6N-->6G
6N-->6I
6N-->6K
6N-->6M
6O-->17
6R-->17
6U-->4R
6Y-->2C
6Y-->73
6Y-->77
78-->17
79-->17
7A-->17
7B-->17
7C-->17
7D-->17
7E-->30
7E-->31
7E-->32
7E-->33
7F-->30
7F-->31
7F-->32
7F-->7G
7F-->33
7F-->7H
7G-->17
7M-->17
7N-->7M
```

## Компонент: `apps`

| Файл | Строк | Размер | Описание |
|---|---|---|---|
| `demo-shell/src/App.tsx` | 59 | 1.5 KB | — |
| `demo-shell/src/components/ADRReviewWorkspace.tsx` | 693 | 21.0 KB | — |
| `demo-shell/src/components/CommandPalette.tsx` | 341 | 9.1 KB | — |
| `demo-shell/src/components/CustomNode.tsx` | 153 | 3.9 KB | — |
| `demo-shell/src/components/GovernancePanel.tsx` | 448 | 13.1 KB | — |
| `demo-shell/src/components/GraphCanvas.tsx` | 568 | 15.9 KB | — |
| `demo-shell/src/components/MappingPanel.tsx` | 268 | 7.8 KB | — |
| `demo-shell/src/components/MissionPanel.tsx` | 321 | 9.3 KB | — |
| `demo-shell/src/components/RatingPanel.tsx` | 232 | 6.2 KB | — |
| `demo-shell/src/components/Sidebar.tsx` | 354 | 9.6 KB | — |
| `demo-shell/src/components/SourcePanel.tsx` | 230 | 6.9 KB | — |
| `demo-shell/src/components/WorkspaceRoom.tsx` | 631 | 20.2 KB | — |
| `demo-shell/src/context/WorkspaceContext.tsx` | 130 | 3.4 KB | — |
| `demo-shell/src/hooks/useApi.ts` | 42 | 1.1 KB | — |
| `demo-shell/src/main.tsx` | 16 | 0.4 KB | — |

### `demo-shell/src/components/GovernancePanel.tsx`
- **Экспорт**: `GovernancePanel`
- **Зависимости**:

### `demo-shell/src/components/MappingPanel.tsx`
- **Экспорт**: `MappingPanel`
- **Зависимости**:
  - `@epios/domain` → MappingRun

### `demo-shell/src/components/MissionPanel.tsx`
- **Экспорт**: `MissionPanel`
- **Зависимости**:
  - `./GovernancePanel` → GovernancePanel
  - `./SourcePanel` → SourcePanel
  - `./MappingPanel` → MappingPanel
  - `@epios/domain` → Workspace

### `demo-shell/src/components/RatingPanel.tsx`
- **Экспорт**: `RatingPanel`
- **Зависимости**:

### `demo-shell/src/components/SourcePanel.tsx`
- **Экспорт**: `SourcePanel`
- **Зависимости**:

### `demo-shell/src/context/WorkspaceContext.tsx`
- **Экспорт**: `WorkspaceProvider`, `useWorkspace`
- **Зависимости**:
  - `@epios/domain` → Workspace

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
| `api/src/dto/index.ts` | 57 | 1.1 KB | — |
| `api/src/index.ts` | 3 | 0.0 KB | — |
| `api/src/routes/adr.routes.ts` | 26 | 0.6 KB | — |
| `api/src/routes/governance.routes.ts` | 60 | 1.6 KB | — |
| `api/src/routes/mapping.routes.ts` | 95 | 2.8 KB | — |
| `api/src/routes/mcp.routes.ts` | 38 | 1.0 KB | — |
| `api/src/routes/mission.routes.ts` | 34 | 0.9 KB | — |
| `api/src/routes/rating.routes.ts` | 30 | 0.9 KB | — |
| `api/src/routes/workspace.routes.ts` | 37 | 1.0 KB | — |
| `api/src/server.ts` | 556 | 16.5 KB | — |
| `api/test/adr.test.ts` | 48 | 1.2 KB | — |
| `api/test/api.test.ts` | 210 | 5.6 KB | — |
| `api/vitest.config.ts` | 42 | 1.1 KB | — |
| `application/src/index.ts` | 18 | 0.8 KB | — |
| `application/src/mapping-processor.ts` | 83 | 2.2 KB | — |
| `application/src/use-cases/add-edge.ts` | 47 | 1.3 KB | — |
| `application/src/use-cases/add-node.ts` | 55 | 1.4 KB | — |
| `application/src/use-cases/add-source.ts` | 29 | 0.7 KB | — |
| `application/src/use-cases/adr-use-cases.ts` | 20 | 0.4 KB | — |
| `application/src/use-cases/cast-vote.ts` | 100 | 2.8 KB | — |
| `application/src/use-cases/create-workspace.ts` | 49 | 1.2 KB | — |
| `application/src/use-cases/get-mapping-run.ts` | 11 | 0.3 KB | — |
| `application/src/use-cases/get-node-ratings.ts` | 11 | 0.3 KB | — |
| `application/src/use-cases/get-workspace-graph.ts` | 21 | 0.6 KB | — |
| `application/src/use-cases/list-mapping-runs.ts` | 11 | 0.3 KB | — |
| `application/src/use-cases/list-patches.ts` | 26 | 1.0 KB | — |
| `application/src/use-cases/list-sources.ts` | 11 | 0.3 KB | — |
| `application/src/use-cases/list-workspaces.ts` | 11 | 0.3 KB | — |
| `application/src/use-cases/patch-node.ts` | 37 | 1.0 KB | — |
| `application/src/use-cases/propose-patch.ts` | 55 | 1.5 KB | — |
| `application/src/use-cases/rate-node.ts` | 29 | 0.7 KB | — |
| `application/src/use-cases/start-mapping-run.ts` | 43 | 1.0 KB | — |
| `application/src/use-cases/submit-claim.ts` | 49 | 1.2 KB | — |
| `application/test/create-workspace.test.ts` | 63 | 1.6 KB | — |
| `application/test/use-cases.test.ts` | 337 | 10.3 KB | — |
| `application/vitest.config.ts` | 28 | 0.6 KB | — |
| `domain/coverage/block-navigation.js` | 88 | 2.6 KB | — |
| `domain/coverage/prettify.js` | 3 | 17.2 KB | — |
| `domain/coverage/sorter.js` | 211 | 6.6 KB | — |
| `domain/src/adr.ts` | 42 | 0.7 KB | — |
| `domain/src/governance.ts` | 43 | 0.9 KB | A Claim in EPIOS is a node that undergoes a formal governance process. |
| `domain/src/index.ts` | 8 | 0.2 KB | — |
| `domain/src/mapping.ts` | 15 | 0.3 KB | — |
| `domain/src/node.ts` | 52 | 0.9 KB | — |
| `domain/src/rating.ts` | 11 | 0.2 KB | — |
| `domain/src/source.ts` | 11 | 0.2 KB | — |
| `domain/src/workspace.ts` | 50 | 1.0 KB | — |
| `domain/test/domain-smoke.test.ts` | 51 | 1.3 KB | — |
| `domain/test/node-invariants.test.ts` | 51 | 1.2 KB | — |
| `domain/test/source-rating.test.ts` | 33 | 0.8 KB | — |
| `domain/test/workspace.test.ts` | 51 | 1.3 KB | — |
| `domain/vitest.config.ts` | 21 | 0.4 KB | — |
| `infrastructure-mcp/src/index.ts` | 4 | 0.1 KB | — |
| `infrastructure-mcp/src/mcp-app.registry.ts` | 35 | 0.8 KB | — |
| `infrastructure-mcp/src/mcp-bridge.ts` | 64 | 1.6 KB | — |
| `infrastructure-mcp/test/smoke.test.ts` | 8 | 0.2 KB | — |
| `infrastructure-models/src/index.ts` | 3 | 0.1 KB | — |
| `infrastructure-postgres/drizzle.config.ts` | 17 | 0.4 KB | — |
| `infrastructure-postgres/src/graph.repository.ts` | 142 | 4.0 KB | — |
| `infrastructure-postgres/src/index.ts` | 10 | 0.3 KB | — |
| `infrastructure-postgres/src/rating.repository.ts` | 50 | 1.4 KB | — |
| `infrastructure-postgres/src/schema.ts` | 95 | 3.0 KB | — |
| `infrastructure-postgres/src/source.repository.ts` | 60 | 1.6 KB | — |
| `infrastructure-postgres/src/workspace.repository.ts` | 96 | 3.0 KB | — |
| `infrastructure-runtime/src/in-memory-governance.repository.ts` | 50 | 1.5 KB | — |
| `infrastructure-runtime/src/in-memory-repositories.ts` | 204 | 5.2 KB | — |
| `infrastructure-runtime/src/index.ts` | 6 | 0.2 KB | — |
| `observability/src/audit.ts` | 25 | 0.6 KB | — |
| `observability/src/index.ts` | 3 | 0.1 KB | — |
| `observability/src/tracer.ts` | 24 | 0.5 KB | — |
| `ports/src/domain.repository.port.js` | 3 | 0.1 KB | — |
| `ports/src/domain.repository.port.ts` | 19 | 0.5 KB | — |
| `ports/src/governance.port.js` | 3 | 0.1 KB | — |
| `ports/src/governance.port.ts` | 14 | 0.6 KB | — |
| `ports/src/graph.repository.port.js` | 3 | 0.1 KB | — |
| `ports/src/graph.repository.port.ts` | 11 | 0.5 KB | — |
| `ports/src/index.js` | 7 | 0.2 KB | — |
| `ports/src/index.ts` | 8 | 0.3 KB | — |
| `ports/src/mapping.repository.port.ts` | 8 | 0.2 KB | — |
| `ports/src/mcp.port.js` | 3 | 0.0 KB | — |
| `ports/src/mcp.port.ts` | 35 | 1.0 KB | Port for MCP Application Registry. |
| `ports/src/outbox.repository.port.ts` | 14 | 0.3 KB | — |
| `testing/src/fixtures.ts` | 23 | 0.5 KB | — |
| `testing/src/index.ts` | 3 | 0.1 KB | — |

### `api/src/dto/index.ts`
- **Экспорт**: `CreateWorkspaceDto`, `AddNodeDto`, `AddEdgeDto`, `PatchNodeDto`, `ADRDto`, `ADRFlowDto`, `AddSourceDto`, `RateNodeDto`

### `api/src/server.ts`
- **Экспорт**: `ServerDependencies`, `buildServer`
- **Роуты**:
  - `GET /health`
- **Зависимости**:
  - `./routes/workspace.routes.js` → workspaceRoutes
  - `./routes/mapping.routes.js` → mappingRoutes
  - `./routes/governance.routes.js` → governanceRoutes
  - `./routes/adr.routes.js` → adrRoutes
  - `./routes/mcp.routes.js` → mcpRoutes
  - `./routes/mission.routes.js` → missionRoutes
  - `./routes/rating.routes.js` → ratingRoutes

### `application/src/mapping-processor.ts`
- **Экспорт**: `MappingProcessor`

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

### `application/src/use-cases/add-source.ts`
- **Экспорт**: `AddSourceRequest`, `AddSourceUseCase`
- **Зависимости**:
  - `@epios/domain` → Source, SourceType
  - `@epios/ports` → SourceRepositoryPort

### `application/src/use-cases/adr-use-cases.ts`
- **Экспорт**: `ListADRsUseCase`, `GetADRUseCase`
- **Зависимости**:
  - `@epios/domain` → ADR

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

### `application/src/use-cases/get-mapping-run.ts`
- **Экспорт**: `GetMappingRunUseCase`
- **Зависимости**:
  - `@epios/domain` → MappingRun
  - `@epios/ports` → MappingRepositoryPort

### `application/src/use-cases/get-node-ratings.ts`
- **Экспорт**: `GetNodeRatingsUseCase`
- **Зависимости**:
  - `@epios/domain` → Rating
  - `@epios/ports` → RatingRepositoryPort

### `application/src/use-cases/get-workspace-graph.ts`
- **Экспорт**: `WorkspaceGraph`, `GetWorkspaceGraphUseCase`
- **Зависимости**:
  - `@epios/domain` → EpistemicNode, EpistemicEdge
  - `@epios/ports` → GraphRepositoryPort

### `application/src/use-cases/list-mapping-runs.ts`
- **Экспорт**: `ListMappingRunsUseCase`
- **Зависимости**:
  - `@epios/domain` → MappingRun
  - `@epios/ports` → MappingRepositoryPort

### `application/src/use-cases/list-patches.ts`
- **Экспорт**: `ListPatchesRequest`, `ListPatchesUseCase`
- **Зависимости**:
  - `@epios/domain` → NodePatch
  - `@epios/ports` → GovernanceRepositoryPort

### `application/src/use-cases/list-sources.ts`
- **Экспорт**: `ListSourcesUseCase`
- **Зависимости**:
  - `@epios/domain` → Source
  - `@epios/ports` → SourceRepositoryPort

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

### `application/src/use-cases/propose-patch.ts`
- **Экспорт**: `ProposePatchRequest`, `ProposePatchUseCase`
- **Зависимости**:
  - `@epios/domain` → NodePatch, GovernanceProcess
  - `@epios/ports` → GovernanceRepositoryPort, GraphRepositoryPort

### `application/src/use-cases/rate-node.ts`
- **Экспорт**: `RateNodeRequest`, `RateNodeUseCase`
- **Зависимости**:
  - `@epios/domain` → Rating, EpistemicRatingValue
  - `@epios/ports` → RatingRepositoryPort

### `application/src/use-cases/start-mapping-run.ts`
- **Экспорт**: `StartMappingRunRequest`, `StartMappingRunUseCase`
- **Зависимости**:
  - `@epios/domain` → MappingRun
  - `@epios/ports` → MappingRepositoryPort, OutboxRepositoryPort

### `application/src/use-cases/submit-claim.ts`
- **Экспорт**: `SubmitClaimRequest`, `SubmitClaimUseCase`
- **Зависимости**:
  - `@epios/domain` → Claim, GovernanceProcess
  - `@epios/ports` → GraphRepositoryPort, GovernanceRepositoryPort

### `domain/src/adr.ts`
- **Экспорт**: `ADRStatus`, `ADRPriority`, `ADR`, `ADRFlow`

### `domain/src/governance.ts`
- **Экспорт**: `ApprovalStatus`, `Vote`, `GovernanceProcess`, `Claim`, `NodePatch`, `PatchGovernance`
- **Зависимости**:
  - `./node.js` → EpistemicNode

### `domain/src/mapping.ts`
- **Экспорт**: `MappingRunStatus`, `MappingRun`

### `domain/src/node.ts`
- **Экспорт**: `NodeType`, `NodeStrength`, `EvidenceRef`, `EpistemicNode`, `EpistemicEdgeType`, `EpistemicEdge`

### `domain/src/rating.ts`
- **Экспорт**: `EpistemicRatingValue`, `Rating`

### `domain/src/source.ts`
- **Экспорт**: `SourceType`, `Source`

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

### `infrastructure-postgres/src/rating.repository.ts`
- **Экспорт**: `PostgresRatingRepository`
- **Зависимости**:
  - `@epios/domain` → Rating, EpistemicRatingValue
  - `@epios/ports` → RatingRepositoryPort
  - `./schema.js` → ratings

### `infrastructure-postgres/src/schema.ts`
- **Экспорт**: `workspaces`, `epistemicNodes`, `epistemicEdges`, `sources`, `ratings`

### `infrastructure-postgres/src/source.repository.ts`
- **Экспорт**: `PostgresSourceRepository`
- **Зависимости**:
  - `@epios/domain` → Source, SourceType
  - `@epios/ports` → SourceRepositoryPort
  - `./schema.js` → sources

### `infrastructure-postgres/src/workspace.repository.ts`
- **Экспорт**: `PostgresWorkspaceRepository`
- **Зависимости**:
  - `@epios/ports` → WorkspaceRepositoryPort
  - `./schema.js` → workspaces

### `infrastructure-runtime/src/in-memory-governance.repository.ts`
- **Экспорт**: `InMemoryGovernanceRepository`
- **Зависимости**:
  - `@epios/domain` → GovernanceProcess, NodePatch
  - `@epios/ports` → GovernanceRepositoryPort

### `infrastructure-runtime/src/in-memory-repositories.ts`
- **Экспорт**: `InMemoryADRRepository`, `MOCK_ADRS`, `InMemoryWorkspaceRepository`, `InMemoryGraphRepository`, `InMemorySourceRepository`, `InMemoryRatingRepository`, `InMemoryMappingRepository`, `InMemoryOutboxRepository`

### `infrastructure-runtime/src/index.ts`
- **Экспорт**: `RUNTIME_MODE`, `DURABILITY_ENABLED`

### `observability/src/audit.ts`
- **Экспорт**: `AuditEntry`, `AuditLogger`, `auditLogger`

### `observability/src/tracer.ts`
- **Экспорт**: `TraceEvent`, `Tracer`, `ConsoleTracer`, `tracer`

### `ports/src/domain.repository.port.ts`
- **Экспорт**: `WorkspaceRepositoryPort`, `SourceRepositoryPort`, `RatingRepositoryPort`
- **Зависимости**:
  - `@epios/domain` → Workspace, Source, Rating

### `ports/src/governance.port.ts`
- **Экспорт**: `GovernanceRepositoryPort`
- **Зависимости**:
  - `@epios/domain` → GovernanceProcess, NodePatch

### `ports/src/graph.repository.port.ts`
- **Экспорт**: `GraphRepositoryPort`
- **Зависимости**:
  - `@epios/domain` → EpistemicNode, EpistemicEdge

### `ports/src/mapping.repository.port.ts`
- **Экспорт**: `MappingRepositoryPort`
- **Зависимости**:
  - `@epios/domain` → MappingRun

### `ports/src/mcp.port.ts`
- **Экспорт**: `MCPApp`, `MCPAppRegistryPort`, `MCPBridgePort`

### `ports/src/outbox.repository.port.ts`
- **Экспорт**: `OutboxMessage`, `OutboxRepositoryPort`

### `testing/src/fixtures.ts`
- **Экспорт**: `createTestWorkspace`
- **Зависимости**:
  - `@epios/domain` → Workspace

## Переменные окружения

| Переменная | Используется в |
|---|---|
| `DATABASE_URL` | packages/server.ts, packages/drizzle.config.ts |
| `EPIOS_DATABASE_MODE` | packages/server.ts |
| `PORT` | packages/bin.ts |

## API Реестр

| Метод | Путь | Файл |
|---|---|---|
| `GET` | `/health` | `packages/api/src/server.ts` |
