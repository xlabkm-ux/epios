# 🗺️ PROJECT MAP — epios
> Автоматически сгенерировано: `2026-05-14 22:19:48`
> Скрипт: `node dev_studio/refresh.js`

## 📊 Telemetry / Context Health
| Metric | Value | Note |
|---|---|---|
| **Total Files** | `122` | Только JS/TS/TSX исходники |
| **Total Lines** | `12902` | Суммарно по проекту |
| **Project Weight** | `~102 923 tokens` | Оценка (4 символа/токен) |
| **Context Pressure** | `80.4%` | Нагрузка на окно 128k (Full Scan) |
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
4["index-COAmHwb-.js"]
end
end
subgraph 7["src"]
8["App.tsx"]
subgraph F["components"]
G["ADRReviewWorkspace.tsx"]
W["GovernancePanel.tsx"]
1C["ReadinessPanel.tsx"]
1D["ArchiveView.tsx"]
1R["CommandPalette.tsx"]
1S["Sidebar.tsx"]
1T["Modal.tsx"]
1U["SidebarItem.tsx"]
1V["WorkspaceRoom.tsx"]
1W["GraphCanvas.tsx"]
1Y["CustomNode.tsx"]
1Z["MissionPanel.tsx"]
20["MappingPanel.tsx"]
21["SourcePanel.tsx"]
22["RatingPanel.tsx"]
end
subgraph T["hooks"]
U["useApi.ts"]
end
V["api-config.ts"]
subgraph X["context"]
Y["SecurityContext.tsx"]
1K["WorkspaceContext.tsx"]
end
23["i18n.ts"]
2G["main.tsx"]
2H["index.css"]
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
subgraph H["framer-motion@12.38.0_react-dom@18.3.1_react@18.3.1__react@18.3.1"]
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
subgraph 1E["react-i18next@17.0.7_i18next@26.1.0_typescript@5.9.3__react-dom@18.3.1_react@18.3.1__react@18.3.1_typescript@5.9.3"]
subgraph 1F["node_modules"]
subgraph 1G["react-i18next"]
subgraph 1H["dist"]
subgraph 1I["es"]
1J["index.js"]
end
end
end
end
end
subgraph 1L["reactflow@11.11.4_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1"]
subgraph 1M["node_modules"]
subgraph 1N["reactflow"]
subgraph 1O["dist"]
subgraph 1P["esm"]
1Q["index.mjs"]
end
1X["style.css"]
end
end
end
end
subgraph 24["i18next@26.1.0_typescript@5.9.3"]
subgraph 25["node_modules"]
subgraph 26["i18next"]
subgraph 27["dist"]
subgraph 28["esm"]
29["i18next.js"]
end
end
end
end
end
subgraph 2A["i18next-browser-languagedetector@8.2.1"]
subgraph 2B["node_modules"]
subgraph 2C["i18next-browser-languagedetector"]
subgraph 2D["dist"]
subgraph 2E["esm"]
2F["i18nextBrowserLanguageDetector.js"]
end
end
end
end
end
subgraph 2I["react-dom@18.3.1_react@18.3.1"]
subgraph 2J["node_modules"]
subgraph 2K["react-dom"]
2L["client.js"]
end
end
end
subgraph 2U["@fastify+cors@8.5.0"]
subgraph 2V["node_modules"]
subgraph 2W["@fastify"]
subgraph 2X["cors"]
2Y["index.js"]
end
end
end
end
subgraph 2Z["dotenv@16.6.1"]
subgraph 30["node_modules"]
subgraph 31["dotenv"]
subgraph 32["lib"]
33["main.js"]
end
end
end
end
subgraph 34["dotenv-expand@11.0.7"]
subgraph 35["node_modules"]
subgraph 36["dotenv-expand"]
subgraph 37["lib"]
38["main.js"]
end
end
end
end
subgraph 39["drizzle-orm@0.45.2_postgres@3.4.9"]
subgraph 3A["node_modules"]
subgraph 3B["drizzle-orm"]
subgraph 3C["postgres-js"]
3D["index.js"]
end
5J["index.js"]
subgraph 5L["pg-core"]
5M["index.js"]
end
end
end
end
subgraph 3E["fastify@4.29.1"]
subgraph 3F["node_modules"]
subgraph 3G["fastify"]
3H["fastify.js"]
end
end
end
subgraph 3I["postgres@3.4.9"]
subgraph 3J["node_modules"]
subgraph 3K["postgres"]
subgraph 3L["src"]
3M["index.js"]
end
end
end
end
subgraph 60["vitest@1.6.1_@types+node@25.7.0"]
subgraph 61["node_modules"]
subgraph 62["vitest"]
subgraph 63["dist"]
64["index.js"]
68["config.cjs"]
end
end
end
end
subgraph 8I["drizzle-kit@0.31.10"]
subgraph 8J["node_modules"]
subgraph 8K["drizzle-kit"]
8L["index.mjs"]
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
14["errors.ts"]
15["governance.ts"]
16["node.ts"]
17["mapping.ts"]
18["rating.ts"]
19["security.ts"]
1A["source.ts"]
1B["workspace.ts"]
end
subgraph 6D["coverage"]
6E["block-navigation.js"]
6F["prettify.js"]
6G["sorter.js"]
end
subgraph 6H["test"]
6I["domain-smoke.test.ts"]
6J["node-invariants.test.ts"]
6K["source-rating.test.ts"]
6L["workspace.test.ts"]
end
6M["vitest.config.ts"]
end
subgraph 2M["api"]
subgraph 2N["coverage"]
2O["block-navigation.js"]
2P["prettify.js"]
2Q["sorter.js"]
end
subgraph 2R["src"]
2S["bin.ts"]
2T["server.ts"]
3N["mock-data.ts"]
subgraph 3O["routes"]
3P["adr.routes.ts"]
51["governance.routes.ts"]
52["mapping.routes.ts"]
55["mcp.routes.ts"]
56["rating.routes.ts"]
57["security.routes.ts"]
58["source.routes.ts"]
59["workspace.routes.ts"]
end
subgraph 53["dto"]
54["index.ts"]
end
5X["index.ts"]
end
subgraph 5Y["test"]
5Z["adr.test.ts"]
65["api.test.ts"]
end
66["vitest.config.ts"]
end
subgraph 3Q["application"]
subgraph 3R["src"]
3S["index.ts"]
3T["mapping-processor.ts"]
subgraph 45["use-cases"]
46["add-edge.ts"]
4D["add-node.ts"]
4E["add-source.ts"]
4F["adr-use-cases.ts"]
4G["apply-patch.ts"]
4H["apply-retention.ts"]
4I["assess-readiness.ts"]
4J["cast-vote.ts"]
4K["create-workspace.ts"]
4L["get-mapping-run.ts"]
4M["get-node-ratings.ts"]
4N["get-readiness.ts"]
4O["get-trace.ts"]
4P["get-workspace-graph.ts"]
4Q["list-mapping-runs.ts"]
4R["list-patches.ts"]
4S["list-sources.ts"]
4T["list-workspaces.ts"]
4U["patch-node.ts"]
4V["patch-workspace.ts"]
4W["propose-patch.ts"]
4X["rate-node.ts"]
4Y["redact-node.ts"]
4Z["start-mapping-run.ts"]
50["submit-claim.ts"]
end
end
subgraph 69["test"]
6A["create-workspace.test.ts"]
6B["use-cases.test.ts"]
end
6C["vitest.config.ts"]
end
subgraph 3U["ports"]
subgraph 3V["src"]
3W["index.ts"]
3X["adr.repository.port.ts"]
3Y["domain.repository.port.ts"]
3Z["governance.port.ts"]
40["graph.repository.port.ts"]
41["mapping.repository.port.ts"]
42["mcp.port.ts"]
43["outbox.repository.port.ts"]
44["security.port.ts"]
end
end
subgraph 48["observability"]
subgraph 49["src"]
4A["index.ts"]
4B["audit.ts"]
4C["tracer.ts"]
end
end
subgraph 5A["infrastructure-mcp"]
subgraph 5B["src"]
5C["index.ts"]
5D["mcp-app.registry.ts"]
5E["mcp-bridge.ts"]
end
subgraph 6N["dist"]
subgraph 6O["domain"]
subgraph 6P["src"]
6Q["adr.d.ts"]
6R["adr.js"]
6S["errors.d.ts"]
6T["errors.js"]
6U["governance.d.ts"]
6V["node.js"]
6W["governance.js"]
6X["index.d.ts"]
6Y["mapping.js"]
6Z["rating.js"]
70["security.js"]
71["source.js"]
72["workspace.js"]
73["index.js"]
74["mapping.d.ts"]
75["mission.d.ts"]
76["mission.js"]
77["node.d.ts"]
78["rating.d.ts"]
79["security.d.ts"]
7A["source.d.ts"]
7B["workspace.d.ts"]
end
end
7C["index.d.ts"]
7D["mcp-app.registry.js"]
7E["mcp-bridge.js"]
7F["index.js"]
subgraph 7G["infrastructure-mcp"]
subgraph 7H["src"]
7I["index.d.ts"]
7J["mcp-app.registry.js"]
7K["mcp-bridge.js"]
7L["index.js"]
7M["mcp-app.registry.d.ts"]
7N["mcp-bridge.d.ts"]
end
end
7O["mcp-app.registry.d.ts"]
7R["mcp-bridge.d.ts"]
subgraph 7S["ports"]
subgraph 7T["src"]
7U["adr.repository.port.d.ts"]
7V["adr.repository.port.js"]
7W["domain.repository.port.d.ts"]
7X["domain.repository.port.js"]
7Y["governance.port.d.ts"]
7Z["governance.port.js"]
80["graph.repository.port.d.ts"]
81["graph.repository.port.js"]
82["index.d.ts"]
83["mapping.repository.port.js"]
84["mcp.port.js"]
85["outbox.repository.port.js"]
86["security.port.js"]
87["index.js"]
88["mapping.repository.port.d.ts"]
89["mcp.port.d.ts"]
8A["outbox.repository.port.d.ts"]
8B["security.port.d.ts"]
end
end
end
subgraph 8C["test"]
8D["smoke.test.ts"]
end
end
subgraph 5F["infrastructure-postgres"]
subgraph 5G["src"]
5H["index.ts"]
5I["graph.repository.ts"]
5K["schema.ts"]
5N["identity.repository.ts"]
5O["rating.repository.ts"]
5P["source.repository.ts"]
5Q["workspace.repository.ts"]
8M["manual_migrate.ts"]
8N["seed.ts"]
end
8H["drizzle.config.ts"]
end
subgraph 5R["infrastructure-runtime"]
subgraph 5S["src"]
5T["index.ts"]
5U["in-memory-governance.repository.ts"]
5V["in-memory-repositories.ts"]
5W["security-mocks.ts"]
end
end
subgraph 8E["infrastructure-models"]
subgraph 8F["src"]
8G["index.ts"]
end
end
subgraph 8O["testing"]
subgraph 8P["src"]
8Q["fixtures.ts"]
8R["index.ts"]
end
end
end
47["crypto"]
67["path"]
subgraph 7P["@epos"]
7Q["ports"]
end
4-->6
8-->G
8-->1D
8-->1R
8-->1S
8-->1V
8-->1K
8-->E
G-->U
G-->W
G-->1C
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
12-->15
12-->17
12-->16
12-->18
12-->19
12-->1A
12-->1B
15-->14
15-->16
16-->14
1B-->14
1C-->V
1C-->M
1C-->S
1C-->E
1D-->1K
1D-->M
1D-->S
1D-->E
1D-->1J
1K-->12
1K-->E
1K-->1Q
1R-->1K
1R-->M
1R-->S
1R-->E
1S-->V
1S-->Y
1S-->1K
1S-->U
1S-->1T
1S-->1U
1S-->12
1S-->M
1S-->S
1S-->E
1S-->1J
1T-->M
1T-->S
1T-->E
1U-->M
1U-->S
1U-->E
1U-->1J
1V-->V
1V-->Y
1V-->1K
1V-->1W
1V-->1Z
1V-->22
1V-->12
1V-->M
1V-->S
1V-->E
1W-->1K
1W-->U
1W-->1Y
1W-->S
1W-->E
1W-->1Q
1W-->1X
1Y-->S
1Y-->E
1Y-->1Q
1Z-->W
1Z-->20
1Z-->21
1Z-->12
1Z-->M
1Z-->S
1Z-->E
20-->V
20-->12
20-->M
20-->S
20-->E
21-->V
21-->M
21-->S
21-->E
22-->V
22-->S
22-->E
23-->29
23-->2F
23-->1J
2G-->8
2G-->Y
2G-->1K
2G-->23
2G-->2H
2G-->E
2G-->2L
2G-->1X
2S-->2T
2T-->3N
2T-->3P
2T-->51
2T-->52
2T-->55
2T-->56
2T-->57
2T-->58
2T-->59
2T-->3S
2T-->5C
2T-->5H
2T-->5T
2T-->3W
2T-->2Y
2T-->33
2T-->38
2T-->3D
2T-->3H
2T-->3M
3N-->12
3P-->3S
3P-->3H
3S-->3T
3S-->46
3S-->4D
3S-->4E
3S-->4F
3S-->4G
3S-->4H
3S-->4I
3S-->4J
3S-->4K
3S-->4L
3S-->4M
3S-->4N
3S-->4O
3S-->4P
3S-->4Q
3S-->4R
3S-->4S
3S-->4T
3S-->4U
3S-->4V
3S-->4W
3S-->4X
3S-->4Y
3S-->4Z
3S-->50
3T-->3W
3W-->3X
3W-->3Y
3W-->3Z
3W-->40
3W-->41
3W-->42
3W-->43
3W-->44
3X-->12
3Y-->12
3Z-->12
40-->12
41-->12
44-->12
46-->12
46-->4A
46-->3W
46-->47
4A-->4B
4A-->4C
4D-->12
4D-->4A
4D-->3W
4D-->47
4E-->12
4E-->3W
4E-->47
4F-->12
4F-->3W
4G-->12
4G-->3W
4G-->47
4H-->12
4H-->3W
4I-->12
4I-->3W
4I-->47
4J-->4G
4J-->4A
4J-->3W
4J-->47
4K-->12
4K-->4A
4K-->3W
4K-->47
4L-->12
4L-->3W
4M-->12
4M-->3W
4N-->12
4N-->3W
4O-->12
4O-->3W
4P-->12
4P-->3W
4Q-->12
4Q-->3W
4R-->12
4R-->3W
4S-->12
4S-->3W
4T-->12
4T-->3W
4U-->12
4U-->3W
4V-->12
4V-->3W
4W-->12
4W-->3W
4W-->47
4X-->12
4X-->3W
4X-->47
4Y-->12
4Y-->3W
4Z-->12
4Z-->3W
4Z-->47
50-->12
50-->3W
50-->47
51-->3S
51-->3W
51-->3H
52-->54
52-->3S
52-->3H
54-->12
55-->3W
55-->3H
56-->3S
56-->12
56-->3H
57-->3S
57-->12
57-->3W
57-->3H
58-->3S
58-->12
58-->3H
59-->54
59-->3S
59-->3H
5C-->5D
5C-->5E
5D-->3W
5E-->3W
5H-->5I
5H-->5N
5H-->5O
5H-->5K
5H-->5P
5H-->5Q
5I-->5K
5I-->12
5I-->3W
5I-->5J
5I-->3D
5K-->5M
5N-->5K
5N-->12
5N-->3W
5N-->5J
5N-->3D
5O-->5K
5O-->12
5O-->3W
5O-->5J
5O-->3D
5P-->5K
5P-->12
5P-->3W
5P-->5J
5P-->3D
5Q-->5K
5Q-->12
5Q-->3W
5Q-->5J
5Q-->3D
5T-->5U
5T-->5V
5T-->5W
5U-->12
5U-->3W
5V-->12
5V-->3W
5W-->12
5W-->3W
5W-->47
5X-->2T
5Z-->2T
5Z-->3H
5Z-->64
65-->2T
65-->12
65-->3W
65-->3H
65-->64
66-->67
66-->68
6A-->4K
6A-->3W
6A-->64
6B-->46
6B-->4D
6B-->4J
6B-->4K
6B-->4P
6B-->4T
6B-->4U
6B-->50
6B-->12
6B-->3W
6B-->64
6C-->67
6C-->68
6I-->12
6I-->64
6J-->12
6J-->64
6K-->12
6K-->64
6L-->14
6L-->1B
6L-->64
6M-->68
6U-->6V
6V-->6T
6W-->6T
6X-->6R
6X-->6T
6X-->6W
6X-->6Y
6X-->6V
6X-->6Z
6X-->70
6X-->71
6X-->72
72-->6T
73-->6R
73-->6T
73-->6W
73-->6Y
73-->6V
73-->6Z
73-->70
73-->71
73-->72
7C-->7D
7C-->7E
7F-->7D
7F-->7E
7I-->7J
7I-->7K
7L-->7J
7L-->7K
7M-->3W
7N-->3W
7O-->7Q
7R-->7Q
7U-->12
7W-->12
7Y-->12
80-->12
82-->7V
82-->7X
82-->7Z
82-->81
82-->83
82-->84
82-->85
82-->86
87-->7V
87-->7X
87-->7Z
87-->81
87-->83
87-->84
87-->85
87-->86
88-->12
8B-->12
8D-->64
8H-->33
8H-->38
8H-->8L
8M-->33
8M-->38
8M-->3M
8N-->5K
8N-->33
8N-->38
8N-->3D
8N-->3M
8Q-->12
8R-->8Q
```

## Детальная карта компонентов
> Полный граф зависимостей всех файлов проекта

```mermaid
flowchart LR

