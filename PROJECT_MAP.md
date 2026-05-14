# 🗺️ PROJECT MAP — epios
> Автоматически сгенерировано: `2026-05-14 09:53:41`
> Скрипт: `node dev_studio/refresh.js`

## 📊 Telemetry / Context Health
| Metric | Value | Note |
|---|---|---|
| **Total Files** | `115` | Только JS/TS/TSX исходники |
| **Total Lines** | `11221` | Суммарно по проекту |
| **Project Weight** | `~90 532 tokens` | Оценка (4 символа/токен) |
| **Context Pressure** | `70.7%` | Нагрузка на окно 128k (Full Scan) |
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
4["index-CTiC8DDP.js"]
end
end
subgraph 7["src"]
8["App.tsx"]
subgraph F["components"]
G["ADRReviewWorkspace.tsx"]
W["GovernancePanel.tsx"]
1B["ReadinessPanel.tsx"]
1C["CommandPalette.tsx"]
1K["Sidebar.tsx"]
1L["WorkspaceRoom.tsx"]
1M["GraphCanvas.tsx"]
1O["CustomNode.tsx"]
1P["MissionPanel.tsx"]
1Q["MappingPanel.tsx"]
1R["SourcePanel.tsx"]
1S["RatingPanel.tsx"]
end
subgraph T["hooks"]
U["useApi.ts"]
end
V["api-config.ts"]
subgraph X["context"]
Y["SecurityContext.tsx"]
1D["WorkspaceContext.tsx"]
end
1T["main.tsx"]
1U["index.css"]
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
subgraph 1E["reactflow@11.11.4_@types+re_c2b98541cbcfabf22830798c75b6ca44"]
subgraph 1F["node_modules"]
subgraph 1G["reactflow"]
subgraph 1H["dist"]
subgraph 1I["esm"]
1J["index.mjs"]
end
1N["style.css"]
end
end
end
end
subgraph 1V["react-dom@18.3.1_react@18.3.1"]
subgraph 1W["node_modules"]
subgraph 1X["react-dom"]
1Y["client.js"]
end
end
end
subgraph 27["@fastify+cors@8.5.0"]
subgraph 28["node_modules"]
subgraph 29["@fastify"]
subgraph 2A["cors"]
2B["index.js"]
end
end
end
end
subgraph 2C["dotenv@16.6.1"]
subgraph 2D["node_modules"]
subgraph 2E["dotenv"]
subgraph 2F["lib"]
2G["main.js"]
end
end
end
end
subgraph 2H["dotenv-expand@11.0.7"]
subgraph 2I["node_modules"]
subgraph 2J["dotenv-expand"]
subgraph 2K["lib"]
2L["main.js"]
end
end
end
end
subgraph 2M["drizzle-orm@0.45.2_postgres@3.4.9"]
subgraph 2N["node_modules"]
subgraph 2O["drizzle-orm"]
subgraph 2P["postgres-js"]
2Q["index.js"]
end
4V["index.js"]
subgraph 4X["pg-core"]
4Y["index.js"]
end
end
end
end
subgraph 2R["fastify@4.29.1"]
subgraph 2S["node_modules"]
subgraph 2T["fastify"]
2U["fastify.js"]
end
end
end
subgraph 2V["postgres@3.4.9"]
subgraph 2W["node_modules"]
subgraph 2X["postgres"]
subgraph 2Y["src"]
2Z["index.js"]
end
end
end
end
subgraph 5C["vitest@1.6.1_@types+node@25.7.0"]
subgraph 5D["node_modules"]
subgraph 5E["vitest"]
subgraph 5F["dist"]
5G["index.js"]
5K["config.cjs"]
end
end
end
end
subgraph 7Q["drizzle-kit@0.31.10"]
subgraph 7R["node_modules"]
subgraph 7S["drizzle-kit"]
7T["index.mjs"]
end
end
end
end
end
subgraph Z["packages"]
subgraph 10["domain"]
subgraph 11["src"]
12["index.ts"]
13["adr.ts"]
14["governance.ts"]
15["node.ts"]
16["mapping.ts"]
17["rating.ts"]
18["security.ts"]
19["source.ts"]
1A["workspace.ts"]
end
subgraph 5P["coverage"]
5Q["block-navigation.js"]
5R["prettify.js"]
5S["sorter.js"]
end
subgraph 5T["test"]
5U["domain-smoke.test.ts"]
5V["node-invariants.test.ts"]
5W["source-rating.test.ts"]
5X["workspace.test.ts"]
end
5Y["vitest.config.ts"]
end
subgraph 1Z["api"]
subgraph 20["coverage"]
21["block-navigation.js"]
22["prettify.js"]
23["sorter.js"]
end
subgraph 24["src"]
25["bin.ts"]
26["server.ts"]
30["mock-data.ts"]
subgraph 31["routes"]
32["adr.routes.ts"]
4D["governance.routes.ts"]
4E["mapping.routes.ts"]
4H["mcp.routes.ts"]
4I["rating.routes.ts"]
4J["security.routes.ts"]
4K["source.routes.ts"]
4L["workspace.routes.ts"]
end
subgraph 4F["dto"]
4G["index.ts"]
end
59["index.ts"]
end
subgraph 5A["test"]
5B["adr.test.ts"]
5H["api.test.ts"]
end
5I["vitest.config.ts"]
end
subgraph 33["application"]
subgraph 34["src"]
35["index.ts"]
36["mapping-processor.ts"]
subgraph 3I["use-cases"]
3J["add-edge.ts"]
3Q["add-node.ts"]
3R["add-source.ts"]
3S["adr-use-cases.ts"]
3T["apply-patch.ts"]
3U["apply-retention.ts"]
3V["assess-readiness.ts"]
3W["cast-vote.ts"]
3X["create-workspace.ts"]
3Y["get-mapping-run.ts"]
3Z["get-node-ratings.ts"]
40["get-readiness.ts"]
41["get-trace.ts"]
42["get-workspace-graph.ts"]
43["list-mapping-runs.ts"]
44["list-patches.ts"]
45["list-sources.ts"]
46["list-workspaces.ts"]
47["patch-node.ts"]
48["propose-patch.ts"]
49["rate-node.ts"]
4A["redact-node.ts"]
4B["start-mapping-run.ts"]
4C["submit-claim.ts"]
end
end
subgraph 5L["test"]
5M["create-workspace.test.ts"]
5N["use-cases.test.ts"]
end
5O["vitest.config.ts"]
end
subgraph 37["ports"]
subgraph 38["src"]
39["index.ts"]
3A["adr.repository.port.ts"]
3B["domain.repository.port.ts"]
3C["governance.port.ts"]
3D["graph.repository.port.ts"]
3E["mapping.repository.port.ts"]
3F["mcp.port.ts"]
3G["outbox.repository.port.ts"]
3H["security.port.ts"]
end
end
subgraph 3L["observability"]
subgraph 3M["src"]
3N["index.ts"]
3O["audit.ts"]
3P["tracer.ts"]
end
end
subgraph 4M["infrastructure-mcp"]
subgraph 4N["src"]
4O["index.ts"]
4P["mcp-app.registry.ts"]
4Q["mcp-bridge.ts"]
end
subgraph 5Z["dist"]
subgraph 60["domain"]
subgraph 61["src"]
62["adr.d.ts"]
63["adr.js"]
64["governance.d.ts"]
65["node.js"]
66["governance.js"]
67["index.d.ts"]
68["mapping.js"]
69["rating.js"]
6A["security.js"]
6B["source.js"]
6C["workspace.js"]
6D["index.js"]
6E["mapping.d.ts"]
6F["mission.d.ts"]
6G["mission.js"]
6H["node.d.ts"]
6I["rating.d.ts"]
6J["security.d.ts"]
6K["source.d.ts"]
6L["workspace.d.ts"]
end
end
6M["index.d.ts"]
6N["mcp-app.registry.js"]
6O["mcp-bridge.js"]
6P["index.js"]
subgraph 6Q["infrastructure-mcp"]
subgraph 6R["src"]
6S["index.d.ts"]
6T["mcp-app.registry.js"]
6U["mcp-bridge.js"]
6V["index.js"]
6W["mcp-app.registry.d.ts"]
6X["mcp-bridge.d.ts"]
end
end
6Y["mcp-app.registry.d.ts"]
71["mcp-bridge.d.ts"]
subgraph 72["ports"]
subgraph 73["src"]
74["domain.repository.port.d.ts"]
75["domain.repository.port.js"]
76["governance.port.d.ts"]
77["governance.port.js"]
78["graph.repository.port.d.ts"]
79["graph.repository.port.js"]
7A["index.d.ts"]
7B["mapping.repository.port.js"]
7C["mcp.port.js"]
7D["outbox.repository.port.js"]
7E["security.port.js"]
7F["index.js"]
7G["mapping.repository.port.d.ts"]
7H["mcp.port.d.ts"]
7I["outbox.repository.port.d.ts"]
7J["security.port.d.ts"]
end
end
end
subgraph 7K["test"]
7L["smoke.test.ts"]
end
end
subgraph 4R["infrastructure-postgres"]
subgraph 4S["src"]
4T["index.ts"]
4U["graph.repository.ts"]
4W["schema.ts"]
4Z["identity.repository.ts"]
50["rating.repository.ts"]
51["source.repository.ts"]
52["workspace.repository.ts"]
7U["seed.ts"]
end
7P["drizzle.config.ts"]
end
subgraph 53["infrastructure-runtime"]
subgraph 54["src"]
55["index.ts"]
56["in-memory-governance.repository.ts"]
57["in-memory-repositories.ts"]
58["security-mocks.ts"]
end
end
subgraph 7M["infrastructure-models"]
subgraph 7N["src"]
7O["index.ts"]
end
end
subgraph 7V["testing"]
subgraph 7W["src"]
7X["fixtures.ts"]
7Y["index.ts"]
end
end
end
3K["crypto"]
5J["path"]
subgraph 6Z["@epos"]
70["ports"]
end
4-->6
8-->G
8-->1C
8-->1K
8-->1L
8-->1D
8-->E
G-->U
G-->W
G-->1B
G-->M
G-->S
G-->E
U-->V
U-->E
W-->V
W-->Y
W-->M
W-->S
W-->E
Y-->V
Y-->12
Y-->E
12-->13
12-->14
12-->16
12-->15
12-->17
12-->18
12-->19
12-->1A
14-->15
1B-->V
1B-->M
1B-->S
1B-->E
1C-->1D
1C-->M
1C-->S
1C-->E
1D-->12
1D-->E
1D-->1J
1K-->Y
1K-->1D
1K-->U
1K-->12
1K-->M
1K-->S
1K-->E
1L-->V
1L-->Y
1L-->1D
1L-->1M
1L-->1P
1L-->1S
1L-->12
1L-->M
1L-->S
1L-->E
1M-->1D
1M-->U
1M-->1O
1M-->S
1M-->E
1M-->1J
1M-->1N
1O-->S
1O-->E
1O-->1J
1P-->W
1P-->1Q
1P-->1R
1P-->12
1P-->M
1P-->S
1P-->E
1Q-->V
1Q-->12
1Q-->M
1Q-->S
1Q-->E
1R-->V
1R-->M
1R-->S
1R-->E
1S-->V
1S-->S
1S-->E
1T-->8
1T-->Y
1T-->1D
1T-->1U
1T-->E
1T-->1Y
1T-->1N
25-->26
26-->30
26-->32
26-->4D
26-->4E
26-->4H
26-->4I
26-->4J
26-->4K
26-->4L
26-->35
26-->4O
26-->4T
26-->55
26-->39
26-->2B
26-->2G
26-->2L
26-->2Q
26-->2U
26-->2Z
30-->12
32-->35
32-->2U
35-->36
35-->3J
35-->3Q
35-->3R
35-->3S
35-->3T
35-->3U
35-->3V
35-->3W
35-->3X
35-->3Y
35-->3Z
35-->40
35-->41
35-->42
35-->43
35-->44
35-->45
35-->46
35-->47
35-->48
35-->49
35-->4A
35-->4B
35-->4C
36-->39
39-->3A
39-->3B
39-->3C
39-->3D
39-->3E
39-->3F
39-->3G
39-->3H
3A-->12
3B-->12
3C-->12
3D-->12
3E-->12
3H-->12
3J-->12
3J-->3N
3J-->39
3J-->3K
3N-->3O
3N-->3P
3Q-->12
3Q-->3N
3Q-->39
3Q-->3K
3R-->12
3R-->39
3R-->3K
3S-->12
3S-->39
3T-->12
3T-->39
3T-->3K
3U-->12
3U-->39
3V-->12
3V-->39
3V-->3K
3W-->3T
3W-->12
3W-->3N
3W-->39
3W-->3K
3X-->12
3X-->3N
3X-->39
3X-->3K
3Y-->12
3Y-->39
3Z-->12
3Z-->39
40-->12
40-->39
41-->12
41-->39
42-->12
42-->39
43-->12
43-->39
44-->12
44-->39
45-->12
45-->39
46-->12
46-->39
47-->12
47-->39
48-->12
48-->39
48-->3K
49-->12
49-->39
49-->3K
4A-->12
4A-->39
4B-->12
4B-->39
4B-->3K
4C-->12
4C-->39
4C-->3K
4D-->35
4D-->39
4D-->2U
4E-->4G
4E-->35
4E-->2U
4G-->12
4H-->39
4H-->2U
4I-->35
4I-->12
4I-->2U
4J-->35
4J-->12
4J-->39
4J-->2U
4K-->35
4K-->12
4K-->2U
4L-->4G
4L-->35
4L-->2U
4O-->4P
4O-->4Q
4P-->39
4Q-->39
4T-->4U
4T-->4Z
4T-->50
4T-->4W
4T-->51
4T-->52
4U-->4W
4U-->12
4U-->39
4U-->4V
4U-->2Q
4W-->4Y
4Z-->4W
4Z-->12
4Z-->39
4Z-->4V
4Z-->2Q
50-->4W
50-->12
50-->39
50-->4V
50-->2Q
51-->4W
51-->12
51-->39
51-->4V
51-->2Q
52-->4W
52-->12
52-->39
52-->4V
52-->2Q
55-->56
55-->57
55-->58
56-->12
56-->39
57-->12
57-->39
58-->12
58-->39
58-->3K
59-->26
5B-->26
5B-->2U
5B-->5G
5H-->26
5H-->39
5H-->2U
5H-->5G
5I-->5J
5I-->5K
5M-->3X
5M-->39
5M-->5G
5N-->3J
5N-->3Q
5N-->3W
5N-->3X
5N-->42
5N-->46
5N-->47
5N-->4C
5N-->12
5N-->39
5N-->5G
5O-->5J
5O-->5K
5U-->12
5U-->5G
5V-->12
5V-->5G
5W-->12
5W-->5G
5X-->1A
5X-->5G
5Y-->5K
64-->65
67-->63
67-->66
67-->68
67-->65
67-->69
67-->6A
67-->6B
67-->6C
6D-->63
6D-->66
6D-->68
6D-->65
6D-->69
6D-->6A
6D-->6B
6D-->6C
6M-->6N
6M-->6O
6P-->6N
6P-->6O
6S-->6T
6S-->6U
6V-->6T
6V-->6U
6W-->39
6X-->39
6Y-->70
71-->70
74-->12
76-->12
78-->12
7A-->75
7A-->77
7A-->79
7A-->7B
7A-->7C
7A-->7D
7A-->7E
7F-->75
7F-->77
7F-->79
7F-->7B
7F-->7C
7F-->7D
7F-->7E
7G-->12
7J-->12
7L-->5G
7P-->2G
7P-->2L
7P-->7T
7U-->4W
7U-->2G
7U-->2L
7U-->2Q
7U-->2Z
7X-->12
7Y-->7X
```

## Детальная карта компонентов
> Полный граф зависимостей всех файлов проекта

```mermaid
flowchart LR

