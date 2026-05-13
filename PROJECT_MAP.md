# 🗺️ PROJECT MAP — epios
> Автоматически сгенерировано: `2026-05-13 20:42:28`
> Скрипт: `node dev_studio/refresh.js`

## 📊 Telemetry / Context Health
| Metric | Value | Note |
|---|---|---|
| **Total Files** | `108` | Только JS/TS/TSX исходники |
| **Total Lines** | `9851` | Суммарно по проекту |
| **Project Weight** | `~80 207 tokens` | Оценка (4 символа/токен) |
| **Context Pressure** | `62.7%` | Нагрузка на окно 128k (Full Scan) |
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
V["GovernancePanel.tsx"]
W["ReadinessPanel.tsx"]
X["CommandPalette.tsx"]
1H["Sidebar.tsx"]
1I["WorkspaceRoom.tsx"]
1J["GraphCanvas.tsx"]
1L["CustomNode.tsx"]
1M["MissionPanel.tsx"]
1N["MappingPanel.tsx"]
1O["SourcePanel.tsx"]
1P["RatingPanel.tsx"]
end
subgraph T["hooks"]
U["useApi.ts"]
end
subgraph Y["context"]
Z["WorkspaceContext.tsx"]
end
1Q["main.tsx"]
1R["index.css"]
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
subgraph 10["reactflow@11.11.4_@types+re_c2b98541cbcfabf22830798c75b6ca44"]
subgraph 11["node_modules"]
subgraph 12["reactflow"]
subgraph 13["dist"]
subgraph 14["esm"]
15["index.mjs"]
end
1K["style.css"]
end
end
end
end
subgraph 1S["react-dom@18.3.1_react@18.3.1"]
subgraph 1T["node_modules"]
subgraph 1U["react-dom"]
1V["client.js"]
end
end
end
subgraph 24["@fastify+cors@8.5.0"]
subgraph 25["node_modules"]
subgraph 26["@fastify"]
subgraph 27["cors"]
28["index.js"]
end
end
end
end
subgraph 29["dotenv@16.6.1"]
subgraph 2A["node_modules"]
subgraph 2B["dotenv"]
subgraph 2C["lib"]
2D["main.js"]
end
end
end
end
subgraph 2E["drizzle-orm@0.45.2_postgres@3.4.9"]
subgraph 2F["node_modules"]
subgraph 2G["drizzle-orm"]
subgraph 2H["postgres-js"]
2I["index.js"]
end
4F["index.js"]
subgraph 4H["pg-core"]
4I["index.js"]
end
end
end
end
subgraph 2J["fastify@4.29.1"]
subgraph 2K["node_modules"]
subgraph 2L["fastify"]
2M["fastify.js"]
end
end
end
subgraph 2N["postgres@3.4.9"]
subgraph 2O["node_modules"]
subgraph 2P["postgres"]
subgraph 2Q["src"]
2R["index.js"]
end
end
end
end
subgraph 4U["vitest@1.6.1_@types+node@25.7.0"]
subgraph 4V["node_modules"]
subgraph 4W["vitest"]
subgraph 4X["dist"]
4Y["index.js"]
52["config.cjs"]
end
end
end
end
subgraph 74["dotenv-expand@11.0.7"]
subgraph 75["node_modules"]
subgraph 76["dotenv-expand"]
subgraph 77["lib"]
78["main.js"]
end
end
end
end
subgraph 79["drizzle-kit@0.31.10"]
subgraph 7A["node_modules"]
subgraph 7B["drizzle-kit"]
7C["index.mjs"]
end
end
end
end
end
subgraph 16["packages"]
subgraph 17["domain"]
subgraph 18["src"]
19["index.ts"]
1A["adr.ts"]
1B["governance.ts"]
1C["node.ts"]
1D["mapping.ts"]
1E["rating.ts"]
1F["source.ts"]
1G["workspace.ts"]
end
subgraph 57["coverage"]
58["block-navigation.js"]
59["prettify.js"]
5A["sorter.js"]
end
subgraph 5B["test"]
5C["domain-smoke.test.ts"]
5D["node-invariants.test.ts"]
5E["source-rating.test.ts"]
5F["workspace.test.ts"]
end
5G["vitest.config.ts"]
end
subgraph 1W["api"]
subgraph 1X["coverage"]
1Y["block-navigation.js"]
1Z["prettify.js"]
20["sorter.js"]
end
subgraph 21["src"]
22["bin.ts"]
23["server.ts"]
subgraph 2S["routes"]
2T["adr.routes.ts"]
3Y["governance.routes.ts"]
3Z["mapping.routes.ts"]
42["mcp.routes.ts"]
43["mission.routes.ts"]
44["rating.routes.ts"]
45["workspace.routes.ts"]
end
subgraph 40["dto"]
41["index.ts"]
end
4R["index.ts"]
end
subgraph 4S["test"]
4T["adr.test.ts"]
4Z["api.test.ts"]
end
50["vitest.config.ts"]
end
subgraph 2U["application"]
subgraph 2V["src"]
2W["index.ts"]
2X["mapping-processor.ts"]
subgraph 35["use-cases"]
36["add-edge.ts"]
3D["add-node.ts"]
3E["add-source.ts"]
3F["adr-use-cases.ts"]
3G["apply-patch.ts"]
3H["assess-readiness.ts"]
3I["cast-vote.ts"]
3J["create-workspace.ts"]
3K["get-mapping-run.ts"]
3L["get-node-ratings.ts"]
3M["get-readiness.ts"]
3N["get-trace.ts"]
3O["get-workspace-graph.ts"]
3P["list-mapping-runs.ts"]
3Q["list-patches.ts"]
3R["list-sources.ts"]
3S["list-workspaces.ts"]
3T["patch-node.ts"]
3U["propose-patch.ts"]
3V["rate-node.ts"]
3W["start-mapping-run.ts"]
3X["submit-claim.ts"]
end
end
subgraph 53["test"]
54["create-workspace.test.ts"]
55["use-cases.test.ts"]
end
56["vitest.config.ts"]
end
subgraph 2Y["ports"]
subgraph 2Z["src"]
30["index.js"]
31["domain.repository.port.js"]
32["governance.port.js"]
33["graph.repository.port.js"]
34["mcp.port.js"]
7D["domain.repository.port.d.ts"]
7E["domain.repository.port.ts"]
7F["governance.port.d.ts"]
7G["governance.port.ts"]
7H["graph.repository.port.d.ts"]
7I["graph.repository.port.ts"]
7J["index.d.ts"]
7K["index.ts"]
7L["mapping.repository.port.ts"]
7M["outbox.repository.port.ts"]
7N["mcp.port.d.ts"]
7O["mcp.port.ts"]
end
end
subgraph 38["observability"]
subgraph 39["src"]
3A["index.ts"]
3B["audit.ts"]
3C["tracer.ts"]
end
end
subgraph 46["infrastructure-mcp"]
subgraph 47["src"]
48["index.ts"]
49["mcp-app.registry.ts"]
4A["mcp-bridge.ts"]
end
subgraph 5H["dist"]
subgraph 5I["domain"]
subgraph 5J["src"]
5K["adr.d.ts"]
5L["adr.js"]
5M["governance.d.ts"]
5N["node.js"]
5O["governance.js"]
5P["index.d.ts"]
5Q["rating.js"]
5R["source.js"]
5S["workspace.js"]
5T["index.js"]
5U["mapping.d.ts"]
5V["mapping.js"]
5W["mission.d.ts"]
5X["mission.js"]
5Y["node.d.ts"]
5Z["rating.d.ts"]
60["source.d.ts"]
61["workspace.d.ts"]
end
end
62["index.d.ts"]
63["mcp-app.registry.js"]
64["mcp-bridge.js"]
65["index.js"]
subgraph 66["infrastructure-mcp"]
subgraph 67["src"]
68["index.d.ts"]
69["mcp-app.registry.js"]
6A["mcp-bridge.js"]
6B["index.js"]
6C["mcp-app.registry.d.ts"]
6D["mcp-bridge.d.ts"]
end
end
6E["mcp-app.registry.d.ts"]
6H["mcp-bridge.d.ts"]
subgraph 6I["ports"]
subgraph 6J["src"]
6K["domain.repository.port.d.ts"]
6L["domain.repository.port.js"]
6M["governance.port.d.ts"]
6N["governance.port.js"]
6O["graph.repository.port.d.ts"]
6P["graph.repository.port.js"]
6Q["index.d.ts"]
6R["mcp.port.js"]
6S["index.js"]
6T["mapping.repository.port.d.ts"]
6U["mapping.repository.port.js"]
6V["mcp.port.d.ts"]
6W["outbox.repository.port.d.ts"]
6X["outbox.repository.port.js"]
end
end
end
subgraph 6Y["test"]
6Z["smoke.test.ts"]
end
end
subgraph 4B["infrastructure-postgres"]
subgraph 4C["src"]
4D["index.ts"]
4E["graph.repository.ts"]
4G["schema.ts"]
4J["rating.repository.ts"]
4K["source.repository.ts"]
4L["workspace.repository.ts"]
end
73["drizzle.config.ts"]
end
subgraph 4M["infrastructure-runtime"]
subgraph 4N["src"]
4O["index.ts"]
4P["in-memory-governance.repository.ts"]
4Q["in-memory-repositories.ts"]
end
end
subgraph 70["infrastructure-models"]
subgraph 71["src"]
72["index.ts"]
end
end
subgraph 7P["testing"]
subgraph 7Q["src"]
7R["fixtures.ts"]
7S["index.ts"]
end
end
end
37["crypto"]
51["path"]
subgraph 6F["@epos"]
6G["ports"]
end
4-->6
8-->G
8-->X
8-->1H
8-->1I
8-->Z
8-->E
G-->U
G-->V
G-->W
G-->M
G-->S
G-->E
U-->E
V-->M
V-->S
V-->E
W-->M
W-->S
W-->E
X-->Z
X-->M
X-->S
X-->E
Z-->19
Z-->E
Z-->15
19-->1A
19-->1B
19-->1D
19-->1C
19-->1E
19-->1F
19-->1G
1B-->1C
1H-->Z
1H-->U
1H-->19
1H-->M
1H-->S
1H-->E
1I-->Z
1I-->1J
1I-->1M
1I-->1P
1I-->19
1I-->M
1I-->S
1I-->E
1J-->Z
1J-->U
1J-->1L
1J-->S
1J-->E
1J-->15
1J-->1K
1L-->S
1L-->E
1L-->15
1M-->V
1M-->1N
1M-->1O
1M-->19
1M-->M
1M-->S
1M-->E
1N-->19
1N-->M
1N-->S
1N-->E
1O-->M
1O-->S
1O-->E
1P-->S
1P-->E
1Q-->8
1Q-->Z
1Q-->1R
1Q-->E
1Q-->1V
1Q-->1K
22-->23
23-->2T
23-->3Y
23-->3Z
23-->42
23-->43
23-->44
23-->45
23-->2W
23-->19
23-->48
23-->4D
23-->4O
23-->30
23-->28
23-->2D
23-->2I
23-->2M
23-->2R
2T-->2W
2T-->2M
2W-->2X
2W-->36
2W-->3D
2W-->3E
2W-->3F
2W-->3G
2W-->3H
2W-->3I
2W-->3J
2W-->3K
2W-->3L
2W-->3M
2W-->3N
2W-->3O
2W-->3P
2W-->3Q
2W-->3R
2W-->3S
2W-->3T
2W-->3U
2W-->3V
2W-->3W
2W-->3X
2X-->30
30-->31
30-->32
30-->33
30-->34
36-->19
36-->3A
36-->30
36-->37
3A-->3B
3A-->3C
3D-->19
3D-->3A
3D-->30
3D-->37
3E-->19
3E-->30
3E-->37
3F-->19
3G-->19
3G-->30
3H-->19
3H-->30
3I-->19
3I-->3A
3I-->30
3J-->19
3J-->3A
3J-->30
3J-->37
3K-->19
3K-->30
3L-->19
3L-->30
3M-->19
3M-->30
3N-->19
3N-->30
3O-->19
3O-->30
3P-->19
3P-->30
3Q-->19
3Q-->30
3R-->19
3R-->30
3S-->19
3S-->30
3T-->19
3T-->30
3U-->19
3U-->30
3U-->37
3V-->19
3V-->30
3V-->37
3W-->19
3W-->30
3W-->37
3X-->19
3X-->30
3X-->37
3Y-->2W
3Y-->2M
3Z-->41
3Z-->2W
3Z-->2M
41-->19
42-->30
42-->2M
43-->2W
43-->19
43-->2M
44-->2W
44-->19
44-->2M
45-->41
45-->2W
45-->2M
48-->49
48-->4A
49-->30
4A-->30
4D-->4E
4D-->4J
4D-->4G
4D-->4K
4D-->4L
4E-->4G
4E-->19
4E-->30
4E-->4F
4E-->2I
4G-->4I
4J-->4G
4J-->19
4J-->30
4J-->4F
4J-->2I
4K-->4G
4K-->19
4K-->30
4K-->4F
4K-->2I
4L-->4G
4L-->19
4L-->30
4L-->4F
4L-->2I
4O-->4P
4O-->4Q
4P-->19
4P-->30
4Q-->19
4Q-->30
4R-->23
4T-->23
4T-->2M
4T-->4Y
4Z-->23
4Z-->30
4Z-->2M
4Z-->4Y
50-->51
50-->52
54-->3J
54-->30
54-->4Y
55-->36
55-->3D
55-->3I
55-->3J
55-->3O
55-->3S
55-->3T
55-->3X
55-->19
55-->30
55-->4Y
56-->51
56-->52
5C-->19
5C-->4Y
5D-->19
5D-->4Y
5E-->19
5E-->4Y
5F-->1G
5F-->4Y
5G-->52
5M-->5N
5P-->5L
5P-->5O
5P-->5N
5P-->5Q
5P-->5R
5P-->5S
5T-->5L
5T-->5O
5T-->5N
5T-->5Q
5T-->5R
5T-->5S
62-->63
62-->64
65-->63
65-->64
68-->69
68-->6A
6B-->69
6B-->6A
6C-->30
6D-->30
6E-->6G
6H-->6G
6K-->19
6M-->19
6O-->19
6Q-->6L
6Q-->6N
6Q-->6P
6Q-->6R
6S-->6L
6S-->6N
6S-->6P
6S-->6R
6T-->19
6W-->19
6Z-->4Y
73-->2D
73-->78
73-->7C
7D-->19
7E-->19
7F-->19
7G-->19
7H-->19
7I-->19
7J-->31
7J-->32
7J-->33
7J-->34
7K-->31
7K-->32
7K-->33
7K-->7L
7K-->34
7K-->7M
7L-->19
7R-->19
7S-->7R
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
V["GovernancePanel.tsx"]
W["ReadinessPanel.tsx"]
X["CommandPalette.tsx"]
1H["Sidebar.tsx"]
1I["WorkspaceRoom.tsx"]
1J["GraphCanvas.tsx"]
1L["CustomNode.tsx"]
1M["MissionPanel.tsx"]
1N["MappingPanel.tsx"]
1O["SourcePanel.tsx"]
1P["RatingPanel.tsx"]
end
subgraph T["hooks"]
U["useApi.ts"]
end
subgraph Y["context"]
Z["WorkspaceContext.tsx"]
end
1Q["main.tsx"]
1R["index.css"]
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
subgraph 10["reactflow@11.11.4_@types+re_c2b98541cbcfabf22830798c75b6ca44"]
subgraph 11["node_modules"]
subgraph 12["reactflow"]
subgraph 13["dist"]
subgraph 14["esm"]
15["index.mjs"]
end
1K["style.css"]
end
end
end
end
subgraph 1S["react-dom@18.3.1_react@18.3.1"]
subgraph 1T["node_modules"]
subgraph 1U["react-dom"]
1V["client.js"]
end
end
end
subgraph 24["@fastify+cors@8.5.0"]
subgraph 25["node_modules"]
subgraph 26["@fastify"]
subgraph 27["cors"]
28["index.js"]
end
end
end
end
subgraph 29["dotenv@16.6.1"]
subgraph 2A["node_modules"]
subgraph 2B["dotenv"]
subgraph 2C["lib"]
2D["main.js"]
end
end
end
end
subgraph 2E["drizzle-orm@0.45.2_postgres@3.4.9"]
subgraph 2F["node_modules"]
subgraph 2G["drizzle-orm"]
subgraph 2H["postgres-js"]
2I["index.js"]
end
4F["index.js"]
subgraph 4H["pg-core"]
4I["index.js"]
end
end
end
end
subgraph 2J["fastify@4.29.1"]
subgraph 2K["node_modules"]
subgraph 2L["fastify"]
2M["fastify.js"]
end
end
end
subgraph 2N["postgres@3.4.9"]
subgraph 2O["node_modules"]
subgraph 2P["postgres"]
subgraph 2Q["src"]
2R["index.js"]
end
end
end
end
subgraph 4U["vitest@1.6.1_@types+node@25.7.0"]
subgraph 4V["node_modules"]
subgraph 4W["vitest"]
subgraph 4X["dist"]
4Y["index.js"]
52["config.cjs"]
end
end
end
end
subgraph 74["dotenv-expand@11.0.7"]
subgraph 75["node_modules"]
subgraph 76["dotenv-expand"]
subgraph 77["lib"]
78["main.js"]
end
end
end
end
subgraph 79["drizzle-kit@0.31.10"]
subgraph 7A["node_modules"]
subgraph 7B["drizzle-kit"]
7C["index.mjs"]
end
end
end
end
end
subgraph 16["packages"]
subgraph 17["domain"]
subgraph 18["src"]
19["index.ts"]
1A["adr.ts"]
1B["governance.ts"]
1C["node.ts"]
1D["mapping.ts"]
1E["rating.ts"]
1F["source.ts"]
1G["workspace.ts"]
end
subgraph 57["coverage"]
58["block-navigation.js"]
59["prettify.js"]
5A["sorter.js"]
end
subgraph 5B["test"]
5C["domain-smoke.test.ts"]
5D["node-invariants.test.ts"]
5E["source-rating.test.ts"]
5F["workspace.test.ts"]
end
5G["vitest.config.ts"]
end
subgraph 1W["api"]
subgraph 1X["coverage"]
1Y["block-navigation.js"]
1Z["prettify.js"]
20["sorter.js"]
end
subgraph 21["src"]
22["bin.ts"]
23["server.ts"]
subgraph 2S["routes"]
2T["adr.routes.ts"]
3Y["governance.routes.ts"]
3Z["mapping.routes.ts"]
42["mcp.routes.ts"]
43["mission.routes.ts"]
44["rating.routes.ts"]
45["workspace.routes.ts"]
end
subgraph 40["dto"]
41["index.ts"]
end
4R["index.ts"]
end
subgraph 4S["test"]
4T["adr.test.ts"]
4Z["api.test.ts"]
end
50["vitest.config.ts"]
end
subgraph 2U["application"]
subgraph 2V["src"]
2W["index.ts"]
2X["mapping-processor.ts"]
subgraph 35["use-cases"]
36["add-edge.ts"]
3D["add-node.ts"]
3E["add-source.ts"]
3F["adr-use-cases.ts"]
3G["apply-patch.ts"]
3H["assess-readiness.ts"]
3I["cast-vote.ts"]
3J["create-workspace.ts"]
3K["get-mapping-run.ts"]
3L["get-node-ratings.ts"]
3M["get-readiness.ts"]
3N["get-trace.ts"]
3O["get-workspace-graph.ts"]
3P["list-mapping-runs.ts"]
3Q["list-patches.ts"]
3R["list-sources.ts"]
3S["list-workspaces.ts"]
3T["patch-node.ts"]
3U["propose-patch.ts"]
3V["rate-node.ts"]
3W["start-mapping-run.ts"]
3X["submit-claim.ts"]
end
end
subgraph 53["test"]
54["create-workspace.test.ts"]
55["use-cases.test.ts"]
end
56["vitest.config.ts"]
end
subgraph 2Y["ports"]
subgraph 2Z["src"]
30["index.js"]
31["domain.repository.port.js"]
32["governance.port.js"]
33["graph.repository.port.js"]
34["mcp.port.js"]
7D["domain.repository.port.d.ts"]
7E["domain.repository.port.ts"]
7F["governance.port.d.ts"]
7G["governance.port.ts"]
7H["graph.repository.port.d.ts"]
7I["graph.repository.port.ts"]
7J["index.d.ts"]
7K["index.ts"]
7L["mapping.repository.port.ts"]
7M["outbox.repository.port.ts"]
7N["mcp.port.d.ts"]
7O["mcp.port.ts"]
end
end
subgraph 38["observability"]
subgraph 39["src"]
3A["index.ts"]
3B["audit.ts"]
3C["tracer.ts"]
end
end
subgraph 46["infrastructure-mcp"]
subgraph 47["src"]
48["index.ts"]
49["mcp-app.registry.ts"]
4A["mcp-bridge.ts"]
end
subgraph 5H["dist"]
subgraph 5I["domain"]
subgraph 5J["src"]
5K["adr.d.ts"]
5L["adr.js"]
5M["governance.d.ts"]
5N["node.js"]
5O["governance.js"]
5P["index.d.ts"]
5Q["rating.js"]
5R["source.js"]
5S["workspace.js"]
5T["index.js"]
5U["mapping.d.ts"]
5V["mapping.js"]
5W["mission.d.ts"]
5X["mission.js"]
5Y["node.d.ts"]
5Z["rating.d.ts"]
60["source.d.ts"]
61["workspace.d.ts"]
end
end
62["index.d.ts"]
63["mcp-app.registry.js"]
64["mcp-bridge.js"]
65["index.js"]
subgraph 66["infrastructure-mcp"]
subgraph 67["src"]
68["index.d.ts"]
69["mcp-app.registry.js"]
6A["mcp-bridge.js"]
6B["index.js"]
6C["mcp-app.registry.d.ts"]
6D["mcp-bridge.d.ts"]
end
end
6E["mcp-app.registry.d.ts"]
6H["mcp-bridge.d.ts"]
subgraph 6I["ports"]
subgraph 6J["src"]
6K["domain.repository.port.d.ts"]
6L["domain.repository.port.js"]
6M["governance.port.d.ts"]
6N["governance.port.js"]
6O["graph.repository.port.d.ts"]
6P["graph.repository.port.js"]
6Q["index.d.ts"]
6R["mcp.port.js"]
6S["index.js"]
6T["mapping.repository.port.d.ts"]
6U["mapping.repository.port.js"]
6V["mcp.port.d.ts"]
6W["outbox.repository.port.d.ts"]
6X["outbox.repository.port.js"]
end
end
end
subgraph 6Y["test"]
6Z["smoke.test.ts"]
end
end
subgraph 4B["infrastructure-postgres"]
subgraph 4C["src"]
4D["index.ts"]
4E["graph.repository.ts"]
4G["schema.ts"]
4J["rating.repository.ts"]
4K["source.repository.ts"]
4L["workspace.repository.ts"]
end
73["drizzle.config.ts"]
end
subgraph 4M["infrastructure-runtime"]
subgraph 4N["src"]
4O["index.ts"]
4P["in-memory-governance.repository.ts"]
4Q["in-memory-repositories.ts"]
end
end
subgraph 70["infrastructure-models"]
subgraph 71["src"]
72["index.ts"]
end
end
subgraph 7P["testing"]
subgraph 7Q["src"]
7R["fixtures.ts"]
7S["index.ts"]
end
end
end
37["crypto"]
51["path"]
subgraph 6F["@epos"]
6G["ports"]
end
4-->6
8-->G
8-->X
8-->1H
8-->1I
8-->Z
8-->E
G-->U
G-->V
G-->W
G-->M
G-->S
G-->E
U-->E
V-->M
V-->S
V-->E
W-->M
W-->S
W-->E
X-->Z
X-->M
X-->S
X-->E
Z-->19
Z-->E
Z-->15
19-->1A
19-->1B
19-->1D
19-->1C
19-->1E
19-->1F
19-->1G
1B-->1C
1H-->Z
1H-->U
1H-->19
1H-->M
1H-->S
1H-->E
1I-->Z
1I-->1J
1I-->1M
1I-->1P
1I-->19
1I-->M
1I-->S
1I-->E
1J-->Z
1J-->U
1J-->1L
1J-->S
1J-->E
1J-->15
1J-->1K
1L-->S
1L-->E
1L-->15
1M-->V
1M-->1N
1M-->1O
1M-->19
1M-->M
1M-->S
1M-->E
1N-->19
1N-->M
1N-->S
1N-->E
1O-->M
1O-->S
1O-->E
1P-->S
1P-->E
1Q-->8
1Q-->Z
1Q-->1R
1Q-->E
1Q-->1V
1Q-->1K
22-->23
23-->2T
23-->3Y
23-->3Z
23-->42
23-->43
23-->44
23-->45
23-->2W
23-->19
23-->48
23-->4D
23-->4O
23-->30
23-->28
23-->2D
23-->2I
23-->2M
23-->2R
2T-->2W
2T-->2M
2W-->2X
2W-->36
2W-->3D
2W-->3E
2W-->3F
2W-->3G
2W-->3H
2W-->3I
2W-->3J
2W-->3K
2W-->3L
2W-->3M
2W-->3N
2W-->3O
2W-->3P
2W-->3Q
2W-->3R
2W-->3S
2W-->3T
2W-->3U
2W-->3V
2W-->3W
2W-->3X
2X-->30
30-->31
30-->32
30-->33
30-->34
36-->19
36-->3A
36-->30
36-->37
3A-->3B
3A-->3C
3D-->19
3D-->3A
3D-->30
3D-->37
3E-->19
3E-->30
3E-->37
3F-->19
3G-->19
3G-->30
3H-->19
3H-->30
3I-->19
3I-->3A
3I-->30
3J-->19
3J-->3A
3J-->30
3J-->37
3K-->19
3K-->30
3L-->19
3L-->30
3M-->19
3M-->30
3N-->19
3N-->30
3O-->19
3O-->30
3P-->19
3P-->30
3Q-->19
3Q-->30
3R-->19
3R-->30
3S-->19
3S-->30
3T-->19
3T-->30
3U-->19
3U-->30
3U-->37
3V-->19
3V-->30
3V-->37
3W-->19
3W-->30
3W-->37
3X-->19
3X-->30
3X-->37
3Y-->2W
3Y-->2M
3Z-->41
3Z-->2W
3Z-->2M
41-->19
42-->30
42-->2M
43-->2W
43-->19
43-->2M
44-->2W
44-->19
44-->2M
45-->41
45-->2W
45-->2M
48-->49
48-->4A
49-->30
4A-->30
4D-->4E
4D-->4J
4D-->4G
4D-->4K
4D-->4L
4E-->4G
4E-->19
4E-->30
4E-->4F
4E-->2I
4G-->4I
4J-->4G
4J-->19
4J-->30
4J-->4F
4J-->2I
4K-->4G
4K-->19
4K-->30
4K-->4F
4K-->2I
4L-->4G
4L-->19
4L-->30
4L-->4F
4L-->2I
4O-->4P
4O-->4Q
4P-->19
4P-->30
4Q-->19
4Q-->30
4R-->23
4T-->23
4T-->2M
4T-->4Y
4Z-->23
4Z-->30
4Z-->2M
4Z-->4Y
50-->51
50-->52
54-->3J
54-->30
54-->4Y
55-->36
55-->3D
55-->3I
55-->3J
55-->3O
55-->3S
55-->3T
55-->3X
55-->19
55-->30
55-->4Y
56-->51
56-->52
5C-->19
5C-->4Y
5D-->19
5D-->4Y
5E-->19
5E-->4Y
5F-->1G
5F-->4Y
5G-->52
5M-->5N
5P-->5L
5P-->5O
5P-->5N
5P-->5Q
5P-->5R
5P-->5S
5T-->5L
5T-->5O
5T-->5N
5T-->5Q
5T-->5R
5T-->5S
62-->63
62-->64
65-->63
65-->64
68-->69
68-->6A
6B-->69
6B-->6A
6C-->30
6D-->30
6E-->6G
6H-->6G
6K-->19
6M-->19
6O-->19
6Q-->6L
6Q-->6N
6Q-->6P
6Q-->6R
6S-->6L
6S-->6N
6S-->6P
6S-->6R
6T-->19
6W-->19
6Z-->4Y
73-->2D
73-->78
73-->7C
7D-->19
7E-->19
7F-->19
7G-->19
7H-->19
7I-->19
7J-->31
7J-->32
7J-->33
7J-->34
7K-->31
7K-->32
7K-->33
7K-->7L
7K-->34
7K-->7M
7L-->19
7R-->19
7S-->7R
```

## Компонент: `apps`

| Файл | Строк | Размер | Описание |
|---|---|---|---|
| `demo-shell/src/App.tsx` | 59 | 1.5 KB | — |
| `demo-shell/src/components/ADRReviewWorkspace.tsx` | 744 | 23.0 KB | — |
| `demo-shell/src/components/CommandPalette.tsx` | 341 | 9.1 KB | — |
| `demo-shell/src/components/CustomNode.tsx` | 153 | 3.9 KB | — |
| `demo-shell/src/components/GovernancePanel.tsx` | 448 | 13.1 KB | — |
| `demo-shell/src/components/GraphCanvas.tsx` | 568 | 15.9 KB | — |
| `demo-shell/src/components/MappingPanel.tsx` | 268 | 7.8 KB | — |
| `demo-shell/src/components/MissionPanel.tsx` | 321 | 9.3 KB | — |
| `demo-shell/src/components/RatingPanel.tsx` | 232 | 6.2 KB | — |
| `demo-shell/src/components/ReadinessPanel.tsx` | 401 | 11.7 KB | — |
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

### `demo-shell/src/components/ReadinessPanel.tsx`
- **Экспорт**: `ReadinessPanel`
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
| `api/src/routes/governance.routes.ts` | 94 | 2.9 KB | — |
| `api/src/routes/mapping.routes.ts` | 95 | 2.8 KB | — |
| `api/src/routes/mcp.routes.ts` | 38 | 1.0 KB | — |
| `api/src/routes/mission.routes.ts` | 34 | 0.9 KB | — |
| `api/src/routes/rating.routes.ts` | 30 | 0.9 KB | — |
| `api/src/routes/workspace.routes.ts` | 37 | 1.0 KB | — |
| `api/src/server.ts` | 572 | 17.0 KB | — |
| `api/test/adr.test.ts` | 48 | 1.2 KB | — |
| `api/test/api.test.ts` | 210 | 5.6 KB | — |
| `api/vitest.config.ts` | 42 | 1.1 KB | — |
| `application/src/index.ts` | 24 | 1.0 KB | — |
| `application/src/mapping-processor.ts` | 83 | 2.2 KB | — |
| `application/src/use-cases/add-edge.ts` | 47 | 1.3 KB | — |
| `application/src/use-cases/add-node.ts` | 55 | 1.4 KB | — |
| `application/src/use-cases/add-source.ts` | 29 | 0.7 KB | — |
| `application/src/use-cases/adr-use-cases.ts` | 20 | 0.4 KB | — |
| `application/src/use-cases/apply-patch.ts` | 74 | 2.2 KB | — |
| `application/src/use-cases/assess-readiness.ts` | 91 | 2.9 KB | — |
| `application/src/use-cases/cast-vote.ts` | 164 | 4.9 KB | — |
| `application/src/use-cases/create-workspace.ts` | 49 | 1.2 KB | — |
| `application/src/use-cases/get-mapping-run.ts` | 11 | 0.3 KB | — |
| `application/src/use-cases/get-node-ratings.ts` | 11 | 0.3 KB | — |
| `application/src/use-cases/get-readiness.ts` | 11 | 0.4 KB | — |
| `application/src/use-cases/get-trace.ts` | 11 | 0.3 KB | — |
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
| `domain/src/governance.ts` | 81 | 1.7 KB | A Claim in EPIOS is a node that undergoes a formal governance process. |
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
| `infrastructure-runtime/src/in-memory-governance.repository.ts` | 99 | 2.9 KB | — |
| `infrastructure-runtime/src/in-memory-repositories.ts` | 219 | 5.8 KB | — |
| `infrastructure-runtime/src/index.ts` | 6 | 0.2 KB | — |
| `observability/src/audit.ts` | 25 | 0.6 KB | — |
| `observability/src/index.ts` | 3 | 0.1 KB | — |
| `observability/src/tracer.ts` | 24 | 0.5 KB | — |
| `ports/src/domain.repository.port.js` | 3 | 0.1 KB | — |
| `ports/src/domain.repository.port.ts` | 19 | 0.5 KB | — |
| `ports/src/governance.port.js` | 3 | 0.1 KB | — |
| `ports/src/governance.port.ts` | 32 | 1.2 KB | — |
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

### `application/src/use-cases/apply-patch.ts`
- **Экспорт**: `ApplyPatchRequest`, `ApplyPatchUseCase`
- **Зависимости**:
  - `@epios/ports` → GovernanceRepositoryPort, GraphRepositoryPort
  - `@epios/domain` → ArtifactVersion

### `application/src/use-cases/assess-readiness.ts`
- **Экспорт**: `AssessReadinessRequest`, `AssessReadinessUseCase`
- **Зависимости**:
  - `@epios/ports` → GovernanceRepositoryPort, GraphRepositoryPort
  - `@epios/domain` → ReadinessAssessment, ReadinessStatus

### `application/src/use-cases/cast-vote.ts`
- **Экспорт**: `CastVoteRequest`, `CastVoteUseCase`
- **Зависимости**:
  - `@epios/ports` → GovernanceRepositoryPort, GraphRepositoryPort
  - `@epios/domain` → Vote, ArtifactVersion
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

### `application/src/use-cases/get-readiness.ts`
- **Экспорт**: `GetReadinessUseCase`
- **Зависимости**:
  - `@epios/ports` → GovernanceRepositoryPort
  - `@epios/domain` → ReadinessAssessment

### `application/src/use-cases/get-trace.ts`
- **Экспорт**: `GetTraceUseCase`
- **Зависимости**:
  - `@epios/ports` → GovernanceRepositoryPort
  - `@epios/domain` → TraceEvent

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
- **Экспорт**: `ApprovalStatus`, `Vote`, `GovernanceProcess`, `Claim`, `NodePatch`, `PatchGovernance`, `ReadinessStatus`, `ReadinessAssessment`, `ArtifactVersion`, `TraceEvent`
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
