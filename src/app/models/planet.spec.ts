import { Planetoid, Zone } from './planetoid';

describe('Planet', () => {
  it('should create an instance', () => {
    expect(new Planetoid(Zone.Habitable, 1)).toBeTruthy();
  });
});
