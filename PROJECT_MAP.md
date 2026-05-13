# 🗺️ PROJECT MAP — epios
> Автоматически сгенерировано: `2026-05-13 22:37:17`
> Скрипт: `node dev_studio/refresh.js`

## 📊 Telemetry / Context Health
| Metric | Value | Note |
|---|---|---|
| **Total Files** | `117` | Только JS/TS/TSX исходники |
| **Total Lines** | `11016` | Суммарно по проекту |
| **Project Weight** | `~89 715 tokens` | Оценка (4 символа/токен) |
| **Context Pressure** | `70.1%` | Нагрузка на окно 128k (Full Scan) |
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
4["index-BYNa6mZj.js"]
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
4P["index.js"]
subgraph 4R["pg-core"]
4S["index.js"]
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
subgraph 56["vitest@1.6.1_@types+node@25.7.0"]
subgraph 57["node_modules"]
subgraph 58["vitest"]
subgraph 59["dist"]
5A["index.js"]
5E["config.cjs"]
end
end
end
end
subgraph 7K["drizzle-kit@0.31.10"]
subgraph 7L["node_modules"]
subgraph 7M["drizzle-kit"]
7N["index.mjs"]
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
subgraph 5J["coverage"]
5K["block-navigation.js"]
5L["prettify.js"]
5M["sorter.js"]
end
subgraph 5N["test"]
5O["domain-smoke.test.ts"]
5P["node-invariants.test.ts"]
5Q["source-rating.test.ts"]
5R["workspace.test.ts"]
end
5S["vitest.config.ts"]
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
48["governance.routes.ts"]
49["mapping.routes.ts"]
4C["mcp.routes.ts"]
4D["mission.routes.ts"]
4E["rating.routes.ts"]
4F["workspace.routes.ts"]
end
subgraph 4A["dto"]
4B["index.ts"]
end
53["index.ts"]
end
subgraph 54["test"]
55["adr.test.ts"]
5B["api.test.ts"]
end
5C["vitest.config.ts"]
end
subgraph 32["application"]
subgraph 33["src"]
34["index.ts"]
35["mapping-processor.ts"]
subgraph 3D["use-cases"]
3E["add-edge.ts"]
3L["add-node.ts"]
3M["add-source.ts"]
3N["adr-use-cases.ts"]
3O["apply-patch.ts"]
3P["apply-retention.ts"]
3Q["assess-readiness.ts"]
3R["cast-vote.ts"]
3S["create-workspace.ts"]
3T["get-mapping-run.ts"]
3U["get-node-ratings.ts"]
3V["get-readiness.ts"]
3W["get-trace.ts"]
3X["get-workspace-graph.ts"]
3Y["list-mapping-runs.ts"]
3Z["list-patches.ts"]
40["list-sources.ts"]
41["list-workspaces.ts"]
42["patch-node.ts"]
43["propose-patch.ts"]
44["rate-node.ts"]
45["redact-node.ts"]
46["start-mapping-run.ts"]
47["submit-claim.ts"]
end
end
subgraph 5F["test"]
5G["create-workspace.test.ts"]
5H["use-cases.test.ts"]
end
5I["vitest.config.ts"]
end
subgraph 36["ports"]
subgraph 37["src"]
38["index.js"]
39["domain.repository.port.js"]
3A["governance.port.js"]
3B["graph.repository.port.js"]
3C["mcp.port.js"]
7P["domain.repository.port.d.ts"]
7Q["domain.repository.port.ts"]
7R["governance.port.d.ts"]
7S["governance.port.ts"]
7T["graph.repository.port.d.ts"]
7U["graph.repository.port.ts"]
7V["index.d.ts"]
7W["index.ts"]
7X["mapping.repository.port.ts"]
7Y["outbox.repository.port.ts"]
7Z["security.port.ts"]
80["mcp.port.d.ts"]
81["mcp.port.ts"]
end
end
subgraph 3G["observability"]
subgraph 3H["src"]
3I["index.ts"]
3J["audit.ts"]
3K["tracer.ts"]
end
end
subgraph 4G["infrastructure-mcp"]
subgraph 4H["src"]
4I["index.ts"]
4J["mcp-app.registry.ts"]
4K["mcp-bridge.ts"]
end
subgraph 5T["dist"]
subgraph 5U["domain"]
subgraph 5V["src"]
5W["adr.d.ts"]
5X["adr.js"]
5Y["governance.d.ts"]
5Z["node.js"]
60["governance.js"]
61["index.d.ts"]
62["mapping.js"]
63["rating.js"]
64["security.js"]
65["source.js"]
66["workspace.js"]
67["index.js"]
68["mapping.d.ts"]
69["mission.d.ts"]
6A["mission.js"]
6B["node.d.ts"]
6C["rating.d.ts"]
6D["security.d.ts"]
6E["source.d.ts"]
6F["workspace.d.ts"]
end
end
6G["index.d.ts"]
6H["mcp-app.registry.js"]
6I["mcp-bridge.js"]
6J["index.js"]
subgraph 6K["infrastructure-mcp"]
subgraph 6L["src"]
6M["index.d.ts"]
6N["mcp-app.registry.js"]
6O["mcp-bridge.js"]
6P["index.js"]
6Q["mcp-app.registry.d.ts"]
6R["mcp-bridge.d.ts"]
end
end
6S["mcp-app.registry.d.ts"]
6V["mcp-bridge.d.ts"]
subgraph 6W["ports"]
subgraph 6X["src"]
6Y["domain.repository.port.d.ts"]
6Z["domain.repository.port.js"]
70["governance.port.d.ts"]
71["governance.port.js"]
72["graph.repository.port.d.ts"]
73["graph.repository.port.js"]
74["index.d.ts"]
75["mapping.repository.port.js"]
76["mcp.port.js"]
77["outbox.repository.port.js"]
78["security.port.js"]
79["index.js"]
7A["mapping.repository.port.d.ts"]
7B["mcp.port.d.ts"]
7C["outbox.repository.port.d.ts"]
7D["security.port.d.ts"]
end
end
end
subgraph 7E["test"]
7F["smoke.test.ts"]
end
end
subgraph 4L["infrastructure-postgres"]
subgraph 4M["src"]
4N["index.ts"]
4O["graph.repository.ts"]
4Q["schema.ts"]
4T["identity.repository.ts"]
4U["rating.repository.ts"]
4V["source.repository.ts"]
4W["workspace.repository.ts"]
7O["seed.ts"]
end
7J["drizzle.config.ts"]
end
subgraph 4X["infrastructure-runtime"]
subgraph 4Y["src"]
4Z["index.ts"]
50["in-memory-governance.repository.ts"]
51["in-memory-repositories.ts"]
52["security-mocks.ts"]
end
end
subgraph 7G["infrastructure-models"]
subgraph 7H["src"]
7I["index.ts"]
end
end
subgraph 82["testing"]
subgraph 83["src"]
84["fixtures.ts"]
85["index.ts"]
end
end
end
3F["crypto"]
5D["path"]
subgraph 6T["@epos"]
6U["ports"]
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
26-->48
26-->49
26-->4C
26-->4D
26-->4E
26-->4F
26-->34
26-->12
26-->4I
26-->4N
26-->4Z
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
34-->3E
34-->3L
34-->3M
34-->3N
34-->3O
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
35-->38
38-->39
38-->3A
38-->3B
38-->3C
3E-->12
3E-->3I
3E-->38
3E-->3F
3I-->3J
3I-->3K
3L-->12
3L-->3I
3L-->38
3L-->3F
3M-->12
3M-->38
3M-->3F
3N-->12
3O-->12
3O-->38
3O-->3F
3P-->12
3P-->38
3Q-->12
3Q-->38
3Q-->3F
3R-->12
3R-->3I
3R-->38
3R-->3F
3S-->12
3S-->3I
3S-->38
3S-->3F
3T-->12
3T-->38
3U-->12
3U-->38
3V-->12
3V-->38
3W-->12
3W-->38
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
43-->3F
44-->12
44-->38
44-->3F
45-->12
45-->38
46-->12
46-->38
46-->3F
47-->12
47-->38
47-->3F
48-->34
48-->2U
49-->4B
49-->34
49-->2U
4B-->12
4C-->38
4C-->2U
4D-->34
4D-->12
4D-->2U
4E-->34
4E-->12
4E-->2U
4F-->4B
4F-->34
4F-->2U
4I-->4J
4I-->4K
4J-->38
4K-->38
4N-->4O
4N-->4T
4N-->4U
4N-->4Q
4N-->4V
4N-->4W
4O-->4Q
4O-->12
4O-->38
4O-->4P
4O-->2Q
4Q-->4S
4T-->4Q
4T-->12
4T-->38
4T-->4P
4T-->2Q
4U-->4Q
4U-->12
4U-->38
4U-->4P
4U-->2Q
4V-->4Q
4V-->12
4V-->38
4V-->4P
4V-->2Q
4W-->4Q
4W-->12
4W-->38
4W-->4P
4W-->2Q
4Z-->50
4Z-->51
4Z-->52
50-->12
50-->38
51-->12
51-->38
52-->12
52-->38
53-->26
55-->26
55-->2U
55-->5A
5B-->26
5B-->38
5B-->2U
5B-->5A
5C-->5D
5C-->5E
5G-->3S
5G-->38
5G-->5A
5H-->3E
5H-->3L
5H-->3R
5H-->3S
5H-->3X
5H-->41
5H-->42
5H-->47
5H-->12
5H-->38
5H-->5A
5I-->5D
5I-->5E
5O-->12
5O-->5A
5P-->12
5P-->5A
5Q-->12
5Q-->5A
5R-->1A
5R-->5A
5S-->5E
5Y-->5Z
61-->5X
61-->60
61-->62
61-->5Z
61-->63
61-->64
61-->65
61-->66
67-->5X
67-->60
67-->62
67-->5Z
67-->63
67-->64
67-->65
67-->66
6G-->6H
6G-->6I
6J-->6H
6J-->6I
6M-->6N
6M-->6O
6P-->6N
6P-->6O
6Q-->38
6R-->38
6S-->6U
6V-->6U
6Y-->12
70-->12
72-->12
74-->6Z
74-->71
74-->73
74-->75
74-->76
74-->77
74-->78
79-->6Z
79-->71
79-->73
79-->75
79-->76
79-->77
79-->78
7A-->12
7D-->12
7F-->5A
7J-->2G
7J-->2L
7J-->7N
7O-->4Q
7O-->2G
7O-->2L
7O-->2Q
7O-->2Z
7P-->12
7Q-->12
7R-->12
7S-->12
7T-->12
7U-->12
7V-->39
7V-->3A
7V-->3B
7V-->3C
7W-->39
7W-->3A
7W-->3B
7W-->7X
7W-->3C
7W-->7Y
7W-->7Z
7X-->12
7Z-->12
84-->12
85-->84
```

## Детальная карта компонентов
> Полный граф зависимостей всех файлов проекта

```mermaid
flowchart LR

