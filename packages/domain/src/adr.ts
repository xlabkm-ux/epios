export type ADRStatus =
  | "Proposed"
  | "Accepted"
  | "Superseded"
  | "Rejected"
  | "Deprecated";

export type ADRPriority = "P0" | "P1" | "P2";

export interface ADR {
  id: string;
  title: string;
  status: ADRStatus;
  priority: ADRPriority;
  date: string;
  author: string;
  context: string;
  decision: string;
  consequences: {
    positive: string[];
    negative: string[];
  };
}

export interface ADRFlow {
  adrId: string;
  currentStep: "analysis" | "review" | "finalized";
  steps: {
    analysis: {
      status: "pending" | "completed";
      result?: string;
    };
    review: {
      status: "pending" | "completed";
      votes: {
        approve: number;
        reject: number;
      };
    };
  };
}
