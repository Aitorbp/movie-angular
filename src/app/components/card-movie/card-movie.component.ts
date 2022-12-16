import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent  {
  @Input() image : string  = '';
  @Input() title : string  = '';
  @Input() description : string  = '';
 
  @Output('goToDetail') goToDetail: EventEmitter<any> = new EventEmitter();


  public handleClick(event: MouseEvent) {
    this.goToDetail.emit(event);
}

  private _userActive = false; 
  @Input('userActive') 
  get userActive(): boolean {
    return this._userActive;
  }
  set userActive(value: boolean) {
    this._userActive = "" + value !== "false";
  }

}
