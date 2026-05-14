# 🗺️ PROJECT MAP — epios
> Автоматически сгенерировано: `2026-05-14 01:14:30`
> Скрипт: `node dev_studio/refresh.js`

## 📊 Telemetry / Context Health
| Metric | Value | Note |
|---|---|---|
| **Total Files** | `115` | Только JS/TS/TSX исходники |
| **Total Lines** | `11748` | Суммарно по проекту |
| **Project Weight** | `~94 745 tokens` | Оценка (4 символа/токен) |
| **Context Pressure** | `74.0%` | Нагрузка на окно 128k (Full Scan) |
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
4["index-CdMRCu3c.js"]
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
4T["index.js"]
subgraph 4V["pg-core"]
4W["index.js"]
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
subgraph 30["routes"]
31["adr.routes.ts"]
4C["governance.routes.ts"]
4D["mapping.routes.ts"]
4G["mcp.routes.ts"]
4H["mission.routes.ts"]
4I["rating.routes.ts"]
4J["workspace.routes.ts"]
59["security.routes.ts"]
end
subgraph 4E["dto"]
4F["index.ts"]
end
57["index.ts"]
58["mock-data.ts"]
end
subgraph 5A["test"]
5B["adr.test.ts"]
5H["api.test.ts"]
end
5I["vitest.config.ts"]
end
subgraph 32["application"]
subgraph 33["src"]
34["index.ts"]
35["mapping-processor.ts"]
subgraph 3H["use-cases"]
3I["add-edge.ts"]
3P["add-node.ts"]
3Q["add-source.ts"]
3R["adr-use-cases.ts"]
3S["apply-patch.ts"]
3T["apply-retention.ts"]
3U["assess-readiness.ts"]
3V["cast-vote.ts"]
3W["create-workspace.ts"]
3X["get-mapping-run.ts"]
3Y["get-node-ratings.ts"]
3Z["get-readiness.ts"]
40["get-trace.ts"]
41["get-workspace-graph.ts"]
42["list-mapping-runs.ts"]
43["list-patches.ts"]
44["list-sources.ts"]
45["list-workspaces.ts"]
46["patch-node.ts"]
47["propose-patch.ts"]
48["rate-node.ts"]
49["redact-node.ts"]
4A["start-mapping-run.ts"]
4B["submit-claim.ts"]
end
end
subgraph 5L["test"]
5M["create-workspace.test.ts"]
5N["use-cases.test.ts"]
end
5O["vitest.config.ts"]
end
subgraph 36["ports"]
subgraph 37["src"]
38["index.ts"]
39["adr.repository.port.ts"]
3A["domain.repository.port.ts"]
3B["governance.port.ts"]
3C["graph.repository.port.ts"]
3D["mapping.repository.port.ts"]
3E["mcp.port.ts"]
3F["outbox.repository.port.ts"]
3G["security.port.ts"]
end
end
subgraph 3K["observability"]
subgraph 3L["src"]
3M["index.ts"]
3N["audit.ts"]
3O["tracer.ts"]
end
end
subgraph 4K["infrastructure-mcp"]
subgraph 4L["src"]
4M["index.ts"]
4N["mcp-app.registry.ts"]
4O["mcp-bridge.ts"]
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
subgraph 4P["infrastructure-postgres"]
subgraph 4Q["src"]
4R["index.ts"]
4S["graph.repository.ts"]
4U["schema.ts"]
4X["identity.repository.ts"]
4Y["rating.repository.ts"]
4Z["source.repository.ts"]
50["workspace.repository.ts"]
7U["seed.ts"]
end
7P["drizzle.config.ts"]
end
subgraph 51["infrastructure-runtime"]
subgraph 52["src"]
53["index.ts"]
54["in-memory-governance.repository.ts"]
55["in-memory-repositories.ts"]
56["security-mocks.ts"]
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
3J["crypto"]
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
26-->31
26-->4C
26-->4D
26-->4G
26-->4H
26-->4I
26-->4J
26-->34
26-->12
26-->4M
26-->4R
26-->53
26-->38
26-->2B
26-->2G
26-->2L
26-->2Q
26-->2U
26-->2Z
31-->34
31-->2U
34-->35
34-->3I
34-->3P
34-->3Q
34-->3R
34-->3S
34-->3T
34-->3U
34-->3V
34-->3W
34-->3X
34-->3Y
34-->3Z
34-->40
34-->41
34-->42
34-->43
34-->44
34-->45
34-->46
34-->47
34-->48
34-->49
34-->4A
34-->4B
35-->38
38-->39
38-->3A
38-->3B
38-->3C
38-->3D
38-->3E
38-->3F
38-->3G
39-->12
3A-->12
3B-->12
3C-->12
3D-->12
3G-->12
3I-->12
3I-->3M
3I-->38
3I-->3J
3M-->3N
3M-->3O
3P-->12
3P-->3M
3P-->38
3P-->3J
3Q-->12
3Q-->38
3Q-->3J
3R-->12
3R-->38
3S-->12
3S-->38
3S-->3J
3T-->12
3T-->38
3U-->12
3U-->38
3U-->3J
3V-->3S
3V-->12
3V-->3M
3V-->38
3V-->3J
3W-->12
3W-->3M
3W-->38
3W-->3J
3X-->12
3X-->38
3Y-->12
3Y-->38
3Z-->12
3Z-->38
40-->12
40-->38
41-->12
41-->38
42-->12
42-->38
43-->12
43-->38
44-->12
44-->38
45-->12
45-->38
46-->12
46-->38
47-->12
47-->38
47-->3J
48-->12
48-->38
48-->3J
49-->12
49-->38
4A-->12
4A-->38
4A-->3J
4B-->12
4B-->38
4B-->3J
4C-->34
4C-->2U
4D-->4F
4D-->34
4D-->2U
4F-->12
4G-->38
4G-->2U
4H-->34
4H-->12
4H-->2U
4I-->34
4I-->12
4I-->2U
4J-->4F
4J-->34
4J-->2U
4M-->4N
4M-->4O
4N-->38
4O-->38
4R-->4S
4R-->4X
4R-->4Y
4R-->4U
4R-->4Z
4R-->50
4S-->4U
4S-->12
4S-->38
4S-->4T
4S-->2Q
4U-->4W
4X-->4U
4X-->12
4X-->38
4X-->4T
4X-->2Q
4Y-->4U
4Y-->12
4Y-->38
4Y-->4T
4Y-->2Q
4Z-->4U
4Z-->12
4Z-->38
4Z-->4T
4Z-->2Q
50-->4U
50-->12
50-->38
50-->4T
50-->2Q
53-->54
53-->55
53-->56
54-->12
54-->38
55-->12
55-->38
56-->12
56-->38
56-->3J
57-->26
58-->12
59-->34
59-->12
59-->38
59-->2U
5B-->26
5B-->2U
5B-->5G
5H-->26
5H-->38
5H-->2U
5H-->5G
5I-->5J
5I-->5K
5M-->3W
5M-->38
5M-->5G
5N-->3I
5N-->3P
5N-->3V
5N-->3W
5N-->41
5N-->45
5N-->46
5N-->4B
5N-->12
5N-->38
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
6W-->38
6X-->38
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
7U-->4U
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
4["index-CdMRCu3c.js"]
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
4T["index.js"]
subgraph 4V["pg-core"]
4W["index.js"]
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
subgraph 30["routes"]
31["adr.routes.ts"]
4C["governance.routes.ts"]
4D["mapping.routes.ts"]
4G["mcp.routes.ts"]
4H["mission.routes.ts"]
4I["rating.routes.ts"]
4J["workspace.routes.ts"]
59["security.routes.ts"]
end
subgraph 4E["dto"]
4F["index.ts"]
end
57["index.ts"]
58["mock-data.ts"]
end
subgraph 5A["test"]
5B["adr.test.ts"]
5H["api.test.ts"]
end
5I["vitest.config.ts"]
end
subgraph 32["application"]
subgraph 33["src"]
34["index.ts"]
35["mapping-processor.ts"]
subgraph 3H["use-cases"]
3I["add-edge.ts"]
3P["add-node.ts"]
3Q["add-source.ts"]
3R["adr-use-cases.ts"]
3S["apply-patch.ts"]
3T["apply-retention.ts"]
3U["assess-readiness.ts"]
3V["cast-vote.ts"]
3W["create-workspace.ts"]
3X["get-mapping-run.ts"]
3Y["get-node-ratings.ts"]
3Z["get-readiness.ts"]
40["get-trace.ts"]
41["get-workspace-graph.ts"]
42["list-mapping-runs.ts"]
43["list-patches.ts"]
44["list-sources.ts"]
45["list-workspaces.ts"]
46["patch-node.ts"]
47["propose-patch.ts"]
48["rate-node.ts"]
49["redact-node.ts"]
4A["start-mapping-run.ts"]
4B["submit-claim.ts"]
end
end
subgraph 5L["test"]
5M["create-workspace.test.ts"]
5N["use-cases.test.ts"]
end
5O["vitest.config.ts"]
end
subgraph 36["ports"]
subgraph 37["src"]
38["index.ts"]
39["adr.repository.port.ts"]
3A["domain.repository.port.ts"]
3B["governance.port.ts"]
3C["graph.repository.port.ts"]
3D["mapping.repository.port.ts"]
3E["mcp.port.ts"]
3F["outbox.repository.port.ts"]
3G["security.port.ts"]
end
end
subgraph 3K["observability"]
subgraph 3L["src"]
3M["index.ts"]
3N["audit.ts"]
3O["tracer.ts"]
end
end
subgraph 4K["infrastructure-mcp"]
subgraph 4L["src"]
4M["index.ts"]
4N["mcp-app.registry.ts"]
4O["mcp-bridge.ts"]
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
subgraph 4P["infrastructure-postgres"]
subgraph 4Q["src"]
4R["index.ts"]
4S["graph.repository.ts"]
4U["schema.ts"]
4X["identity.repository.ts"]
4Y["rating.repository.ts"]
4Z["source.repository.ts"]
50["workspace.repository.ts"]
7U["seed.ts"]
end
7P["drizzle.config.ts"]
end
subgraph 51["infrastructure-runtime"]
subgraph 52["src"]
53["index.ts"]
54["in-memory-governance.repository.ts"]
55["in-memory-repositories.ts"]
56["security-mocks.ts"]
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
3J["crypto"]
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
26-->31
26-->4C
26-->4D
26-->4G
26-->4H
26-->4I
26-->4J
26-->34
26-->12
26-->4M
26-->4R
26-->53
26-->38
26-->2B
26-->2G
26-->2L
26-->2Q
26-->2U
26-->2Z
31-->34
31-->2U
34-->35
34-->3I
34-->3P
34-->3Q
34-->3R
34-->3S
34-->3T
34-->3U
34-->3V
34-->3W
34-->3X
34-->3Y
34-->3Z
34-->40
34-->41
34-->42
34-->43
34-->44
34-->45
34-->46
34-->47
34-->48
34-->49
34-->4A
34-->4B
35-->38
38-->39
38-->3A
38-->3B
38-->3C
38-->3D
38-->3E
38-->3F
38-->3G
39-->12
3A-->12
3B-->12
3C-->12
3D-->12
3G-->12
3I-->12
3I-->3M
3I-->38
3I-->3J
3M-->3N
3M-->3O
3P-->12
3P-->3M
3P-->38
3P-->3J
3Q-->12
3Q-->38
3Q-->3J
3R-->12
3R-->38
3S-->12
3S-->38
3S-->3J
3T-->12
3T-->38
3U-->12
3U-->38
3U-->3J
3V-->3S
3V-->12
3V-->3M
3V-->38
3V-->3J
3W-->12
3W-->3M
3W-->38
3W-->3J
3X-->12
3X-->38
3Y-->12
3Y-->38
3Z-->12
3Z-->38
40-->12
40-->38
41-->12
41-->38
42-->12
42-->38
43-->12
43-->38
44-->12
44-->38
45-->12
45-->38
46-->12
46-->38
47-->12
47-->38
47-->3J
48-->12
48-->38
48-->3J
49-->12
49-->38
4A-->12
4A-->38
4A-->3J
4B-->12
4B-->38
4B-->3J
4C-->34
4C-->2U
4D-->4F
4D-->34
4D-->2U
4F-->12
4G-->38
4G-->2U
4H-->34
4H-->12
4H-->2U
4I-->34
4I-->12
4I-->2U
4J-->4F
4J-->34
4J-->2U
4M-->4N
4M-->4O
4N-->38
4O-->38
4R-->4S
4R-->4X
4R-->4Y
4R-->4U
4R-->4Z
4R-->50
4S-->4U
4S-->12
4S-->38
4S-->4T
4S-->2Q
4U-->4W
4X-->4U
4X-->12
4X-->38
4X-->4T
4X-->2Q
4Y-->4U
4Y-->12
4Y-->38
4Y-->4T
4Y-->2Q
4Z-->4U
4Z-->12
4Z-->38
4Z-->4T
4Z-->2Q
50-->4U
50-->12
50-->38
50-->4T
50-->2Q
53-->54
53-->55
53-->56
54-->12
54-->38
55-->12
55-->38
56-->12
56-->38
56-->3J
57-->26
58-->12
59-->34
59-->12
59-->38
59-->2U
5B-->26
5B-->2U
5B-->5G
5H-->26
5H-->38
5H-->2U
5H-->5G
5I-->5J
5I-->5K
5M-->3W
5M-->38
5M-->5G
5N-->3I
5N-->3P
5N-->3V
5N-->3W
5N-->41
5N-->45
5N-->46
5N-->4B
5N-->12
5N-->38
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
6W-->38
6X-->38
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
7U-->4U
7U-->2G
7U-->2L
7U-->2Q
7U-->2Z
7X-->12
7Y-->7X
```

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
| `demo-shell/src/components/Sidebar.tsx` | 462 | 13.0 KB | — |
| `demo-shell/src/components/SourcePanel.tsx` | 232 | 6.9 KB | — |
| `demo-shell/src/components/WorkspaceRoom.tsx` | 694 | 22.4 KB | — |
| `demo-shell/src/context/SecurityContext.tsx` | 68 | 1.6 KB | — |
| `demo-shell/src/context/WorkspaceContext.tsx` | 130 | 3.4 KB | — |
| `demo-shell/src/hooks/useApi.ts` | 44 | 1.1 KB | — |
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
| `api/src/mock-data.ts` | 566 | 17.1 KB | Mock data factory for demo/development mode. |
| `api/src/routes/adr.routes.ts` | 26 | 0.6 KB | — |
| `api/src/routes/governance.routes.ts` | 94 | 2.9 KB | — |
| `api/src/routes/mapping.routes.ts` | 95 | 2.8 KB | — |
| `api/src/routes/mcp.routes.ts` | 38 | 1.0 KB | — |
| `api/src/routes/mission.routes.ts` | 34 | 0.9 KB | — |
| `api/src/routes/rating.routes.ts` | 30 | 0.9 KB | — |
| `api/src/routes/security.routes.ts` | 69 | 2.0 KB | — |
| `api/src/routes/workspace.routes.ts` | 29 | 0.7 KB | — |
| `api/src/server.ts` | 831 | 28.1 KB | — |
| `api/test/adr.test.ts` | 48 | 1.2 KB | — |
| `api/test/api.test.ts` | 222 | 5.9 KB | — |
| `api/vitest.config.ts` | 42 | 1.1 KB | — |
| `application/src/index.ts` | 26 | 1.1 KB | — |
| `application/src/mapping-processor.ts` | 93 | 2.4 KB | — |
| `application/src/use-cases/add-edge.ts` | 47 | 1.3 KB | — |
| `application/src/use-cases/add-node.ts` | 55 | 1.4 KB | — |
| `application/src/use-cases/add-source.ts` | 29 | 0.7 KB | — |
| `application/src/use-cases/adr-use-cases.ts` | 20 | 0.5 KB | — |
| `application/src/use-cases/apply-patch.ts` | 75 | 2.2 KB | — |
| `application/src/use-cases/apply-retention.ts` | 46 | 1.6 KB | — |
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
| `application/src/use-cases/redact-node.ts` | 68 | 1.7 KB | — |
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
| `infrastructure-postgres/src/graph.repository.ts` | 142 | 4.0 KB | — |
| `infrastructure-postgres/src/identity.repository.ts` | 68 | 1.7 KB | — |
| `infrastructure-postgres/src/index.ts` | 11 | 0.3 KB | — |
| `infrastructure-postgres/src/rating.repository.ts` | 50 | 1.4 KB | — |
| `infrastructure-postgres/src/schema.ts` | 107 | 3.3 KB | — |
| `infrastructure-postgres/src/seed.ts` | 378 | 13.2 KB | — |
| `infrastructure-postgres/src/source.repository.ts` | 60 | 1.6 KB | — |
| `infrastructure-postgres/src/workspace.repository.ts` | 96 | 3.0 KB | — |
| `infrastructure-runtime/src/in-memory-governance.repository.ts` | 97 | 2.9 KB | — |
| `infrastructure-runtime/src/in-memory-repositories.ts` | 233 | 6.1 KB | — |
| `infrastructure-runtime/src/index.ts` | 7 | 0.3 KB | — |
| `infrastructure-runtime/src/security-mocks.ts` | 82 | 2.2 KB | — |
| `observability/src/audit.ts` | 25 | 0.6 KB | — |
| `observability/src/index.ts` | 3 | 0.1 KB | — |
| `observability/src/tracer.ts` | 24 | 0.5 KB | — |
| `ports/src/adr.repository.port.ts` | 8 | 0.2 KB | — |
| `ports/src/domain.repository.port.ts` | 19 | 0.5 KB | — |
| `ports/src/governance.port.ts` | 32 | 1.2 KB | — |
| `ports/src/graph.repository.port.ts` | 14 | 0.5 KB | — |
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
  - `GET /api/v1/system/stats`
  - `GET /api/v1/security/me`
  - `GET /api/v1/security/audit`
  - `POST /api/v1/security/redact`
  - `POST /api/v1/security/retention`
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
  - `@epios/ports` → GraphRepositoryPort, SecurityPort, GovernanceRepositoryPort

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
| `PORT` | packages/bin.ts |

## API Реестр

| Метод | Путь | Файл |
|---|---|---|
| `GET` | `/health` | `packages/api/src/server.ts` |
| `GET` | `/api/v1/system/stats` | `packages/api/src/server.ts` |
| `GET` | `/api/v1/security/me` | `packages/api/src/server.ts` |
| `GET` | `/api/v1/security/audit` | `packages/api/src/server.ts` |
| `POST` | `/api/v1/security/redact` | `packages/api/src/server.ts` |
| `POST` | `/api/v1/security/retention` | `packages/api/src/server.ts` |
