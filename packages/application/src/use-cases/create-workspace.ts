import {
  Workspace,
  WorkspaceBrief,
  WorkspaceActor,
  assertWorkspaceCanRun,
} from "@epios/domain";
import { WorkspaceRepositoryPort } from "@epios/ports";
import { tracer } from "@epios/observability";
import { randomUUID } from "crypto";

export type CreateWorkspaceRequest = {
  title: string;
  brief: WorkspaceBrief;
  createdBy: WorkspaceActor;
  mode?: Workspace["mode"];
  sensitivity?: Workspace["sensitivity"];
};

export class CreateWorkspaceUseCase {
  constructor(private readonly workspaceRepo: WorkspaceRepositoryPort) {}

  async execute(request: CreateWorkspaceRequest): Promise<Workspace> {
    const workspace: Workspace = {
      id: randomUUID(),
      title: request.title,
      brief: request.brief,
      status: "draft",
      mode: request.mode ?? "manual",
      sensitivity: request.sensitivity ?? "internal",
      createdBy: request.createdBy,
      createdAt: new Date(),
      updatedAt: new Date(),
      version: 1,
    };

    assertWorkspaceCanRun(workspace);

    await this.workspaceRepo.save(workspace);

    tracer.emit({
      type: "WORKSPACE_CREATED",
      workspaceId: workspace.id,
      payload: { title: workspace.title },
    });

    return workspace;
  }
}
