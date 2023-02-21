import { Planet, Zone } from './planet';

describe('Planet', () => {
  it('should create an instance', () => {
    expect(new Planet(Zone.Habitable, 1)).toBeTruthy();
  });
});
