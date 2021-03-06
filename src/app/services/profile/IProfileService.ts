import { Observable } from 'rxjs';
import { Profile } from 'src/app/models/Profile';

export abstract class IProfileService {
  
  abstract saveProfile(profile: Profile): Observable<void>;

  abstract getProfile(): Profile;
}
