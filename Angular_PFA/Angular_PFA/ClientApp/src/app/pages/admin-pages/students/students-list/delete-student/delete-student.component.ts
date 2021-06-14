import { UsersService } from './../../../users/services/users.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { catchError, delay, finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.scss']
})
export class DeleteStudentComponent implements OnInit, OnDestroy {
  @Input() cin: number;
  isLoading = false;
  subscriptions: Subscription[] = [];

  constructor(private usersService: UsersService, public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  deleteUser() {
    this.isLoading = true;
    const sb = this.usersService.delete(this.cin).pipe(
      tap(() => this.modal.close()),
      catchError((err) => {
        this.modal.dismiss(err);
        return of(undefined);
      }),
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe();
    this.subscriptions.push(sb);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

}