# 🗺️ PROJECT MAP — epios
> Автоматически сгенерировано: `2026-05-14 00:49:15`
> Скрипт: `node dev_studio/refresh.js`

## 📊 Telemetry / Context Health
| Metric | Value | Note |
|---|---|---|
| **Total Files** | `112` | Только JS/TS/TSX исходники |
| **Total Lines** | `11053` | Суммарно по проекту |
| **Project Weight** | `~89 866 tokens` | Оценка (4 символа/токен) |
| **Context Pressure** | `70.2%` | Нагрузка на окно 128k (Full Scan) |
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
4["index-Co8va8vd.js"]
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
4S["index.js"]
subgraph 4U["pg-core"]
4V["index.js"]
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
subgraph 59["vitest@1.6.1_@types+node@25.7.0"]
subgraph 5A["node_modules"]
subgraph 5B["vitest"]
subgraph 5C["dist"]
5D["index.js"]
5H["config.cjs"]
end
end
end
end
subgraph 7N["drizzle-kit@0.31.10"]
subgraph 7O["node_modules"]
subgraph 7P["drizzle-kit"]
7Q["index.mjs"]
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
subgraph 5M["coverage"]
5N["block-navigation.js"]
5O["prettify.js"]
5P["sorter.js"]
end
subgraph 5Q["test"]
5R["domain-smoke.test.ts"]
5S["node-invariants.test.ts"]
5T["source-rating.test.ts"]
5U["workspace.test.ts"]
end
5V["vitest.config.ts"]
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
4B["governance.routes.ts"]
4C["mapping.routes.ts"]
4F["mcp.routes.ts"]
4G["mission.routes.ts"]
4H["rating.routes.ts"]
4I["workspace.routes.ts"]
end
subgraph 4D["dto"]
4E["index.ts"]
end
56["index.ts"]
end
subgraph 57["test"]
58["adr.test.ts"]
5E["api.test.ts"]
end
5F["vitest.config.ts"]
end
subgraph 32["application"]
subgraph 33["src"]
34["index.ts"]
35["mapping-processor.ts"]
subgraph 3G["use-cases"]
3H["add-edge.ts"]
3O["add-node.ts"]
3P["add-source.ts"]
3Q["adr-use-cases.ts"]
3R["apply-patch.ts"]
3S["apply-retention.ts"]
3T["assess-readiness.ts"]
3U["cast-vote.ts"]
3V["create-workspace.ts"]
3W["get-mapping-run.ts"]
3X["get-node-ratings.ts"]
3Y["get-readiness.ts"]
3Z["get-trace.ts"]
40["get-workspace-graph.ts"]
41["list-mapping-runs.ts"]
42["list-patches.ts"]
43["list-sources.ts"]
44["list-workspaces.ts"]
45["patch-node.ts"]
46["propose-patch.ts"]
47["rate-node.ts"]
48["redact-node.ts"]
49["start-mapping-run.ts"]
4A["submit-claim.ts"]
end
end
subgraph 5I["test"]
5J["create-workspace.test.ts"]
5K["use-cases.test.ts"]
end
5L["vitest.config.ts"]
end
subgraph 36["ports"]
subgraph 37["src"]
38["index.ts"]
39["domain.repository.port.ts"]
3A["governance.port.ts"]
3B["graph.repository.port.ts"]
3C["mapping.repository.port.ts"]
3D["mcp.port.ts"]
3E["outbox.repository.port.ts"]
3F["security.port.ts"]
end
end
subgraph 3J["observability"]
subgraph 3K["src"]
3L["index.ts"]
3M["audit.ts"]
3N["tracer.ts"]
end
end
subgraph 4J["infrastructure-mcp"]
subgraph 4K["src"]
4L["index.ts"]
4M["mcp-app.registry.ts"]
4N["mcp-bridge.ts"]
end
subgraph 5W["dist"]
subgraph 5X["domain"]
subgraph 5Y["src"]
5Z["adr.d.ts"]
60["adr.js"]
61["governance.d.ts"]
62["node.js"]
63["governance.js"]
64["index.d.ts"]
65["mapping.js"]
66["rating.js"]
67["security.js"]
68["source.js"]
69["workspace.js"]
6A["index.js"]
6B["mapping.d.ts"]
6C["mission.d.ts"]
6D["mission.js"]
6E["node.d.ts"]
6F["rating.d.ts"]
6G["security.d.ts"]
6H["source.d.ts"]
6I["workspace.d.ts"]
end
end
6J["index.d.ts"]
6K["mcp-app.registry.js"]
6L["mcp-bridge.js"]
6M["index.js"]
subgraph 6N["infrastructure-mcp"]
subgraph 6O["src"]
6P["index.d.ts"]
6Q["mcp-app.registry.js"]
6R["mcp-bridge.js"]
6S["index.js"]
6T["mcp-app.registry.d.ts"]
6U["mcp-bridge.d.ts"]
end
end
6V["mcp-app.registry.d.ts"]
6Y["mcp-bridge.d.ts"]
subgraph 6Z["ports"]
subgraph 70["src"]
71["domain.repository.port.d.ts"]
72["domain.repository.port.js"]
73["governance.port.d.ts"]
74["governance.port.js"]
75["graph.repository.port.d.ts"]
76["graph.repository.port.js"]
77["index.d.ts"]
78["mapping.repository.port.js"]
79["mcp.port.js"]
7A["outbox.repository.port.js"]
7B["security.port.js"]
7C["index.js"]
7D["mapping.repository.port.d.ts"]
7E["mcp.port.d.ts"]
7F["outbox.repository.port.d.ts"]
7G["security.port.d.ts"]
end
end
end
subgraph 7H["test"]
7I["smoke.test.ts"]
end
end
subgraph 4O["infrastructure-postgres"]
subgraph 4P["src"]
4Q["index.ts"]
4R["graph.repository.ts"]
4T["schema.ts"]
4W["identity.repository.ts"]
4X["rating.repository.ts"]
4Y["source.repository.ts"]
4Z["workspace.repository.ts"]
7R["seed.ts"]
end
7M["drizzle.config.ts"]
end
subgraph 50["infrastructure-runtime"]
subgraph 51["src"]
52["index.ts"]
53["in-memory-governance.repository.ts"]
54["in-memory-repositories.ts"]
55["security-mocks.ts"]
end
end
subgraph 7J["infrastructure-models"]
subgraph 7K["src"]
7L["index.ts"]
end
end
subgraph 7S["testing"]
subgraph 7T["src"]
7U["fixtures.ts"]
7V["index.ts"]
end
end
end
3I["crypto"]
5G["path"]
subgraph 6W["@epos"]
6X["ports"]
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
26-->4B
26-->4C
26-->4F
26-->4G
26-->4H
26-->4I
26-->34
26-->12
26-->4L
26-->4Q
26-->52
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
34-->3H
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
34-->48
34-->49
34-->4A
35-->38
38-->39
38-->3A
38-->3B
38-->3C
38-->3D
38-->3E
38-->3F
39-->12
3A-->12
3B-->12
3C-->12
3F-->12
3H-->12
3H-->3L
3H-->38
3H-->3I
3L-->3M
3L-->3N
3O-->12
3O-->3L
3O-->38
3O-->3I
3P-->12
3P-->38
3P-->3I
3Q-->12
3R-->12
3R-->38
3R-->3I
3S-->12
3S-->38
3T-->12
3T-->38
3T-->3I
3U-->3R
3U-->12
3U-->3L
3U-->38
3U-->3I
3V-->12
3V-->3L
3V-->38
3V-->3I
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
44-->12
44-->38
45-->12
45-->38
46-->12
46-->38
46-->3I
47-->12
47-->38
47-->3I
48-->12
48-->38
49-->12
49-->38
49-->3I
4A-->12
4A-->38
4A-->3I
4B-->34
4B-->2U
4C-->4E
4C-->34
4C-->2U
4E-->12
4F-->38
4F-->2U
4G-->34
4G-->12
4G-->2U
4H-->34
4H-->12
4H-->2U
4I-->4E
4I-->34
4I-->2U
4L-->4M
4L-->4N
4M-->38
4N-->38
4Q-->4R
4Q-->4W
4Q-->4X
4Q-->4T
4Q-->4Y
4Q-->4Z
4R-->4T
4R-->12
4R-->38
4R-->4S
4R-->2Q
4T-->4V
4W-->4T
4W-->12
4W-->38
4W-->4S
4W-->2Q
4X-->4T
4X-->12
4X-->38
4X-->4S
4X-->2Q
4Y-->4T
4Y-->12
4Y-->38
4Y-->4S
4Y-->2Q
4Z-->4T
4Z-->12
4Z-->38
4Z-->4S
4Z-->2Q
52-->53
52-->54
52-->55
53-->12
53-->38
54-->12
54-->38
55-->12
55-->38
55-->3I
56-->26
58-->26
58-->2U
58-->5D
5E-->26
5E-->38
5E-->2U
5E-->5D
5F-->5G
5F-->5H
5J-->3V
5J-->38
5J-->5D
5K-->3H
5K-->3O
5K-->3U
5K-->3V
5K-->40
5K-->44
5K-->45
5K-->4A
5K-->12
5K-->38
5K-->5D
5L-->5G
5L-->5H
5R-->12
5R-->5D
5S-->12
5S-->5D
5T-->12
5T-->5D
5U-->1A
5U-->5D
5V-->5H
61-->62
64-->60
64-->63
64-->65
64-->62
64-->66
64-->67
64-->68
64-->69
6A-->60
6A-->63
6A-->65
6A-->62
6A-->66
6A-->67
6A-->68
6A-->69
6J-->6K
6J-->6L
6M-->6K
6M-->6L
6P-->6Q
6P-->6R
6S-->6Q
6S-->6R
6T-->38
6U-->38
6V-->6X
6Y-->6X
71-->12
73-->12
75-->12
77-->72
77-->74
77-->76
77-->78
77-->79
77-->7A
77-->7B
7C-->72
7C-->74
7C-->76
7C-->78
7C-->79
7C-->7A
7C-->7B
7D-->12
7G-->12
7I-->5D
7M-->2G
7M-->2L
7M-->7Q
7R-->4T
7R-->2G
7R-->2L
7R-->2Q
7R-->2Z
7U-->12
7V-->7U
```

## Детальная карта компонентов
> Полный граф зависимостей всех файлов проекта

```mermaid
flowchart LR

