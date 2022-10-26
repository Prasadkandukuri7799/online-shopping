import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector :Injector) { }

  intercept(req: { clone: (arg0: { setHeaders: { Authorization: string; }; }) => any; },next: { handle: (arg0: any) => any; }){
    let authservice =this.injector.get(AuthService)
    let tokenizedreq =req.clone({
      setHeaders:{
      Authorization: 'Bearer ${authservice.getToken()}'
    }
    })
    return next.handle(tokenizedreq)
  }
}
