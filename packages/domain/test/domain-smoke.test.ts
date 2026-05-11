import { describe, expect, it } from 'vitest';
import { assertMissionCanRun, Mission } from '../src';

describe('Mission invariants', () => {
  it('rejects running a mission without a goal', () => {
    const mission: Mission = {
      missionId: 'm1',
      title: 'Untitled',
      status: 'draft',
      version: 1,
      brief: {
        goal: '',
        successCriteria: [],
        constraints: [],
        unknowns: []
      }
    };

    expect(() => assertMissionCanRun(mission)).toThrow('MISSION_GOAL_REQUIRED');
  });

  it('allows running a mission with a goal', () => {
    const mission: Mission = {
      missionId: 'm1',
      title: 'Test Mission',
      status: 'draft',
      version: 1,
      brief: {
        goal: 'Prove the domain skeleton works',
        successCriteria: [],
        constraints: [],
        unknowns: []
      }
    };

    expect(() => assertMissionCanRun(mission)).not.toThrow();
  });
});