subgraph 0["apps"]
subgraph 1["demo-shell"]
subgraph 2["dist"]
subgraph 3["assets"]
4["index-Co8va8vd.js"]
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
4S["index.js"]
subgraph 4U["pg-core"]
4V["index.js"]
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
subgraph 59["vitest@1.6.1_@types+node@25.7.0"]
subgraph 5A["node_modules"]
subgraph 5B["vitest"]
subgraph 5C["dist"]
5D["index.js"]
5H["config.cjs"]
end
end
end
end
subgraph 7N["drizzle-kit@0.31.10"]
subgraph 7O["node_modules"]
subgraph 7P["drizzle-kit"]
7Q["index.mjs"]
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
subgraph 5M["coverage"]
5N["block-navigation.js"]
5O["prettify.js"]
5P["sorter.js"]
end
subgraph 5Q["test"]
5R["domain-smoke.test.ts"]
5S["node-invariants.test.ts"]
5T["source-rating.test.ts"]
5U["workspace.test.ts"]
end
5V["vitest.config.ts"]
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
4B["governance.routes.ts"]
4C["mapping.routes.ts"]
4F["mcp.routes.ts"]
4G["mission.routes.ts"]
4H["rating.routes.ts"]
4I["workspace.routes.ts"]
end
subgraph 4D["dto"]
4E["index.ts"]
end
56["index.ts"]
end
subgraph 57["test"]
58["adr.test.ts"]
5E["api.test.ts"]
end
5F["vitest.config.ts"]
end
subgraph 32["application"]
subgraph 33["src"]
34["index.ts"]
35["mapping-processor.ts"]
subgraph 3G["use-cases"]
3H["add-edge.ts"]
3O["add-node.ts"]
3P["add-source.ts"]
3Q["adr-use-cases.ts"]
3R["apply-patch.ts"]
3S["apply-retention.ts"]
3T["assess-readiness.ts"]
3U["cast-vote.ts"]
3V["create-workspace.ts"]
3W["get-mapping-run.ts"]
3X["get-node-ratings.ts"]
3Y["get-readiness.ts"]
3Z["get-trace.ts"]
40["get-workspace-graph.ts"]
41["list-mapping-runs.ts"]
42["list-patches.ts"]
43["list-sources.ts"]
44["list-workspaces.ts"]
45["patch-node.ts"]
46["propose-patch.ts"]
47["rate-node.ts"]
48["redact-node.ts"]
49["start-mapping-run.ts"]
4A["submit-claim.ts"]
end
end
subgraph 5I["test"]
5J["create-workspace.test.ts"]
5K["use-cases.test.ts"]
end
5L["vitest.config.ts"]
end
subgraph 36["ports"]
subgraph 37["src"]
38["index.ts"]
39["domain.repository.port.ts"]
3A["governance.port.ts"]
3B["graph.repository.port.ts"]
3C["mapping.repository.port.ts"]
3D["mcp.port.ts"]
3E["outbox.repository.port.ts"]
3F["security.port.ts"]
end
end
subgraph 3J["observability"]
subgraph 3K["src"]
3L["index.ts"]
3M["audit.ts"]
3N["tracer.ts"]
end
end
subgraph 4J["infrastructure-mcp"]
subgraph 4K["src"]
4L["index.ts"]
4M["mcp-app.registry.ts"]
4N["mcp-bridge.ts"]
end
subgraph 5W["dist"]
subgraph 5X["domain"]
subgraph 5Y["src"]
5Z["adr.d.ts"]
60["adr.js"]
61["governance.d.ts"]
62["node.js"]
63["governance.js"]
64["index.d.ts"]
65["mapping.js"]
66["rating.js"]
67["security.js"]
68["source.js"]
69["workspace.js"]
6A["index.js"]
6B["mapping.d.ts"]
6C["mission.d.ts"]
6D["mission.js"]
6E["node.d.ts"]
6F["rating.d.ts"]
6G["security.d.ts"]
6H["source.d.ts"]
6I["workspace.d.ts"]
end
end
6J["index.d.ts"]
6K["mcp-app.registry.js"]
6L["mcp-bridge.js"]
6M["index.js"]
subgraph 6N["infrastructure-mcp"]
subgraph 6O["src"]
6P["index.d.ts"]
6Q["mcp-app.registry.js"]
6R["mcp-bridge.js"]
6S["index.js"]
6T["mcp-app.registry.d.ts"]
6U["mcp-bridge.d.ts"]
end
end
6V["mcp-app.registry.d.ts"]
6Y["mcp-bridge.d.ts"]
subgraph 6Z["ports"]
subgraph 70["src"]
71["domain.repository.port.d.ts"]
72["domain.repository.port.js"]
73["governance.port.d.ts"]
74["governance.port.js"]
75["graph.repository.port.d.ts"]
76["graph.repository.port.js"]
77["index.d.ts"]
78["mapping.repository.port.js"]
79["mcp.port.js"]
7A["outbox.repository.port.js"]
7B["security.port.js"]
7C["index.js"]
7D["mapping.repository.port.d.ts"]
7E["mcp.port.d.ts"]
7F["outbox.repository.port.d.ts"]
7G["security.port.d.ts"]
end
end
end
subgraph 7H["test"]
7I["smoke.test.ts"]
end
end
subgraph 4O["infrastructure-postgres"]
subgraph 4P["src"]
4Q["index.ts"]
4R["graph.repository.ts"]
4T["schema.ts"]
4W["identity.repository.ts"]
4X["rating.repository.ts"]
4Y["source.repository.ts"]
4Z["workspace.repository.ts"]
7R["seed.ts"]
end
7M["drizzle.config.ts"]
end
subgraph 50["infrastructure-runtime"]
subgraph 51["src"]
52["index.ts"]
53["in-memory-governance.repository.ts"]
54["in-memory-repositories.ts"]
55["security-mocks.ts"]
end
end
subgraph 7J["infrastructure-models"]
subgraph 7K["src"]
7L["index.ts"]
end
end
subgraph 7S["testing"]
subgraph 7T["src"]
7U["fixtures.ts"]
7V["index.ts"]
end
end
end
3I["crypto"]
5G["path"]
subgraph 6W["@epos"]
6X["ports"]
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
26-->4B
26-->4C
26-->4F
26-->4G
26-->4H
26-->4I
26-->34
26-->12
26-->4L
26-->4Q
26-->52
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
34-->3H
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
34-->48
34-->49
34-->4A
35-->38
38-->39
38-->3A
38-->3B
38-->3C
38-->3D
38-->3E
38-->3F
39-->12
3A-->12
3B-->12
3C-->12
3F-->12
3H-->12
3H-->3L
3H-->38
3H-->3I
3L-->3M
3L-->3N
3O-->12
3O-->3L
3O-->38
3O-->3I
3P-->12
3P-->38
3P-->3I
3Q-->12
3R-->12
3R-->38
3R-->3I
3S-->12
3S-->38
3T-->12
3T-->38
3T-->3I
3U-->3R
3U-->12
3U-->3L
3U-->38
3U-->3I
3V-->12
3V-->3L
3V-->38
3V-->3I
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
44-->12
44-->38
45-->12
45-->38
46-->12
46-->38
46-->3I
47-->12
47-->38
47-->3I
48-->12
48-->38
49-->12
49-->38
49-->3I
4A-->12
4A-->38
4A-->3I
4B-->34
4B-->2U
4C-->4E
4C-->34
4C-->2U
4E-->12
4F-->38
4F-->2U
4G-->34
4G-->12
4G-->2U
4H-->34
4H-->12
4H-->2U
4I-->4E
4I-->34
4I-->2U
4L-->4M
4L-->4N
4M-->38
4N-->38
4Q-->4R
4Q-->4W
4Q-->4X
4Q-->4T
4Q-->4Y
4Q-->4Z
4R-->4T
4R-->12
4R-->38
4R-->4S
4R-->2Q
4T-->4V
4W-->4T
4W-->12
4W-->38
4W-->4S
4W-->2Q
4X-->4T
4X-->12
4X-->38
4X-->4S
4X-->2Q
4Y-->4T
4Y-->12
4Y-->38
4Y-->4S
4Y-->2Q
4Z-->4T
4Z-->12
4Z-->38
4Z-->4S
4Z-->2Q
52-->53
52-->54
52-->55
53-->12
53-->38
54-->12
54-->38
55-->12
55-->38
55-->3I
56-->26
58-->26
58-->2U
58-->5D
5E-->26
5E-->38
5E-->2U
5E-->5D
5F-->5G
5F-->5H
5J-->3V
5J-->38
5J-->5D
5K-->3H
5K-->3O
5K-->3U
5K-->3V
5K-->40
5K-->44
5K-->45
5K-->4A
5K-->12
5K-->38
5K-->5D
5L-->5G
5L-->5H
5R-->12
5R-->5D
5S-->12
5S-->5D
5T-->12
5T-->5D
5U-->1A
5U-->5D
5V-->5H
61-->62
64-->60
64-->63
64-->65
64-->62
64-->66
64-->67
64-->68
64-->69
6A-->60
6A-->63
6A-->65
6A-->62
6A-->66
6A-->67
6A-->68
6A-->69
6J-->6K
6J-->6L
6M-->6K
6M-->6L
6P-->6Q
6P-->6R
6S-->6Q
6S-->6R
6T-->38
6U-->38
6V-->6X
6Y-->6X
71-->12
73-->12
75-->12
77-->72
77-->74
77-->76
77-->78
77-->79
77-->7A
77-->7B
7C-->72
7C-->74
7C-->76
7C-->78
7C-->79
7C-->7A
7C-->7B
7D-->12
7G-->12
7I-->5D
7M-->2G
7M-->2L
7M-->7Q
7R-->4T
7R-->2G
7R-->2L
7R-->2Q
7R-->2Z
7U-->12
7V-->7U
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
| `demo-shell/src/components/MissionPanel.tsx` | 302 | 8.7 KB | — |
| `demo-shell/src/components/RatingPanel.tsx` | 234 | 6.2 KB | — |
| `demo-shell/src/components/ReadinessPanel.tsx` | 403 | 11.7 KB | — |
| `demo-shell/src/components/Sidebar.tsx` | 445 | 12.6 KB | — |
| `demo-shell/src/components/SourcePanel.tsx` | 232 | 6.9 KB | — |
| `demo-shell/src/components/WorkspaceRoom.tsx` | 694 | 22.4 KB | — |
| `demo-shell/src/context/SecurityContext.tsx` | 68 | 1.6 KB | — |
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
| `application/src/use-cases/adr-use-cases.ts` | 20 | 0.4 KB | — |
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
| `infrastructure-postgres/src/seed.ts` | 378 | 13.2 KB | — |
| `infrastructure-postgres/src/source.repository.ts` | 60 | 1.6 KB | — |
| `infrastructure-postgres/src/workspace.repository.ts` | 96 | 3.0 KB | — |
| `infrastructure-runtime/src/in-memory-governance.repository.ts` | 97 | 2.9 KB | — |
| `infrastructure-runtime/src/in-memory-repositories.ts` | 225 | 5.9 KB | — |
| `infrastructure-runtime/src/index.ts` | 7 | 0.3 KB | — |
| `infrastructure-runtime/src/security-mocks.ts` | 82 | 2.2 KB | — |
| `observability/src/audit.ts` | 25 | 0.6 KB | — |
| `observability/src/index.ts` | 3 | 0.1 KB | — |
| `observability/src/tracer.ts` | 24 | 0.5 KB | — |
| `ports/src/domain.repository.port.ts` | 19 | 0.5 KB | — |
| `ports/src/governance.port.ts` | 32 | 1.2 KB | — |
| `ports/src/graph.repository.port.ts` | 11 | 0.5 KB | — |
| `ports/src/index.ts` | 9 | 0.3 KB | — |
| `ports/src/mapping.repository.port.ts` | 8 | 0.2 KB | — |
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
