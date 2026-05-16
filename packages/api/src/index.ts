// API package index
export * from './server.js';

// Re-export core types for consumers (e.g. apps)
export type { 
  User, 
  Assignment, 
  WorkPlace, 
  Workspace, 
  MappingRun 
} from "@epios/domain";

export type {
  McpRequestSchema
} from "@epios/infrastructure-mcp";
