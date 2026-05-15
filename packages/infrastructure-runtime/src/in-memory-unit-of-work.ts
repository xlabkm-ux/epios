import {
  UnitOfWork,
  UnitOfWorkPort,
  GraphRepositoryPort,
  GovernanceRepositoryPort,
  WorkspaceRepositoryPort,
  SourceRepositoryPort,
  RatingRepositoryPort,
  OutboxRepositoryPort,
} from "@epios/ports";

/**
 * InMemoryUnitOfWork provides access to all repositories.
 * Note: This implementation does not support true transactional rollback.
 */
export class InMemoryUnitOfWork implements UnitOfWork {
  constructor(
    public readonly graphRepository: GraphRepositoryPort,
    public readonly governanceRepository: GovernanceRepositoryPort,
    public readonly workspaceRepository: WorkspaceRepositoryPort,
    public readonly sourceRepository: SourceRepositoryPort,
    public readonly ratingRepository: RatingRepositoryPort,
    public readonly outboxRepository: OutboxRepositoryPort,
  ) {}
}

/**
 * InMemoryUnitOfWorkProvider provides InMemoryUnitOfWork instances.
 */
export class InMemoryUnitOfWorkProvider implements UnitOfWorkPort {
  constructor(
    private readonly graphRepo: GraphRepositoryPort,
    private readonly governanceRepo: GovernanceRepositoryPort,
    private readonly workspaceRepo: WorkspaceRepositoryPort,
    private readonly sourceRepo: SourceRepositoryPort,
    private readonly ratingRepo: RatingRepositoryPort,
    private readonly outboxRepo: OutboxRepositoryPort,
  ) {}

  async runInTransaction<T>(work: (uow: UnitOfWork) => Promise<T>): Promise<T> {
    const uow = new InMemoryUnitOfWork(
      this.graphRepo,
      this.governanceRepo,
      this.workspaceRepo,
      this.sourceRepo,
      this.ratingRepo,
      this.outboxRepo,
    );
    return await work(uow);
  }
}
