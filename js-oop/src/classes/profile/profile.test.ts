import { Profile } from './profile';

describe('Profile', () => {
  let name = 'Profile Name';
  let email = 'profile@email.com';
  let password =  '123456';
  let phone =  '+55(11)98888-8888';
  let photo = 'hdjadhada8dhsaudh8hd8dh8w9hfa9h';
  //
  const profile = new Profile({name, email, password, phone, photo});
  const data = profile.data;
  //
  name = 'New Profile Name'
  const updatedProfile = new Profile({name, email, password, phone, photo});

  describe('data', () => {
    it('should have name', () => {
      expect(data).toHaveProperty('name')
    });
    it('should have email', () => {
      expect(data).toHaveProperty('email')
    });
    it('should have password', () => {
      expect(data).toHaveProperty('password')
    });
    it('should have phone', () => {
      expect(data).toHaveProperty('phone')
    });
    it('should have photo', () => {
      expect(data).toHaveProperty('photo')
    });
  });

  describe('getProfile method', () => {
    it('should return self properties', () => {
      const response = profile.getProfile();
      expect(response).toBe(data)
    })
  });

  describe('setProfile method', () => {
    it('should update self properties', () => {
      profile.setProfile({name, email, password, phone, photo})
      expect(profile.getProfile()).toStrictEqual(updatedProfile.getProfile())
    })
  });
})