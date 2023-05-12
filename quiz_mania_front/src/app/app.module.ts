import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SingupComponent } from './pages/singup/singup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {from } from 'rxjs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';

import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import{MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { SidebarComponent as UserSidebar } from './pages/user/sidebar/sidebar.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import { NgxUiLoaderModule } from 'ngx-ui-loader';
// import { NgxUiLoaderHttpModule } from 'ngx-ui-loader/public-api';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from "ngx-ui-loader";
import { FaqComponent } from "./pages/faq/faq.component";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatGridListModule, MatGridTile} from '@angular/material/grid-list';
import { AddFaqsComponent } from './pages/admin/add-faqs/add-faqs.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ContactusViewComponent } from './pages/admin/contactus-view/contactus-view.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { ImageComponent } from './pages/image/image.component';
import {MatMenuModule} from '@angular/material/menu';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { ProfileUpdateComponent } from './pages/profile-update/profile-update.component';
import { CoordinatorSignupComponent } from './pages/admin/coordinator-signup/coordinator-signup.component';
import { SidebarComponent as coordinatorsidebar } from './pages/coordinator/sidebar/sidebar.component';
import { CoordinatorDashboardComponent } from './pages/coordinator/coordinator-dashboard/coordinator-dashboard.component';
import { ForgetPasswordComponent } from './pages/forget/forget-password/forget-password.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SingupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,

    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionComponent,
    UserSidebar,
    LoadQuizComponent,
    InstructionsComponent,
    StartComponent,
    FaqComponent,
    AddFaqsComponent,
    ContactusComponent,
    ContactusViewComponent,
    LeaderboardComponent,
    ImageComponent,
    CertificateComponent,
    ProfileUpdateComponent,
    coordinatorsidebar,
    CoordinatorSignupComponent,
    CoordinatorDashboardComponent,
    ForgetPasswordComponent,
  
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatGridListModule,
  MatTableModule,
  CKEditorModule,
    NgxUiLoaderModule,
    MatDialogModule ,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    }),
    NgbModule,

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule { }
