import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { ProfileService } from "src/app/services/profile.service";
import { Profile } from "src/app/models/Profile";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.css"],
})
export class PhotosComponent implements OnInit, OnDestroy {
  profiles: Profile[] = [];
  private profileSubscription: Subscription;

  constructor(private profilesService: ProfileService) {}

  ngOnInit(): void {
    this.profilesService.getProfiles();
    this.profileSubscription = this.profilesService
      .getProfilesStream()
      .subscribe((profiles: Profile[]) => {
        this.profiles = profiles;
      });
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }
}
