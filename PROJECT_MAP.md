# 🗺️ PROJECT MAP — epios
> Автоматически сгенерировано: `2026-05-14 12:48:38`
> Скрипт: `node dev_studio/refresh.js`

## 📊 Telemetry / Context Health
| Metric | Value | Note |
|---|---|---|
| **Total Files** | `116` | Только JS/TS/TSX исходники |
| **Total Lines** | `11716` | Суммарно по проекту |
| **Project Weight** | `~94 235 tokens` | Оценка (4 символа/токен) |
| **Context Pressure** | `73.6%` | Нагрузка на окно 128k (Full Scan) |
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
1M["WorkspaceRoom.tsx"]
1N["GraphCanvas.tsx"]
1P["CustomNode.tsx"]
1Q["MissionPanel.tsx"]
1R["MappingPanel.tsx"]
1S["SourcePanel.tsx"]
1T["RatingPanel.tsx"]
end
subgraph T["hooks"]
U["useApi.ts"]
end
V["api-config.ts"]
subgraph X["context"]
Y["SecurityContext.tsx"]
1D["WorkspaceContext.tsx"]
end
1U["i18n.ts"]
1X["main.tsx"]
1Y["index.css"]
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
1O["style.css"]
end
end
end
end
subgraph 1Z["react-dom@18.3.1_react@18.3.1"]
subgraph 20["node_modules"]
subgraph 21["react-dom"]
22["client.js"]
end
end
end
subgraph 2B["@fastify+cors@8.5.0"]
subgraph 2C["node_modules"]
subgraph 2D["@fastify"]
subgraph 2E["cors"]
2F["index.js"]
end
end
end
end
subgraph 2G["dotenv@16.6.1"]
subgraph 2H["node_modules"]
subgraph 2I["dotenv"]
subgraph 2J["lib"]
2K["main.js"]
end
end
end
end
subgraph 2L["dotenv-expand@11.0.7"]
subgraph 2M["node_modules"]
subgraph 2N["dotenv-expand"]
subgraph 2O["lib"]
2P["main.js"]
end
end
end
end
subgraph 2Q["drizzle-orm@0.45.2_postgres@3.4.9"]
subgraph 2R["node_modules"]
subgraph 2S["drizzle-orm"]
subgraph 2T["postgres-js"]
2U["index.js"]
end
4Z["index.js"]
subgraph 51["pg-core"]
52["index.js"]
end
end
end
end
subgraph 2V["fastify@4.29.1"]
subgraph 2W["node_modules"]
subgraph 2X["fastify"]
2Y["fastify.js"]
end
end
end
subgraph 2Z["postgres@3.4.9"]
subgraph 30["node_modules"]
subgraph 31["postgres"]
subgraph 32["src"]
33["index.js"]
end
end
end
end
subgraph 5G["vitest@1.6.1_@types+node@25.7.0"]
subgraph 5H["node_modules"]
subgraph 5I["vitest"]
subgraph 5J["dist"]
5K["index.js"]
5O["config.cjs"]
end
end
end
end
subgraph 7U["drizzle-kit@0.31.10"]
subgraph 7V["node_modules"]
subgraph 7W["drizzle-kit"]
7X["index.mjs"]
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
subgraph 5T["coverage"]
5U["block-navigation.js"]
5V["prettify.js"]
5W["sorter.js"]
end
subgraph 5X["test"]
5Y["domain-smoke.test.ts"]
5Z["node-invariants.test.ts"]
60["source-rating.test.ts"]
61["workspace.test.ts"]
end
62["vitest.config.ts"]
end
subgraph 23["api"]
subgraph 24["coverage"]
25["block-navigation.js"]
26["prettify.js"]
27["sorter.js"]
end
subgraph 28["src"]
29["bin.ts"]
2A["server.ts"]
34["mock-data.ts"]
subgraph 35["routes"]
36["adr.routes.ts"]
4H["governance.routes.ts"]
4I["mapping.routes.ts"]
4L["mcp.routes.ts"]
4M["rating.routes.ts"]
4N["security.routes.ts"]
4O["source.routes.ts"]
4P["workspace.routes.ts"]
end
subgraph 4J["dto"]
4K["index.ts"]
end
5D["index.ts"]
end
subgraph 5E["test"]
5F["adr.test.ts"]
5L["api.test.ts"]
end
5M["vitest.config.ts"]
end
subgraph 37["application"]
subgraph 38["src"]
39["index.ts"]
3A["mapping-processor.ts"]
subgraph 3M["use-cases"]
3N["add-edge.ts"]
3U["add-node.ts"]
3V["add-source.ts"]
3W["adr-use-cases.ts"]
3X["apply-patch.ts"]
3Y["apply-retention.ts"]
3Z["assess-readiness.ts"]
40["cast-vote.ts"]
41["create-workspace.ts"]
42["get-mapping-run.ts"]
43["get-node-ratings.ts"]
44["get-readiness.ts"]
45["get-trace.ts"]
46["get-workspace-graph.ts"]
47["list-mapping-runs.ts"]
48["list-patches.ts"]
49["list-sources.ts"]
4A["list-workspaces.ts"]
4B["patch-node.ts"]
4C["propose-patch.ts"]
4D["rate-node.ts"]
4E["redact-node.ts"]
4F["start-mapping-run.ts"]
4G["submit-claim.ts"]
end
end
subgraph 5P["test"]
5Q["create-workspace.test.ts"]
5R["use-cases.test.ts"]
end
5S["vitest.config.ts"]
end
subgraph 3B["ports"]
subgraph 3C["src"]
3D["index.ts"]
3E["adr.repository.port.ts"]
3F["domain.repository.port.ts"]
3G["governance.port.ts"]
3H["graph.repository.port.ts"]
3I["mapping.repository.port.ts"]
3J["mcp.port.ts"]
3K["outbox.repository.port.ts"]
3L["security.port.ts"]
end
end
subgraph 3P["observability"]
subgraph 3Q["src"]
3R["index.ts"]
3S["audit.ts"]
3T["tracer.ts"]
end
end
subgraph 4Q["infrastructure-mcp"]
subgraph 4R["src"]
4S["index.ts"]
4T["mcp-app.registry.ts"]
4U["mcp-bridge.ts"]
end
subgraph 63["dist"]
subgraph 64["domain"]
subgraph 65["src"]
66["adr.d.ts"]
67["adr.js"]
68["governance.d.ts"]
69["node.js"]
6A["governance.js"]
6B["index.d.ts"]
6C["mapping.js"]
6D["rating.js"]
6E["security.js"]
6F["source.js"]
6G["workspace.js"]
6H["index.js"]
6I["mapping.d.ts"]
6J["mission.d.ts"]
6K["mission.js"]
6L["node.d.ts"]
6M["rating.d.ts"]
6N["security.d.ts"]
6O["source.d.ts"]
6P["workspace.d.ts"]
end
end
6Q["index.d.ts"]
6R["mcp-app.registry.js"]
6S["mcp-bridge.js"]
6T["index.js"]
subgraph 6U["infrastructure-mcp"]
subgraph 6V["src"]
6W["index.d.ts"]
6X["mcp-app.registry.js"]
6Y["mcp-bridge.js"]
6Z["index.js"]
70["mcp-app.registry.d.ts"]
71["mcp-bridge.d.ts"]
end
end
72["mcp-app.registry.d.ts"]
75["mcp-bridge.d.ts"]
subgraph 76["ports"]
subgraph 77["src"]
78["domain.repository.port.d.ts"]
79["domain.repository.port.js"]
7A["governance.port.d.ts"]
7B["governance.port.js"]
7C["graph.repository.port.d.ts"]
7D["graph.repository.port.js"]
7E["index.d.ts"]
7F["mapping.repository.port.js"]
7G["mcp.port.js"]
7H["outbox.repository.port.js"]
7I["security.port.js"]
7J["index.js"]
7K["mapping.repository.port.d.ts"]
7L["mcp.port.d.ts"]
7M["outbox.repository.port.d.ts"]
7N["security.port.d.ts"]
end
end
end
subgraph 7O["test"]
7P["smoke.test.ts"]
end
end
subgraph 4V["infrastructure-postgres"]
subgraph 4W["src"]
4X["index.ts"]
4Y["graph.repository.ts"]
50["schema.ts"]
53["identity.repository.ts"]
54["rating.repository.ts"]
55["source.repository.ts"]
56["workspace.repository.ts"]
7Y["seed.ts"]
end
7T["drizzle.config.ts"]
end
subgraph 57["infrastructure-runtime"]
subgraph 58["src"]
59["index.ts"]
5A["in-memory-governance.repository.ts"]
5B["in-memory-repositories.ts"]
5C["security-mocks.ts"]
end
end
subgraph 7Q["infrastructure-models"]
subgraph 7R["src"]
7S["index.ts"]
end
end
subgraph 7Z["testing"]
subgraph 80["src"]
81["fixtures.ts"]
82["index.ts"]
end
end
end
1L["react-i18next"]
1V["i18next"]
1W["i18next-browser-languagedetector"]
3O["crypto"]
5N["path"]
subgraph 73["@epos"]
74["ports"]
end
4-->6
8-->G
8-->1C
8-->1K
8-->1M
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
1K-->1L
1M-->V
1M-->Y
1M-->1D
1M-->1N
1M-->1Q
1M-->1T
1M-->12
1M-->M
1M-->S
1M-->E
1N-->1D
1N-->U
1N-->1P
1N-->S
1N-->E
1N-->1J
1N-->1O
1P-->S
1P-->E
1P-->1J
1Q-->W
1Q-->1R
1Q-->1S
1Q-->12
1Q-->M
1Q-->S
1Q-->E
1R-->V
1R-->12
1R-->M
1R-->S
1R-->E
1S-->V
1S-->M
1S-->S
1S-->E
1T-->V
1T-->S
1T-->E
1U-->1V
1U-->1W
1U-->1L
1X-->8
1X-->Y
1X-->1D
1X-->1U
1X-->1Y
1X-->E
1X-->22
1X-->1O
29-->2A
2A-->34
2A-->36
2A-->4H
2A-->4I
2A-->4L
2A-->4M
2A-->4N
2A-->4O
2A-->4P
2A-->39
2A-->4S
2A-->4X
2A-->59
2A-->3D
2A-->2F
2A-->2K
2A-->2P
2A-->2U
2A-->2Y
2A-->33
34-->12
36-->39
36-->2Y
39-->3A
39-->3N
39-->3U
39-->3V
39-->3W
39-->3X
39-->3Y
39-->3Z
39-->40
39-->41
39-->42
39-->43
39-->44
39-->45
39-->46
39-->47
39-->48
39-->49
39-->4A
39-->4B
39-->4C
39-->4D
39-->4E
39-->4F
39-->4G
3A-->3D
3D-->3E
3D-->3F
3D-->3G
3D-->3H
3D-->3I
3D-->3J
3D-->3K
3D-->3L
3E-->12
3F-->12
3G-->12
3H-->12
3I-->12
3L-->12
3N-->12
3N-->3R
3N-->3D
3N-->3O
3R-->3S
3R-->3T
3U-->12
3U-->3R
3U-->3D
3U-->3O
3V-->12
3V-->3D
3V-->3O
3W-->12
3W-->3D
3X-->12
3X-->3D
3X-->3O
3Y-->12
3Y-->3D
3Z-->12
3Z-->3D
3Z-->3O
40-->3X
40-->12
40-->3R
40-->3D
40-->3O
41-->12
41-->3R
41-->3D
41-->3O
42-->12
42-->3D
43-->12
43-->3D
44-->12
44-->3D
45-->12
45-->3D
46-->12
46-->3D
47-->12
47-->3D
48-->12
48-->3D
49-->12
49-->3D
4A-->12
4A-->3D
4B-->12
4B-->3D
4C-->12
4C-->3D
4C-->3O
4D-->12
4D-->3D
4D-->3O
4E-->12
4E-->3D
4F-->12
4F-->3D
4F-->3O
4G-->12
4G-->3D
4G-->3O
4H-->39
4H-->3D
4H-->2Y
4I-->4K
4I-->39
4I-->2Y
4K-->12
4L-->3D
4L-->2Y
4M-->39
4M-->12
4M-->2Y
4N-->39
4N-->12
4N-->3D
4N-->2Y
4O-->39
4O-->12
4O-->2Y
4P-->4K
4P-->39
4P-->2Y
4S-->4T
4S-->4U
4T-->3D
4U-->3D
4X-->4Y
4X-->53
4X-->54
4X-->50
4X-->55
4X-->56
4Y-->50
4Y-->12
4Y-->3D
4Y-->4Z
4Y-->2U
50-->52
53-->50
53-->12
53-->3D
53-->4Z
53-->2U
54-->50
54-->12
54-->3D
54-->4Z
54-->2U
55-->50
55-->12
55-->3D
55-->4Z
55-->2U
56-->50
56-->12
56-->3D
56-->4Z
56-->2U
59-->5A
59-->5B
59-->5C
5A-->12
5A-->3D
5B-->12
5B-->3D
5C-->12
5C-->3D
5C-->3O
5D-->2A
5F-->2A
5F-->2Y
5F-->5K
5L-->2A
5L-->3D
5L-->2Y
5L-->5K
5M-->5N
5M-->5O
5Q-->41
5Q-->3D
5Q-->5K
5R-->3N
5R-->3U
5R-->40
5R-->41
5R-->46
5R-->4A
5R-->4B
5R-->4G
5R-->12
5R-->3D
5R-->5K
5S-->5N
5S-->5O
5Y-->12
5Y-->5K
5Z-->12
5Z-->5K
60-->12
60-->5K
61-->1A
61-->5K
62-->5O
68-->69
6B-->67
6B-->6A
6B-->6C
6B-->69
6B-->6D
6B-->6E
6B-->6F
6B-->6G
6H-->67
6H-->6A
6H-->6C
6H-->69
6H-->6D
6H-->6E
6H-->6F
6H-->6G
6Q-->6R
6Q-->6S
6T-->6R
6T-->6S
6W-->6X
6W-->6Y
6Z-->6X
6Z-->6Y
70-->3D
71-->3D
72-->74
75-->74
78-->12
7A-->12
7C-->12
7E-->79
7E-->7B
7E-->7D
7E-->7F
7E-->7G
7E-->7H
7E-->7I
7J-->79
7J-->7B
7J-->7D
7J-->7F
7J-->7G
7J-->7H
7J-->7I
7K-->12
7N-->12
7P-->5K
7T-->2K
7T-->2P
7T-->7X
7Y-->50
7Y-->2K
7Y-->2P
7Y-->2U
7Y-->33
81-->12
82-->81
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
1M["WorkspaceRoom.tsx"]
1N["GraphCanvas.tsx"]
1P["CustomNode.tsx"]
1Q["MissionPanel.tsx"]
1R["MappingPanel.tsx"]
1S["SourcePanel.tsx"]
1T["RatingPanel.tsx"]
end
subgraph T["hooks"]
U["useApi.ts"]
end
V["api-config.ts"]
subgraph X["context"]
Y["SecurityContext.tsx"]
1D["WorkspaceContext.tsx"]
end
1U["i18n.ts"]
1X["main.tsx"]
1Y["index.css"]
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
1O["style.css"]
end
end
end
end
subgraph 1Z["react-dom@18.3.1_react@18.3.1"]
subgraph 20["node_modules"]
subgraph 21["react-dom"]
22["client.js"]
end
end
end
subgraph 2B["@fastify+cors@8.5.0"]
subgraph 2C["node_modules"]
subgraph 2D["@fastify"]
subgraph 2E["cors"]
2F["index.js"]
end
end
end
end
subgraph 2G["dotenv@16.6.1"]
subgraph 2H["node_modules"]
subgraph 2I["dotenv"]
subgraph 2J["lib"]
2K["main.js"]
end
end
end
end
subgraph 2L["dotenv-expand@11.0.7"]
subgraph 2M["node_modules"]
subgraph 2N["dotenv-expand"]
subgraph 2O["lib"]
2P["main.js"]
end
end
end
end
subgraph 2Q["drizzle-orm@0.45.2_postgres@3.4.9"]
subgraph 2R["node_modules"]
subgraph 2S["drizzle-orm"]
subgraph 2T["postgres-js"]
2U["index.js"]
end
4Z["index.js"]
subgraph 51["pg-core"]
52["index.js"]
end
end
end
end
subgraph 2V["fastify@4.29.1"]
subgraph 2W["node_modules"]
subgraph 2X["fastify"]
2Y["fastify.js"]
end
end
end
subgraph 2Z["postgres@3.4.9"]
subgraph 30["node_modules"]
subgraph 31["postgres"]
subgraph 32["src"]
33["index.js"]
end
end
end
end
subgraph 5G["vitest@1.6.1_@types+node@25.7.0"]
subgraph 5H["node_modules"]
subgraph 5I["vitest"]
subgraph 5J["dist"]
5K["index.js"]
5O["config.cjs"]
end
end
end
end
subgraph 7U["drizzle-kit@0.31.10"]
subgraph 7V["node_modules"]
subgraph 7W["drizzle-kit"]
7X["index.mjs"]
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
subgraph 5T["coverage"]
5U["block-navigation.js"]
5V["prettify.js"]
5W["sorter.js"]
end
subgraph 5X["test"]
5Y["domain-smoke.test.ts"]
5Z["node-invariants.test.ts"]
60["source-rating.test.ts"]
61["workspace.test.ts"]
end
62["vitest.config.ts"]
end
subgraph 23["api"]
subgraph 24["coverage"]
25["block-navigation.js"]
26["prettify.js"]
27["sorter.js"]
end
subgraph 28["src"]
29["bin.ts"]
2A["server.ts"]
34["mock-data.ts"]
subgraph 35["routes"]
36["adr.routes.ts"]
4H["governance.routes.ts"]
4I["mapping.routes.ts"]
4L["mcp.routes.ts"]
4M["rating.routes.ts"]
4N["security.routes.ts"]
4O["source.routes.ts"]
4P["workspace.routes.ts"]
end
subgraph 4J["dto"]
4K["index.ts"]
end
5D["index.ts"]
end
subgraph 5E["test"]
5F["adr.test.ts"]
5L["api.test.ts"]
end
5M["vitest.config.ts"]
end
subgraph 37["application"]
subgraph 38["src"]
39["index.ts"]
3A["mapping-processor.ts"]
subgraph 3M["use-cases"]
3N["add-edge.ts"]
3U["add-node.ts"]
3V["add-source.ts"]
3W["adr-use-cases.ts"]
3X["apply-patch.ts"]
3Y["apply-retention.ts"]
3Z["assess-readiness.ts"]
40["cast-vote.ts"]
41["create-workspace.ts"]
42["get-mapping-run.ts"]
43["get-node-ratings.ts"]
44["get-readiness.ts"]
45["get-trace.ts"]
46["get-workspace-graph.ts"]
47["list-mapping-runs.ts"]
48["list-patches.ts"]
49["list-sources.ts"]
4A["list-workspaces.ts"]
4B["patch-node.ts"]
4C["propose-patch.ts"]
4D["rate-node.ts"]
4E["redact-node.ts"]
4F["start-mapping-run.ts"]
4G["submit-claim.ts"]
end
end
subgraph 5P["test"]
5Q["create-workspace.test.ts"]
5R["use-cases.test.ts"]
end
5S["vitest.config.ts"]
end
subgraph 3B["ports"]
subgraph 3C["src"]
3D["index.ts"]
3E["adr.repository.port.ts"]
3F["domain.repository.port.ts"]
3G["governance.port.ts"]
3H["graph.repository.port.ts"]
3I["mapping.repository.port.ts"]
3J["mcp.port.ts"]
3K["outbox.repository.port.ts"]
3L["security.port.ts"]
end
end
subgraph 3P["observability"]
subgraph 3Q["src"]
3R["index.ts"]
3S["audit.ts"]
3T["tracer.ts"]
end
end
subgraph 4Q["infrastructure-mcp"]
subgraph 4R["src"]
4S["index.ts"]
4T["mcp-app.registry.ts"]
4U["mcp-bridge.ts"]
end
subgraph 63["dist"]
subgraph 64["domain"]
subgraph 65["src"]
66["adr.d.ts"]
67["adr.js"]
68["governance.d.ts"]
69["node.js"]
6A["governance.js"]
6B["index.d.ts"]
6C["mapping.js"]
6D["rating.js"]
6E["security.js"]
6F["source.js"]
6G["workspace.js"]
6H["index.js"]
6I["mapping.d.ts"]
6J["mission.d.ts"]
6K["mission.js"]
6L["node.d.ts"]
6M["rating.d.ts"]
6N["security.d.ts"]
6O["source.d.ts"]
6P["workspace.d.ts"]
end
end
6Q["index.d.ts"]
6R["mcp-app.registry.js"]
6S["mcp-bridge.js"]
6T["index.js"]
subgraph 6U["infrastructure-mcp"]
subgraph 6V["src"]
6W["index.d.ts"]
6X["mcp-app.registry.js"]
6Y["mcp-bridge.js"]
6Z["index.js"]
70["mcp-app.registry.d.ts"]
71["mcp-bridge.d.ts"]
end
end
72["mcp-app.registry.d.ts"]
75["mcp-bridge.d.ts"]
subgraph 76["ports"]
subgraph 77["src"]
78["domain.repository.port.d.ts"]
79["domain.repository.port.js"]
7A["governance.port.d.ts"]
7B["governance.port.js"]
7C["graph.repository.port.d.ts"]
7D["graph.repository.port.js"]
7E["index.d.ts"]
7F["mapping.repository.port.js"]
7G["mcp.port.js"]
7H["outbox.repository.port.js"]
7I["security.port.js"]
7J["index.js"]
7K["mapping.repository.port.d.ts"]
7L["mcp.port.d.ts"]
7M["outbox.repository.port.d.ts"]
7N["security.port.d.ts"]
end
end
end
subgraph 7O["test"]
7P["smoke.test.ts"]
end
end
subgraph 4V["infrastructure-postgres"]
subgraph 4W["src"]
4X["index.ts"]
4Y["graph.repository.ts"]
50["schema.ts"]
53["identity.repository.ts"]
54["rating.repository.ts"]
55["source.repository.ts"]
56["workspace.repository.ts"]
7Y["seed.ts"]
end
7T["drizzle.config.ts"]
end
subgraph 57["infrastructure-runtime"]
subgraph 58["src"]
59["index.ts"]
5A["in-memory-governance.repository.ts"]
5B["in-memory-repositories.ts"]
5C["security-mocks.ts"]
end
end
subgraph 7Q["infrastructure-models"]
subgraph 7R["src"]
7S["index.ts"]
end
end
subgraph 7Z["testing"]
subgraph 80["src"]
81["fixtures.ts"]
82["index.ts"]
end
end
end
1L["react-i18next"]
1V["i18next"]
1W["i18next-browser-languagedetector"]
3O["crypto"]
5N["path"]
subgraph 73["@epos"]
74["ports"]
end
4-->6
8-->G
8-->1C
8-->1K
8-->1M
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
1K-->1L
1M-->V
1M-->Y
1M-->1D
1M-->1N
1M-->1Q
1M-->1T
1M-->12
1M-->M
1M-->S
1M-->E
1N-->1D
1N-->U
1N-->1P
1N-->S
1N-->E
1N-->1J
1N-->1O
1P-->S
1P-->E
1P-->1J
1Q-->W
1Q-->1R
1Q-->1S
1Q-->12
1Q-->M
1Q-->S
1Q-->E
1R-->V
1R-->12
1R-->M
1R-->S
1R-->E
1S-->V
1S-->M
1S-->S
1S-->E
1T-->V
1T-->S
1T-->E
1U-->1V
1U-->1W
1U-->1L
1X-->8
1X-->Y
1X-->1D
1X-->1U
1X-->1Y
1X-->E
1X-->22
1X-->1O
29-->2A
2A-->34
2A-->36
2A-->4H
2A-->4I
2A-->4L
2A-->4M
2A-->4N
2A-->4O
2A-->4P
2A-->39
2A-->4S
2A-->4X
2A-->59
2A-->3D
2A-->2F
2A-->2K
2A-->2P
2A-->2U
2A-->2Y
2A-->33
34-->12
36-->39
36-->2Y
39-->3A
39-->3N
39-->3U
39-->3V
39-->3W
39-->3X
39-->3Y
39-->3Z
39-->40
39-->41
39-->42
39-->43
39-->44
39-->45
39-->46
39-->47
39-->48
39-->49
39-->4A
39-->4B
39-->4C
39-->4D
39-->4E
39-->4F
39-->4G
3A-->3D
3D-->3E
3D-->3F
3D-->3G
3D-->3H
3D-->3I
3D-->3J
3D-->3K
3D-->3L
3E-->12
3F-->12
3G-->12
3H-->12
3I-->12
3L-->12
3N-->12
3N-->3R
3N-->3D
3N-->3O
3R-->3S
3R-->3T
3U-->12
3U-->3R
3U-->3D
3U-->3O
3V-->12
3V-->3D
3V-->3O
3W-->12
3W-->3D
3X-->12
3X-->3D
3X-->3O
3Y-->12
3Y-->3D
3Z-->12
3Z-->3D
3Z-->3O
40-->3X
40-->12
40-->3R
40-->3D
40-->3O
41-->12
41-->3R
41-->3D
41-->3O
42-->12
42-->3D
43-->12
43-->3D
44-->12
44-->3D
45-->12
45-->3D
46-->12
46-->3D
47-->12
47-->3D
48-->12
48-->3D
49-->12
49-->3D
4A-->12
4A-->3D
4B-->12
4B-->3D
4C-->12
4C-->3D
4C-->3O
4D-->12
4D-->3D
4D-->3O
4E-->12
4E-->3D
4F-->12
4F-->3D
4F-->3O
4G-->12
4G-->3D
4G-->3O
4H-->39
4H-->3D
4H-->2Y
4I-->4K
4I-->39
4I-->2Y
4K-->12
4L-->3D
4L-->2Y
4M-->39
4M-->12
4M-->2Y
4N-->39
4N-->12
4N-->3D
4N-->2Y
4O-->39
4O-->12
4O-->2Y
4P-->4K
4P-->39
4P-->2Y
4S-->4T
4S-->4U
4T-->3D
4U-->3D
4X-->4Y
4X-->53
4X-->54
4X-->50
4X-->55
4X-->56
4Y-->50
4Y-->12
4Y-->3D
4Y-->4Z
4Y-->2U
50-->52
53-->50
53-->12
53-->3D
53-->4Z
53-->2U
54-->50
54-->12
54-->3D
54-->4Z
54-->2U
55-->50
55-->12
55-->3D
55-->4Z
55-->2U
56-->50
56-->12
56-->3D
56-->4Z
56-->2U
59-->5A
59-->5B
59-->5C
5A-->12
5A-->3D
5B-->12
5B-->3D
5C-->12
5C-->3D
5C-->3O
5D-->2A
5F-->2A
5F-->2Y
5F-->5K
5L-->2A
5L-->3D
5L-->2Y
5L-->5K
5M-->5N
5M-->5O
5Q-->41
5Q-->3D
5Q-->5K
5R-->3N
5R-->3U
5R-->40
5R-->41
5R-->46
5R-->4A
5R-->4B
5R-->4G
5R-->12
5R-->3D
5R-->5K
5S-->5N
5S-->5O
5Y-->12
5Y-->5K
5Z-->12
5Z-->5K
60-->12
60-->5K
61-->1A
61-->5K
62-->5O
68-->69
6B-->67
6B-->6A
6B-->6C
6B-->69
6B-->6D
6B-->6E
6B-->6F
6B-->6G
6H-->67
6H-->6A
6H-->6C
6H-->69
6H-->6D
6H-->6E
6H-->6F
6H-->6G
6Q-->6R
6Q-->6S
6T-->6R
6T-->6S
6W-->6X
6W-->6Y
6Z-->6X
6Z-->6Y
70-->3D
71-->3D
72-->74
75-->74
78-->12
7A-->12
7C-->12
7E-->79
7E-->7B
7E-->7D
7E-->7F
7E-->7G
7E-->7H
7E-->7I
7J-->79
7J-->7B
7J-->7D
7J-->7F
7J-->7G
7J-->7H
7J-->7I
7K-->12
7N-->12
7P-->5K
7T-->2K
7T-->2P
7T-->7X
7Y-->50
7Y-->2K
7Y-->2P
7Y-->2U
7Y-->33
81-->12
82-->81
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
| `demo-shell/src/components/Sidebar.tsx` | 894 | 25.8 KB | — |
| `demo-shell/src/components/SourcePanel.tsx` | 232 | 6.9 KB | — |
| `demo-shell/src/components/WorkspaceRoom.tsx` | 665 | 21.5 KB | — |
| `demo-shell/src/context/SecurityContext.tsx` | 68 | 1.6 KB | — |
| `demo-shell/src/context/WorkspaceContext.tsx` | 130 | 3.4 KB | — |
| `demo-shell/src/hooks/useApi.ts` | 43 | 1.1 KB | — |
| `demo-shell/src/i18n.ts` | 73 | 2.3 KB | — |
| `demo-shell/src/main.tsx` | 20 | 0.5 KB | — |

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
