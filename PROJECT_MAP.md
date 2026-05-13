# 🗺️ PROJECT MAP — epios
> Автоматически сгенерировано: `2026-05-13 15:09:14`
> Скрипт: `node dev_studio/refresh.js`

## 📊 Telemetry / Context Health
| Metric | Value | Note |
|---|---|---|
| **Total Files** | `93` | Только JS/TS/TSX исходники |
| **Total Lines** | `7947` | Суммарно по проекту |
| **Project Weight** | `~65 678 tokens` | Оценка (4 символа/токен) |
| **Context Pressure** | `51.3%` | Нагрузка на окно 128k (Full Scan) |
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
1E["Sidebar.tsx"]
1F["WorkspaceRoom.tsx"]
1G["GraphCanvas.tsx"]
1I["CustomNode.tsx"]
1J["MissionPanel.tsx"]
1K["GovernancePanel.tsx"]
1L["SourcePanel.tsx"]
1M["RatingPanel.tsx"]
end
subgraph T["hooks"]
U["useApi.ts"]
end
subgraph W["context"]
X["WorkspaceContext.tsx"]
end
1N["main.tsx"]
1O["index.css"]
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
1H["style.css"]
end
end
end
end
subgraph 1P["react-dom@18.3.1_react@18.3.1"]
subgraph 1Q["node_modules"]
subgraph 1R["react-dom"]
1S["client.js"]
end
end
end
subgraph 21["@fastify+cors@8.5.0"]
subgraph 22["node_modules"]
subgraph 23["@fastify"]
subgraph 24["cors"]
25["index.js"]
end
end
end
end
subgraph 26["dotenv@16.6.1"]
subgraph 27["node_modules"]
subgraph 28["dotenv"]
subgraph 29["lib"]
2A["main.js"]
end
end
end
end
subgraph 2B["drizzle-orm@0.30.10_@types+_e0e2009336beb99158b32f944ddf65e4"]
subgraph 2C["node_modules"]
subgraph 2D["drizzle-orm"]
subgraph 2E["postgres-js"]
2F["index.js"]
end
end
end
end
subgraph 2G["fastify@4.29.1"]
subgraph 2H["node_modules"]
subgraph 2I["fastify"]
2J["fastify.js"]
end
end
end
subgraph 2K["postgres@3.4.9"]
subgraph 2L["node_modules"]
subgraph 2M["postgres"]
subgraph 2N["src"]
2O["index.js"]
end
end
end
end
subgraph 42["drizzle-orm@0.45.2_postgres@3.4.9"]
subgraph 43["node_modules"]
subgraph 44["drizzle-orm"]
45["index.js"]
subgraph 46["postgres-js"]
47["index.js"]
end
subgraph 49["pg-core"]
4A["index.js"]
end
end
end
end
subgraph 4M["vitest@1.6.1_@types+node@25.7.0"]
subgraph 4N["node_modules"]
subgraph 4O["vitest"]
subgraph 4P["dist"]
4Q["index.js"]
4U["config.cjs"]
end
end
end
end
subgraph 6W["dotenv-expand@11.0.7"]
subgraph 6X["node_modules"]
subgraph 6Y["dotenv-expand"]
subgraph 6Z["lib"]
70["main.js"]
end
end
end
end
subgraph 71["drizzle-kit@0.31.10"]
subgraph 72["node_modules"]
subgraph 73["drizzle-kit"]
74["index.mjs"]
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
1B["rating.ts"]
1C["source.ts"]
1D["workspace.ts"]
end
subgraph 4Z["coverage"]
50["block-navigation.js"]
51["prettify.js"]
52["sorter.js"]
end
subgraph 53["test"]
54["domain-smoke.test.ts"]
55["node-invariants.test.ts"]
56["source-rating.test.ts"]
57["workspace.test.ts"]
end
58["vitest.config.ts"]
end
subgraph 1T["api"]
subgraph 1U["coverage"]
1V["block-navigation.js"]
1W["prettify.js"]
1X["sorter.js"]
end
subgraph 1Y["src"]
1Z["bin.ts"]
20["server.ts"]
subgraph 2P["routes"]
2Q["adr.routes.ts"]
3L["governance.routes.ts"]
3M["mapping.routes.ts"]
3P["mcp.routes.ts"]
3Q["mission.routes.ts"]
3R["rating.routes.ts"]
3S["workspace.routes.ts"]
end
subgraph 3N["dto"]
3O["index.ts"]
end
4J["index.ts"]
end
subgraph 4K["test"]
4L["adr.test.ts"]
4R["api.test.ts"]
end
4S["vitest.config.ts"]
end
subgraph 2R["application"]
subgraph 2S["src"]
2T["index.ts"]
subgraph 2U["use-cases"]
2V["add-edge.ts"]
39["add-node.ts"]
3A["add-source.ts"]
3B["adr-use-cases.ts"]
3C["cast-vote.ts"]
3D["create-workspace.ts"]
3E["get-node-ratings.ts"]
3F["get-workspace-graph.ts"]
3G["list-sources.ts"]
3H["list-workspaces.ts"]
3I["patch-node.ts"]
3J["rate-node.ts"]
3K["submit-claim.ts"]
end
end
subgraph 4V["test"]
4W["create-workspace.test.ts"]
4X["use-cases.test.ts"]
end
4Y["vitest.config.ts"]
end
subgraph 2X["observability"]
subgraph 2Y["src"]
2Z["index.ts"]
30["audit.ts"]
31["tracer.ts"]
end
end
subgraph 32["ports"]
subgraph 33["src"]
34["index.js"]
35["domain.repository.port.js"]
36["governance.port.js"]
37["graph.repository.port.js"]
38["mcp.port.js"]
75["domain.repository.port.d.ts"]
76["domain.repository.port.ts"]
77["governance.port.d.ts"]
78["governance.port.ts"]
79["graph.repository.port.d.ts"]
7A["graph.repository.port.ts"]
7B["index.d.ts"]
7C["index.ts"]
7D["mcp.port.d.ts"]
7E["mcp.port.ts"]
end
end
subgraph 3T["infrastructure-mcp"]
subgraph 3U["src"]
3V["index.ts"]
3W["mcp-app.registry.ts"]
3X["mcp-bridge.ts"]
end
subgraph 59["dist"]
subgraph 5A["domain"]
subgraph 5B["src"]
5C["adr.d.ts"]
5D["adr.js"]
5E["governance.d.ts"]
5F["node.js"]
5G["governance.js"]
5H["index.d.ts"]
5I["rating.js"]
5J["source.js"]
5K["workspace.js"]
5L["index.js"]
5M["mapping.d.ts"]
5N["mapping.js"]
5O["mission.d.ts"]
5P["mission.js"]
5Q["node.d.ts"]
5R["rating.d.ts"]
5S["source.d.ts"]
5T["workspace.d.ts"]
end
end
5U["index.d.ts"]
5V["mcp-app.registry.js"]
5W["mcp-bridge.js"]
5X["index.js"]
subgraph 5Y["infrastructure-mcp"]
subgraph 5Z["src"]
60["index.d.ts"]
61["mcp-app.registry.js"]
62["mcp-bridge.js"]
63["index.js"]
64["mcp-app.registry.d.ts"]
65["mcp-bridge.d.ts"]
end
end
66["mcp-app.registry.d.ts"]
69["mcp-bridge.d.ts"]
subgraph 6A["ports"]
subgraph 6B["src"]
6C["domain.repository.port.d.ts"]
6D["domain.repository.port.js"]
6E["governance.port.d.ts"]
6F["governance.port.js"]
6G["graph.repository.port.d.ts"]
6H["graph.repository.port.js"]
6I["index.d.ts"]
6J["mcp.port.js"]
6K["index.js"]
6L["mapping.repository.port.d.ts"]
6M["mapping.repository.port.js"]
6N["mcp.port.d.ts"]
6O["outbox.repository.port.d.ts"]
6P["outbox.repository.port.js"]
end
end
end
subgraph 6Q["test"]
6R["smoke.test.ts"]
end
end
subgraph 3Y["infrastructure-postgres"]
subgraph 3Z["src"]
40["index.ts"]
41["graph.repository.ts"]
48["schema.ts"]
4B["rating.repository.ts"]
4C["source.repository.ts"]
4D["workspace.repository.ts"]
end
6V["drizzle.config.ts"]
end
subgraph 4E["infrastructure-runtime"]
subgraph 4F["src"]
4G["index.ts"]
4H["in-memory-governance.repository.ts"]
4I["in-memory-repositories.ts"]
end
end
subgraph 6S["infrastructure-models"]
subgraph 6T["src"]
6U["index.ts"]
end
end
subgraph 7F["testing"]
subgraph 7G["src"]
7H["fixtures.ts"]
7I["index.ts"]
end
end
end
2W["crypto"]
4T["path"]
subgraph 67["@epos"]
68["ports"]
end
4-->6
8-->G
8-->V
8-->1E
8-->1F
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
17-->1A
17-->1B
17-->1C
17-->1D
19-->1A
1E-->X
1E-->U
1E-->17
1E-->M
1E-->S
1E-->E
1F-->X
1F-->1G
1F-->1J
1F-->1M
1F-->17
1F-->M
1F-->S
1F-->E
1G-->X
1G-->U
1G-->1I
1G-->S
1G-->E
1G-->13
1G-->1H
1I-->S
1I-->E
1I-->13
1J-->1K
1J-->1L
1J-->17
1J-->M
1J-->S
1J-->E
1K-->M
1K-->S
1K-->E
1L-->M
1L-->S
1L-->E
1M-->M
1M-->S
1M-->E
1N-->8
1N-->X
1N-->1O
1N-->E
1N-->1S
1N-->1H
1Z-->20
20-->2Q
20-->3L
20-->3M
20-->3P
20-->3Q
20-->3R
20-->3S
20-->2T
20-->17
20-->3V
20-->40
20-->4G
20-->34
20-->25
20-->2A
20-->2F
20-->2J
20-->2O
2Q-->2T
2Q-->2J
2T-->2V
2T-->39
2T-->3A
2T-->3B
2T-->3C
2T-->3D
2T-->3E
2T-->3F
2T-->3G
2T-->3H
2T-->3I
2T-->3J
2T-->3K
2V-->17
2V-->2Z
2V-->34
2V-->2W
2Z-->30
2Z-->31
34-->35
34-->36
34-->37
34-->38
39-->17
39-->2Z
39-->34
39-->2W
3A-->17
3A-->34
3A-->2W
3B-->17
3C-->17
3C-->2Z
3C-->34
3D-->17
3D-->2Z
3D-->34
3D-->2W
3E-->17
3E-->34
3F-->17
3F-->34
3G-->17
3G-->34
3H-->17
3H-->34
3I-->17
3I-->34
3J-->17
3J-->34
3J-->2W
3K-->17
3K-->34
3K-->2W
3L-->2T
3L-->2J
3M-->3O
3M-->2T
3M-->2J
3O-->17
3P-->34
3P-->2J
3Q-->2T
3Q-->17
3Q-->2J
3R-->2T
3R-->17
3R-->2J
3S-->3O
3S-->2T
3S-->2J
3V-->3W
3V-->3X
3W-->34
3X-->34
40-->41
40-->4B
40-->48
40-->4C
40-->4D
41-->48
41-->17
41-->34
41-->45
41-->47
48-->4A
4B-->48
4B-->17
4B-->34
4B-->45
4B-->47
4C-->48
4C-->17
4C-->34
4C-->45
4C-->47
4D-->48
4D-->17
4D-->34
4D-->45
4D-->47
4G-->4H
4G-->4I
4H-->17
4H-->34
4I-->17
4I-->34
4J-->20
4L-->20
4L-->2J
4L-->4Q
4R-->20
4R-->34
4R-->2J
4R-->4Q
4S-->4T
4S-->4U
4W-->3D
4W-->34
4W-->4Q
4X-->2V
4X-->39
4X-->3C
4X-->3D
4X-->3F
4X-->3H
4X-->3I
4X-->3K
4X-->17
4X-->34
4X-->4Q
4Y-->4T
4Y-->4U
54-->17
54-->4Q
55-->17
55-->4Q
56-->17
56-->4Q
57-->1D
57-->4Q
58-->4U
5E-->5F
5H-->5D
5H-->5G
5H-->5F
5H-->5I
5H-->5J
5H-->5K
5L-->5D
5L-->5G
5L-->5F
5L-->5I
5L-->5J
5L-->5K
5U-->5V
5U-->5W
5X-->5V
5X-->5W
60-->61
60-->62
63-->61
63-->62
64-->34
65-->34
66-->68
69-->68
6C-->17
6E-->17
6G-->17
6I-->6D
6I-->6F
6I-->6H
6I-->6J
6K-->6D
6K-->6F
6K-->6H
6K-->6J
6L-->17
6O-->17
6R-->4Q
6V-->2A
6V-->70
6V-->74
75-->17
76-->17
77-->17
78-->17
79-->17
7A-->17
7B-->35
7B-->36
7B-->37
7B-->38
7C-->35
7C-->36
7C-->37
7C-->38
7H-->17
7I-->7H
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
1E["Sidebar.tsx"]
1F["WorkspaceRoom.tsx"]
1G["GraphCanvas.tsx"]
1I["CustomNode.tsx"]
1J["MissionPanel.tsx"]
1K["GovernancePanel.tsx"]
1L["SourcePanel.tsx"]
1M["RatingPanel.tsx"]
end
subgraph T["hooks"]
U["useApi.ts"]
end
subgraph W["context"]
X["WorkspaceContext.tsx"]
end
1N["main.tsx"]
1O["index.css"]
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
1H["style.css"]
end
end
end
end
subgraph 1P["react-dom@18.3.1_react@18.3.1"]
subgraph 1Q["node_modules"]
subgraph 1R["react-dom"]
1S["client.js"]
end
end
end
subgraph 21["@fastify+cors@8.5.0"]
subgraph 22["node_modules"]
subgraph 23["@fastify"]
subgraph 24["cors"]
25["index.js"]
end
end
end
end
subgraph 26["dotenv@16.6.1"]
subgraph 27["node_modules"]
subgraph 28["dotenv"]
subgraph 29["lib"]
2A["main.js"]
end
end
end
end
subgraph 2B["drizzle-orm@0.30.10_@types+_e0e2009336beb99158b32f944ddf65e4"]
subgraph 2C["node_modules"]
subgraph 2D["drizzle-orm"]
subgraph 2E["postgres-js"]
2F["index.js"]
end
end
end
end
subgraph 2G["fastify@4.29.1"]
subgraph 2H["node_modules"]
subgraph 2I["fastify"]
2J["fastify.js"]
end
end
end
subgraph 2K["postgres@3.4.9"]
subgraph 2L["node_modules"]
subgraph 2M["postgres"]
subgraph 2N["src"]
2O["index.js"]
end
end
end
end
subgraph 42["drizzle-orm@0.45.2_postgres@3.4.9"]
subgraph 43["node_modules"]
subgraph 44["drizzle-orm"]
45["index.js"]
subgraph 46["postgres-js"]
47["index.js"]
end
subgraph 49["pg-core"]
4A["index.js"]
end
end
end
end
subgraph 4M["vitest@1.6.1_@types+node@25.7.0"]
subgraph 4N["node_modules"]
subgraph 4O["vitest"]
subgraph 4P["dist"]
4Q["index.js"]
4U["config.cjs"]
end
end
end
end
subgraph 6W["dotenv-expand@11.0.7"]
subgraph 6X["node_modules"]
subgraph 6Y["dotenv-expand"]
subgraph 6Z["lib"]
70["main.js"]
end
end
end
end
subgraph 71["drizzle-kit@0.31.10"]
subgraph 72["node_modules"]
subgraph 73["drizzle-kit"]
74["index.mjs"]
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
1B["rating.ts"]
1C["source.ts"]
1D["workspace.ts"]
end
subgraph 4Z["coverage"]
50["block-navigation.js"]
51["prettify.js"]
52["sorter.js"]
end
subgraph 53["test"]
54["domain-smoke.test.ts"]
55["node-invariants.test.ts"]
56["source-rating.test.ts"]
57["workspace.test.ts"]
end
58["vitest.config.ts"]
end
subgraph 1T["api"]
subgraph 1U["coverage"]
1V["block-navigation.js"]
1W["prettify.js"]
1X["sorter.js"]
end
subgraph 1Y["src"]
1Z["bin.ts"]
20["server.ts"]
subgraph 2P["routes"]
2Q["adr.routes.ts"]
3L["governance.routes.ts"]
3M["mapping.routes.ts"]
3P["mcp.routes.ts"]
3Q["mission.routes.ts"]
3R["rating.routes.ts"]
3S["workspace.routes.ts"]
end
subgraph 3N["dto"]
3O["index.ts"]
end
4J["index.ts"]
end
subgraph 4K["test"]
4L["adr.test.ts"]
4R["api.test.ts"]
end
4S["vitest.config.ts"]
end
subgraph 2R["application"]
subgraph 2S["src"]
2T["index.ts"]
subgraph 2U["use-cases"]
2V["add-edge.ts"]
39["add-node.ts"]
3A["add-source.ts"]
3B["adr-use-cases.ts"]
3C["cast-vote.ts"]
3D["create-workspace.ts"]
3E["get-node-ratings.ts"]
3F["get-workspace-graph.ts"]
3G["list-sources.ts"]
3H["list-workspaces.ts"]
3I["patch-node.ts"]
3J["rate-node.ts"]
3K["submit-claim.ts"]
end
end
subgraph 4V["test"]
4W["create-workspace.test.ts"]
4X["use-cases.test.ts"]
end
4Y["vitest.config.ts"]
end
subgraph 2X["observability"]
subgraph 2Y["src"]
2Z["index.ts"]
30["audit.ts"]
31["tracer.ts"]
end
end
subgraph 32["ports"]
subgraph 33["src"]
34["index.js"]
35["domain.repository.port.js"]
36["governance.port.js"]
37["graph.repository.port.js"]
38["mcp.port.js"]
75["domain.repository.port.d.ts"]
76["domain.repository.port.ts"]
77["governance.port.d.ts"]
78["governance.port.ts"]
79["graph.repository.port.d.ts"]
7A["graph.repository.port.ts"]
7B["index.d.ts"]
7C["index.ts"]
7D["mcp.port.d.ts"]
7E["mcp.port.ts"]
end
end
subgraph 3T["infrastructure-mcp"]
subgraph 3U["src"]
3V["index.ts"]
3W["mcp-app.registry.ts"]
3X["mcp-bridge.ts"]
end
subgraph 59["dist"]
subgraph 5A["domain"]
subgraph 5B["src"]
5C["adr.d.ts"]
5D["adr.js"]
5E["governance.d.ts"]
5F["node.js"]
5G["governance.js"]
5H["index.d.ts"]
5I["rating.js"]
5J["source.js"]
5K["workspace.js"]
5L["index.js"]
5M["mapping.d.ts"]
5N["mapping.js"]
5O["mission.d.ts"]
5P["mission.js"]
5Q["node.d.ts"]
5R["rating.d.ts"]
5S["source.d.ts"]
5T["workspace.d.ts"]
end
end
5U["index.d.ts"]
5V["mcp-app.registry.js"]
5W["mcp-bridge.js"]
5X["index.js"]
subgraph 5Y["infrastructure-mcp"]
subgraph 5Z["src"]
60["index.d.ts"]
61["mcp-app.registry.js"]
62["mcp-bridge.js"]
63["index.js"]
64["mcp-app.registry.d.ts"]
65["mcp-bridge.d.ts"]
end
end
66["mcp-app.registry.d.ts"]
69["mcp-bridge.d.ts"]
subgraph 6A["ports"]
subgraph 6B["src"]
6C["domain.repository.port.d.ts"]
6D["domain.repository.port.js"]
6E["governance.port.d.ts"]
6F["governance.port.js"]
6G["graph.repository.port.d.ts"]
6H["graph.repository.port.js"]
6I["index.d.ts"]
6J["mcp.port.js"]
6K["index.js"]
6L["mapping.repository.port.d.ts"]
6M["mapping.repository.port.js"]
6N["mcp.port.d.ts"]
6O["outbox.repository.port.d.ts"]
6P["outbox.repository.port.js"]
end
end
end
subgraph 6Q["test"]
6R["smoke.test.ts"]
end
end
subgraph 3Y["infrastructure-postgres"]
subgraph 3Z["src"]
40["index.ts"]
41["graph.repository.ts"]
48["schema.ts"]
4B["rating.repository.ts"]
4C["source.repository.ts"]
4D["workspace.repository.ts"]
end
6V["drizzle.config.ts"]
end
subgraph 4E["infrastructure-runtime"]
subgraph 4F["src"]
4G["index.ts"]
4H["in-memory-governance.repository.ts"]
4I["in-memory-repositories.ts"]
end
end
subgraph 6S["infrastructure-models"]
subgraph 6T["src"]
6U["index.ts"]
end
end
subgraph 7F["testing"]
subgraph 7G["src"]
7H["fixtures.ts"]
7I["index.ts"]
end
end
end
2W["crypto"]
4T["path"]
subgraph 67["@epos"]
68["ports"]
end
4-->6
8-->G
8-->V
8-->1E
8-->1F
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
17-->1A
17-->1B
17-->1C
17-->1D
19-->1A
1E-->X
1E-->U
1E-->17
1E-->M
1E-->S
1E-->E
1F-->X
1F-->1G
1F-->1J
1F-->1M
1F-->17
1F-->M
1F-->S
1F-->E
1G-->X
1G-->U
1G-->1I
1G-->S
1G-->E
1G-->13
1G-->1H
1I-->S
1I-->E
1I-->13
1J-->1K
1J-->1L
1J-->17
1J-->M
1J-->S
1J-->E
1K-->M
1K-->S
1K-->E
1L-->M
1L-->S
1L-->E
1M-->M
1M-->S
1M-->E
1N-->8
1N-->X
1N-->1O
1N-->E
1N-->1S
1N-->1H
1Z-->20
20-->2Q
20-->3L
20-->3M
20-->3P
20-->3Q
20-->3R
20-->3S
20-->2T
20-->17
20-->3V
20-->40
20-->4G
20-->34
20-->25
20-->2A
20-->2F
20-->2J
20-->2O
2Q-->2T
2Q-->2J
2T-->2V
2T-->39
2T-->3A
2T-->3B
2T-->3C
2T-->3D
2T-->3E
2T-->3F
2T-->3G
2T-->3H
2T-->3I
2T-->3J
2T-->3K
2V-->17
2V-->2Z
2V-->34
2V-->2W
2Z-->30
2Z-->31
34-->35
34-->36
34-->37
34-->38
39-->17
39-->2Z
39-->34
39-->2W
3A-->17
3A-->34
3A-->2W
3B-->17
3C-->17
3C-->2Z
3C-->34
3D-->17
3D-->2Z
3D-->34
3D-->2W
3E-->17
3E-->34
3F-->17
3F-->34
3G-->17
3G-->34
3H-->17
3H-->34
3I-->17
3I-->34
3J-->17
3J-->34
3J-->2W
3K-->17
3K-->34
3K-->2W
3L-->2T
3L-->2J
3M-->3O
3M-->2T
3M-->2J
3O-->17
3P-->34
3P-->2J
3Q-->2T
3Q-->17
3Q-->2J
3R-->2T
3R-->17
3R-->2J
3S-->3O
3S-->2T
3S-->2J
3V-->3W
3V-->3X
3W-->34
3X-->34
40-->41
40-->4B
40-->48
40-->4C
40-->4D
41-->48
41-->17
41-->34
41-->45
41-->47
48-->4A
4B-->48
4B-->17
4B-->34
4B-->45
4B-->47
4C-->48
4C-->17
4C-->34
4C-->45
4C-->47
4D-->48
4D-->17
4D-->34
4D-->45
4D-->47
4G-->4H
4G-->4I
4H-->17
4H-->34
4I-->17
4I-->34
4J-->20
4L-->20
4L-->2J
4L-->4Q
4R-->20
4R-->34
4R-->2J
4R-->4Q
4S-->4T
4S-->4U
4W-->3D
4W-->34
4W-->4Q
4X-->2V
4X-->39
4X-->3C
4X-->3D
4X-->3F
4X-->3H
4X-->3I
4X-->3K
4X-->17
4X-->34
4X-->4Q
4Y-->4T
4Y-->4U
54-->17
54-->4Q
55-->17
55-->4Q
56-->17
56-->4Q
57-->1D
57-->4Q
58-->4U
5E-->5F
5H-->5D
5H-->5G
5H-->5F
5H-->5I
5H-->5J
5H-->5K
5L-->5D
5L-->5G
5L-->5F
5L-->5I
5L-->5J
5L-->5K
5U-->5V
5U-->5W
5X-->5V
5X-->5W
60-->61
60-->62
63-->61
63-->62
64-->34
65-->34
66-->68
69-->68
6C-->17
6E-->17
6G-->17
6I-->6D
6I-->6F
6I-->6H
6I-->6J
6K-->6D
6K-->6F
6K-->6H
6K-->6J
6L-->17
6O-->17
6R-->4Q
6V-->2A
6V-->70
6V-->74
75-->17
76-->17
77-->17
78-->17
79-->17
7A-->17
7B-->35
7B-->36
7B-->37
7B-->38
7C-->35
7C-->36
7C-->37
7C-->38
7H-->17
7I-->7H
```

## Компонент: `apps`

| Файл | Строк | Размер | Описание |
|---|---|---|---|
| `demo-shell/src/App.tsx` | 59 | 1.5 KB | — |
| `demo-shell/src/components/ADRReviewWorkspace.tsx` | 693 | 21.0 KB | — |
| `demo-shell/src/components/CommandPalette.tsx` | 341 | 9.1 KB | — |
| `demo-shell/src/components/CustomNode.tsx` | 159 | 3.9 KB | — |
| `demo-shell/src/components/GovernancePanel.tsx` | 280 | 8.1 KB | — |
| `demo-shell/src/components/GraphCanvas.tsx` | 554 | 15.6 KB | — |
| `demo-shell/src/components/MissionPanel.tsx` | 323 | 9.2 KB | — |
| `demo-shell/src/components/RatingPanel.tsx` | 233 | 6.3 KB | — |
| `demo-shell/src/components/Sidebar.tsx` | 354 | 9.6 KB | — |
| `demo-shell/src/components/SourcePanel.tsx` | 230 | 6.9 KB | — |
| `demo-shell/src/components/WorkspaceRoom.tsx` | 545 | 17.1 KB | — |
| `demo-shell/src/context/WorkspaceContext.tsx` | 130 | 3.4 KB | — |
| `demo-shell/src/hooks/useApi.ts` | 32 | 0.9 KB | — |
| `demo-shell/src/main.tsx` | 16 | 0.4 KB | — |

### `demo-shell/src/components/GovernancePanel.tsx`
- **Экспорт**: `GovernancePanel`
- **Зависимости**:

### `demo-shell/src/components/MissionPanel.tsx`
- **Экспорт**: `MissionPanel`
- **Зависимости**:
  - `./GovernancePanel` → GovernancePanel
  - `./SourcePanel` → SourcePanel
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
| `api/src/routes/governance.routes.ts` | 34 | 0.9 KB | — |
| `api/src/routes/mapping.routes.ts` | 61 | 1.7 KB | — |
| `api/src/routes/mcp.routes.ts` | 38 | 1.0 KB | — |
| `api/src/routes/mission.routes.ts` | 34 | 0.9 KB | — |
| `api/src/routes/rating.routes.ts` | 30 | 0.9 KB | — |
| `api/src/routes/workspace.routes.ts` | 37 | 1.0 KB | — |
| `api/src/server.ts` | 509 | 15.3 KB | — |
| `api/test/adr.test.ts` | 48 | 1.2 KB | — |
| `api/test/api.test.ts` | 210 | 5.6 KB | — |
| `api/vitest.config.ts` | 42 | 1.1 KB | — |
| `application/src/index.ts` | 14 | 0.6 KB | — |
| `application/src/use-cases/add-edge.ts` | 47 | 1.3 KB | — |
| `application/src/use-cases/add-node.ts` | 55 | 1.4 KB | — |
| `application/src/use-cases/add-source.ts` | 29 | 0.7 KB | — |
| `application/src/use-cases/adr-use-cases.ts` | 20 | 0.4 KB | — |
| `application/src/use-cases/cast-vote.ts` | 76 | 2.0 KB | — |
| `application/src/use-cases/create-workspace.ts` | 49 | 1.2 KB | — |
| `application/src/use-cases/get-node-ratings.ts` | 11 | 0.3 KB | — |
| `application/src/use-cases/get-workspace-graph.ts` | 21 | 0.6 KB | — |
| `application/src/use-cases/list-sources.ts` | 11 | 0.3 KB | — |
| `application/src/use-cases/list-workspaces.ts` | 11 | 0.3 KB | — |
| `application/src/use-cases/patch-node.ts` | 37 | 1.0 KB | — |
| `application/src/use-cases/rate-node.ts` | 29 | 0.7 KB | — |
| `application/src/use-cases/submit-claim.ts` | 49 | 1.2 KB | — |
| `application/test/create-workspace.test.ts` | 63 | 1.6 KB | — |
| `application/test/use-cases.test.ts` | 337 | 10.3 KB | — |
| `application/vitest.config.ts` | 28 | 0.6 KB | — |
| `domain/coverage/block-navigation.js` | 88 | 2.6 KB | — |
| `domain/coverage/prettify.js` | 3 | 17.2 KB | — |
| `domain/coverage/sorter.js` | 211 | 6.6 KB | — |
| `domain/src/adr.ts` | 42 | 0.7 KB | — |
| `domain/src/governance.ts` | 28 | 0.6 KB | A Claim in EPIOS is a node that undergoes a formal governance process. |
| `domain/src/index.ts` | 7 | 0.2 KB | — |
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
| `infrastructure-runtime/src/in-memory-governance.repository.ts` | 29 | 0.9 KB | — |
| `infrastructure-runtime/src/in-memory-repositories.ts` | 161 | 4.1 KB | — |
| `infrastructure-runtime/src/index.ts` | 6 | 0.2 KB | — |
| `observability/src/audit.ts` | 25 | 0.6 KB | — |
| `observability/src/index.ts` | 3 | 0.1 KB | — |
| `observability/src/tracer.ts` | 24 | 0.5 KB | — |
| `ports/src/domain.repository.port.js` | 3 | 0.1 KB | — |
| `ports/src/domain.repository.port.ts` | 19 | 0.5 KB | — |
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

### `application/src/use-cases/rate-node.ts`
- **Экспорт**: `RateNodeRequest`, `RateNodeUseCase`
- **Зависимости**:
  - `@epios/domain` → Rating, EpistemicRatingValue
  - `@epios/ports` → RatingRepositoryPort

### `application/src/use-cases/submit-claim.ts`
- **Экспорт**: `SubmitClaimRequest`, `SubmitClaimUseCase`
- **Зависимости**:
  - `@epios/domain` → Claim, GovernanceProcess
  - `@epios/ports` → GraphRepositoryPort, GovernanceRepositoryPort

### `domain/src/adr.ts`
- **Экспорт**: `ADRStatus`, `ADRPriority`, `ADR`, `ADRFlow`

### `domain/src/governance.ts`
- **Экспорт**: `ApprovalStatus`, `Vote`, `GovernanceProcess`, `Claim`
- **Зависимости**:
  - `./node.js` → EpistemicNode

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
  - `@epios/domain` → GovernanceProcess
  - `@epios/ports` → GovernanceRepositoryPort

### `infrastructure-runtime/src/in-memory-repositories.ts`
- **Экспорт**: `InMemoryADRRepository`, `MOCK_ADRS`, `InMemoryWorkspaceRepository`, `InMemoryGraphRepository`, `InMemorySourceRepository`, `InMemoryRatingRepository`

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
| `DATABASE_URL` | packages/server.ts, packages/drizzle.config.ts |
| `EPIOS_DATABASE_MODE` | packages/server.ts |
| `PORT` | packages/bin.ts |

## API Реестр

| Метод | Путь | Файл |
|---|---|---|
| `GET` | `/health` | `packages/api/src/server.ts` |
