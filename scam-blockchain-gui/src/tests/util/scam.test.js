const scam = require('../../util/scam');

describe('scam', () => {
  it('converts number mojo to scam', () => {
    const result = scam.mojo_to_scam(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to scam', () => {
    const result = scam.mojo_to_scam('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to scam string', () => {
    const result = scam.mojo_to_scam_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to scam string', () => {
    const result = scam.mojo_to_scam_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number scam to mojo', () => {
    const result = scam.scam_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string scam to mojo', () => {
    const result = scam.scam_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = scam.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = scam.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = scam.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = scam.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = scam.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = scam.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
