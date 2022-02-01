import { ProviderCardComponent } from './provider-card.component';

describe('ProviderCardComponent', () => {
  let component: ProviderCardComponent;

  const mockProvider = {
    id: '1',
    name: 'John',
    address: '123 Greenway Blvd',
    phone: '8991234321'
  };

  beforeEach(() => {
    component = new ProviderCardComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Function: selectProvider', () => {
    it('should emit provider when selectable is true', () => {
      spyOn(component.onSelect, 'emit');

      component.selectProvider(mockProvider);

      expect(component.onSelect.emit).toHaveBeenCalledWith(mockProvider);
    });
    it('should NOT emit provider when selectable is false', () => {
      spyOn(component.onSelect, 'emit');

      component.selectable = false;
      component.selectProvider(mockProvider);

      expect(component.onSelect.emit).not.toHaveBeenCalled();
    });
  });
  describe('Function: unselectProvider', () => {
    it('should emit provider when selectable is true', () => {
      spyOn(component.onUnselect, 'emit');

      component.unselectProvider(mockProvider);

      expect(component.onUnselect.emit).toHaveBeenCalledWith(mockProvider);
    });
  });
});