subgraph 0["apps"]
subgraph 1["demo-shell"]
subgraph 2["dist"]
subgraph 3["assets"]
4["index-COAmHwb-.js"]
end
end
subgraph 7["src"]
8["App.tsx"]
subgraph F["components"]
G["ADRReviewWorkspace.tsx"]
W["GovernancePanel.tsx"]
1C["ReadinessPanel.tsx"]
1D["ArchiveView.tsx"]
1R["CommandPalette.tsx"]
1S["Sidebar.tsx"]
1T["Modal.tsx"]
1U["SidebarItem.tsx"]
1V["WorkspaceRoom.tsx"]
1W["GraphCanvas.tsx"]
1Y["CustomNode.tsx"]
1Z["MissionPanel.tsx"]
20["MappingPanel.tsx"]
21["SourcePanel.tsx"]
22["RatingPanel.tsx"]
end
subgraph T["hooks"]
U["useApi.ts"]
end
V["api-config.ts"]
subgraph X["context"]
Y["SecurityContext.tsx"]
1K["WorkspaceContext.tsx"]
end
23["i18n.ts"]
2G["main.tsx"]
2H["index.css"]
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
subgraph H["framer-motion@12.38.0_react-dom@18.3.1_react@18.3.1__react@18.3.1"]
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
subgraph 1E["react-i18next@17.0.7_i18next@26.1.0_typescript@5.9.3__react-dom@18.3.1_react@18.3.1__react@18.3.1_typescript@5.9.3"]
subgraph 1F["node_modules"]
subgraph 1G["react-i18next"]
subgraph 1H["dist"]
subgraph 1I["es"]
1J["index.js"]
end
end
end
end
end
subgraph 1L["reactflow@11.11.4_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1"]
subgraph 1M["node_modules"]
subgraph 1N["reactflow"]
subgraph 1O["dist"]
subgraph 1P["esm"]
1Q["index.mjs"]
end
1X["style.css"]
end
end
end
end
subgraph 24["i18next@26.1.0_typescript@5.9.3"]
subgraph 25["node_modules"]
subgraph 26["i18next"]
subgraph 27["dist"]
subgraph 28["esm"]
29["i18next.js"]
end
end
end
end
end
subgraph 2A["i18next-browser-languagedetector@8.2.1"]
subgraph 2B["node_modules"]
subgraph 2C["i18next-browser-languagedetector"]
subgraph 2D["dist"]
subgraph 2E["esm"]
2F["i18nextBrowserLanguageDetector.js"]
end
end
end
end
end
subgraph 2I["react-dom@18.3.1_react@18.3.1"]
subgraph 2J["node_modules"]
subgraph 2K["react-dom"]
2L["client.js"]
end
end
end
subgraph 2U["@fastify+cors@8.5.0"]
subgraph 2V["node_modules"]
subgraph 2W["@fastify"]
subgraph 2X["cors"]
2Y["index.js"]
end
end
end
end
subgraph 2Z["dotenv@16.6.1"]
subgraph 30["node_modules"]
subgraph 31["dotenv"]
subgraph 32["lib"]
33["main.js"]
end
end
end
end
subgraph 34["dotenv-expand@11.0.7"]
subgraph 35["node_modules"]
subgraph 36["dotenv-expand"]
subgraph 37["lib"]
38["main.js"]
end
end
end
end
subgraph 39["drizzle-orm@0.45.2_postgres@3.4.9"]
subgraph 3A["node_modules"]
subgraph 3B["drizzle-orm"]
subgraph 3C["postgres-js"]
3D["index.js"]
end
5J["index.js"]
subgraph 5L["pg-core"]
5M["index.js"]
end
end
end
end
subgraph 3E["fastify@4.29.1"]
subgraph 3F["node_modules"]
subgraph 3G["fastify"]
3H["fastify.js"]
end
end
end
subgraph 3I["postgres@3.4.9"]
subgraph 3J["node_modules"]
subgraph 3K["postgres"]
subgraph 3L["src"]
3M["index.js"]
end
end
end
end
subgraph 60["vitest@1.6.1_@types+node@25.7.0"]
subgraph 61["node_modules"]
subgraph 62["vitest"]
subgraph 63["dist"]
64["index.js"]
68["config.cjs"]
end
end
end
end
subgraph 8I["drizzle-kit@0.31.10"]
subgraph 8J["node_modules"]
subgraph 8K["drizzle-kit"]
8L["index.mjs"]
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
14["errors.ts"]
15["governance.ts"]
16["node.ts"]
17["mapping.ts"]
18["rating.ts"]
19["security.ts"]
1A["source.ts"]
1B["workspace.ts"]
end
subgraph 6D["coverage"]
6E["block-navigation.js"]
6F["prettify.js"]
6G["sorter.js"]
end
subgraph 6H["test"]
6I["domain-smoke.test.ts"]
6J["node-invariants.test.ts"]
6K["source-rating.test.ts"]
6L["workspace.test.ts"]
end
6M["vitest.config.ts"]
end
subgraph 2M["api"]
subgraph 2N["coverage"]
2O["block-navigation.js"]
2P["prettify.js"]
2Q["sorter.js"]
end
subgraph 2R["src"]
2S["bin.ts"]
2T["server.ts"]
3N["mock-data.ts"]
subgraph 3O["routes"]
3P["adr.routes.ts"]
51["governance.routes.ts"]
52["mapping.routes.ts"]
55["mcp.routes.ts"]
56["rating.routes.ts"]
57["security.routes.ts"]
58["source.routes.ts"]
59["workspace.routes.ts"]
end
subgraph 53["dto"]
54["index.ts"]
end
5X["index.ts"]
end
subgraph 5Y["test"]
5Z["adr.test.ts"]
65["api.test.ts"]
end
66["vitest.config.ts"]
end
subgraph 3Q["application"]
subgraph 3R["src"]
3S["index.ts"]
3T["mapping-processor.ts"]
subgraph 45["use-cases"]
46["add-edge.ts"]
4D["add-node.ts"]
4E["add-source.ts"]
4F["adr-use-cases.ts"]
4G["apply-patch.ts"]
4H["apply-retention.ts"]
4I["assess-readiness.ts"]
4J["cast-vote.ts"]
4K["create-workspace.ts"]
4L["get-mapping-run.ts"]
4M["get-node-ratings.ts"]
4N["get-readiness.ts"]
4O["get-trace.ts"]
4P["get-workspace-graph.ts"]
4Q["list-mapping-runs.ts"]
4R["list-patches.ts"]
4S["list-sources.ts"]
4T["list-workspaces.ts"]
4U["patch-node.ts"]
4V["patch-workspace.ts"]
4W["propose-patch.ts"]
4X["rate-node.ts"]
4Y["redact-node.ts"]
4Z["start-mapping-run.ts"]
50["submit-claim.ts"]
end
end
subgraph 69["test"]
6A["create-workspace.test.ts"]
6B["use-cases.test.ts"]
end
6C["vitest.config.ts"]
end
subgraph 3U["ports"]
subgraph 3V["src"]
3W["index.ts"]
3X["adr.repository.port.ts"]
3Y["domain.repository.port.ts"]
3Z["governance.port.ts"]
40["graph.repository.port.ts"]
41["mapping.repository.port.ts"]
42["mcp.port.ts"]
43["outbox.repository.port.ts"]
44["security.port.ts"]
end
end
subgraph 48["observability"]
subgraph 49["src"]
4A["index.ts"]
4B["audit.ts"]
4C["tracer.ts"]
end
end
subgraph 5A["infrastructure-mcp"]
subgraph 5B["src"]
5C["index.ts"]
5D["mcp-app.registry.ts"]
5E["mcp-bridge.ts"]
end
subgraph 6N["dist"]
subgraph 6O["domain"]
subgraph 6P["src"]
6Q["adr.d.ts"]
6R["adr.js"]
6S["errors.d.ts"]
6T["errors.js"]
6U["governance.d.ts"]
6V["node.js"]
6W["governance.js"]
6X["index.d.ts"]
6Y["mapping.js"]
6Z["rating.js"]
70["security.js"]
71["source.js"]
72["workspace.js"]
73["index.js"]
74["mapping.d.ts"]
75["mission.d.ts"]
76["mission.js"]
77["node.d.ts"]
78["rating.d.ts"]
79["security.d.ts"]
7A["source.d.ts"]
7B["workspace.d.ts"]
end
end
7C["index.d.ts"]
7D["mcp-app.registry.js"]
7E["mcp-bridge.js"]
7F["index.js"]
subgraph 7G["infrastructure-mcp"]
subgraph 7H["src"]
7I["index.d.ts"]
7J["mcp-app.registry.js"]
7K["mcp-bridge.js"]
7L["index.js"]
7M["mcp-app.registry.d.ts"]
7N["mcp-bridge.d.ts"]
end
end
7O["mcp-app.registry.d.ts"]
7R["mcp-bridge.d.ts"]
subgraph 7S["ports"]
subgraph 7T["src"]
7U["adr.repository.port.d.ts"]
7V["adr.repository.port.js"]
7W["domain.repository.port.d.ts"]
7X["domain.repository.port.js"]
7Y["governance.port.d.ts"]
7Z["governance.port.js"]
80["graph.repository.port.d.ts"]
81["graph.repository.port.js"]
82["index.d.ts"]
83["mapping.repository.port.js"]
84["mcp.port.js"]
85["outbox.repository.port.js"]
86["security.port.js"]
87["index.js"]
88["mapping.repository.port.d.ts"]
89["mcp.port.d.ts"]
8A["outbox.repository.port.d.ts"]
8B["security.port.d.ts"]
end
end
end
subgraph 8C["test"]
8D["smoke.test.ts"]
end
end
subgraph 5F["infrastructure-postgres"]
subgraph 5G["src"]
5H["index.ts"]
5I["graph.repository.ts"]
5K["schema.ts"]
5N["identity.repository.ts"]
5O["rating.repository.ts"]
5P["source.repository.ts"]
5Q["workspace.repository.ts"]
8M["manual_migrate.ts"]
8N["seed.ts"]
end
8H["drizzle.config.ts"]
end
subgraph 5R["infrastructure-runtime"]
subgraph 5S["src"]
5T["index.ts"]
5U["in-memory-governance.repository.ts"]
5V["in-memory-repositories.ts"]
5W["security-mocks.ts"]
end
end
subgraph 8E["infrastructure-models"]
subgraph 8F["src"]
8G["index.ts"]
end
end
subgraph 8O["testing"]
subgraph 8P["src"]
8Q["fixtures.ts"]
8R["index.ts"]
end
end
end
47["crypto"]
67["path"]
subgraph 7P["@epos"]
7Q["ports"]
end
4-->6
8-->G
8-->1D
8-->1R
8-->1S
8-->1V
8-->1K
8-->E
G-->U
G-->W
G-->1C
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
12-->15
12-->17
12-->16
12-->18
12-->19
12-->1A
12-->1B
15-->14
15-->16
16-->14
1B-->14
1C-->V
1C-->M
1C-->S
1C-->E
1D-->1K
1D-->M
1D-->S
1D-->E
1D-->1J
1K-->12
1K-->E
1K-->1Q
1R-->1K
1R-->M
1R-->S
1R-->E
1S-->V
1S-->Y
1S-->1K
1S-->U
1S-->1T
1S-->1U
1S-->12
1S-->M
1S-->S
1S-->E
1S-->1J
1T-->M
1T-->S
1T-->E
1U-->M
1U-->S
1U-->E
1U-->1J
1V-->V
1V-->Y
1V-->1K
1V-->1W
1V-->1Z
1V-->22
1V-->12
1V-->M
1V-->S
1V-->E
1W-->1K
1W-->U
1W-->1Y
1W-->S
1W-->E
1W-->1Q
1W-->1X
1Y-->S
1Y-->E
1Y-->1Q
1Z-->W
1Z-->20
1Z-->21
1Z-->12
1Z-->M
1Z-->S
1Z-->E
20-->V
20-->12
20-->M
20-->S
20-->E
21-->V
21-->M
21-->S
21-->E
22-->V
22-->S
22-->E
23-->29
23-->2F
23-->1J
2G-->8
2G-->Y
2G-->1K
2G-->23
2G-->2H
2G-->E
2G-->2L
2G-->1X
2S-->2T
2T-->3N
2T-->3P
2T-->51
2T-->52
2T-->55
2T-->56
2T-->57
2T-->58
2T-->59
2T-->3S
2T-->5C
2T-->5H
2T-->5T
2T-->3W
2T-->2Y
2T-->33
2T-->38
2T-->3D
2T-->3H
2T-->3M
3N-->12
3P-->3S
3P-->3H
3S-->3T
3S-->46
3S-->4D
3S-->4E
3S-->4F
3S-->4G
3S-->4H
3S-->4I
3S-->4J
3S-->4K
3S-->4L
3S-->4M
3S-->4N
3S-->4O
3S-->4P
3S-->4Q
3S-->4R
3S-->4S
3S-->4T
3S-->4U
3S-->4V
3S-->4W
3S-->4X
3S-->4Y
3S-->4Z
3S-->50
3T-->3W
3W-->3X
3W-->3Y
3W-->3Z
3W-->40
3W-->41
3W-->42
3W-->43
3W-->44
3X-->12
3Y-->12
3Z-->12
40-->12
41-->12
44-->12
46-->12
46-->4A
46-->3W
46-->47
4A-->4B
4A-->4C
4D-->12
4D-->4A
4D-->3W
4D-->47
4E-->12
4E-->3W
4E-->47
4F-->12
4F-->3W
4G-->12
4G-->3W
4G-->47
4H-->12
4H-->3W
4I-->12
4I-->3W
4I-->47
4J-->4G
4J-->4A
4J-->3W
4J-->47
4K-->12
4K-->4A
4K-->3W
4K-->47
4L-->12
4L-->3W
4M-->12
4M-->3W
4N-->12
4N-->3W
4O-->12
4O-->3W
4P-->12
4P-->3W
4Q-->12
4Q-->3W
4R-->12
4R-->3W
4S-->12
4S-->3W
4T-->12
4T-->3W
4U-->12
4U-->3W
4V-->12
4V-->3W
4W-->12
4W-->3W
4W-->47
4X-->12
4X-->3W
4X-->47
4Y-->12
4Y-->3W
4Z-->12
4Z-->3W
4Z-->47
50-->12
50-->3W
50-->47
51-->3S
51-->3W
51-->3H
52-->54
52-->3S
52-->3H
54-->12
55-->3W
55-->3H
56-->3S
56-->12
56-->3H
57-->3S
57-->12
57-->3W
57-->3H
58-->3S
58-->12
58-->3H
59-->54
59-->3S
59-->3H
5C-->5D
5C-->5E
5D-->3W
5E-->3W
5H-->5I
5H-->5N
5H-->5O
5H-->5K
5H-->5P
5H-->5Q
5I-->5K
5I-->12
5I-->3W
5I-->5J
5I-->3D
5K-->5M
5N-->5K
5N-->12
5N-->3W
5N-->5J
5N-->3D
5O-->5K
5O-->12
5O-->3W
5O-->5J
5O-->3D
5P-->5K
5P-->12
5P-->3W
5P-->5J
5P-->3D
5Q-->5K
5Q-->12
5Q-->3W
5Q-->5J
5Q-->3D
5T-->5U
5T-->5V
5T-->5W
5U-->12
5U-->3W
5V-->12
5V-->3W
5W-->12
5W-->3W
5W-->47
5X-->2T
5Z-->2T
5Z-->3H
5Z-->64
65-->2T
65-->12
65-->3W
65-->3H
65-->64
66-->67
66-->68
6A-->4K
6A-->3W
6A-->64
6B-->46
6B-->4D
6B-->4J
6B-->4K
6B-->4P
6B-->4T
6B-->4U
6B-->50
6B-->12
6B-->3W
6B-->64
6C-->67
6C-->68
6I-->12
6I-->64
6J-->12
6J-->64
6K-->12
6K-->64
6L-->14
6L-->1B
6L-->64
6M-->68
6U-->6V
6V-->6T
6W-->6T
6X-->6R
6X-->6T
6X-->6W
6X-->6Y
6X-->6V
6X-->6Z
6X-->70
6X-->71
6X-->72
72-->6T
73-->6R
73-->6T
73-->6W
73-->6Y
73-->6V
73-->6Z
73-->70
73-->71
73-->72
7C-->7D
7C-->7E
7F-->7D
7F-->7E
7I-->7J
7I-->7K
7L-->7J
7L-->7K
7M-->3W
7N-->3W
7O-->7Q
7R-->7Q
7U-->12
7W-->12
7Y-->12
80-->12
82-->7V
82-->7X
82-->7Z
82-->81
82-->83
82-->84
82-->85
82-->86
87-->7V
87-->7X
87-->7Z
87-->81
87-->83
87-->84
87-->85
87-->86
88-->12
8B-->12
8D-->64
8H-->33
8H-->38
8H-->8L
8M-->33
8M-->38
8M-->3M
8N-->5K
8N-->33
8N-->38
8N-->3D
8N-->3M
8Q-->12
8R-->8Q
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
| `demo-shell/src/App.tsx` | 73 | 1.9 KB | — |
| `demo-shell/src/components/ADRReviewWorkspace.tsx` | 738 | 22.9 KB | — |
| `demo-shell/src/components/ArchiveView.tsx` | 247 | 7.4 KB | — |
| `demo-shell/src/components/CommandPalette.tsx` | 341 | 9.1 KB | — |
| `demo-shell/src/components/CustomNode.tsx` | 169 | 4.4 KB | — |
| `demo-shell/src/components/GovernancePanel.tsx` | 498 | 14.7 KB | — |
| `demo-shell/src/components/GraphCanvas.tsx` | 579 | 16.2 KB | — |
| `demo-shell/src/components/MappingPanel.tsx` | 270 | 7.8 KB | — |
| `demo-shell/src/components/MissionPanel.tsx` | 303 | 8.7 KB | — |
| `demo-shell/src/components/Modal.tsx` | 100 | 2.7 KB | — |
| `demo-shell/src/components/RatingPanel.tsx` | 234 | 6.2 KB | — |
| `demo-shell/src/components/ReadinessPanel.tsx` | 403 | 11.7 KB | — |
| `demo-shell/src/components/Sidebar.tsx` | 774 | 24.7 KB | — |
| `demo-shell/src/components/SidebarItem.tsx` | 278 | 7.6 KB | — |
| `demo-shell/src/components/SourcePanel.tsx` | 232 | 6.9 KB | — |
| `demo-shell/src/components/WorkspaceRoom.tsx` | 665 | 21.5 KB | — |
| `demo-shell/src/context/SecurityContext.tsx` | 68 | 1.6 KB | — |
| `demo-shell/src/context/WorkspaceContext.tsx` | 145 | 3.8 KB | — |
| `demo-shell/src/hooks/useApi.ts` | 43 | 1.1 KB | — |
| `demo-shell/src/i18n.ts` | 99 | 3.4 KB | — |
| `demo-shell/src/main.tsx` | 20 | 0.5 KB | — |

