import { NgModule } from '@angular/core';
import { NgxFilemanagerClientFirebaseComponent } from './ngx-filemanager-client-firebase.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AutoTableModule } from 'ngx-auto-table/dist';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSidenavModule
} from '@angular/material';
import { AppDialogRenameComponent } from './components/dialog-rename.component';
import { AppDialogNewFolderComponent } from './components/dialog-new-folder.component';
import { FileDetailsComponent } from './components/file-details.component';
import { FileSizePipe } from './services/file-size.pipe';

@NgModule({
  declarations: [
    NgxFilemanagerClientFirebaseComponent,
    AppDialogRenameComponent,
    AppDialogNewFolderComponent,
    FileDetailsComponent,
    FileSizePipe,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AutoTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSidenavModule
  ],
  exports: [NgxFilemanagerClientFirebaseComponent]
})
export class NgxFilemanagerClientFirebaseModule {}
