import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;

  const mockProviders = [
    {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    },
    {
      id: '2',
      name: 'Mary',
      address: '443 Windwhisper Road',
      phone: '2233211903'
    },
    {
      id: '3',
      name: 'Jason',
      address: '9992 Pumpkin Hollow',
      phone: '4343219384'
    }
  ];

  beforeEach(() => {
    component = new ListComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('unselected providers', () => {
    it('should have an initial length of 3', () => {
      expect(component.unselectedProviders.length).toEqual(3);
    });

    it('should have an id', () => {
      expect(component.unselectedProviders[0].id).toEqual('1');
    });

    it('should have a name', () => {
      expect(component.unselectedProviders[0].name).toEqual('John');
    });

    it('should have an address', () => {
      expect(component.unselectedProviders[0].address).toEqual('123 Greenway Blvd');
    });

    it('should have a phone', () => {
      expect(component.unselectedProviders[0].phone).toEqual('8991234321');
    });
  });

  describe('selected providers', () => {
    it('should have no initial length', () => {
      expect(component.selectedProviders.length).toEqual(0);
    });
  });

  describe('Function: ngOnInt', () => {
    it('shoudl check session storage and populate unselectedProviders and selectedProviders with results', () => {
      const mockSession = JSON.stringify([{
        id: '1',
        name: 'John',
        address: '123 Greenway Blvd',
        phone: '8991234321'
      }]);

      spyOn(sessionStorage, 'getItem').and.returnValue(mockSession);
      
      component.ngOnInit();
      expect(component.selectedProviders).toEqual([{
        id: '1',
        name: 'John',
        address: '123 Greenway Blvd',
        phone: '8991234321'
      }]);
      expect(component.unselectedProviders).toEqual([{
        id: '1',
        name: 'John',
        address: '123 Greenway Blvd',
        phone: '8991234321'
      }]);
    });
  });

  describe('Function: selectProvider', () => {
    beforeEach(() => {
      component.unselectedProviders = [ ...mockProviders ];
      spyOn(sessionStorage, 'setItem');
    });

    it('should remove entry from unselectedProviders and add it to selectedProviders', () => {
      component.selectProvider(mockProviders[1]);
      
      expect(component.unselectedProviders).toEqual([
        {
          id: '1',
          name: 'John',
          address: '123 Greenway Blvd',
          phone: '8991234321'
        },
        {
          id: '3',
          name: 'Jason',
          address: '9992 Pumpkin Hollow',
          phone: '4343219384'
        }
      ])
      expect(component.selectedProviders).toEqual([
        {
          id: '2',
          name: 'Mary',
          address: '443 Windwhisper Road',
          phone: '2233211903'
        }
      ]);
    });
    it('should update the session storage after updating lists', () => {
      component.selectProvider(mockProviders[0]);
      expect(sessionStorage.setItem).toHaveBeenCalled();
    });
  });

  describe('Function: unselectProvider', () => {
    beforeEach(() => {
      component.selectedProviders = [ ...mockProviders ];
      component.unselectedProviders = [];
      spyOn(sessionStorage, 'setItem');
    });

    it('should remove entry from selectedProviders and add it to unselectedProviders', () => {
      component.unselectProvider(mockProviders[1]);
      
      expect(component.unselectedProviders).toEqual([
        {
          id: '2',
          name: 'Mary',
          address: '443 Windwhisper Road',
          phone: '2233211903'
        },
      ])
      expect(component.selectedProviders).toEqual([
        {
          id: '1',
          name: 'John',
          address: '123 Greenway Blvd',
          phone: '8991234321'
        },
        {
          id: '3',
          name: 'Jason',
          address: '9992 Pumpkin Hollow',
          phone: '4343219384'
        }
      ]);
    });
    it('should update the session storage after updating lists', () => {
      component.unselectProvider(mockProviders[0]);
      expect(sessionStorage.setItem).toHaveBeenCalled();
    });
  });
});
