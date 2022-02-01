import { PhonePipe } from './phone.pipe';

describe('PhonePipe', () => {
  it('create an instance', () => {
    const pipe = new PhonePipe();
    expect(pipe).toBeTruthy();
  });

  it('should format phone number as (xxx) xxx-xxxx', () => {
    const pipe = new PhonePipe();
    expect(pipe.transform('1234567890')).toEqual('(123) 456-7890');
  })
});