subgraph 0["apps"]
subgraph 1["demo-shell"]
subgraph 2["dist"]
subgraph 3["assets"]
4["index-CTiC8DDP.js"]
end
end
subgraph 7["src"]
8["App.tsx"]
subgraph F["components"]
G["ADRReviewWorkspace.tsx"]
W["GovernancePanel.tsx"]
1B["ReadinessPanel.tsx"]
1C["CommandPalette.tsx"]
1K["Sidebar.tsx"]
1L["WorkspaceRoom.tsx"]
1M["GraphCanvas.tsx"]
1O["CustomNode.tsx"]
1P["MissionPanel.tsx"]
1Q["MappingPanel.tsx"]
1R["SourcePanel.tsx"]
1S["RatingPanel.tsx"]
end
subgraph T["hooks"]
U["useApi.ts"]
end
V["api-config.ts"]
subgraph X["context"]
Y["SecurityContext.tsx"]
1D["WorkspaceContext.tsx"]
end
1T["main.tsx"]
1U["index.css"]
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
subgraph 1E["reactflow@11.11.4_@types+re_c2b98541cbcfabf22830798c75b6ca44"]
subgraph 1F["node_modules"]
subgraph 1G["reactflow"]
subgraph 1H["dist"]
subgraph 1I["esm"]
1J["index.mjs"]
end
1N["style.css"]
end
end
end
end
subgraph 1V["react-dom@18.3.1_react@18.3.1"]
subgraph 1W["node_modules"]
subgraph 1X["react-dom"]
1Y["client.js"]
end
end
end
subgraph 27["@fastify+cors@8.5.0"]
subgraph 28["node_modules"]
subgraph 29["@fastify"]
subgraph 2A["cors"]
2B["index.js"]
end
end
end
end
subgraph 2C["dotenv@16.6.1"]
subgraph 2D["node_modules"]
subgraph 2E["dotenv"]
subgraph 2F["lib"]
2G["main.js"]
end
end
end
end
subgraph 2H["dotenv-expand@11.0.7"]
subgraph 2I["node_modules"]
subgraph 2J["dotenv-expand"]
subgraph 2K["lib"]
2L["main.js"]
end
end
end
end
subgraph 2M["drizzle-orm@0.45.2_postgres@3.4.9"]
subgraph 2N["node_modules"]
subgraph 2O["drizzle-orm"]
subgraph 2P["postgres-js"]
2Q["index.js"]
end
4V["index.js"]
subgraph 4X["pg-core"]
4Y["index.js"]
end
end
end
end
subgraph 2R["fastify@4.29.1"]
subgraph 2S["node_modules"]
subgraph 2T["fastify"]
2U["fastify.js"]
end
end
end
subgraph 2V["postgres@3.4.9"]
subgraph 2W["node_modules"]
subgraph 2X["postgres"]
subgraph 2Y["src"]
2Z["index.js"]
end
end
end
end
subgraph 5C["vitest@1.6.1_@types+node@25.7.0"]
subgraph 5D["node_modules"]
subgraph 5E["vitest"]
subgraph 5F["dist"]
5G["index.js"]
5K["config.cjs"]
end
end
end
end
subgraph 7Q["drizzle-kit@0.31.10"]
subgraph 7R["node_modules"]
subgraph 7S["drizzle-kit"]
7T["index.mjs"]
end
end
end
end
end
subgraph Z["packages"]
subgraph 10["domain"]
subgraph 11["src"]
12["index.ts"]
13["adr.ts"]
14["governance.ts"]
15["node.ts"]
16["mapping.ts"]
17["rating.ts"]
18["security.ts"]
19["source.ts"]
1A["workspace.ts"]
end
subgraph 5P["coverage"]
5Q["block-navigation.js"]
5R["prettify.js"]
5S["sorter.js"]
end
subgraph 5T["test"]
5U["domain-smoke.test.ts"]
5V["node-invariants.test.ts"]
5W["source-rating.test.ts"]
5X["workspace.test.ts"]
end
5Y["vitest.config.ts"]
end
subgraph 1Z["api"]
subgraph 20["coverage"]
21["block-navigation.js"]
22["prettify.js"]
23["sorter.js"]
end
subgraph 24["src"]
25["bin.ts"]
26["server.ts"]
30["mock-data.ts"]
subgraph 31["routes"]
32["adr.routes.ts"]
4D["governance.routes.ts"]
4E["mapping.routes.ts"]
4H["mcp.routes.ts"]
4I["rating.routes.ts"]
4J["security.routes.ts"]
4K["source.routes.ts"]
4L["workspace.routes.ts"]
end
subgraph 4F["dto"]
4G["index.ts"]
end
59["index.ts"]
end
subgraph 5A["test"]
5B["adr.test.ts"]
5H["api.test.ts"]
end
5I["vitest.config.ts"]
end
subgraph 33["application"]
subgraph 34["src"]
35["index.ts"]
36["mapping-processor.ts"]
subgraph 3I["use-cases"]
3J["add-edge.ts"]
3Q["add-node.ts"]
3R["add-source.ts"]
3S["adr-use-cases.ts"]
3T["apply-patch.ts"]
3U["apply-retention.ts"]
3V["assess-readiness.ts"]
3W["cast-vote.ts"]
3X["create-workspace.ts"]
3Y["get-mapping-run.ts"]
3Z["get-node-ratings.ts"]
40["get-readiness.ts"]
41["get-trace.ts"]
42["get-workspace-graph.ts"]
43["list-mapping-runs.ts"]
44["list-patches.ts"]
45["list-sources.ts"]
46["list-workspaces.ts"]
47["patch-node.ts"]
48["propose-patch.ts"]
49["rate-node.ts"]
4A["redact-node.ts"]
4B["start-mapping-run.ts"]
4C["submit-claim.ts"]
end
end
subgraph 5L["test"]
5M["create-workspace.test.ts"]
5N["use-cases.test.ts"]
end
5O["vitest.config.ts"]
end
subgraph 37["ports"]
subgraph 38["src"]
39["index.ts"]
3A["adr.repository.port.ts"]
3B["domain.repository.port.ts"]
3C["governance.port.ts"]
3D["graph.repository.port.ts"]
3E["mapping.repository.port.ts"]
3F["mcp.port.ts"]
3G["outbox.repository.port.ts"]
3H["security.port.ts"]
end
end
subgraph 3L["observability"]
subgraph 3M["src"]
3N["index.ts"]
3O["audit.ts"]
3P["tracer.ts"]
end
end
subgraph 4M["infrastructure-mcp"]
subgraph 4N["src"]
4O["index.ts"]
4P["mcp-app.registry.ts"]
4Q["mcp-bridge.ts"]
end
subgraph 5Z["dist"]
subgraph 60["domain"]
subgraph 61["src"]
62["adr.d.ts"]
63["adr.js"]
64["governance.d.ts"]
65["node.js"]
66["governance.js"]
67["index.d.ts"]
68["mapping.js"]
69["rating.js"]
6A["security.js"]
6B["source.js"]
6C["workspace.js"]
6D["index.js"]
6E["mapping.d.ts"]
6F["mission.d.ts"]
6G["mission.js"]
6H["node.d.ts"]
6I["rating.d.ts"]
6J["security.d.ts"]
6K["source.d.ts"]
6L["workspace.d.ts"]
end
end
6M["index.d.ts"]
6N["mcp-app.registry.js"]
6O["mcp-bridge.js"]
6P["index.js"]
subgraph 6Q["infrastructure-mcp"]
subgraph 6R["src"]
6S["index.d.ts"]
6T["mcp-app.registry.js"]
6U["mcp-bridge.js"]
6V["index.js"]
6W["mcp-app.registry.d.ts"]
6X["mcp-bridge.d.ts"]
end
end
6Y["mcp-app.registry.d.ts"]
71["mcp-bridge.d.ts"]
subgraph 72["ports"]
subgraph 73["src"]
74["domain.repository.port.d.ts"]
75["domain.repository.port.js"]
76["governance.port.d.ts"]
77["governance.port.js"]
78["graph.repository.port.d.ts"]
79["graph.repository.port.js"]
7A["index.d.ts"]
7B["mapping.repository.port.js"]
7C["mcp.port.js"]
7D["outbox.repository.port.js"]
7E["security.port.js"]
7F["index.js"]
7G["mapping.repository.port.d.ts"]
7H["mcp.port.d.ts"]
7I["outbox.repository.port.d.ts"]
7J["security.port.d.ts"]
end
end
end
subgraph 7K["test"]
7L["smoke.test.ts"]
end
end
subgraph 4R["infrastructure-postgres"]
subgraph 4S["src"]
4T["index.ts"]
4U["graph.repository.ts"]
4W["schema.ts"]
4Z["identity.repository.ts"]
50["rating.repository.ts"]
51["source.repository.ts"]
52["workspace.repository.ts"]
7U["seed.ts"]
end
7P["drizzle.config.ts"]
end
subgraph 53["infrastructure-runtime"]
subgraph 54["src"]
55["index.ts"]
56["in-memory-governance.repository.ts"]
57["in-memory-repositories.ts"]
58["security-mocks.ts"]
end
end
subgraph 7M["infrastructure-models"]
subgraph 7N["src"]
7O["index.ts"]
end
end
subgraph 7V["testing"]
subgraph 7W["src"]
7X["fixtures.ts"]
7Y["index.ts"]
end
end
end
3K["crypto"]
5J["path"]
subgraph 6Z["@epos"]
70["ports"]
end
4-->6
8-->G
8-->1C
8-->1K
8-->1L
8-->1D
8-->E
G-->U
G-->W
G-->1B
G-->M
G-->S
G-->E
U-->V
U-->E
W-->V
W-->Y
W-->M
W-->S
W-->E
Y-->V
Y-->12
Y-->E
12-->13
12-->14
12-->16
12-->15
12-->17
12-->18
12-->19
12-->1A
14-->15
1B-->V
1B-->M
1B-->S
1B-->E
1C-->1D
1C-->M
1C-->S
1C-->E
1D-->12
1D-->E
1D-->1J
1K-->Y
1K-->1D
1K-->U
1K-->12
1K-->M
1K-->S
1K-->E
1L-->V
1L-->Y
1L-->1D
1L-->1M
1L-->1P
1L-->1S
1L-->12
1L-->M
1L-->S
1L-->E
1M-->1D
1M-->U
1M-->1O
1M-->S
1M-->E
1M-->1J
1M-->1N
1O-->S
1O-->E
1O-->1J
1P-->W
1P-->1Q
1P-->1R
1P-->12
1P-->M
1P-->S
1P-->E
1Q-->V
1Q-->12
1Q-->M
1Q-->S
1Q-->E
1R-->V
1R-->M
1R-->S
1R-->E
1S-->V
1S-->S
1S-->E
1T-->8
1T-->Y
1T-->1D
1T-->1U
1T-->E
1T-->1Y
1T-->1N
25-->26
26-->30
26-->32
26-->4D
26-->4E
26-->4H
26-->4I
26-->4J
26-->4K
26-->4L
26-->35
26-->4O
26-->4T
26-->55
26-->39
26-->2B
26-->2G
26-->2L
26-->2Q
26-->2U
26-->2Z
30-->12
32-->35
32-->2U
35-->36
35-->3J
35-->3Q
35-->3R
35-->3S
35-->3T
35-->3U
35-->3V
35-->3W
35-->3X
35-->3Y
35-->3Z
35-->40
35-->41
35-->42
35-->43
35-->44
35-->45
35-->46
35-->47
35-->48
35-->49
35-->4A
35-->4B
35-->4C
36-->39
39-->3A
39-->3B
39-->3C
39-->3D
39-->3E
39-->3F
39-->3G
39-->3H
3A-->12
3B-->12
3C-->12
3D-->12
3E-->12
3H-->12
3J-->12
3J-->3N
3J-->39
3J-->3K
3N-->3O
3N-->3P
3Q-->12
3Q-->3N
3Q-->39
3Q-->3K
3R-->12
3R-->39
3R-->3K
3S-->12
3S-->39
3T-->12
3T-->39
3T-->3K
3U-->12
3U-->39
3V-->12
3V-->39
3V-->3K
3W-->3T
3W-->12
3W-->3N
3W-->39
3W-->3K
3X-->12
3X-->3N
3X-->39
3X-->3K
3Y-->12
3Y-->39
3Z-->12
3Z-->39
40-->12
40-->39
41-->12
41-->39
42-->12
42-->39
43-->12
43-->39
44-->12
44-->39
45-->12
45-->39
46-->12
46-->39
47-->12
47-->39
48-->12
48-->39
48-->3K
49-->12
49-->39
49-->3K
4A-->12
4A-->39
4B-->12
4B-->39
4B-->3K
4C-->12
4C-->39
4C-->3K
4D-->35
4D-->39
4D-->2U
4E-->4G
4E-->35
4E-->2U
4G-->12
4H-->39
4H-->2U
4I-->35
4I-->12
4I-->2U
4J-->35
4J-->12
4J-->39
4J-->2U
4K-->35
4K-->12
4K-->2U
4L-->4G
4L-->35
4L-->2U
4O-->4P
4O-->4Q
4P-->39
4Q-->39
4T-->4U
4T-->4Z
4T-->50
4T-->4W
4T-->51
4T-->52
4U-->4W
4U-->12
4U-->39
4U-->4V
4U-->2Q
4W-->4Y
4Z-->4W
4Z-->12
4Z-->39
4Z-->4V
4Z-->2Q
50-->4W
50-->12
50-->39
50-->4V
50-->2Q
51-->4W
51-->12
51-->39
51-->4V
51-->2Q
52-->4W
52-->12
52-->39
52-->4V
52-->2Q
55-->56
55-->57
55-->58
56-->12
56-->39
57-->12
57-->39
58-->12
58-->39
58-->3K
59-->26
5B-->26
5B-->2U
5B-->5G
5H-->26
5H-->39
5H-->2U
5H-->5G
5I-->5J
5I-->5K
5M-->3X
5M-->39
5M-->5G
5N-->3J
5N-->3Q
5N-->3W
5N-->3X
5N-->42
5N-->46
5N-->47
5N-->4C
5N-->12
5N-->39
5N-->5G
5O-->5J
5O-->5K
5U-->12
5U-->5G
5V-->12
5V-->5G
5W-->12
5W-->5G
5X-->1A
5X-->5G
5Y-->5K
64-->65
67-->63
67-->66
67-->68
67-->65
67-->69
67-->6A
67-->6B
67-->6C
6D-->63
6D-->66
6D-->68
6D-->65
6D-->69
6D-->6A
6D-->6B
6D-->6C
6M-->6N
6M-->6O
6P-->6N
6P-->6O
6S-->6T
6S-->6U
6V-->6T
6V-->6U
6W-->39
6X-->39
6Y-->70
71-->70
74-->12
76-->12
78-->12
7A-->75
7A-->77
7A-->79
7A-->7B
7A-->7C
7A-->7D
7A-->7E
7F-->75
7F-->77
7F-->79
7F-->7B
7F-->7C
7F-->7D
7F-->7E
7G-->12
7J-->12
7L-->5G
7P-->2G
7P-->2L
7P-->7T
7U-->4W
7U-->2G
7U-->2L
7U-->2Q
7U-->2Z
7X-->12
7Y-->7X
```

## 🎨 Архитектура UI Интерфейсов (demo-shell)
> Обобщенная концептуальная структура компонентов пользовательского интерфейса

```mermaid
flowchart TD
    subgraph "Global Contexts"
        Security["SecurityContext (RBAC)"]
        WSContext["WorkspaceContext"]
    end

    subgraph "Core Layout"
        App["App.tsx"] --> Sidebar["Sidebar / Command Palette"]
        App --> Workspace["ADRReviewWorkspace"]
    end

    subgraph "Workspace Panels"
        Workspace --> GraphCanvas["GraphCanvas (React Flow)"]
        Workspace --> MissionPanel["MissionPanel"]
        Workspace --> SourcePanel["SourcePanel"]
        Workspace --> RatingPanel["RatingPanel"]
        Workspace --> MappingPanel["MappingPanel (Async Status)"]
        Workspace --> GovernancePanel["GovernancePanel (Patches)"]
        Workspace --> ReadinessPanel["ReadinessPanel"]
    end
    
    App -. "Provides" .-> Security
    App -. "Provides" .-> WSContext
    Workspace -. "Reads" .-> WSContext
    GovernancePanel -. "Role Check" .-> Security
