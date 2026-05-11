import React, { useState } from "react";

interface Claim {
  id: string;
  content: string;
  status: "pending" | "approved" | "rejected";
}

export const GovernancePanel: React.FC<{ missionId: string }> = ({
  missionId,
}) => {
  const [claims] = useState<Claim[]>([]);
  const [newClaim, setNewClaim] = useState("");

  const fetchClaims = async () => {
    // Mock fetching claims for now, or use real API if connected
    // const res = await fetch(`/api/governance/claims?missionId=${missionId}`);
    // setClaims(await res.json());
  };

  const submitClaim = async () => {
    if (!newClaim) return;
    await fetch("/api/governance/claims", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ missionId, content: newClaim }),
    });
    setNewClaim("");
    fetchClaims();
  };

  const vote = async (nodeId: string, decision: "approve" | "reject") => {
    await fetch("/api/governance/votes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nodeId, actorId: "current-user", decision }),
    });
    fetchClaims();
  };

  return (
    <div className="governance-panel p-4 bg-slate-900 text-white rounded-lg shadow-xl border border-slate-700">
      <h2 className="text-xl font-bold mb-4 text-cyan-400">
        Governance & Claims
      </h2>

      <div className="mb-6">
        <textarea
          className="w-full p-2 bg-slate-800 border border-slate-600 rounded text-sm mb-2 focus:ring-2 focus:ring-cyan-500 outline-none"
          placeholder="Enter a new epistemic claim..."
          value={newClaim}
          onChange={(e) => setNewClaim(e.target.value)}
        />
        <button
          onClick={submitClaim}
          className="w-full py-2 bg-cyan-600 hover:bg-cyan-500 transition-colors rounded font-semibold text-sm"
        >
          Submit Claim for Approval
        </button>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
          Pending Approvals
        </h3>
        {claims.length === 0 && (
          <p className="text-slate-500 italic text-sm">No pending claims.</p>
        )}
        {claims.map((claim) => (
          <div
            key={claim.id}
            className="p-3 bg-slate-800 rounded border border-slate-700"
          >
            <p className="text-sm mb-3">{claim.content}</p>
            <div className="flex gap-2">
              <button
                onClick={() => vote(claim.id, "approve")}
                className="flex-1 py-1 bg-green-600/20 hover:bg-green-600/40 text-green-400 border border-green-600/50 rounded text-xs transition-colors"
              >
                Approve
              </button>
              <button
                onClick={() => vote(claim.id, "reject")}
                className="flex-1 py-1 bg-red-600/20 hover:bg-red-600/40 text-red-400 border border-red-600/50 rounded text-xs transition-colors"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
