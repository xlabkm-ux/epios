import { GraphRepositoryPort } from "./graph.repository.port.js";
import { GovernanceRepositoryPort } from "./governance.port.js";
import {
  WorkspaceRepositoryPort,
  SourceRepositoryPort,
  RatingRepositoryPort,
} from "./domain.repository.port.js";
import { OutboxRepositoryPort } from "./outbox.repository.port.js";

/**
 * UnitOfWork provides access to all repositories within a single transaction scope.
 */
export interface UnitOfWork {
  graphRepository: GraphRepositoryPort;
  governanceRepository: GovernanceRepositoryPort;
  workspaceRepository: WorkspaceRepositoryPort;
  sourceRepository: SourceRepositoryPort;
  ratingRepository: RatingRepositoryPort;
  outboxRepository: OutboxRepositoryPort;
}

/**
 * UnitOfWorkPort defines the contract for managing transactional boundaries.
 */
export interface UnitOfWorkPort {
  /**
   * Executes the provided work within a transaction.
   * If the work completes successfully, the transaction is committed.
   * If an error is thrown, the transaction is rolled back.
   */
  runInTransaction<T>(work: (uow: UnitOfWork) => Promise<T>): Promise<T>;
}
