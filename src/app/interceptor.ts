import { Injectable } from '@angular/core'
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders , HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService} from 'ngx-toastr';


@Injectable()
export class MyInterceptor implements HttpInterceptor {
    constructor(private toastrService : ToastrService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let request = req.clone();
        return next.handle(request).pipe(
        catchError( error => {
            if(error instanceof HttpErrorResponse) {
                this.toastrService.error(error.message,"Error");
            }
            return new Observable<HttpEvent<any>>();
        }));
    }
  }