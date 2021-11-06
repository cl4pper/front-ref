import { ProfileInterface } from '../../interfaces';

export class Profile {
  data: ProfileInterface

  constructor(profile: ProfileInterface) {
    this.data = profile;
  }

  public getProfile() {
    return this.data;
  }

  public setProfile(editedProfile: ProfileInterface) {
    this.data = editedProfile;
  }
}