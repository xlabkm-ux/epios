import { LivingArtifact, ArtifactPatch } from "@epios/domain";

export interface ArtifactRepositoryPort {
  saveArtifact(artifact: LivingArtifact): Promise<void>;
  findArtifactById(id: string): Promise<LivingArtifact | null>;
  findArtifactsByMissionId(missionId: string): Promise<LivingArtifact[]>;
  
  savePatch(patch: ArtifactPatch): Promise<void>;
  findPatchById(id: string): Promise<ArtifactPatch | null>;
  findPatchesByArtifactId(artifactId: string): Promise<ArtifactPatch[]>;
}