subgraph 0["apps"]
subgraph 1["demo-shell"]
subgraph 2["dist"]
subgraph 3["assets"]
4["index-BYNa6mZj.js"]
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
4P["index.js"]
subgraph 4R["pg-core"]
4S["index.js"]
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
subgraph 56["vitest@1.6.1_@types+node@25.7.0"]
subgraph 57["node_modules"]
subgraph 58["vitest"]
subgraph 59["dist"]
5A["index.js"]
5E["config.cjs"]
end
end
end
end
subgraph 7K["drizzle-kit@0.31.10"]
subgraph 7L["node_modules"]
subgraph 7M["drizzle-kit"]
7N["index.mjs"]
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
subgraph 5J["coverage"]
5K["block-navigation.js"]
5L["prettify.js"]
5M["sorter.js"]
end
subgraph 5N["test"]
5O["domain-smoke.test.ts"]
5P["node-invariants.test.ts"]
5Q["source-rating.test.ts"]
5R["workspace.test.ts"]
end
5S["vitest.config.ts"]
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
48["governance.routes.ts"]
49["mapping.routes.ts"]
4C["mcp.routes.ts"]
4D["mission.routes.ts"]
4E["rating.routes.ts"]
4F["workspace.routes.ts"]
end
subgraph 4A["dto"]
4B["index.ts"]
end
53["index.ts"]
end
subgraph 54["test"]
55["adr.test.ts"]
5B["api.test.ts"]
end
5C["vitest.config.ts"]
end
subgraph 32["application"]
subgraph 33["src"]
34["index.ts"]
35["mapping-processor.ts"]
subgraph 3D["use-cases"]
3E["add-edge.ts"]
3L["add-node.ts"]
3M["add-source.ts"]
3N["adr-use-cases.ts"]
3O["apply-patch.ts"]
3P["apply-retention.ts"]
3Q["assess-readiness.ts"]
3R["cast-vote.ts"]
3S["create-workspace.ts"]
3T["get-mapping-run.ts"]
3U["get-node-ratings.ts"]
3V["get-readiness.ts"]
3W["get-trace.ts"]
3X["get-workspace-graph.ts"]
3Y["list-mapping-runs.ts"]
3Z["list-patches.ts"]
40["list-sources.ts"]
41["list-workspaces.ts"]
42["patch-node.ts"]
43["propose-patch.ts"]
44["rate-node.ts"]
45["redact-node.ts"]
46["start-mapping-run.ts"]
47["submit-claim.ts"]
end
end
subgraph 5F["test"]
5G["create-workspace.test.ts"]
5H["use-cases.test.ts"]
end
5I["vitest.config.ts"]
end
subgraph 36["ports"]
subgraph 37["src"]
38["index.js"]
39["domain.repository.port.js"]
3A["governance.port.js"]
3B["graph.repository.port.js"]
3C["mcp.port.js"]
7P["domain.repository.port.d.ts"]
7Q["domain.repository.port.ts"]
7R["governance.port.d.ts"]
7S["governance.port.ts"]
7T["graph.repository.port.d.ts"]
7U["graph.repository.port.ts"]
7V["index.d.ts"]
7W["index.ts"]
7X["mapping.repository.port.ts"]
7Y["outbox.repository.port.ts"]
7Z["security.port.ts"]
80["mcp.port.d.ts"]
81["mcp.port.ts"]
end
end
subgraph 3G["observability"]
subgraph 3H["src"]
3I["index.ts"]
3J["audit.ts"]
3K["tracer.ts"]
end
end
subgraph 4G["infrastructure-mcp"]
subgraph 4H["src"]
4I["index.ts"]
4J["mcp-app.registry.ts"]
4K["mcp-bridge.ts"]
end
subgraph 5T["dist"]
subgraph 5U["domain"]
subgraph 5V["src"]
5W["adr.d.ts"]
5X["adr.js"]
5Y["governance.d.ts"]
5Z["node.js"]
60["governance.js"]
61["index.d.ts"]
62["mapping.js"]
63["rating.js"]
64["security.js"]
65["source.js"]
66["workspace.js"]
67["index.js"]
68["mapping.d.ts"]
69["mission.d.ts"]
6A["mission.js"]
6B["node.d.ts"]
6C["rating.d.ts"]
6D["security.d.ts"]
6E["source.d.ts"]
6F["workspace.d.ts"]
end
end
6G["index.d.ts"]
6H["mcp-app.registry.js"]
6I["mcp-bridge.js"]
6J["index.js"]
subgraph 6K["infrastructure-mcp"]
subgraph 6L["src"]
6M["index.d.ts"]
6N["mcp-app.registry.js"]
6O["mcp-bridge.js"]
6P["index.js"]
6Q["mcp-app.registry.d.ts"]
6R["mcp-bridge.d.ts"]
end
end
6S["mcp-app.registry.d.ts"]
6V["mcp-bridge.d.ts"]
subgraph 6W["ports"]
subgraph 6X["src"]
6Y["domain.repository.port.d.ts"]
6Z["domain.repository.port.js"]
70["governance.port.d.ts"]
71["governance.port.js"]
72["graph.repository.port.d.ts"]
73["graph.repository.port.js"]
74["index.d.ts"]
75["mapping.repository.port.js"]
76["mcp.port.js"]
77["outbox.repository.port.js"]
78["security.port.js"]
79["index.js"]
7A["mapping.repository.port.d.ts"]
7B["mcp.port.d.ts"]
7C["outbox.repository.port.d.ts"]
7D["security.port.d.ts"]
end
end
end
subgraph 7E["test"]
7F["smoke.test.ts"]
end
end
subgraph 4L["infrastructure-postgres"]
subgraph 4M["src"]
4N["index.ts"]
4O["graph.repository.ts"]
4Q["schema.ts"]
4T["identity.repository.ts"]
4U["rating.repository.ts"]
4V["source.repository.ts"]
4W["workspace.repository.ts"]
7O["seed.ts"]
end
7J["drizzle.config.ts"]
end
subgraph 4X["infrastructure-runtime"]
subgraph 4Y["src"]
4Z["index.ts"]
50["in-memory-governance.repository.ts"]
51["in-memory-repositories.ts"]
52["security-mocks.ts"]
end
end
subgraph 7G["infrastructure-models"]
subgraph 7H["src"]
7I["index.ts"]
end
end
subgraph 82["testing"]
subgraph 83["src"]
84["fixtures.ts"]
85["index.ts"]
end
end
end
3F["crypto"]
5D["path"]
subgraph 6T["@epos"]
6U["ports"]
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
26-->48
26-->49
26-->4C
26-->4D
26-->4E
26-->4F
26-->34
26-->12
26-->4I
26-->4N
26-->4Z
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
34-->3E
34-->3L
34-->3M
34-->3N
34-->3O
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
35-->38
38-->39
38-->3A
38-->3B
38-->3C
3E-->12
3E-->3I
3E-->38
3E-->3F
3I-->3J
3I-->3K
3L-->12
3L-->3I
3L-->38
3L-->3F
3M-->12
3M-->38
3M-->3F
3N-->12
3O-->12
3O-->38
3O-->3F
3P-->12
3P-->38
3Q-->12
3Q-->38
3Q-->3F
3R-->12
3R-->3I
3R-->38
3R-->3F
3S-->12
3S-->3I
3S-->38
3S-->3F
3T-->12
3T-->38
3U-->12
3U-->38
3V-->12
3V-->38
3W-->12
3W-->38
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
43-->3F
44-->12
44-->38
44-->3F
45-->12
45-->38
46-->12
46-->38
46-->3F
47-->12
47-->38
47-->3F
48-->34
48-->2U
49-->4B
49-->34
49-->2U
4B-->12
4C-->38
4C-->2U
4D-->34
4D-->12
4D-->2U
4E-->34
4E-->12
4E-->2U
4F-->4B
4F-->34
4F-->2U
4I-->4J
4I-->4K
4J-->38
4K-->38
4N-->4O
4N-->4T
4N-->4U
4N-->4Q
4N-->4V
4N-->4W
4O-->4Q
4O-->12
4O-->38
4O-->4P
4O-->2Q
4Q-->4S
4T-->4Q
4T-->12
4T-->38
4T-->4P
4T-->2Q
4U-->4Q
4U-->12
4U-->38
4U-->4P
4U-->2Q
4V-->4Q
4V-->12
4V-->38
4V-->4P
4V-->2Q
4W-->4Q
4W-->12
4W-->38
4W-->4P
4W-->2Q
4Z-->50
4Z-->51
4Z-->52
50-->12
50-->38
51-->12
51-->38
52-->12
52-->38
53-->26
55-->26
55-->2U
55-->5A
5B-->26
5B-->38
5B-->2U
5B-->5A
5C-->5D
5C-->5E
5G-->3S
5G-->38
5G-->5A
5H-->3E
5H-->3L
5H-->3R
5H-->3S
5H-->3X
5H-->41
5H-->42
5H-->47
5H-->12
5H-->38
5H-->5A
5I-->5D
5I-->5E
5O-->12
5O-->5A
5P-->12
5P-->5A
5Q-->12
5Q-->5A
5R-->1A
5R-->5A
5S-->5E
5Y-->5Z
61-->5X
61-->60
61-->62
61-->5Z
61-->63
61-->64
61-->65
61-->66
67-->5X
67-->60
67-->62
67-->5Z
67-->63
67-->64
67-->65
67-->66
6G-->6H
6G-->6I
6J-->6H
6J-->6I
6M-->6N
6M-->6O
6P-->6N
6P-->6O
6Q-->38
6R-->38
6S-->6U
6V-->6U
6Y-->12
70-->12
72-->12
74-->6Z
74-->71
74-->73
74-->75
74-->76
74-->77
74-->78
79-->6Z
79-->71
79-->73
79-->75
79-->76
79-->77
79-->78
7A-->12
7D-->12
7F-->5A
7J-->2G
7J-->2L
7J-->7N
7O-->4Q
7O-->2G
7O-->2L
7O-->2Q
7O-->2Z
7P-->12
7Q-->12
7R-->12
7S-->12
7T-->12
7U-->12
7V-->39
7V-->3A
7V-->3B
7V-->3C
7W-->39
7W-->3A
7W-->3B
7W-->7X
7W-->3C
7W-->7Y
7W-->7Z
7X-->12
7Z-->12
84-->12
85-->84
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
| `demo-shell/src/components/GraphCanvas.tsx` | 568 | 15.9 KB | — |
| `demo-shell/src/components/MappingPanel.tsx` | 270 | 7.8 KB | — |
| `demo-shell/src/components/MissionPanel.tsx` | 321 | 9.3 KB | — |
| `demo-shell/src/components/RatingPanel.tsx` | 234 | 6.2 KB | — |
| `demo-shell/src/components/ReadinessPanel.tsx` | 403 | 11.7 KB | — |
| `demo-shell/src/components/Sidebar.tsx` | 437 | 12.3 KB | — |
| `demo-shell/src/components/SourcePanel.tsx` | 232 | 6.9 KB | — |
| `demo-shell/src/components/WorkspaceRoom.tsx` | 698 | 22.6 KB | — |
| `demo-shell/src/context/SecurityContext.tsx` | 55 | 1.6 KB | — |
| `demo-shell/src/context/WorkspaceContext.tsx` | 130 | 3.4 KB | — |
| `demo-shell/src/hooks/useApi.ts` | 41 | 1.0 KB | — |
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
| `api/src/server.ts` | 803 | 27.1 KB | — |
| `api/test/adr.test.ts` | 48 | 1.2 KB | — |
| `api/test/api.test.ts` | 222 | 5.9 KB | — |
| `api/vitest.config.ts` | 42 | 1.1 KB | — |
| `application/src/index.ts` | 26 | 1.1 KB | — |
| `application/src/mapping-processor.ts` | 83 | 2.2 KB | — |
| `application/src/use-cases/add-edge.ts` | 47 | 1.3 KB | — |
| `application/src/use-cases/add-node.ts` | 55 | 1.4 KB | — |
| `application/src/use-cases/add-source.ts` | 29 | 0.7 KB | — |
| `application/src/use-cases/adr-use-cases.ts` | 20 | 0.4 KB | — |
| `application/src/use-cases/apply-patch.ts` | 75 | 2.2 KB | — |
| `application/src/use-cases/apply-retention.ts` | 46 | 1.6 KB | — |
| `application/src/use-cases/assess-readiness.ts` | 90 | 2.8 KB | — |
| `application/src/use-cases/cast-vote.ts` | 165 | 5.1 KB | — |
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
| `application/src/use-cases/redact-node.ts` | 49 | 1.3 KB | — |
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
| `infrastructure-postgres/src/seed.ts` | 328 | 11.3 KB | — |
| `infrastructure-postgres/src/source.repository.ts` | 60 | 1.6 KB | — |
| `infrastructure-postgres/src/workspace.repository.ts` | 96 | 3.0 KB | — |
| `infrastructure-runtime/src/in-memory-governance.repository.ts` | 99 | 2.9 KB | — |
| `infrastructure-runtime/src/in-memory-repositories.ts` | 225 | 5.9 KB | — |
| `infrastructure-runtime/src/index.ts` | 7 | 0.3 KB | — |
| `infrastructure-runtime/src/security-mocks.ts` | 68 | 2.2 KB | — |
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
| `ports/src/index.ts` | 9 | 0.3 KB | — |
| `ports/src/mapping.repository.port.ts` | 8 | 0.2 KB | — |
| `ports/src/mcp.port.js` | 3 | 0.0 KB | — |
| `ports/src/mcp.port.ts` | 35 | 1.0 KB | Port for MCP Application Registry. |
| `ports/src/outbox.repository.port.ts` | 14 | 0.3 KB | — |
| `ports/src/security.port.ts` | 15 | 0.6 KB | — |
| `testing/src/fixtures.ts` | 23 | 0.5 KB | — |
| `testing/src/index.ts` | 3 | 0.1 KB | — |

### `api/src/dto/index.ts`
- **Экспорт**: `CreateWorkspaceDto`, `AddNodeDto`, `AddEdgeDto`, `PatchNodeDto`, `ADRDto`, `ADRFlowDto`, `AddSourceDto`, `RateNodeDto`

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
  - `@epios/domain` → User, UserRole, AuditRecord, AuditRecord as AuditRecordDomain
  - `@epios/ports` → SecurityPort, IdentityRepositoryPort

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
