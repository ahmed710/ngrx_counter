import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { changeChannelName, customIncrement } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selectors';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit{
  value!: number;
  channelName : string | undefined ;
constructor(private store:Store<AppState>){}
ngOnInit(){
  this.store.select(getChannelName).subscribe(channelName=>{
  console.log('Channel name Observable called')
  this.channelName=channelName})
}

onAdd(){
  this.store.dispatch(customIncrement({count: +this.value }))
}
onChangeChannelName(){
  this.store.dispatch(changeChannelName());
}
}
