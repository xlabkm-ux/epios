# 🗺️ PROJECT MAP — epios
> Автоматически сгенерировано: `2026-05-13 21:27:56`
> Скрипт: `node dev_studio/refresh.js`

## 📊 Telemetry / Context Health
| Metric | Value | Note |
|---|---|---|
| **Total Files** | `110` | Только JS/TS/TSX исходники |
| **Total Lines** | `10011` | Суммарно по проекту |
| **Project Weight** | `~81 236 tokens` | Оценка (4 символа/токен) |
| **Context Pressure** | `63.5%` | Нагрузка на окно 128k (Full Scan) |
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
W["GovernancePanel.tsx"]
X["ReadinessPanel.tsx"]
Y["CommandPalette.tsx"]
1I["Sidebar.tsx"]
1J["WorkspaceRoom.tsx"]
1K["GraphCanvas.tsx"]
1M["CustomNode.tsx"]
1N["MissionPanel.tsx"]
1O["MappingPanel.tsx"]
1P["SourcePanel.tsx"]
1Q["RatingPanel.tsx"]
end
subgraph T["hooks"]
U["useApi.ts"]
end
V["api-config.ts"]
subgraph Z["context"]
10["WorkspaceContext.tsx"]
end
1R["main.tsx"]
1S["index.css"]
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
subgraph 11["reactflow@11.11.4_@types+re_c2b98541cbcfabf22830798c75b6ca44"]
subgraph 12["node_modules"]
subgraph 13["reactflow"]
subgraph 14["dist"]
subgraph 15["esm"]
16["index.mjs"]
end
1L["style.css"]
end
end
end
end
subgraph 1T["react-dom@18.3.1_react@18.3.1"]
subgraph 1U["node_modules"]
subgraph 1V["react-dom"]
1W["client.js"]
end
end
end
subgraph 25["@fastify+cors@8.5.0"]
subgraph 26["node_modules"]
subgraph 27["@fastify"]
subgraph 28["cors"]
29["index.js"]
end
end
end
end
subgraph 2A["dotenv@16.6.1"]
subgraph 2B["node_modules"]
subgraph 2C["dotenv"]
subgraph 2D["lib"]
2E["main.js"]
end
end
end
end
subgraph 2F["dotenv-expand@11.0.7"]
subgraph 2G["node_modules"]
subgraph 2H["dotenv-expand"]
subgraph 2I["lib"]
2J["main.js"]
end
end
end
end
subgraph 2K["drizzle-orm@0.45.2_postgres@3.4.9"]
subgraph 2L["node_modules"]
subgraph 2M["drizzle-orm"]
subgraph 2N["postgres-js"]
2O["index.js"]
end
4L["index.js"]
subgraph 4N["pg-core"]
4O["index.js"]
end
end
end
end
subgraph 2P["fastify@4.29.1"]
subgraph 2Q["node_modules"]
subgraph 2R["fastify"]
2S["fastify.js"]
end
end
end
subgraph 2T["postgres@3.4.9"]
subgraph 2U["node_modules"]
subgraph 2V["postgres"]
subgraph 2W["src"]
2X["index.js"]
end
end
end
end
subgraph 50["vitest@1.6.1_@types+node@25.7.0"]
subgraph 51["node_modules"]
subgraph 52["vitest"]
subgraph 53["dist"]
54["index.js"]
58["config.cjs"]
end
end
end
end
subgraph 7A["drizzle-kit@0.31.10"]
subgraph 7B["node_modules"]
subgraph 7C["drizzle-kit"]
7D["index.mjs"]
end
end
end
end
end
subgraph 17["packages"]
subgraph 18["domain"]
subgraph 19["src"]
1A["index.ts"]
1B["adr.ts"]
1C["governance.ts"]
1D["node.ts"]
1E["mapping.ts"]
1F["rating.ts"]
1G["source.ts"]
1H["workspace.ts"]
end
subgraph 5D["coverage"]
5E["block-navigation.js"]
5F["prettify.js"]
5G["sorter.js"]
end
subgraph 5H["test"]
5I["domain-smoke.test.ts"]
5J["node-invariants.test.ts"]
5K["source-rating.test.ts"]
5L["workspace.test.ts"]
end
5M["vitest.config.ts"]
end
subgraph 1X["api"]
subgraph 1Y["coverage"]
1Z["block-navigation.js"]
20["prettify.js"]
21["sorter.js"]
end
subgraph 22["src"]
23["bin.ts"]
24["server.ts"]
subgraph 2Y["routes"]
2Z["adr.routes.ts"]
44["governance.routes.ts"]
45["mapping.routes.ts"]
48["mcp.routes.ts"]
49["mission.routes.ts"]
4A["rating.routes.ts"]
4B["workspace.routes.ts"]
end
subgraph 46["dto"]
47["index.ts"]
end
4X["index.ts"]
end
subgraph 4Y["test"]
4Z["adr.test.ts"]
55["api.test.ts"]
end
56["vitest.config.ts"]
end
subgraph 30["application"]
subgraph 31["src"]
32["index.ts"]
33["mapping-processor.ts"]
subgraph 3B["use-cases"]
3C["add-edge.ts"]
3J["add-node.ts"]
3K["add-source.ts"]
3L["adr-use-cases.ts"]
3M["apply-patch.ts"]
3N["assess-readiness.ts"]
3O["cast-vote.ts"]
3P["create-workspace.ts"]
3Q["get-mapping-run.ts"]
3R["get-node-ratings.ts"]
3S["get-readiness.ts"]
3T["get-trace.ts"]
3U["get-workspace-graph.ts"]
3V["list-mapping-runs.ts"]
3W["list-patches.ts"]
3X["list-sources.ts"]
3Y["list-workspaces.ts"]
3Z["patch-node.ts"]
40["propose-patch.ts"]
41["rate-node.ts"]
42["start-mapping-run.ts"]
43["submit-claim.ts"]
end
end
subgraph 59["test"]
5A["create-workspace.test.ts"]
5B["use-cases.test.ts"]
end
5C["vitest.config.ts"]
end
subgraph 34["ports"]
subgraph 35["src"]
36["index.js"]
37["domain.repository.port.js"]
38["governance.port.js"]
39["graph.repository.port.js"]
3A["mcp.port.js"]
7F["domain.repository.port.d.ts"]
7G["domain.repository.port.ts"]
7H["governance.port.d.ts"]
7I["governance.port.ts"]
7J["graph.repository.port.d.ts"]
7K["graph.repository.port.ts"]
7L["index.d.ts"]
7M["index.ts"]
7N["mapping.repository.port.ts"]
7O["outbox.repository.port.ts"]
7P["mcp.port.d.ts"]
7Q["mcp.port.ts"]
end
end
subgraph 3E["observability"]
subgraph 3F["src"]
3G["index.ts"]
3H["audit.ts"]
3I["tracer.ts"]
end
end
subgraph 4C["infrastructure-mcp"]
subgraph 4D["src"]
4E["index.ts"]
4F["mcp-app.registry.ts"]
4G["mcp-bridge.ts"]
end
subgraph 5N["dist"]
subgraph 5O["domain"]
subgraph 5P["src"]
5Q["adr.d.ts"]
5R["adr.js"]
5S["governance.d.ts"]
5T["node.js"]
5U["governance.js"]
5V["index.d.ts"]
5W["rating.js"]
5X["source.js"]
5Y["workspace.js"]
5Z["index.js"]
60["mapping.d.ts"]
61["mapping.js"]
62["mission.d.ts"]
63["mission.js"]
64["node.d.ts"]
65["rating.d.ts"]
66["source.d.ts"]
67["workspace.d.ts"]
end
end
68["index.d.ts"]
69["mcp-app.registry.js"]
6A["mcp-bridge.js"]
6B["index.js"]
subgraph 6C["infrastructure-mcp"]
subgraph 6D["src"]
6E["index.d.ts"]
6F["mcp-app.registry.js"]
6G["mcp-bridge.js"]
6H["index.js"]
6I["mcp-app.registry.d.ts"]
6J["mcp-bridge.d.ts"]
end
end
6K["mcp-app.registry.d.ts"]
6N["mcp-bridge.d.ts"]
subgraph 6O["ports"]
subgraph 6P["src"]
6Q["domain.repository.port.d.ts"]
6R["domain.repository.port.js"]
6S["governance.port.d.ts"]
6T["governance.port.js"]
6U["graph.repository.port.d.ts"]
6V["graph.repository.port.js"]
6W["index.d.ts"]
6X["mcp.port.js"]
6Y["index.js"]
6Z["mapping.repository.port.d.ts"]
70["mapping.repository.port.js"]
71["mcp.port.d.ts"]
72["outbox.repository.port.d.ts"]
73["outbox.repository.port.js"]
end
end
end
subgraph 74["test"]
75["smoke.test.ts"]
end
end
subgraph 4H["infrastructure-postgres"]
subgraph 4I["src"]
4J["index.ts"]
4K["graph.repository.ts"]
4M["schema.ts"]
4P["rating.repository.ts"]
4Q["source.repository.ts"]
4R["workspace.repository.ts"]
7E["seed.ts"]
end
79["drizzle.config.ts"]
end
subgraph 4S["infrastructure-runtime"]
subgraph 4T["src"]
4U["index.ts"]
4V["in-memory-governance.repository.ts"]
4W["in-memory-repositories.ts"]
end
end
subgraph 76["infrastructure-models"]
subgraph 77["src"]
78["index.ts"]
end
end
subgraph 7R["testing"]
subgraph 7S["src"]
7T["fixtures.ts"]
7U["index.ts"]
end
end
end
3D["crypto"]
57["path"]
subgraph 6L["@epos"]
6M["ports"]
end
4-->6
8-->G
8-->Y
8-->1I
8-->1J
8-->10
8-->E
G-->U
G-->W
G-->X
G-->M
G-->S
G-->E
U-->V
U-->E
W-->V
W-->M
W-->S
W-->E
X-->V
X-->M
X-->S
X-->E
Y-->10
Y-->M
Y-->S
Y-->E
10-->1A
10-->E
10-->16
1A-->1B
1A-->1C
1A-->1E
1A-->1D
1A-->1F
1A-->1G
1A-->1H
1C-->1D
1I-->10
1I-->U
1I-->1A
1I-->M
1I-->S
1I-->E
1J-->V
1J-->10
1J-->1K
1J-->1N
1J-->1Q
1J-->1A
1J-->M
1J-->S
1J-->E
1K-->10
1K-->U
1K-->1M
1K-->S
1K-->E
1K-->16
1K-->1L
1M-->S
1M-->E
1M-->16
1N-->W
1N-->1O
1N-->1P
1N-->1A
1N-->M
1N-->S
1N-->E
1O-->V
1O-->1A
1O-->M
1O-->S
1O-->E
1P-->V
1P-->M
1P-->S
1P-->E
1Q-->V
1Q-->S
1Q-->E
1R-->8
1R-->10
1R-->1S
1R-->E
1R-->1W
1R-->1L
23-->24
24-->2Z
24-->44
24-->45
24-->48
24-->49
24-->4A
24-->4B
24-->32
24-->1A
24-->4E
24-->4J
24-->4U
24-->36
24-->29
24-->2E
24-->2J
24-->2O
24-->2S
24-->2X
2Z-->32
2Z-->2S
32-->33
32-->3C
32-->3J
32-->3K
32-->3L
32-->3M
32-->3N
32-->3O
32-->3P
32-->3Q
32-->3R
32-->3S
32-->3T
32-->3U
32-->3V
32-->3W
32-->3X
32-->3Y
32-->3Z
32-->40
32-->41
32-->42
32-->43
33-->36
36-->37
36-->38
36-->39
36-->3A
3C-->1A
3C-->3G
3C-->36
3C-->3D
3G-->3H
3G-->3I
3J-->1A
3J-->3G
3J-->36
3J-->3D
3K-->1A
3K-->36
3K-->3D
3L-->1A
3M-->1A
3M-->36
3N-->1A
3N-->36
3O-->1A
3O-->3G
3O-->36
3P-->1A
3P-->3G
3P-->36
3P-->3D
3Q-->1A
3Q-->36
3R-->1A
3R-->36
3S-->1A
3S-->36
3T-->1A
3T-->36
3U-->1A
3U-->36
3V-->1A
3V-->36
3W-->1A
3W-->36
3X-->1A
3X-->36
3Y-->1A
3Y-->36
3Z-->1A
3Z-->36
40-->1A
40-->36
40-->3D
41-->1A
41-->36
41-->3D
42-->1A
42-->36
42-->3D
43-->1A
43-->36
43-->3D
44-->32
44-->2S
45-->47
45-->32
45-->2S
47-->1A
48-->36
48-->2S
49-->32
49-->1A
49-->2S
4A-->32
4A-->1A
4A-->2S
4B-->47
4B-->32
4B-->2S
4E-->4F
4E-->4G
4F-->36
4G-->36
4J-->4K
4J-->4P
4J-->4M
4J-->4Q
4J-->4R
4K-->4M
4K-->1A
4K-->36
4K-->4L
4K-->2O
4M-->4O
4P-->4M
4P-->1A
4P-->36
4P-->4L
4P-->2O
4Q-->4M
4Q-->1A
4Q-->36
4Q-->4L
4Q-->2O
4R-->4M
4R-->1A
4R-->36
4R-->4L
4R-->2O
4U-->4V
4U-->4W
4V-->1A
4V-->36
4W-->1A
4W-->36
4X-->24
4Z-->24
4Z-->2S
4Z-->54
55-->24
55-->36
55-->2S
55-->54
56-->57
56-->58
5A-->3P
5A-->36
5A-->54
5B-->3C
5B-->3J
5B-->3O
5B-->3P
5B-->3U
5B-->3Y
5B-->3Z
5B-->43
5B-->1A
5B-->36
5B-->54
5C-->57
5C-->58
5I-->1A
5I-->54
5J-->1A
5J-->54
5K-->1A
5K-->54
5L-->1H
5L-->54
5M-->58
5S-->5T
5V-->5R
5V-->5U
5V-->5T
5V-->5W
5V-->5X
5V-->5Y
5Z-->5R
5Z-->5U
5Z-->5T
5Z-->5W
5Z-->5X
5Z-->5Y
68-->69
68-->6A
6B-->69
6B-->6A
6E-->6F
6E-->6G
6H-->6F
6H-->6G
6I-->36
6J-->36
6K-->6M
6N-->6M
6Q-->1A
6S-->1A
6U-->1A
6W-->6R
6W-->6T
6W-->6V
6W-->6X
6Y-->6R
6Y-->6T
6Y-->6V
6Y-->6X
6Z-->1A
72-->1A
75-->54
79-->2E
79-->2J
79-->7D
7E-->4M
7E-->3D
7E-->2E
7E-->2J
7E-->2O
7E-->2X
7F-->1A
7G-->1A
7H-->1A
7I-->1A
7J-->1A
7K-->1A
7L-->37
7L-->38
7L-->39
7L-->3A
7M-->37
7M-->38
7M-->39
7M-->7N
7M-->3A
7M-->7O
7N-->1A
7T-->1A
7U-->7T
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
W["GovernancePanel.tsx"]
X["ReadinessPanel.tsx"]
Y["CommandPalette.tsx"]
1I["Sidebar.tsx"]
1J["WorkspaceRoom.tsx"]
1K["GraphCanvas.tsx"]
1M["CustomNode.tsx"]
1N["MissionPanel.tsx"]
1O["MappingPanel.tsx"]
1P["SourcePanel.tsx"]
1Q["RatingPanel.tsx"]
end
subgraph T["hooks"]
U["useApi.ts"]
end
V["api-config.ts"]
subgraph Z["context"]
10["WorkspaceContext.tsx"]
end
1R["main.tsx"]
1S["index.css"]
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
subgraph 11["reactflow@11.11.4_@types+re_c2b98541cbcfabf22830798c75b6ca44"]
subgraph 12["node_modules"]
subgraph 13["reactflow"]
subgraph 14["dist"]
subgraph 15["esm"]
16["index.mjs"]
end
1L["style.css"]
end
end
end
end
subgraph 1T["react-dom@18.3.1_react@18.3.1"]
subgraph 1U["node_modules"]
subgraph 1V["react-dom"]
1W["client.js"]
end
end
end
subgraph 25["@fastify+cors@8.5.0"]
subgraph 26["node_modules"]
subgraph 27["@fastify"]
subgraph 28["cors"]
29["index.js"]
end
end
end
end
subgraph 2A["dotenv@16.6.1"]
subgraph 2B["node_modules"]
subgraph 2C["dotenv"]
subgraph 2D["lib"]
2E["main.js"]
end
end
end
end
subgraph 2F["dotenv-expand@11.0.7"]
subgraph 2G["node_modules"]
subgraph 2H["dotenv-expand"]
subgraph 2I["lib"]
2J["main.js"]
end
end
end
end
subgraph 2K["drizzle-orm@0.45.2_postgres@3.4.9"]
subgraph 2L["node_modules"]
subgraph 2M["drizzle-orm"]
subgraph 2N["postgres-js"]
2O["index.js"]
end
4L["index.js"]
subgraph 4N["pg-core"]
4O["index.js"]
end
end
end
end
subgraph 2P["fastify@4.29.1"]
subgraph 2Q["node_modules"]
subgraph 2R["fastify"]
2S["fastify.js"]
end
end
end
subgraph 2T["postgres@3.4.9"]
subgraph 2U["node_modules"]
subgraph 2V["postgres"]
subgraph 2W["src"]
2X["index.js"]
end
end
end
end
subgraph 50["vitest@1.6.1_@types+node@25.7.0"]
subgraph 51["node_modules"]
subgraph 52["vitest"]
subgraph 53["dist"]
54["index.js"]
58["config.cjs"]
end
end
end
end
subgraph 7A["drizzle-kit@0.31.10"]
subgraph 7B["node_modules"]
subgraph 7C["drizzle-kit"]
7D["index.mjs"]
end
end
end
end
end
subgraph 17["packages"]
subgraph 18["domain"]
subgraph 19["src"]
1A["index.ts"]
1B["adr.ts"]
1C["governance.ts"]
1D["node.ts"]
1E["mapping.ts"]
1F["rating.ts"]
1G["source.ts"]
1H["workspace.ts"]
end
subgraph 5D["coverage"]
5E["block-navigation.js"]
5F["prettify.js"]
5G["sorter.js"]
end
subgraph 5H["test"]
5I["domain-smoke.test.ts"]
5J["node-invariants.test.ts"]
5K["source-rating.test.ts"]
5L["workspace.test.ts"]
end
5M["vitest.config.ts"]
end
subgraph 1X["api"]
subgraph 1Y["coverage"]
1Z["block-navigation.js"]
20["prettify.js"]
21["sorter.js"]
end
subgraph 22["src"]
23["bin.ts"]
24["server.ts"]
subgraph 2Y["routes"]
2Z["adr.routes.ts"]
44["governance.routes.ts"]
45["mapping.routes.ts"]
48["mcp.routes.ts"]
49["mission.routes.ts"]
4A["rating.routes.ts"]
4B["workspace.routes.ts"]
end
subgraph 46["dto"]
47["index.ts"]
end
4X["index.ts"]
end
subgraph 4Y["test"]
4Z["adr.test.ts"]
55["api.test.ts"]
end
56["vitest.config.ts"]
end
subgraph 30["application"]
subgraph 31["src"]
32["index.ts"]
33["mapping-processor.ts"]
subgraph 3B["use-cases"]
3C["add-edge.ts"]
3J["add-node.ts"]
3K["add-source.ts"]
3L["adr-use-cases.ts"]
3M["apply-patch.ts"]
3N["assess-readiness.ts"]
3O["cast-vote.ts"]
3P["create-workspace.ts"]
3Q["get-mapping-run.ts"]
3R["get-node-ratings.ts"]
3S["get-readiness.ts"]
3T["get-trace.ts"]
3U["get-workspace-graph.ts"]
3V["list-mapping-runs.ts"]
3W["list-patches.ts"]
3X["list-sources.ts"]
3Y["list-workspaces.ts"]
3Z["patch-node.ts"]
40["propose-patch.ts"]
41["rate-node.ts"]
42["start-mapping-run.ts"]
43["submit-claim.ts"]
end
end
subgraph 59["test"]
5A["create-workspace.test.ts"]
5B["use-cases.test.ts"]
end
5C["vitest.config.ts"]
end
subgraph 34["ports"]
subgraph 35["src"]
36["index.js"]
37["domain.repository.port.js"]
38["governance.port.js"]
39["graph.repository.port.js"]
3A["mcp.port.js"]
7F["domain.repository.port.d.ts"]
7G["domain.repository.port.ts"]
7H["governance.port.d.ts"]
7I["governance.port.ts"]
7J["graph.repository.port.d.ts"]
7K["graph.repository.port.ts"]
7L["index.d.ts"]
7M["index.ts"]
7N["mapping.repository.port.ts"]
7O["outbox.repository.port.ts"]
7P["mcp.port.d.ts"]
7Q["mcp.port.ts"]
end
end
subgraph 3E["observability"]
subgraph 3F["src"]
3G["index.ts"]
3H["audit.ts"]
3I["tracer.ts"]
end
end
subgraph 4C["infrastructure-mcp"]
subgraph 4D["src"]
4E["index.ts"]
4F["mcp-app.registry.ts"]
4G["mcp-bridge.ts"]
end
subgraph 5N["dist"]
subgraph 5O["domain"]
subgraph 5P["src"]
5Q["adr.d.ts"]
5R["adr.js"]
5S["governance.d.ts"]
5T["node.js"]
5U["governance.js"]
5V["index.d.ts"]
5W["rating.js"]
5X["source.js"]
5Y["workspace.js"]
5Z["index.js"]
60["mapping.d.ts"]
61["mapping.js"]
62["mission.d.ts"]
63["mission.js"]
64["node.d.ts"]
65["rating.d.ts"]
66["source.d.ts"]
67["workspace.d.ts"]
end
end
68["index.d.ts"]
69["mcp-app.registry.js"]
6A["mcp-bridge.js"]
6B["index.js"]
subgraph 6C["infrastructure-mcp"]
subgraph 6D["src"]
6E["index.d.ts"]
6F["mcp-app.registry.js"]
6G["mcp-bridge.js"]
6H["index.js"]
6I["mcp-app.registry.d.ts"]
6J["mcp-bridge.d.ts"]
end
end
6K["mcp-app.registry.d.ts"]
6N["mcp-bridge.d.ts"]
subgraph 6O["ports"]
subgraph 6P["src"]
6Q["domain.repository.port.d.ts"]
6R["domain.repository.port.js"]
6S["governance.port.d.ts"]
6T["governance.port.js"]
6U["graph.repository.port.d.ts"]
6V["graph.repository.port.js"]
6W["index.d.ts"]
6X["mcp.port.js"]
6Y["index.js"]
6Z["mapping.repository.port.d.ts"]
70["mapping.repository.port.js"]
71["mcp.port.d.ts"]
72["outbox.repository.port.d.ts"]
73["outbox.repository.port.js"]
end
end
end
subgraph 74["test"]
75["smoke.test.ts"]
end
end
subgraph 4H["infrastructure-postgres"]
subgraph 4I["src"]
4J["index.ts"]
4K["graph.repository.ts"]
4M["schema.ts"]
4P["rating.repository.ts"]
4Q["source.repository.ts"]
4R["workspace.repository.ts"]
7E["seed.ts"]
end
79["drizzle.config.ts"]
end
subgraph 4S["infrastructure-runtime"]
subgraph 4T["src"]
4U["index.ts"]
4V["in-memory-governance.repository.ts"]
4W["in-memory-repositories.ts"]
end
end
subgraph 76["infrastructure-models"]
subgraph 77["src"]
78["index.ts"]
end
end
subgraph 7R["testing"]
subgraph 7S["src"]
7T["fixtures.ts"]
7U["index.ts"]
end
end
end
3D["crypto"]
57["path"]
subgraph 6L["@epos"]
6M["ports"]
end
4-->6
8-->G
8-->Y
8-->1I
8-->1J
8-->10
8-->E
G-->U
G-->W
G-->X
G-->M
G-->S
G-->E
U-->V
U-->E
W-->V
W-->M
W-->S
W-->E
X-->V
X-->M
X-->S
X-->E
Y-->10
Y-->M
Y-->S
Y-->E
10-->1A
10-->E
10-->16
1A-->1B
1A-->1C
1A-->1E
1A-->1D
1A-->1F
1A-->1G
1A-->1H
1C-->1D
1I-->10
1I-->U
1I-->1A
1I-->M
1I-->S
1I-->E
1J-->V
1J-->10
1J-->1K
1J-->1N
1J-->1Q
1J-->1A
1J-->M
1J-->S
1J-->E
1K-->10
1K-->U
1K-->1M
1K-->S
1K-->E
1K-->16
1K-->1L
1M-->S
1M-->E
1M-->16
1N-->W
1N-->1O
1N-->1P
1N-->1A
1N-->M
1N-->S
1N-->E
1O-->V
1O-->1A
1O-->M
1O-->S
1O-->E
1P-->V
1P-->M
1P-->S
1P-->E
1Q-->V
1Q-->S
1Q-->E
1R-->8
1R-->10
1R-->1S
1R-->E
1R-->1W
1R-->1L
23-->24
24-->2Z
24-->44
24-->45
24-->48
24-->49
24-->4A
24-->4B
24-->32
24-->1A
24-->4E
24-->4J
24-->4U
24-->36
24-->29
24-->2E
24-->2J
24-->2O
24-->2S
24-->2X
2Z-->32
2Z-->2S
32-->33
32-->3C
32-->3J
32-->3K
32-->3L
32-->3M
32-->3N
32-->3O
32-->3P
32-->3Q
32-->3R
32-->3S
32-->3T
32-->3U
32-->3V
32-->3W
32-->3X
32-->3Y
32-->3Z
32-->40
32-->41
32-->42
32-->43
33-->36
36-->37
36-->38
36-->39
36-->3A
3C-->1A
3C-->3G
3C-->36
3C-->3D
3G-->3H
3G-->3I
3J-->1A
3J-->3G
3J-->36
3J-->3D
3K-->1A
3K-->36
3K-->3D
3L-->1A
3M-->1A
3M-->36
3N-->1A
3N-->36
3O-->1A
3O-->3G
3O-->36
3P-->1A
3P-->3G
3P-->36
3P-->3D
3Q-->1A
3Q-->36
3R-->1A
3R-->36
3S-->1A
3S-->36
3T-->1A
3T-->36
3U-->1A
3U-->36
3V-->1A
3V-->36
3W-->1A
3W-->36
3X-->1A
3X-->36
3Y-->1A
3Y-->36
3Z-->1A
3Z-->36
40-->1A
40-->36
40-->3D
41-->1A
41-->36
41-->3D
42-->1A
42-->36
42-->3D
43-->1A
43-->36
43-->3D
44-->32
44-->2S
45-->47
45-->32
45-->2S
47-->1A
48-->36
48-->2S
49-->32
49-->1A
49-->2S
4A-->32
4A-->1A
4A-->2S
4B-->47
4B-->32
4B-->2S
4E-->4F
4E-->4G
4F-->36
4G-->36
4J-->4K
4J-->4P
4J-->4M
4J-->4Q
4J-->4R
4K-->4M
4K-->1A
4K-->36
4K-->4L
4K-->2O
4M-->4O
4P-->4M
4P-->1A
4P-->36
4P-->4L
4P-->2O
4Q-->4M
4Q-->1A
4Q-->36
4Q-->4L
4Q-->2O
4R-->4M
4R-->1A
4R-->36
4R-->4L
4R-->2O
4U-->4V
4U-->4W
4V-->1A
4V-->36
4W-->1A
4W-->36
4X-->24
4Z-->24
4Z-->2S
4Z-->54
55-->24
55-->36
55-->2S
55-->54
56-->57
56-->58
5A-->3P
5A-->36
5A-->54
5B-->3C
5B-->3J
5B-->3O
5B-->3P
5B-->3U
5B-->3Y
5B-->3Z
5B-->43
5B-->1A
5B-->36
5B-->54
5C-->57
5C-->58
5I-->1A
5I-->54
5J-->1A
5J-->54
5K-->1A
5K-->54
5L-->1H
5L-->54
5M-->58
5S-->5T
5V-->5R
5V-->5U
5V-->5T
5V-->5W
5V-->5X
5V-->5Y
5Z-->5R
5Z-->5U
5Z-->5T
5Z-->5W
5Z-->5X
5Z-->5Y
68-->69
68-->6A
6B-->69
6B-->6A
6E-->6F
6E-->6G
6H-->6F
6H-->6G
6I-->36
6J-->36
6K-->6M
6N-->6M
6Q-->1A
6S-->1A
6U-->1A
6W-->6R
6W-->6T
6W-->6V
6W-->6X
6Y-->6R
6Y-->6T
6Y-->6V
6Y-->6X
6Z-->1A
72-->1A
75-->54
79-->2E
79-->2J
79-->7D
7E-->4M
7E-->3D
7E-->2E
7E-->2J
7E-->2O
7E-->2X
7F-->1A
7G-->1A
7H-->1A
7I-->1A
7J-->1A
7K-->1A
7L-->37
7L-->38
7L-->39
7L-->3A
7M-->37
7M-->38
7M-->39
7M-->7N
7M-->3A
7M-->7O
7N-->1A
7T-->1A
7U-->7T
```

## Компонент: `apps`

| Файл | Строк | Размер | Описание |
|---|---|---|---|
| `demo-shell/src/api-config.ts` | 7 | 0.3 KB | Централизованная конфигурация API URL. |
| `demo-shell/src/App.tsx` | 59 | 1.5 KB | — |
| `demo-shell/src/components/ADRReviewWorkspace.tsx` | 744 | 23.0 KB | — |
| `demo-shell/src/components/CommandPalette.tsx` | 341 | 9.1 KB | — |
| `demo-shell/src/components/CustomNode.tsx` | 153 | 3.9 KB | — |
| `demo-shell/src/components/GovernancePanel.tsx` | 450 | 13.1 KB | — |
| `demo-shell/src/components/GraphCanvas.tsx` | 568 | 15.9 KB | — |
| `demo-shell/src/components/MappingPanel.tsx` | 270 | 7.8 KB | — |
| `demo-shell/src/components/MissionPanel.tsx` | 321 | 9.3 KB | — |
| `demo-shell/src/components/RatingPanel.tsx` | 234 | 6.2 KB | — |
| `demo-shell/src/components/ReadinessPanel.tsx` | 403 | 11.7 KB | — |
| `demo-shell/src/components/Sidebar.tsx` | 354 | 9.6 KB | — |
| `demo-shell/src/components/SourcePanel.tsx` | 232 | 6.9 KB | — |
| `demo-shell/src/components/WorkspaceRoom.tsx` | 633 | 20.2 KB | — |
| `demo-shell/src/context/WorkspaceContext.tsx` | 130 | 3.4 KB | — |
| `demo-shell/src/hooks/useApi.ts` | 41 | 1.0 KB | — |
| `demo-shell/src/main.tsx` | 16 | 0.4 KB | — |

### `demo-shell/src/api-config.ts`
- **Экспорт**: `API_BASE_URL`

### `demo-shell/src/components/GovernancePanel.tsx`
- **Экспорт**: `GovernancePanel`
- **Зависимости**:
  - `../api-config` → API_BASE_URL

### `demo-shell/src/components/MappingPanel.tsx`
- **Экспорт**: `MappingPanel`
- **Зависимости**:
  - `../api-config` → API_BASE_URL
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
  - `../api-config` → API_BASE_URL

### `demo-shell/src/components/ReadinessPanel.tsx`
- **Экспорт**: `ReadinessPanel`
- **Зависимости**:
  - `../api-config` → API_BASE_URL

### `demo-shell/src/components/SourcePanel.tsx`
- **Экспорт**: `SourcePanel`
- **Зависимости**:
  - `../api-config` → API_BASE_URL

### `demo-shell/src/context/WorkspaceContext.tsx`
- **Экспорт**: `WorkspaceProvider`, `useWorkspace`
- **Зависимости**:
  - `@epios/domain` → Workspace

### `demo-shell/src/hooks/useApi.ts`
- **Экспорт**: `useApi`
- **Зависимости**:
  - `../api-config` → API_BASE_URL

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
| `api/src/server.ts` | 574 | 17.1 KB | — |
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
| `infrastructure-postgres/src/seed.ts` | 140 | 3.6 KB | — |
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
| `DATABASE_URL` | packages/server.ts, packages/drizzle.config.ts, packages/seed.ts |
| `EPIOS_DATABASE_MODE` | packages/server.ts |
| `PORT` | packages/bin.ts |

## API Реестр

| Метод | Путь | Файл |
|---|---|---|
| `GET` | `/health` | `packages/api/src/server.ts` |
