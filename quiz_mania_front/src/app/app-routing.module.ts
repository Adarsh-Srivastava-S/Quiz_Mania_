import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SingupComponent } from './pages/singup/singup.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { StartComponent } from './pages/user/start/start.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AddFaqsComponent } from './pages/admin/add-faqs/add-faqs.component';
import { ContactusViewComponent } from './pages/admin/contactus-view/contactus-view.component';
import { ImageComponent } from './pages/image/image.component';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { ProfileUpdateComponent } from './pages/profile-update/profile-update.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { CoordinatorSignupComponent } from './pages/admin/coordinator-signup/coordinator-signup.component';
import { CoordinatorGuard } from './services/coordinator.guard';
import { CoordinatorDashboardComponent } from './pages/coordinator/coordinator-dashboard/coordinator-dashboard.component';
// import { AboutmeComponent } from './pages/aboutme/aboutme.component';

const routes: Routes = [

  {
     path: '',
     component: HomeComponent,
     pathMatch:'full',
  },

  {
    path: 'leaderboard',
    component: LeaderboardComponent,
    pathMatch:'full',
 },

  {
    path: 'certi',
    component: CertificateComponent,
    pathMatch:'full',
 },
  {
    path: 'faq',
    component: FaqComponent,
    pathMatch:'full',
 },
 {
  path: 'contact',
  component: ContactusComponent,
  pathMatch:'full',
},

  {
    path: 'login',
    component:LoginComponent ,
    pathMatch:'full',
  },
  {
    path: 'signup',
    component: SingupComponent,
    pathMatch:'full',
  },


  {
    path: 'admin',
    component:DashboardComponent,

  // pathMatch:'full',
    children:
    [{
      path:'',
      component:WelcomeComponent,
    },
   
    {
      path:'profile',
      component:ProfileComponent,
    },
    {
      path:'coordinator-signup',
      component:CoordinatorSignupComponent,

    },
    {
      path:'categories',
      component:ViewCategoriesComponent,
    },
    {
      path:'add-category',
      component:AddCategoryComponent,
    },
    {
      path:'quizzes',
      component:ViewQuizzesComponent,
    },
    {
      path:'add-quiz',
      component:AddQuizComponent,
    },
    {
      path:'addfaq',
      component:AddFaqsComponent,
    },
    {
      path:'viewcontact',
      component:ContactusViewComponent,
    },

    {
      path:'quiz/:qid',
      component: UpdateQuizComponent,
    },
    {
      path:'view-questions/:qid/:title',
      component:ViewQuizQuestionsComponent,
    },
    {
      path:'add-question/:qid/:title',
      component:AddQuestionComponent,
    },
    {
      path:'pro/:id',
      component:ProfileUpdateComponent,
    },
    //

  ],
    canActivate:[AdminGuard],
  },
  {  path: 'coordinator',
    component:CoordinatorDashboardComponent,
    // pathMatch:'full',
    children:
    [
      {
      path:'',
      component:WelcomeComponent,
    },
    {
      path:'profile',
      component:ProfileComponent,
    },
    {
      path:'coordinator-signup',
      component:CoordinatorSignupComponent,

    },
    {
      path:'categories',
      component:ViewCategoriesComponent,
    },
    {
      path:'add-category',
      component:AddCategoryComponent,
    },
    {
      path:'quizzes',
      component:ViewQuizzesComponent,
    },
    {
      path:'add-quiz',
      component:AddQuizComponent,
    },
    {
      path:'addfaq',
      component:AddFaqsComponent,
    },
    {
      path:'viewcontact',
      component:ContactusViewComponent,
    },

    {
      path:'quiz/:qid',
      component: UpdateQuizComponent,
    },
    {
      path:'view-questions/:qid/:title',
      component:ViewQuizQuestionsComponent,
    },
    {
      path:'add-question/:qid/:title',
      component:AddQuestionComponent,
    }, //
    {
      path:'pro/:id',
      component:ProfileUpdateComponent,
    },

  ],
    canActivate:[CoordinatorGuard],
  },

  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate:[NormalGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:'pro/:id',
        component:ProfileUpdateComponent,
      },
      {
        path:'update',
        component:ImageComponent,
      },
      {
        path:':catId',
        component: LoadQuizComponent,
      },

      {
        path:'instructions/:qid',
        component:InstructionsComponent,
      },
      {
        path:'certificate/:uid',
        component:CertificateComponent,
      },


    ],
  },
  {
    path:'start/:qid',
    component:StartComponent,
    canActivate:[NormalGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