### `demo-shell/src/api-config.ts`
- **Экспорт**: `API_BASE_URL`

### `demo-shell/src/components/ArchiveView.tsx`
- **Экспорт**: `ArchiveView`
- **Зависимости**:
  - `../context/WorkspaceContext` → useWorkspace

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

### `demo-shell/src/components/Modal.tsx`
- **Экспорт**: `Modal`
- **Зависимости**:

### `demo-shell/src/components/RatingPanel.tsx`
- **Экспорт**: `RatingPanel`
- **Зависимости**:
  - `../api-config` → API_BASE_URL

### `demo-shell/src/components/ReadinessPanel.tsx`
- **Экспорт**: `ReadinessPanel`
- **Зависимости**:
  - `../api-config` → API_BASE_URL

### `demo-shell/src/components/SidebarItem.tsx`
- **Экспорт**: `SidebarItemProps`, `SidebarItem`
- **Зависимости**:

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
  - `@epios/domain` → Workspace, WorkspaceStatus

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
| `api/src/mock-data.ts` | 563 | 17.3 KB | Mock data factory for demo/development mode. |
| `api/src/routes/adr.routes.ts` | 26 | 0.6 KB | — |
| `api/src/routes/governance.routes.ts` | 126 | 3.7 KB | — |
| `api/src/routes/mapping.routes.ts` | 95 | 2.8 KB | — |
| `api/src/routes/mcp.routes.ts` | 38 | 1.0 KB | — |
| `api/src/routes/rating.routes.ts` | 30 | 0.9 KB | — |
| `api/src/routes/security.routes.ts` | 66 | 2.0 KB | — |
| `api/src/routes/source.routes.ts` | 34 | 0.9 KB | — |
| `api/src/routes/workspace.routes.ts` | 52 | 1.4 KB | — |
| `api/src/server.ts` | 264 | 8.8 KB | — |
| `api/test/adr.test.ts` | 48 | 1.2 KB | — |
| `api/test/api.test.ts` | 292 | 7.6 KB | — |
| `api/vitest.config.ts` | 42 | 1.1 KB | — |
| `application/src/index.ts` | 27 | 1.2 KB | — |
| `application/src/mapping-processor.ts` | 93 | 2.4 KB | — |
| `application/src/use-cases/add-edge.ts` | 47 | 1.3 KB | — |
| `application/src/use-cases/add-node.ts` | 55 | 1.4 KB | — |
| `application/src/use-cases/add-source.ts` | 29 | 0.7 KB | — |
| `application/src/use-cases/adr-use-cases.ts` | 19 | 0.5 KB | — |
| `application/src/use-cases/apply-patch.ts` | 73 | 2.1 KB | — |
| `application/src/use-cases/apply-retention.ts` | 60 | 1.7 KB | — |
| `application/src/use-cases/assess-readiness.ts` | 90 | 2.8 KB | — |
| `application/src/use-cases/cast-vote.ts` | 114 | 3.5 KB | — |
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
| `application/src/use-cases/patch-node.ts` | 35 | 1.2 KB | — |
| `application/src/use-cases/patch-workspace.ts` | 36 | 1.1 KB | — |
| `application/src/use-cases/propose-patch.ts` | 55 | 1.5 KB | — |
| `application/src/use-cases/rate-node.ts` | 29 | 0.7 KB | — |
| `application/src/use-cases/redact-node.ts` | 67 | 1.7 KB | — |
| `application/src/use-cases/start-mapping-run.ts` | 43 | 1.0 KB | — |
| `application/src/use-cases/submit-claim.ts` | 49 | 1.2 KB | — |
| `application/test/create-workspace.test.ts` | 63 | 1.6 KB | — |
| `application/test/use-cases.test.ts` | 375 | 11.4 KB | — |
| `application/vitest.config.ts` | 28 | 0.6 KB | — |
| `domain/coverage/block-navigation.js` | 88 | 2.6 KB | — |
| `domain/coverage/prettify.js` | 3 | 17.2 KB | — |
| `domain/coverage/sorter.js` | 211 | 6.6 KB | — |
| `domain/src/adr.ts` | 42 | 0.7 KB | — |
| `domain/src/errors.ts` | 21 | 0.5 KB | — |
| `domain/src/governance.ts` | 237 | 5.1 KB | A Claim in EPIOS is a node that undergoes a formal governance process. |
| `domain/src/index.ts` | 10 | 0.3 KB | — |
| `domain/src/mapping.ts` | 15 | 0.3 KB | — |
| `domain/src/node.ts` | 133 | 2.8 KB | — |
| `domain/src/rating.ts` | 11 | 0.2 KB | — |
| `domain/src/security.ts` | 40 | 0.8 KB | — |
| `domain/src/source.ts` | 11 | 0.2 KB | — |
| `domain/src/workspace.ts` | 190 | 4.3 KB | Returns a plain object representation for persistence/serialization. |
| `domain/test/domain-smoke.test.ts` | 51 | 1.3 KB | — |
| `domain/test/node-invariants.test.ts` | 51 | 1.2 KB | — |
| `domain/test/source-rating.test.ts` | 33 | 0.8 KB | — |
| `domain/test/workspace.test.ts` | 63 | 1.7 KB | — |
| `domain/vitest.config.ts` | 21 | 0.4 KB | — |
| `infrastructure-mcp/src/index.ts` | 4 | 0.1 KB | — |
| `infrastructure-mcp/src/mcp-app.registry.ts` | 35 | 0.8 KB | — |
| `infrastructure-mcp/src/mcp-bridge.ts` | 64 | 1.6 KB | — |
| `infrastructure-mcp/test/smoke.test.ts` | 8 | 0.2 KB | — |
| `infrastructure-models/src/index.ts` | 3 | 0.1 KB | — |
| `infrastructure-postgres/drizzle.config.ts` | 17 | 0.4 KB | — |
| `infrastructure-postgres/src/graph.repository.ts` | 181 | 5.1 KB | — |
| `infrastructure-postgres/src/identity.repository.ts` | 68 | 1.7 KB | — |
| `infrastructure-postgres/src/index.ts` | 11 | 0.3 KB | — |
| `infrastructure-postgres/src/manual_migrate.ts` | 30 | 0.9 KB | — |
| `infrastructure-postgres/src/rating.repository.ts` | 50 | 1.4 KB | — |
| `infrastructure-postgres/src/schema.ts` | 110 | 3.5 KB | — |
| `infrastructure-postgres/src/seed.ts` | 378 | 13.2 KB | — |
| `infrastructure-postgres/src/source.repository.ts` | 60 | 1.6 KB | — |
| `infrastructure-postgres/src/workspace.repository.ts` | 110 | 3.6 KB | — |
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

### `application/src/use-cases/patch-workspace.ts`
- **Экспорт**: `PatchWorkspaceDto`, `PatchWorkspaceUseCase`
- **Зависимости**:
  - `@epios/ports` → WorkspaceRepositoryPort
  - `@epios/domain` → Workspace, WorkspaceStatus

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
  - `@epios/domain` → Claim, GovernanceProcess, EpistemicNode
  - `@epios/ports` → GraphRepositoryPort, GovernanceRepositoryPort

### `domain/src/adr.ts`
- **Экспорт**: `ADRStatus`, `ADRPriority`, `ADR`, `ADRFlow`

### `domain/src/errors.ts`
- **Экспорт**: `DomainError`, `ValidationError`, `InvalidTransitionError`

### `domain/src/governance.ts`
- **Экспорт**: `ApprovalStatus`, `Vote`, `GovernanceProcessProps`, `GovernanceProcess`, `Claim`, `NodePatchProps`, `NodePatch`, `PatchGovernanceProps`, `PatchGovernance`, `ReadinessStatus`, `ReadinessAssessment`, `ArtifactVersion`, `TraceEvent`
- **Зависимости**:
  - `./errors.js` → ValidationError, InvalidTransitionError
  - `./node.js` → EpistemicNode

### `domain/src/mapping.ts`
- **Экспорт**: `MappingRunStatus`, `MappingRun`

