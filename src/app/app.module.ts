import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { VideoComponent } from "./video/video.component";
import { AgeComponent } from "./age/age.component";
import { StartPageComponent } from "./startpage/startpage.component";
import { StimuliComponent } from "./stimuli/stimuli.component";
import { ResponseService } from "./response/response.service";
import { ButtonComponent } from "./button/button.component";
import { IdFormComponent } from "./id-form/id-form.component";

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    AgeComponent,
    StartPageComponent,
    StimuliComponent,
    ButtonComponent,
    IdFormComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [ResponseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
