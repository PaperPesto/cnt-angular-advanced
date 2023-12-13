import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';
import {token} from '../../app.module';
import {debounceTime, distinctUntilChanged, from, map, switchMap} from 'rxjs';
import {HttpClient} from '@angular/common/http';

type myToken = string | Array<string>;

@Component({
  selector: 'ng-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{
  public items: Array<number> = [];
  public value = 1;
  public show = false;
  public time = '1000';

  public form: FormGroup;
  public search = new FormControl('');
  public searchValue$ = this.search.valueChanges.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(text =>
      this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
        map((users: any) => {
          return users.filter((x: any) => x.username.startsWith(text));
        })
      )
    )
  );

  public prova = {
    ciao: 'ciao',
    nome: 'pippo',
    age: 42
  }

  @ViewChild('dlg') dlg!: ElementRef<HTMLDialogElement>

  constructor(@Inject(token) tkn: myToken, private fb: FormBuilder, private http: HttpClient) {
    if(Array.isArray(tkn)) {
      for (const t of tkn) {
        console.log(t);
      }
    } else {
      console.log('tkn', tkn);
    }
    for (let i = 0; i < 10; i++) {
      this.items.push(i);
    }

  this.form = this.fb.group({
    one: [''],
    two: [''],
    rate: [2]
  });

  }

  // public showDialog() {
  //   this.dlg.nativeElement.showModal();
  //
  // }

  public save() {

    console.log('save', this.form.value);
  }

}
