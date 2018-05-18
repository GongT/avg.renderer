import "zone.js/dist/zone-mix";
import "reflect-metadata";
import "polyfills";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Inject, PLATFORM_ID, APP_ID } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { TitleViewComponent } from "./components/title-view/title-view.component";
import { TitleMenuComponent } from "./components/title-menu/title-menu.component";
import { TitleViewService } from "./components/title-view/title-view.service";
import { TitleMenuItemComponent } from "./components/title-menu-item/title-menu-item.component";
import { TransitionLayerComponent } from "./components/transition-layer/transition-layer.component";
import { MainSceneComponent } from "./components/main-scene/main-scene.component";
import { BackgroundCanvasComponent } from "./components/background-canvas/background-canvas.component";
import { DialogueBoxComponent } from "./components/dialogue-box/dialogue-box.component";
import { WidgetLayerComponent } from "./components/widget-layer/widget-layer.component";
import { TextWidgetComponent } from "./components/widget-layer/widget-component/text-widget.component";
import { ImageWidgetComponent } from "./components/widget-layer/widget-component/image-widget.component";
import { ReloadViewComponent } from "./components/reload-view/reload-view.component";
import { VariableInputComponent } from "./components/variable-input-box/variable-input-box.component";
import { GameToolbarComponent } from "./components/game-toolbar/game-toolbar.component"


import { ElectronService } from "./providers/electron.service";
import { MainSceneService } from "./components/main-scene/main-scene.service";
import { DialogueBoxService } from "./components/dialogue-box/dialogue-box.service";
import { TransitionLayerService } from "./components/transition-layer/transition-layer.service";
import { WidgetLayerService } from "./components/widget-layer/widget-layer.service";
import { GameToolbarService } from "./components/game-toolbar/main-scene.service";
import { isPlatformBrowser } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    TitleViewComponent,
    TitleMenuComponent,
    TitleMenuItemComponent,
    TransitionLayerComponent,
    MainSceneComponent,
    BackgroundCanvasComponent,
    DialogueBoxComponent,
    WidgetLayerComponent,
    TextWidgetComponent,
    ImageWidgetComponent,
    ReloadViewComponent,
    VariableInputComponent,
    GameToolbarComponent
  ],
  imports: [
    // BrowserModule,
    BrowserModule.withServerTransition({ appId: "AVGPlus" }),
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    ElectronService,
    TitleViewService,
    MainSceneService,
    DialogueBoxService,
    TransitionLayerService,
    WidgetLayerService,
    GameToolbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      "in the browser" : "on the server";
    console.log(`Running ${platform} with appId=${appId}`);
  }

}