### `domain/src/node.ts`
- **Экспорт**: `NodeType`, `NodeStrength`, `EvidenceRef`, `EpistemicNodeProps`, `EpistemicNode`, `EpistemicEdgeType`, `EpistemicEdge`
- **Зависимости**:
  - `./errors.js` → ValidationError

### `domain/src/rating.ts`
- **Экспорт**: `EpistemicRatingValue`, `Rating`

### `domain/src/security.ts`
- **Экспорт**: `UserRole`, `User`, `Permission`, `RetentionPolicy`, `RedactionRule`, `AuditRecord`

### `domain/src/source.ts`
- **Экспорт**: `SourceType`, `Source`

### `domain/src/workspace.ts`
- **Экспорт**: `WorkspaceStatus`, `WorkspaceMode`, `WorkspaceSensitivity`, `WorkspaceBrief`, `WorkspaceActor`, `WorkspaceProps`, `Workspace`, `assertWorkspaceCanRun`
- **Зависимости**:
  - `./errors.js` → ValidationError, InvalidTransitionError

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
| `DATABASE_URL` | packages/server.ts, packages/drizzle.config.ts, packages/manual_migrate.ts, packages/seed.ts |
| `EPIOS_DATABASE_MODE` | packages/server.ts |
| `FRONTEND_URL` | packages/server.ts |
| `NODE_ENV` | packages/server.ts |
| `PORT` | packages/bin.ts |

## API Реестр

| Метод | Путь | Файл |
|---|---|---|
| `GET` | `/health` | `packages/api/src/server.ts` |