```

> Подробная документация и Roadmap по развитию интерфейсов находится в [docs/05_ui_roadmap/](docs/05_ui_roadmap/00_ROADMAP_INDEX.md)

## Компонент: `apps`

| Файл | Строк | Размер | Описание |
|---|---|---|---|
| `demo-shell/src/api-config.ts` | 7 | 0.3 KB | Централизованная конфигурация API URL. |
| `demo-shell/src/App.tsx` | 59 | 1.5 KB | — |
| `demo-shell/src/components/ADRReviewWorkspace.tsx` | 738 | 22.9 KB | — |
| `demo-shell/src/components/CommandPalette.tsx` | 341 | 9.1 KB | — |
| `demo-shell/src/components/CustomNode.tsx` | 169 | 4.4 KB | — |
| `demo-shell/src/components/GovernancePanel.tsx` | 498 | 14.7 KB | — |
| `demo-shell/src/components/GraphCanvas.tsx` | 579 | 16.2 KB | — |
| `demo-shell/src/components/MappingPanel.tsx` | 270 | 7.8 KB | — |
| `demo-shell/src/components/MissionPanel.tsx` | 303 | 8.7 KB | — |
| `demo-shell/src/components/RatingPanel.tsx` | 234 | 6.2 KB | — |
| `demo-shell/src/components/ReadinessPanel.tsx` | 403 | 11.7 KB | — |
| `demo-shell/src/components/Sidebar.tsx` | 473 | 13.4 KB | — |
| `demo-shell/src/components/SourcePanel.tsx` | 232 | 6.9 KB | — |
| `demo-shell/src/components/WorkspaceRoom.tsx` | 665 | 21.5 KB | — |
| `demo-shell/src/context/SecurityContext.tsx` | 68 | 1.6 KB | — |
| `demo-shell/src/context/WorkspaceContext.tsx` | 130 | 3.4 KB | — |
| `demo-shell/src/hooks/useApi.ts` | 43 | 1.1 KB | — |
| `demo-shell/src/main.tsx` | 19 | 0.5 KB | — |

### `demo-shell/src/api-config.ts`
- **Экспорт**: `API_BASE_URL`

### `demo-shell/src/components/GovernancePanel.tsx`
- **Экспорт**: `GovernancePanel`
- **Зависимости**:
  - `../api-config` → API_BASE_URL
  - `../context/SecurityContext` → useSecurity

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

### `demo-shell/src/context/SecurityContext.tsx`
- **Экспорт**: `SecurityProvider`, `useSecurity`
- **Зависимости**:
  - `@epios/domain` → User
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
| `api/src/mock-data.ts` | 551 | 17.0 KB | Mock data factory for demo/development mode. |
| `api/src/routes/adr.routes.ts` | 26 | 0.6 KB | — |
| `api/src/routes/governance.routes.ts` | 126 | 3.7 KB | — |
| `api/src/routes/mapping.routes.ts` | 95 | 2.8 KB | — |
| `api/src/routes/mcp.routes.ts` | 38 | 1.0 KB | — |
| `api/src/routes/rating.routes.ts` | 30 | 0.9 KB | — |
| `api/src/routes/security.routes.ts` | 66 | 2.0 KB | — |
| `api/src/routes/source.routes.ts` | 34 | 0.9 KB | — |
| `api/src/routes/workspace.routes.ts` | 29 | 0.7 KB | — |
| `api/src/server.ts` | 261 | 8.7 KB | — |
| `api/test/adr.test.ts` | 48 | 1.2 KB | — |
| `api/test/api.test.ts` | 222 | 5.9 KB | — |
| `api/vitest.config.ts` | 42 | 1.1 KB | — |
| `application/src/index.ts` | 26 | 1.1 KB | — |
| `application/src/mapping-processor.ts` | 93 | 2.4 KB | — |
| `application/src/use-cases/add-edge.ts` | 47 | 1.3 KB | — |
| `application/src/use-cases/add-node.ts` | 55 | 1.4 KB | — |
| `application/src/use-cases/add-source.ts` | 29 | 0.7 KB | — |
| `application/src/use-cases/adr-use-cases.ts` | 19 | 0.5 KB | — |
| `application/src/use-cases/apply-patch.ts` | 75 | 2.2 KB | — |
| `application/src/use-cases/apply-retention.ts` | 60 | 1.7 KB | — |
| `application/src/use-cases/assess-readiness.ts` | 90 | 2.8 KB | — |
| `application/src/use-cases/cast-vote.ts` | 131 | 4.0 KB | — |
| `application/src/use-cases/create-workspace.ts` | 49 | 1.2 KB | — |
| `application/src/use-cases/get-mapping-run.ts` | 11 | 0.3 KB | — |
| `application/src/use-cases/get-node-ratings.ts` | 11 | 0.3 KB | — |
| `application/src/use-cases/get-readiness.ts` | 11 | 0.4 KB | — |
| `application/src/use-cases/get-trace.ts` | 11 | 0.3 KB | — |
| `application/src/use-cases/get-workspace-graph.ts` | 21 | 0.6 KB | — |
| `application/src/use-cases/list-mapping-runs.ts` | 11 | 0.3 KB | — |
| `application/src/use-cases/list-patches.ts` | 15 | 0.4 KB | — |
| `application/src/use-cases/list-sources.ts` | 11 | 0.3 KB | — |
| `application/src/use-cases/list-workspaces.ts` | 11 | 0.3 KB | — |
| `application/src/use-cases/patch-node.ts` | 37 | 1.1 KB | — |
| `application/src/use-cases/propose-patch.ts` | 55 | 1.5 KB | — |
| `application/src/use-cases/rate-node.ts` | 29 | 0.7 KB | — |
| `application/src/use-cases/redact-node.ts` | 67 | 1.7 KB | — |
| `application/src/use-cases/start-mapping-run.ts` | 43 | 1.0 KB | — |
| `application/src/use-cases/submit-claim.ts` | 49 | 1.2 KB | — |
| `application/test/create-workspace.test.ts` | 63 | 1.6 KB | — |
| `application/test/use-cases.test.ts` | 338 | 10.4 KB | — |
| `application/vitest.config.ts` | 28 | 0.6 KB | — |
| `domain/coverage/block-navigation.js` | 88 | 2.6 KB | — |
| `domain/coverage/prettify.js` | 3 | 17.2 KB | — |
| `domain/coverage/sorter.js` | 211 | 6.6 KB | — |
| `domain/src/adr.ts` | 42 | 0.7 KB | — |
| `domain/src/governance.ts` | 81 | 1.7 KB | A Claim in EPIOS is a node that undergoes a formal governance process. |
| `domain/src/index.ts` | 9 | 0.2 KB | — |
| `domain/src/mapping.ts` | 15 | 0.3 KB | — |
| `domain/src/node.ts` | 52 | 0.9 KB | — |
| `domain/src/rating.ts` | 11 | 0.2 KB | — |
| `domain/src/security.ts` | 40 | 0.8 KB | — |
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
| `infrastructure-postgres/src/graph.repository.ts` | 175 | 5.0 KB | — |
| `infrastructure-postgres/src/identity.repository.ts` | 68 | 1.7 KB | — |
| `infrastructure-postgres/src/index.ts` | 11 | 0.3 KB | — |
| `infrastructure-postgres/src/rating.repository.ts` | 50 | 1.4 KB | — |
| `infrastructure-postgres/src/schema.ts` | 106 | 3.3 KB | — |
| `infrastructure-postgres/src/seed.ts` | 378 | 13.2 KB | — |
| `infrastructure-postgres/src/source.repository.ts` | 60 | 1.6 KB | — |
| `infrastructure-postgres/src/workspace.repository.ts` | 96 | 3.0 KB | — |
| `infrastructure-runtime/src/in-memory-governance.repository.ts` | 97 | 2.9 KB | — |
| `infrastructure-runtime/src/in-memory-repositories.ts` | 237 | 6.2 KB | — |
| `infrastructure-runtime/src/index.ts` | 7 | 0.3 KB | — |
| `infrastructure-runtime/src/security-mocks.ts` | 82 | 2.2 KB | — |
| `observability/src/audit.ts` | 25 | 0.6 KB | — |
| `observability/src/index.ts` | 3 | 0.1 KB | — |
| `observability/src/tracer.ts` | 24 | 0.5 KB | — |
| `ports/src/adr.repository.port.ts` | 8 | 0.2 KB | — |
| `ports/src/domain.repository.port.ts` | 19 | 0.5 KB | — |
| `ports/src/governance.port.ts` | 32 | 1.2 KB | — |
| `ports/src/graph.repository.port.ts` | 14 | 0.6 KB | — |
| `ports/src/index.ts` | 10 | 0.3 KB | — |
| `ports/src/mapping.repository.port.ts` | 8 | 0.2 KB | — |
| `ports/src/mcp.port.ts` | 35 | 1.0 KB | Port for MCP Application Registry. |
| `ports/src/outbox.repository.port.ts` | 14 | 0.3 KB | — |
| `ports/src/security.port.ts` | 15 | 0.6 KB | — |
| `testing/src/fixtures.ts` | 23 | 0.5 KB | — |
| `testing/src/index.ts` | 3 | 0.1 KB | — |

### `api/src/dto/index.ts`
- **Экспорт**: `CreateWorkspaceDto`, `AddNodeDto`, `AddEdgeDto`, `PatchNodeDto`, `ADRDto`, `ADRFlowDto`, `AddSourceDto`, `RateNodeDto`

### `api/src/mock-data.ts`
- **Экспорт**: `MockData`, `createMockData`

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
  - `./routes/source.routes.js` → sourceRoutes
  - `./routes/rating.routes.js` → ratingRoutes
  - `./routes/security.routes.js` → securityRoutes
  - `./mock-data.js` → createMockData

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
  - `@epios/ports` → ADRRepositoryPort

### `application/src/use-cases/apply-patch.ts`
- **Экспорт**: `ApplyPatchRequest`, `ApplyPatchUseCase`
- **Зависимости**:
  - `@epios/ports` → GovernanceRepositoryPort, GraphRepositoryPort
  - `@epios/domain` → ArtifactVersion

### `application/src/use-cases/apply-retention.ts`
- **Экспорт**: `ApplyRetentionUseCase`
- **Зависимости**:
  - `@epios/domain` → RetentionPolicy

### `application/src/use-cases/assess-readiness.ts`
- **Экспорт**: `AssessReadinessRequest`, `AssessReadinessUseCase`
- **Зависимости**:
  - `@epios/ports` → GovernanceRepositoryPort, GraphRepositoryPort
  - `@epios/domain` → ReadinessAssessment, ReadinessStatus

### `application/src/use-cases/cast-vote.ts`
- **Экспорт**: `CastVoteRequest`, `CastVoteUseCase`
- **Зависимости**:
  - `@epios/ports` → GovernanceRepositoryPort, GraphRepositoryPort
  - `@epios/domain` → Vote
  - `@epios/observability` → auditLogger
  - `./apply-patch.js` → ApplyPatchUseCase

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

### `application/src/use-cases/redact-node.ts`
- **Экспорт**: `RedactNodeUseCase`
- **Зависимости**:
  - `@epios/domain` → EpistemicNode, RedactionRule
  - `@epios/ports` → GraphRepositoryPort, SecurityPort

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

### `domain/src/security.ts`
- **Экспорт**: `UserRole`, `User`, `Permission`, `RetentionPolicy`, `RedactionRule`, `AuditRecord`

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

### `infrastructure-postgres/src/identity.repository.ts`
- **Экспорт**: `PostgresIdentityRepository`
- **Зависимости**:
  - `@epios/domain` → User, UserRole
  - `@epios/ports` → IdentityRepositoryPort
  - `./schema.js` → identities

### `infrastructure-postgres/src/index.ts`
- **Экспорт**: `DB_ENGINE`, `DB_VERSION`

### `infrastructure-postgres/src/rating.repository.ts`
- **Экспорт**: `PostgresRatingRepository`
- **Зависимости**:
  - `@epios/domain` → Rating, EpistemicRatingValue
  - `@epios/ports` → RatingRepositoryPort
  - `./schema.js` → ratings

### `infrastructure-postgres/src/schema.ts`
- **Экспорт**: `workspaces`, `epistemicNodes`, `epistemicEdges`, `sources`, `ratings`, `identities`

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

### `infrastructure-runtime/src/security-mocks.ts`
- **Экспорт**: `InMemoryIdentityRepository`, `MockSecurityService`
- **Зависимости**:
  - `@epios/domain` → User, UserRole, AuditRecord
  - `@epios/ports` → SecurityPort, IdentityRepositoryPort

### `observability/src/audit.ts`
- **Экспорт**: `AuditEntry`, `AuditLogger`, `auditLogger`

### `observability/src/tracer.ts`
- **Экспорт**: `TraceEvent`, `Tracer`, `ConsoleTracer`, `tracer`

### `ports/src/adr.repository.port.ts`
- **Экспорт**: `ADRRepositoryPort`
- **Зависимости**:
  - `@epios/domain` → ADR

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

### `ports/src/security.port.ts`
- **Экспорт**: `SecurityPort`, `IdentityRepositoryPort`
- **Зависимости**:
  - `@epios/domain` → User, UserRole, AuditRecord

### `testing/src/fixtures.ts`
- **Экспорт**: `createTestWorkspace`
- **Зависимости**:
  - `@epios/domain` → Workspace

## Переменные окружения

| Переменная | Используется в |
|---|---|
| `DATABASE_URL` | packages/server.ts, packages/drizzle.config.ts, packages/seed.ts |
| `EPIOS_DATABASE_MODE` | packages/server.ts |
| `FRONTEND_URL` | packages/server.ts |
| `NODE_ENV` | packages/server.ts |
| `PORT` | packages/bin.ts |

## API Реестр

| Метод | Путь | Файл |
|---|---|---|
| `GET` | `/health` | `packages/api/src/server.ts` |
