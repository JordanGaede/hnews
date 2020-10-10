import { ProjectMaterialModule } from './material.module';
import { DEFAULT_LANGUAGE, MissingTranslationHandler, TranslateCompiler, TranslateFakeLoader, TranslateLoader, TranslateParser, TranslateService, TranslateStore, USE_EXTEND, USE_STORE } from '@ngx-translate/core';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { InjectionToken } from '@angular/core';
import { USE_DEFAULT_LANG } from '@ngx-translate/core';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, ProjectMaterialModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        TranslateService, TranslateStore, TranslateCompiler, TranslateParser, MissingTranslationHandler, TranslateLoader,
        {provide: DEFAULT_LANGUAGE, useValue: 'en'},
        { provide: USE_EXTEND, useValue: undefined }, 
        { provide: USE_DEFAULT_LANG, useValue: undefined }, 
        { provide: USE_STORE, useValue: undefined }, 
        { provide: TranslateLoader, useClass: TranslateFakeLoader }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Haveker News'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Hacker News');
  });

});
